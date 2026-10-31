
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Smartphone,
  Layers3,
  Settings2,
  ShieldCheck,
  BadgeCheck,
  Headset,
  Zap,
} from "lucide-react";
import Link from "next/link";

const pricingServices = [
  {
    title: "Website Development",
    description:
      "Professional websites that establish your brand and help your business grow.",
    price: "₦150,000",
    unit: "/ project",
    icon: Code2,
    popular: true,
    features: [
      "Business and corporate websites",
      "Responsive mobile-friendly design",
      "Contact forms and integrations",
      "Basic SEO setup",
      "Content management options",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile applications designed around your users and business goals.",
    price: "₦250,000",
    unit: "/ project",
    icon: Smartphone,
    popular: false,
    features: [
      "Android and iOS solutions",
      "Cross-platform development",
      "User-friendly interface",
      "API integration",
      "Testing and deployment assistance",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Custom web-based systems that streamline operations and improve productivity.",
    price: "₦200,000",
    unit: "/ project",
    icon: Layers3,
    popular: false,
    features: [
      "Business management systems",
      "Admin dashboards",
      "Database design and setup",
      "API integrations",
      "Authentication and user roles",
    ],
  },
  {
    title: "Other Services",
    description:
      "Additional technology services to support your business online.",
    price: "₦50,000",
    unit: "/ project",
    icon: Settings2,
    popular: false,
    features: [
      "UI/UX and interface design",
      "IT consultancy",
      "Cloud setup and deployment",
      "Website maintenance",
      "Hosting and domain assistance",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    description: "Clear estimates before work begins.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Careful testing and quality-focused delivery.",
  },
  {
    icon: Headset,
    title: "Ongoing Support",
    description: "Support options after project delivery.",
  },
  {
    icon: Zap,
    title: "Reliable Delivery",
    description: "Agreed milestones and timelines.",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden bg-[#071326] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Our Pricing
            </span>
            <span className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Quality Solutions at{" "}
            <span className="text-[#D4AF37]">Fair Prices.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            From business websites to custom software, we provide digital
            solutions tailored to your needs, goals, and budget.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Starting prices only. Your final quote depends on project
            requirements and complexity.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  service.popular
                    ? "border-[#D4AF37] bg-slate-900/90 shadow-[0_0_35px_rgba(212,175,55,0.10)]"
                    : "border-slate-700 bg-slate-950/50 hover:border-[#D4AF37]/60"
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-bold text-[#071326]">
                    Most Popular
                  </span>
                )}

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-[#D4AF37]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-5 border-b border-slate-700 pb-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Starting from
                  </p>

                  <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-[#D4AF37]">
                      {service.price}
                    </span>
                    <span className="text-sm text-slate-400">
                      {service.unit}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-5 text-slate-300"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-[#D4AF37]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition-all ${
                    service.popular
                      ? "bg-[#D4AF37] text-[#071326] hover:bg-yellow-400"
                      : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#071326]"
                  }`}
                >
                  Get Started
                  <ArrowRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Benefits strip */}
        <div className="mt-14 grid gap-6 rounded-2xl border border-slate-700 bg-slate-900/60 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-start gap-4 ${
                  index !== 0 ? "lg:border-l lg:border-slate-700 lg:pl-6" : ""
                }`}
              >
                <Icon
                  size={28}
                  className="shrink-0 text-[#D4AF37]"
                  strokeWidth={1.8}
                />
                <div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#D4AF37]/70 bg-gradient-to-r from-slate-900 via-[#0B1830] to-slate-900 p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Let&apos;s build something great together.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Tell us what you need, and we&apos;ll prepare a solution and
              quote tailored to your project.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-bold text-[#071326] transition hover:bg-yellow-400"
          >
            Request a Quote
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
