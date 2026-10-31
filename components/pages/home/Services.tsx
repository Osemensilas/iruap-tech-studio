
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  AppWindow,
  Smartphone,
  Code2,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites designed to establish your brand, attract customers, and grow your business.",
    icon: Globe,
    features: [
      "Business & corporate websites",
      "E-commerce solutions",
      "Landing pages & portfolios",
    ],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Powerful web applications that simplify operations, automate workflows, and deliver better digital experiences.",
    icon: AppWindow,
    features: [
      "Custom dashboards & portals",
      "SaaS platforms",
      "Business management systems",
    ],
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Intuitive mobile applications that help you connect with customers and bring your ideas to their fingertips.",
    icon: Smartphone,
    features: [
      "Android applications",
      "Cross-platform mobile apps",
      "API & backend integration",
    ],
  },
  {
    number: "04",
    title: "Custom Software Development",
    description:
      "Purpose-built software solutions tailored to your unique business processes, challenges, and goals.",
    icon: Code2,
    features: [
      "Custom business software",
      "API development & integration",
      "Process automation",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            What We Do
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Technology That Turns
            <span className="mt-2 block text-[#D4AF37]">
              Ideas Into Reality
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We design and build digital solutions that help businesses
            work smarter, connect with customers, and achieve more.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className="group relative flex h-full flex-col rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] sm:p-7"
              >
                {/* Card top */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.09] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0B1220]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-slate-600">
                    {service.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="text-xl font-semibold leading-snug text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#D4AF37]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom link */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  aria-label={`Discuss ${service.title} with us`}
                  className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#F0D77A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1220]"
                >
                  Discuss Your Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/[0.08] to-transparent p-7 text-center sm:mt-16 sm:flex-row sm:p-10 sm:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Let&apos;s discuss your idea and find the right solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-[#0B1220] transition-all hover:bg-[#E5C65B] hover:shadow-lg hover:shadow-[#D4AF37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
