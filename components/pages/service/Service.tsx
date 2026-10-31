
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  Layers3,
  Settings,
  Zap,
  UsersRound,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Check,
} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const gold = "#D4AF37";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive and fast websites for your business or organization.",
    image: "/images/service-website.jpg",
    alt: "Website displayed on a laptop and smartphone",
    icon: Globe,
    features: [
      "Responsive design",
      "SEO-friendly structure",
      "Content management system",
      "1 month support",
    ],
    href: "/contact?service=website-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Powerful and user-friendly mobile apps for Android and iOS.",
    image: "/images/service-mobile-app.jpg",
    alt: "Mobile applications displayed on smartphones",
    icon: Smartphone,
    features: [
      "Cross-platform development",
      "Clean and modern UI/UX",
      "API integration",
      "1 month support",
    ],
    href: "/contact?service=mobile-app-development",
  },
  {
    title: "Web Application",
    description:
      "Custom web applications built for your business needs.",
    image: "/images/service-web-app.jpg",
    alt: "A modern web application dashboard on a laptop",
    icon: Code2,
    features: [
      "Custom features and functionality",
      "Secure and scalable architecture",
      "Database integration",
      "1 month support",
    ],
    href: "/contact?service=web-application",
  },
  {
    title: "Other Services",
    description:
      "From hosting to consultancy, we've got you covered.",
    image: "/images/service-hosting.jpg",
    alt: "Professional server racks in a data centre",
    icon: Layers3,
    features: [
      "Domain registration & transfer",
      "Web hosting from ₦500/month",
      "UI/UX design",
      "IT consultancy",
    ],
    href: "/contact?service=other",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your needs and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We create a clear strategy and roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop, test and refine your solution.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deliver and provide ongoing support.",
  },
];

const benefits = [
  {
    icon: UsersRound,
    title: "Experienced Team",
    description: "Skilled professionals with a passion for technology.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Performance",
    description: "Clean code, modern design, and scalable solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centered Approach",
    description: "Your success is our priority.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable & Flexible",
    description: "Great value with transparent pricing.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#031225] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#17334A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_30%,rgba(212,175,55,0.055),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-[1280px] lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-12"
          >
            <Eyebrow>Our Services</Eyebrow>

            <h1 className="mt-4 max-w-[520px] text-[34px] font-bold leading-[1.12] tracking-tight sm:text-5xl">
              Digital Solutions for a{" "}
              <span className="block text-[#D4AF37]">
                Smarter Tomorrow
              </span>
            </h1>

            <p className="mt-4 max-w-[480px] text-[13px] leading-[1.65] text-slate-200 sm:text-sm">
              We create modern, reliable and scalable digital solutions that
              help businesses grow, connect and achieve their goals. From
              websites to mobile apps, we turn your ideas into powerful digital
              experiences.
            </p>

            <div className="mt-6 grid max-w-[490px] grid-cols-3 divide-x divide-[#21415A]">
              <HeroBenefit
                icon={<Settings size={26} />}
                title="Modern"
                subtitle="Technologies"
              />
              <HeroBenefit
                icon={<Zap size={26} />}
                title="On-Time"
                subtitle="Delivery"
              />
              <HeroBenefit
                icon={<UsersRound size={27} />}
                title="Dedicated"
                subtitle="Support"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[330px]"
          >
            <Image
              src="/images/contact-hero.png"
              alt="Modern software development workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/60 via-transparent to-[#031225]/10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#031225]/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="border-b border-[#17334A] px-5 py-9 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1150px]">
          <Eyebrow>What We Offer</Eyebrow>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-[32px]">
            Our Core <span className="text-[#D4AF37]">Services</span>
          </h2>

          <p className="mt-1.5 max-w-[490px] text-[13px] leading-5 text-slate-300">
            We offer a range of digital services designed to meet your unique
            needs and help you stay ahead in today&apos;s competitive market.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group grid min-h-[214px] grid-cols-1 gap-4 rounded-lg border border-[#175078] bg-gradient-to-br from-[#051A2D] to-[#031326] p-4 transition duration-300 hover:border-[#D4AF37]/70 sm:grid-cols-[1.15fr_0.85fr] sm:p-4"
                >
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F4CC52] to-[#D4AF37] text-[#071326] shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-[14px] font-bold leading-snug sm:text-[15px]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-2.5 text-[11px] leading-[1.6] text-slate-300 sm:text-xs">
                      {service.description}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[11px] leading-[1.4] text-slate-200"
                        >
                          <Check
                            size={13}
                            className="mt-px shrink-0 text-[#D4AF37]"
                            strokeWidth={2.5}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-[11px] font-semibold text-[#D4AF37] transition hover:gap-3"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="relative min-h-[170px] overflow-hidden rounded-md sm:min-h-[160px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/20 to-transparent" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS AND WHY CHOOSE US */}
      <section className="border-b border-[#17334A] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto grid max-w-[1150px] gap-9 lg:grid-cols-[1.65fr_1fr] lg:gap-8">
          <div>
            <Eyebrow>Our Process</Eyebrow>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              How We <span className="text-[#D4AF37]">Work</span>
            </h2>

            <p className="mt-1.5 text-[13px] text-slate-300">
              A simple and effective process to bring your ideas to life.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gradient-to-br from-[#F4CC52] to-[#D4AF37] text-[12px] font-bold text-[#071326]">
                    {step.number}
                  </div>

                  {index !== process.length - 1 && (
                    <div className="absolute left-[34px] top-[39px] hidden h-[52px] border-l border-[#173D56] sm:block" />
                  )}

                  <h3 className="mt-2.5 text-[13px] font-bold">{step.title}</h3>

                  <p className="mt-1.5 max-w-[150px] text-[11px] leading-[1.65] text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#21415A] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h3 className="text-base font-bold">
              Why Choose Iruap Tech Studio?
            </h3>

            <div className="mt-5 space-y-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F4CC52] to-[#D4AF37] text-[#071326]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h4 className="text-[12px] font-semibold">{title}</h4>
                    <p className="mt-1 text-[11px] leading-5 text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="relative mx-auto mt-9 flex max-w-[1150px] flex-col gap-5 overflow-hidden rounded-lg border border-[#D4AF37] bg-gradient-to-r from-[#071C30] via-[#041529] to-[#071C30] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#F4CC52] to-[#D4AF37] text-[#071326]">
              <MessageCircle size={23} />
            </div>

            <div>
              <h3 className="text-sm font-bold">Ready to Get Started?</h3>
              <p className="mt-1 text-[11px] leading-5 text-slate-300">
                Let&apos;s discuss your project and find the best solution for
                your needs.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F4CC52] to-[#D4AF37] px-6 py-3 text-xs font-bold text-[#071326] transition hover:brightness-110"
          >
            Contact Us <ArrowRight size={15} />
          </Link>

          <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full opacity-20">
            <svg
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d={`M 0 ${35 - i * 5} C 220 ${-15 + i * 3}, 420 ${
                    65 - i * 4
                  }, 650 ${15 + i * 2} S 870 ${-5 + i * 5}, 1000 ${
                    30 - i * 3
                  }`}
                  stroke={gold}
                  strokeWidth="0.7"
                />
              ))}
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}

function BrandMark() {
  return (
    <span
      aria-label="Iruap Tech Studio logo"
      className="relative inline-block h-8 w-9 shrink-0"
    >
      <span className="absolute left-[11px] top-0 h-[13px] w-[13px] bg-[#D4AF37]" />
      <span className="absolute bottom-0 left-0 h-[13px] w-[13px] bg-[#D4AF37]" />
      <span className="absolute bottom-0 right-0 h-[13px] w-[13px] bg-[#D4AF37]" />
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#D4AF37]">
      <span className="h-[2px] w-7 bg-[#D4AF37]" />
      {children}
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-[#D4AF37]"
    >
      {children}
    </Link>
  );
}

function HeroBenefit({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2.5 px-2 first:pl-0 sm:gap-3 sm:px-4">
      <span className="shrink-0 text-[#D4AF37]">{icon}</span>
      <span className="text-[10px] leading-[1.45] sm:text-[11px]">
        <span className="block">{title}</span>
        <span className="block">{subtitle}</span>
      </span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="transition-colors hover:text-[#D4AF37]"
    >
      {children}
    </a>
  );
}
