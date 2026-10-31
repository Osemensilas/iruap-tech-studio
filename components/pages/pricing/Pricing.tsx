
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  Layers,
  ShieldCheck,
  Headset,
  Zap,
  Check,
  Server,
  LockKeyhole,
  Database,
  MessageSquare,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

const gold = "#D4AF37";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive and fast websites for your business or organization.",
    price: "₦100,000",
    features: [
      "Responsive design",
      "SEO-friendly structure",
      "Content management system",
      "1 month of support",
    ],
    href: "/contact?service=website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Powerful and user-friendly mobile apps for Android and iOS.",
    price: "₦250,000",
    features: [
      "Cross-platform development",
      "Clean and modern UI/UX",
      "API integration",
      "1 month of support",
    ],
    href: "/contact?service=mobile-app-development",
  },
  {
    icon: Code2,
    title: "Web Application",
    description: "Custom web applications built around your business needs.",
    price: "₦150,000",
    features: [
      "Custom features and functionality",
      "Secure and scalable architecture",
      "Database integration",
      "1 month of support",
    ],
    popular: true,
    href: "/contact?service=web-application",
  },
  {
    icon: Layers,
    title: "Other Services",
    description: "From hosting to consultancy, we have got you covered.",
    price: "₦10,000",
    priceNote: "Varies by service",
    features: [
      "Domain registration and transfer",
      "Web hosting from ₦500/month",
      "UI/UX design",
      "IT consultancy",
    ],
    href: "/contact?service=other",
  },
];

const hostingPlans = [
  {
    name: "Lite",
    price: "₦500",
    note: "1st month free",
    features: [
      "1 website",
      "1 email account",
      "1GB bandwidth/RAM",
      "Free cPanel",
      "LiteSpeed",
      "SSL",
      "30-day money-back guarantee",
    ],
  },
  {
    name: "Essential",
    price: "₦850",
    features: [
      "5 websites",
      "5 email accounts",
      "5GB bandwidth/RAM",
      "Free cPanel",
      "LiteSpeed",
      "SSL",
      "30-day money-back guarantee",
    ],
  },
  {
    name: "Standard",
    price: "₦1,200",
    features: [
      "10 websites",
      "10 email accounts",
      "10GB bandwidth/RAM",
      "Free cPanel",
      "LiteSpeed",
      "SSL",
      "30-day money-back guarantee",
    ],
  },
  {
    name: "Plus",
    price: "₦1,600",
    features: [
      "Unlimited websites",
      "Unlimited email accounts",
      "Unlimited bandwidth/RAM",
      "Free cPanel",
      "LiteSpeed",
      "SSL",
      "30-day money-back guarantee",
    ],
  },
];

const assurances = [
  { icon: ShieldCheck, title: "Reliable", subtitle: "Services" },
  { icon: Headset, title: "Local Support", subtitle: "You Can Count On" },
  { icon: Zap, title: "Affordable", subtitle: "& Flexible Plans" },
];

const hostingBenefits = [
  { icon: Zap, title: "Fast servers", subtitle: "for your website" },
  { icon: LockKeyhole, title: "Free SSL", subtitle: "Secure connection" },
  { icon: Headset, title: "Local Support", subtitle: "Help when needed" },
  { icon: Database, title: "Plans from", subtitle: "₦500/month" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#031225] text-white">
     {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(212,175,55,0.08),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:py-16 lg:grid-cols-2 lg:px-12 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <Eyebrow>Pricing</Eyebrow>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[52px]">
              Simple, Transparent
              <span className="block text-[#D4AF37]">Pricing</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Choose a plan that fits your needs. Whether you&apos;re building
              a website, launching an app, or need hosting, we have flexible
              options to help you get started.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-4">
              {assurances.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-center gap-3">
                  <Icon className="shrink-0 text-[#D4AF37]" size={27} strokeWidth={1.6} />
                  <div className="text-xs leading-5 text-slate-200">
                    <p className="font-medium">{title}</p>
                    <p className="text-slate-400">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative min-h-[270px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[350px] lg:min-h-[390px] lg:rounded-none lg:border-0"
          >
            <Image
              src="/images/pricing-hero.png"
              alt="Modern developer workspace with a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/35 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#031225]/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Service pricing */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our Plans</Eyebrow>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible Plans <span className="text-[#D4AF37]">for Your Ideas</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Select a plan that suits your project. We focus on reliable
            solutions and high-quality development.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative flex flex-col rounded-xl border p-5 transition duration-300 hover:-translate-y-1 ${
                    service.popular
                      ? "border-[#D4AF37] bg-[#0A1B30] shadow-[0_0_25px_rgba(212,175,55,0.08)] ring-1 ring-[#D4AF37]"
                      : "border-slate-700/70 bg-gradient-to-b from-[#071A30] to-[#041326] hover:border-[#D4AF37]/60"
                  }`}
                >
                  {service.popular && (
                    <span className="absolute right-3 top-3 rounded-md bg-[#D4AF37] px-2.5 py-1 text-[10px] font-bold text-[#071326]">
                      Most Popular
                    </span>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D56D] to-[#D4AF37] text-[#071326]">
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <h3 className="mt-4 text-base font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-300 sm:text-[13px]">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs text-slate-300">Starting from</p>
                    <p className="mt-0.5 text-2xl font-bold tracking-tight text-[#D4AF37]">
                      {service.price}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-300">
                      {service.priceNote || "per project"}
                    </p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5 pb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-200"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-[#D4AF37]"
                          strokeWidth={2.5}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                      service.popular
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#071326] hover:bg-[#e8c95f]"
                        : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#071326]"
                    }`}
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hosting plans */}
      <section className="border-y border-white/10 bg-[#041326] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 xl:grid-cols-[0.8fr_1.6fr] xl:items-center">
          <div>
            <Eyebrow>Hosting Plans</Eyebrow>

            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Reliable Web Hosting{" "}
              <span className="text-[#D4AF37]">in Nigeria</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Fast, secure and affordable hosting for your website and domain.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 xl:grid-cols-2">
              {hostingBenefits.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon size={24} className="shrink-0 text-[#D4AF37]" strokeWidth={1.6} />
                  <div className="text-xs leading-5">
                    <p className="font-medium text-white">{title}</p>
                    <p className="text-slate-400">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://iruhost.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#071326] transition hover:bg-[#e8c95f]"
            >
              View Hosting Plans <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-[#06172B]">
            <div className="border-b border-slate-700/70 px-5 py-4">
              <h3 className="font-semibold">Hosting Plans</h3>
              <p className="mt-1 text-xs text-slate-400">
                Find the right plan for your website.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {hostingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`flex flex-col p-4 sm:p-5 ${
                    index !== hostingPlans.length - 1
                      ? "border-b border-slate-700/70 md:border-b-0 md:border-r"
                      : "border-b border-slate-700/70 md:border-b-0"
                  } ${index === 2 ? "bg-[#0B2038]" : ""}`}
                >
                  <h4 className="text-sm font-medium text-slate-100">
                    {plan.name}
                  </h4>

                  <p className="mt-2 text-xl font-bold tracking-tight text-[#D4AF37] sm:text-2xl">
                    {plan.price}
                    <span className="ml-1 text-xs font-normal text-slate-300">
                      /mo
                    </span>
                  </p>

                  {plan.note ? (
                    <p className="mt-1 min-h-4 text-[10px] text-[#E7C45B]">
                      ({plan.note})
                    </p>
                  ) : (
                    <div className="mt-1 min-h-4" />
                  )}

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1.5 text-[10px] leading-4 text-slate-300 sm:text-[11px]"
                      >
                        <Check
                          size={12}
                          className="mt-0.5 shrink-0 text-[#D4AF37]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`https://iruhost.com`}
                    className="mt-5 inline-flex min-h-9 items-center justify-center gap-1 rounded-full border border-[#D4AF37] px-2 py-2 text-[11px] font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#071326]"
                  >
                    Get Started <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom project CTA */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#0B2038] via-[#07182C] to-[#0B2038] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5D56D] to-[#D4AF37] text-[#071326]">
              <MessageSquare size={23} />
            </div>
            <div>
              <h3 className="font-bold sm:text-lg">
                Have a custom project or need a different plan?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                We can create a solution that fits your exact needs.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#071326] transition hover:bg-[#e8c95f]"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function BrandMark() {
  return (
    <span
      aria-label="Iruap Tech Studio logo"
      className="relative inline-block h-8 w-10 shrink-0"
    >
      <span className="absolute left-[12px] top-0 h-[13px] w-[13px] bg-[#D4AF37]" />
      <span className="absolute bottom-0 left-0 h-[13px] w-[13px] bg-[#D4AF37]" />
      <span className="absolute bottom-0 right-0 h-[13px] w-[13px] bg-[#D4AF37]" />
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
      <span className="h-[2px] w-6 bg-[#D4AF37]" />
      {children}
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
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
