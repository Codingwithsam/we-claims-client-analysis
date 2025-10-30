import mongoose from 'mongoose';

// Define the MongoDB connection URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that the MONGODB_URI is defined
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define types for the global mongoose cache
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global object to include mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// Initialize the cache on the global object to prevent multiple connections in development
// In production, this ensures a single connection is reused
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Caches the connection to prevent multiple connections during hot reloads in development.
 * 
 * @returns {Promise<typeof mongoose>} The mongoose instance with an active connection
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Return existing promise if connection is in progress
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable mongoose buffering
    };

    // Create a new connection promise
    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Wait for the connection to establish
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise on error to allow retry
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
