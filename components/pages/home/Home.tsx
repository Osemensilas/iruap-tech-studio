import {Smartphone, Globe, Blocks, Rocket, Code2} from "lucide-react";
import Image from "next/image";

const HomeHeroComponent = () => {
    return ( 
        <>
        <div className="h-max w-full bg-background pt-40 px-4 sm:px-10">
            <div className="h-max w-full flex mb-10">
                <div className="h-max w-1/2">
                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                        <span className="">Software Company</span>
                        <span className="h-1 w-1 bg-primary rounded-full"></span>
                        <span className="">Web</span>
                        <span className="h-1 w-1 bg-primary rounded-full"></span>
                        <span className="">Mobile</span>
                        <span className="h-1 w-1 bg-primary rounded-full"></span>
                        <span className="">SaaS</span>
                        <span className="h-1 w-1 bg-primary rounded-full"></span>
                        <span className="">AI</span>
                    </div>
                    <h2 className="text-accent text-5xl mb-4 font-bold">You Envision.</h2>
                    <h2 className="text-accent text-5xl mb-4 font-bold">We Build.</h2>
                    <p className="text-accent text-base font-medium mb-10">500+ Projects Delivered since 2021, Mobile App, Web Platform, SaaS Products. </p>
                    <div className="h-max w-full">
                        <div className="h-max w-full flex flex-col gap-10 items-start justify-between">
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
                            <div className="h-max w-full">
                                <button type="button" className="h-max w-max cursor-pointer px-10 py-2 bg-primary text-background rounded font-medium">Get Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-max w-1/2 items-center justify-center pl-8">
                    {/* Ambient background glow */}
                    <div className="absolute inset-8 rounded-full bg-amber-400/20 blur-[100px]" />

                    {/* Decorative grid */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-4 rounded-3xl opacity-20
                        [background-image:linear-gradient(rgba(212,175,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.3)_1px,transparent_1px)]
                        [background-size:32px_32px]"
                    />

                    {/* Outer decorative frame */}
                    <div className="absolute -right-1 -top-4 h-28 w-28 rounded-tr-3xl border-r-2 border-t-2 border-amber-400/70" />
                    <div className="absolute -bottom-4 -left-1 h-28 w-28 rounded-bl-3xl border-b-2 border-l-2 border-amber-400/70" />

                    {/* Main image */}
                    <div className="group relative z-10 h-[420px] w-full overflow-hidden rounded-2xl border border-amber-300/40 bg-slate-950 p-1 shadow-[0_0_60px_rgba(212,175,55,0.12)]">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                            src="/images/hero.png"
                            alt="Software developer working on digital solutions"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Image overlays */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-amber-400/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        {/* Bottom image label */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur-md">
                            <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                                Iruap Tech Studio
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                                Turning Ideas Into Digital Products
                            </p>
                            </div>

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
                            <Rocket size={19} className="text-amber-300" />
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Floating technology badge */}
                    <div className="absolute -left-1 top-12 z-20 flex items-center gap-3 rounded-xl border border-amber-300/30 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15">
                        <Code2 size={21} className="text-amber-300" />
                        </div>
                        <div>
                        <p className="text-xs text-slate-400">Engineering</p>
                        <p className="text-sm font-semibold text-white">Built With Purpose</p>
                        </div>
                    </div>

                    {/* Floating status badge */}
                    <div className="absolute -bottom-5 right-4 z-20 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-950/95 px-4 py-3 shadow-xl">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-xs font-medium text-white sm:text-sm">
                        Ideas Into Reality
                        </span>
                    </div>

                    {/* Small decorative dots */}
                    <div className="absolute right-8 top-3 z-20 grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-amber-400/70"
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default HomeHeroComponent;