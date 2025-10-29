import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    logo: string;
    approval_time: string;
    description: string;
    slug: string;
}

const ServiceCard = ({title, image, logo, approval_time, description, slug}: Props) => {
    return (
        <Link href={`/services/${slug}`} id={"service-card"}>
            <Image src={image} alt={title} width={410} height={300} className={"poster"}/>
            <div className={"flex flex-row gap-2"}>
                <Image src={logo} alt={slug} width={40} height={40}/>
                <p className={"title mt-4 md:mt-0 xl:mt-3"}>{title}</p>
            </div>
            <div className={"flex flex-row gap-2"}>
                <p>Approval Time: {approval_time}</p>
            </div>
            <div className={"h-24 overflow-hidden text-wrap\""}>
                <p className={"line-clamp-3"}>{description}</p>
            </div>
        </Link>
    )
}
export default ServiceCard
