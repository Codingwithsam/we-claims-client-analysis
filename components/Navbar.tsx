import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href={"/"} className={"logo"}>
                    <Image src={"/icons/windley-logo.svg"} alt={"logo"} width={160} height={160}/>
                    <p className={"font-bold"}>Claims Analysis</p>
                </Link>

                <ul>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Eligibility</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
