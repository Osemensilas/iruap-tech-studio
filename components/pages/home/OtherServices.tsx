
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  CloudCog,
  Cog,
  Headset,
  Megaphone,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

const otherServices = [
  {
    icon: Cloud,
    title: "Web Hosting & Domains",
    description:
      "Reliable website hosting and domain registration to keep your business online.",
    href: "/services/hosting-domains",
  },
  {
    icon: CloudCog,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for your business.",
    href: "/services/cloud-solutions",
  },
  {
    icon: Cog,
    title: "IT Consultancy",
    description:
      "Practical technology guidance to help you make smarter digital decisions.",
    href: "/services/it-consultancy",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed around your users and business goals.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital strategies that help your business reach and connect with more customers.",
    href: "/services/digital-marketing",
  },
  {
    icon: Headset,
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, updates, and maintenance to keep your systems running.",
    href: "/services/support-maintenance",
  },
];

export default function OtherServices() {
  return (
    <section
      id="other-services"
      className="relative isolate overflow-hidden bg-[#0B1220] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm">
              Our Other Services
            </span>
            <span className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
            More Services,
            <span className="block text-[#D4AF37]">
              More Possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We offer digital solutions beyond web and mobile apps to help
            you build, scale, and grow your business in the digital world.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group"
              >
                <div className="flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-slate-900/80 sm:p-7">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-800 text-[#D4AF37] transition-colors duration-300 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10">
                    <Icon size={31} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400 sm:text-base">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-yellow-300"
                  >
                    Learn more
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-r from-slate-900 via-[#0B1220] to-slate-900 p-7 sm:p-10 lg:mt-16 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] sm:flex">
                <Rocket size={30} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-400">
                  Not sure which service fits your needs?
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Let&apos;s talk about your{" "}
                  <span className="text-[#D4AF37]">project.</span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                  Tell us what you want to achieve, and we&apos;ll help you
                  find the right solution.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#0B1220] transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
