import mongoose, { Schema, Model, Document, models, model } from 'mongoose'

// Input attributes required to create a Service
export interface ServiceAttrs {
  title: string
  description: string
  image: string
  logo: string
  approval_time: string
}

// Mongo document for Service
export interface ServiceDocument extends Document {
  title: string
  slug: string
  description: string
  image: string
  logo: string
  approval_time: string
  createdAt: Date
  updatedAt: Date
}

// Service model with a type-safe builder
export interface ServiceModel extends Model<ServiceDocument> {
  build(attrs: ServiceAttrs): ServiceDocument
}

// URL-friendly slug generator with basic ASCII folding and cleanup
function toSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // keep alnum/space/hyphen
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Simple URL validator for http(s)
function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

const ServiceSchema = new Schema<ServiceDocument, ServiceModel>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [1, 'Title cannot be empty'],
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [1, 'Description cannot be empty'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      trim: true,
      minlength: [1, 'Image cannot be empty'],
      validate: {
        validator: isHttpUrl,
        message: 'Image must be a valid http(s) URL',
      },
    },
    logo: {
      type: String,
      required: [true, 'Logo is required'],
      trim: true,
      minlength: [1, 'Logo cannot be empty'],
      validate: {
        validator: isHttpUrl,
        message: 'Logo must be a valid http(s) URL',
      },
    },
    approval_time: {
      type: String,
      required: [true, 'Approval time is required'],
      trim: true,
      minlength: [1, 'Approval time cannot be empty'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id?.toString()
        delete ret._id
        return ret
      },
    },
    toObject: { virtuals: true },
  }
)

// Unique index on slug
ServiceSchema.index({ slug: 1 }, { unique: true })

// Type-safe builder
ServiceSchema.statics.build = function (attrs: ServiceAttrs): ServiceDocument {
  return new this(attrs)
}

// Pre-save hook: trim inputs, generate slug, collision-proof it, and normalize dates
ServiceSchema.pre('save', async function (next) {
  const doc = this as ServiceDocument

  // Normalize and validate required string fields
  const stringFields: Array<keyof ServiceDocument> = [
    'title',
    'description',
    'image',
    'logo',
    'approval_time',
  ]

  for (const key of stringFields) {
    const val = (doc as any)[key]
    if (typeof val === 'string') {
      ;(doc as any)[key] = val.replace(/\s+/g, ' ').trim()
    }
  }

  // Slug generation only if new or title changed
  if (doc.isNew || doc.isModified('title')) {
    const base = toSlug(doc.title)
    let candidate = base

    // Ensure uniqueness by checking existing slugs
    const ModelCtor = (doc.constructor as unknown) as ServiceModel
    const regex = new RegExp(`^${base}(?:-(\\d+))?$`, 'i')
    const existing = await ModelCtor
      .find({ slug: regex, _id: { $ne: doc._id } })
      .select('slug')
      .lean()

    if (existing.length > 0) {
      const used = new Set<number>()
      for (const r of existing as Array<{ slug: string }>) {
        const m = r.slug.match(/-(\d+)$/)
        used.add(m ? parseInt(m[1], 10) : 0)
      }
      let n = 0
      while (used.has(n)) n += 1
      candidate = n === 0 ? base : `${base}-${n}`
    }

    doc.slug = candidate
  }

  // Date normalization (UTC, drop milliseconds for stable equality)
  const now = new Date()
  now.setMilliseconds(0)
  if (doc.isNew && !doc.createdAt) {
    doc.createdAt = new Date(now)
  } else if (doc.createdAt instanceof Date) {
    doc.createdAt.setMilliseconds(0)
  }
  doc.updatedAt = new Date(now)

  // Reference validation placeholder (no DB refs in this schema). Keep for parity/consistency.
  // If refs are added later, validate existence here before save.

  next()
})

export const Service =
  (models.Service as ServiceModel) || model<ServiceDocument, ServiceModel>('Service', ServiceSchema)

export default Service
