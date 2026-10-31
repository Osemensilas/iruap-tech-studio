'use client';

import { Locate, Mail, Phone, User, Wrench } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    interface UserData{
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        title: string;
        service: string;
        message: string;
    }

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<UserData>({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        title: "",
        message: "",
        service: ""
    });

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value });
    }

    const btnClicked = async () => {
        setLoading(true);

        const nameVal = /^[a-zA-Z|| ]+$/;
        const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^(?:\+?[1-9]\d{7,14}|0\d{10})$/;

        if (!formData.email || !formData.firstname || !formData.lastname || !formData.message ||
            !formData.phone || !formData.service || !formData.title
        ){
            setError("All fields required");
            return;
        }

        if (!nameVal.test(formData.firstname)){
            setError("Invalid First Name");
            return;
        }

        if (!nameVal.test(formData.lastname)){
            setError("Invalid Last Name");
            return;
        }

        if (!emailVal.test(formData.email)){
            setError("Invalid Email Address");
            return;
        }

        if (!phoneRegex.test(formData.phone)){
            setError("Invalid Phone Number");
            return;
        }

        setError("");
        setLoading(false);
    }

    return ( 
        <>
        <section className="h-max w-full flex py-5 px-4 sm:px-10">
            <div className="h-max w-1/2 pr-5">
                <h4 className="text-base text-primary font-bold mb-5">GET IN TOUCH</h4>
                <h2 className="text-2xl text-accent font-bold mb-5">Let&apos;s build something great</h2>
                <p className="text-sm text-slate-400 mb-5">Have an idea for a website, mobile app, or software product? Tell us about it. We&apos;d love to hear from you.</p>
                <div className="h-max w-full border-b border-t flex flex-col gap-4 border-slate-400 py-5">
                    <div className="h-max w-full flex flex-start gap-2">
                        <div className="h-max w-max text-primary">
                            <Mail className="" size={24} />
                        </div>
                        <div className="h-max w-max flex flex-col gap-0.5">
                            <h3 className="text-base text-accent">Email</h3>
                            <p className="text-sm text-slate-400">contact@iruap.com</p>
                        </div>
                    </div>
                    <div className="h-max w-full flex flex-start gap-2">
                        <div className="h-max w-max text-primary">
                            <Phone className="" size={24} />
                        </div>
                        <div className="h-max w-max flex flex-col gap-0.5">
                            <h3 className="text-base text-accent">Phone</h3>
                            <p className="text-sm text-slate-400">+234816 8318 983</p>
                        </div>
                    </div>
                    <div className="h-max w-full flex flex-start gap-2">
                        <div className="h-max w-max text-primary">
                            <Locate className="" size={24} />
                        </div>
                        <div className="h-max w-max flex flex-col gap-0.5">
                            <h3 className="text-base text-accent">Location</h3>
                            <p className="text-sm text-slate-400">FCT Abuja, Nigeria.</p>
                        </div>
                    </div>
                </div>
                <div className="h-max w-full py-5">
                    <h4 className="text-base text-primary font-bold mb-5">Connect with us</h4>
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
                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-400">
                        <span className="">Web</span>
                        <span className="h-1 w-1 bg-slate-400 rounded-full"></span>
                        <span className="">Mobile</span>
                        <span className="h-1 w-1 bg-slate-400 rounded-full"></span>
                        <span className="">SaaS</span>
                        <span className="h-1 w-1 bg-slate-400 rounded-full"></span>
                        <span className="">AI</span>
                    </div>
                </div>
            </div>
            <div className="h-max w-1/2">
                <form action="" className="bg-accent rounded-xl px-4 sm:px-10 py-5">
                    <header className="h-max w-full pb-5 mb-5 border-b border-slate-400">
                        <h2 className="text-2xl font-bold text-center">Send us a message</h2>
                    </header>
                    <div className={`h-max w-full py-2 mb-2 text-center text-sm text-accent bg-red-500 rounded
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                    <div className="h-max w-full">
                        <div className="h-max w-full flex gap-2">
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-start">
                                <label htmlFor="firstname" className="text-sm text-slate-400">First Name:</label>
                                <input type="text" name="firstname" value={formData.firstname} onChange={handleChanged} id="firstname" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm" />
                                <User className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-end">
                                <label htmlFor="lastname" className="text-sm text-slate-400">Last Name:</label>
                                <input type="text" name="lastname" value={formData.lastname} onChange={handleChanged} id="lastname" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm" />
                                <User className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                        </div>
                        <div className="h-max w-full flex gap-2">
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-start">
                                <label htmlFor="email" className="text-sm text-slate-400">Email:</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm" />
                                <Mail className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-end">
                                <label htmlFor="phone" className="text-sm text-slate-400">Phone:</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChanged} id="phone" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm" />
                                <Phone className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                        </div>
                        <div className="h-max w-full flex gap-2">
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-start">
                                <label htmlFor="title" className="text-sm text-slate-400">Title:</label>
                                <select name="title" value={formData.title} onChange={handleChanged} id="title" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm">
                                    <option value="">-- Select a title --</option>
                                    <option value="mr">Mr</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="miss">Miss</option>
                                </select>
                                <User className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                            <div className="relative h-max w-1/2 flex flex-col gap-1 items-end">
                                <label htmlFor="service" className="text-sm text-slate-400">Service:</label>
                                <select name="service" value={formData.service} onChange={handleChanged} id="service" className="h-10 w-full outline-none border border-slate-300 rounded px-10 text-sm">
                                    <option value="">-- Select a service --</option>
                                    <option value="mr">Web Development</option>
                                    <option value="mrs">App Development</option>
                                    <option value="miss">Data analysis</option>
                                </select>
                                <Wrench className="absolute top-8.5 left-3 text-ash" size={20} />
                            </div>
                        </div>
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="message" className="text-sm text-slate-400">Project Details:</label>
                            <textarea name="message" value={formData.message} onChange={handleChanged} id="message" className="min-h-30 h-30 min-w-full w-full outline-none border border-slate-300 rounded px-10 py-5 text-sm"></textarea>
                        </div>
                    </div>
                    <div className="h-max w-full">
                        <button onClick={btnClicked} type="button" className="w-full bg-primary text-background rounded text-base py-2 mt-5 cursor-pointer">{
                            loading ? "Sending Enquiry ..." : "Send Enquiry"
                    }</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Contact;