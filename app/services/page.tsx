import services from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

const Page = () => {
    return (
        <section>
            <h1>
                Our Services
            </h1>
            <p className="mt-5">Expert claims management, exceptional results</p>

            <div className="mt-20 space-y-7">
                <h3>Featured Services</h3>

                <ul className={"services list-none"} id={"services"}>
                    {services.map((service) =>
                        <li key={service.title}>
                            <ServiceCard {...service} />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
export default Page
