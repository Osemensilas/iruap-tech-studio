'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {

    const router = useRouter();
    const pathname = usePathname();

    const goHome = () => {
        router.push("/");
    }

    return ( 
        <>
        <header className="h-20 w-screen px-4 sm:px-10 flex justify-between items-center">
            <div onClick={goHome} className="h-max w-max flex items-start gap-2 cursor-pointer">
                <div className="relative h-10 w-15">
                    <Image src="/images/logo.png" alt="iruap studios logo" fill className="object-cover" />
                </div>
                <div className="">
                    <h2 className="text-xl font-bold text-accent">Iruap Tech studio</h2>
                    <p className="text-sm text-primary font-light">Web & App Development</p>
                </div>
            </div>
            <ul className="h-max w-max flex items-center gap-8">
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/" className={`text-base
                        ${pathname === "/" ? "text-primary" : "text-accent"}
                        `}>Home</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/" ? "bg-primary" : ""}
                        `}></span>
                </li>
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/services" className={`text-base
                        ${pathname === "/services" ? "text-primary" : "text-accent"}
                        `}>Services</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/services" ? "bg-primary" : ""}
                        `}></span>
                </li>
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/pricing" className={`text-base
                        ${pathname === "/pricing" ? "text-primary" : "text-accent"}
                        `}>Pricing</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/pricing" ? "bg-primary" : ""}
                        `}></span>
                </li>
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/portfolio" className={`text-base
                        ${pathname === "/portfolio" ? "text-primary" : "text-accent"}
                        `}>Portfolio</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/portfolio" ? "bg-primary" : ""}
                        `}></span>
                </li>
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/contact-us" className={`text-base
                        ${pathname === "/contact-us" ? "text-primary" : "text-accent"}
                        `}>Contact Us</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/contact-us" ? "bg-primary" : ""}
                        `}></span>
                </li>
                <li className="h-max w-max flex flex-col gap-1">
                    <Link href="/about-us" className={`text-base
                        ${pathname === "/about-us" ? "text-primary" : "text-accent"}
                        `}>About Us</Link>
                    <span className={`h-0.5 w-full
                        ${pathname === "/about-us" ? "bg-primary" : ""}
                        `}></span>
                </li>
            </ul>
        </header>
        </>
     );
}
 
export default Header;