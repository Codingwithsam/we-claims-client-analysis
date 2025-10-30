"use client"
import Image from "next/image";

const EligibleServicesBtn = () => {
    const handleScroll = () => {
        const element = document.getElementById("services")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <button
            type="button"
            id="eligible-btn"
            className="mt-7 mx-auto flex items-center gap-2"
            onClick={handleScroll}
        >
            Eligible Services
            <Image
                src="/icons/arrow-down.svg"
                alt="arrow-down"
                width={24}
                height={24}
            />
        </button>
    )
}
export default EligibleServicesBtn
