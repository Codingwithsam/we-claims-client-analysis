"use client"
import Image from "next/image";

const EligibleServicesBtn = () => {
    return (
        <button
            type={"button"}
            id={"eligible-btn"}
            className={"mt-7 mx-auto"}
            onClick={() => console.log("click")}
        >
            <a href={"#services"}>
                Eligible Services
                <Image src={"/icons/arrow-down.svg"} alt={"arrow-down"} width={24} height={24}/>
            </a>
        </button>
    )
}
export default EligibleServicesBtn
