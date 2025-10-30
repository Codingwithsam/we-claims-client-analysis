import { services } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string };
}

const ServicePage = async ({params}: {params: Promise<{slug: string}>}) => {
    const { slug } = await params
    console.log(slug);
    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    return (
        <section className="max-w-3xl mx-auto mt-10 p-5">
            <div className="relative w-full h-64">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="flex items-center gap-3 mt-5">
                <Image src={service.logo} alt={service.slug} width={50} height={50} />
                <h1 className="text-2xl font-semibold">{service.title}</h1>
            </div>

            <p className="mt-2 text-gray-500">
                <strong>Approval Time:</strong> {service.approval_time}
            </p>

            <p className="mt-4 text-lg">{service.description}</p>

            <div className="mt-6">
                <a
                    href="/#services"
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    ← Back to all services
                </a>
            </div>
        </section>
    )
}

export default ServicePage;
