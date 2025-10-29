import EligibleServicesBtn from "@/components/EligibleServicesBtn";
import ServiceCard from "@/components/ServiceCard";
import services from "@/lib/constants";


const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                Learn more about the Analysis, Eligibility <br/>and Timelines for Your Claims
            </h1>
            <p className="text-center mt-5">Expert claims management, exceptional results</p>

            <EligibleServicesBtn />

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
