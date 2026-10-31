import {Smartphone, Globe, Blocks, Rocket, Plane, Mail, Locate, Phone, Globe2, ChevronRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
        <footer className="h-max w-screen px-4 sm:px-10 py-5">
            <div className="h-max w-full flex gap-2 mb-10 border-b border-slate-400 pb-10">
                <div className="h-max w-3/5">
                    <div className="h-max w-full flex items-center gap-2">
                        <h4 className="text-base font-bold text-primary mb-1">HAVE AN IDEA?</h4>
                        <span className="h-0.5 w-20 bg-primary"></span>
                    </div>
                    <div className="h-max w-full mb-5">
                        <h2 className="text-4xl text-accent font-bold mb-2">Let&apos;s Build it <span className="text-primary">Together.</span></h2>
                        <p className="text-sm text-ash font-light">We are here to turn your ideas into powerful digital solution. Reach out today!</p>
                    </div>
                    <div className="h-max w-full flex items-center gap-5">
                        <div className="h-max w-max flex items-start gap-2">
                            <div className="h-10 w-10 border border-amber-200 bg-amber-100 rounded-full flex items-center justify-center">
                                <Smartphone className="text-primary" size={20} />
                            </div>
                            <div className="h-max w-max flex flex-col items-start gap-1">
                                <h4 className="text-3xl text-accent">Mobile</h4>
                                <p className="text-accent text-base">Apps</p>
                            </div>
                        </div>
                        <div className="h-max w-max flex items-start gap-2">
                            <div className="h-10 w-10 border border-amber-200 bg-amber-100 rounded-full flex items-center justify-center">
                                <Globe className="text-primary" size={20} strokeWidth={1.8} />
                            </div>
                            <div className="h-max w-max flex flex-col items-start gap-1">
                                <h4 className="text-3xl text-accent">Web</h4>
                                <p className="text-accent text-base">Platforms</p>
                            </div>
                        </div>
                        <div className="h-max w-max flex items-start gap-2">
                            <div className="h-10 w-10 border border-amber-200 bg-amber-100 rounded-full flex items-center justify-center">
                                <Blocks className="text-primary" size={20} strokeWidth={1.8} />
                            </div>
                            <div className="h-max w-max flex flex-col items-start gap-1">
                                <h4 className="text-3xl text-accent">SaaS</h4>
                                <p className="text-accent text-base">Products</p>
                            </div>
                        </div>
                        <div className="h-max w-max flex items-start gap-2">
                            <div className="h-10 w-10 border border-amber-200 bg-amber-100 rounded-full flex items-center justify-center">
                                <Rocket className="text-primary" size={20} strokeWidth={1.8} />
                            </div>
                            <div className="h-max w-max flex flex-col items-start gap-1">
                                <h4 className="text-3xl text-accent">MVP</h4>
                                <p className="text-accent text-base">Builds</p>
                            </div>
                        </div>
                    </div>              
                </div>
                <div className="h-max w-2/5 border border-slate-400 rounded p-5 flex gap-2">
                    <div className="h-10 w-10">
                        <Plane className="text-primary" size={20} />
                    </div>
                    <div className="h-full w-[calc(100%-40px)]">
                        <h4 className="text-accent font-semibold text-2xl mb-2">Ready to start your project?</h4>
                        <p className="text-ash text-sm font-light mb-5">Send us a message and we will get back to you as soon as possible.</p>
                        <button type="button" className="h-max w-max px-10 font-semibold py-2.5 rounded bg-primary text-background text-base">Contact Us</button>
                    </div>
                </div>  
            </div>
            <div className="h-max w-full flex gap-4 mb-5 pb-10 border-b border-slate-400">
                <div className="h-max w-3/10">
                    <div className="">
                        <div className="flex items-start gap-2">
                            <div className="relative h-10 w-15">
                                <Image src={"/images/logo.png"} fill className="object-fill" alt="logo" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-bold text-accent">Iruap Tech studio</h2>
                                <p className="text-sm text-primary font-light">Web & App Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-max w-full mt-2 flex flex-col">
                        <p className="text-sm text-ash font-light">We build modern websites, mobile apps, and custom software that helps businesses grow.</p>
                        <span className="h-0.5 w-20 bg-primary my-5"></span>
                    </div>
                    <div className="h-max w-full flex items-center gap-4 mb-5">
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" target="__blank" className="h-10 w-10 border-slate-400 rounded-xl flex justify-center items-center border text-primary">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>
                <div className="h-max w-7/10 flex justify-between">
                    <div className="h-full w-1/4 border-l border-slate-400 px-4 sm:px-5 flex flex-col gap-2">
                        <h4 className="text-base font-bold text-accent">Quick Links</h4>
                        <span className="h-0.5 w-10 bg-primary"></span>
                        <ul className="w-full h-max mt-5">
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"><ChevronRight size={20} /> Home</Link>
                            </li>
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"> <ChevronRight size={20} />About Us</Link>
                            </li>
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"> <ChevronRight size={20} />Contact Us</Link>
                            </li>
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"> <ChevronRight size={20} />Portfolio</Link>
                            </li>
                            <li className="h-max w-full">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"> <ChevronRight size={20} />Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full w-1/4 border-l border-slate-400 px-4 sm:px-5 flex flex-col gap-2">
                        <h4 className="text-base font-bold text-accent">Our Services</h4>
                        <span className="h-0.5 w-10 bg-primary"></span>
                        <ul className="w-full h-max mt-5">
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"><ChevronRight size={20} /> Web Development</Link>
                            </li>
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"><ChevronRight size={20} /> App Development</Link>
                            </li>
                            <li className="h-max w-full mb-4">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"><ChevronRight size={20} /> Product Design</Link>
                            </li>
                            <li className="h-max w-full">
                                <Link href="/" className="text-accent text-sm flex gap-2 items-center"><ChevronRight size={20} /> Custom Software</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full w-1/4 border-l border-slate-400 px-4 sm:px-5 flex flex-col gap-2">
                        <h4 className="text-base font-bold text-accent">Get in Touch</h4>
                        <span className="h-0.5 w-10 bg-primary"></span>
                        <ul className="w-full h-max mt-5">
                            <li className="h-max w-full mb-4 text-sm text-accent flex items-center gap-2">
                                <Mail className="text-primary" size={20} />
                                <p>feedback@iruap.com</p>
                            </li>
                            <li className="h-max w-full mb-4 text-sm text-accent flex items-center gap-2">
                                <Locate className="text-primary" size={20} />
                                <p>FCT Abuja, Nigeria.</p>
                            </li>
                            <li className="h-max w-full mb-4 text-sm text-accent flex items-center gap-2">
                                <Phone className="text-primary" size={20} />
                                <p>+234816 8318 983</p>
                            </li>
                            <li className="h-max w-full  text-sm text-accent flex items-center gap-2">
                                <Globe2 className="text-primary" size={20} />
                                <p>wwww.iruap.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full w-1/4 border-l border-slate-400 px-4 sm:px-5 flex flex-col gap-2">
                        <h4 className="text-base font-bold text-accent">IDEAS INTO REAL SOLUTION</h4>
                        <span className="h-0.5 w-10 bg-primary"></span>
                    </div>
                </div>
            </div>
            <div className="h-max w-full flex justify-between items-center">
                <div className="h-max w-max">
                    <p className="text-sm text-ash font-light">&copy; 2026 Iruap Tech Studio Limited. All rights researved.</p>
                </div>
                <div className="h-max w-max flex items-center gap-5">
                    <Link href={"/"} className="text-sm text-ash font-light">Privacy</Link>
                    <span className="h-5 w-0.5 bg-ash"></span>
                    <Link href="" className="text-sm text-ash font-light">Terms of Service</Link>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;