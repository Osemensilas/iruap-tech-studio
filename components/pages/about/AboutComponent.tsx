
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Code2,
  Globe,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
  Eye,
  Layers3,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We explore practical ideas and modern technologies to solve real-world problems.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We focus on reliable, maintainable, and carefully developed digital solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "We value honest communication, transparency, and professional relationships.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description:
      "We work to understand each client's needs and build around their goals.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites for businesses and organizations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Mobile experiences designed to make everyday tasks easier.",
  },
  {
    icon: Layers3,
    title: "Custom Software",
    description: "Purpose-built applications and systems for business needs.",
  },
  {
    icon: Code2,
    title: "Technical Consultancy",
    description: "Guidance on software architecture, development, and technology.",
  },
];

const companyDetails = [
  { label: "Registered Name", value: "Iruap Tech Studio Limited" },
  { label: "Registration Number", value: "RC8776122" },
  {
    label: "Business Category",
    value: "Information & Communication",
  },
  {
    label: "Business Focus",
    value: "Computer programming and consultancy",
  },
];

export default function AboutComponent() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071326] text-white">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_35%,rgba(212,175,55,0.10),transparent_42%)]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                About Iruap
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building Digital Solutions for a{" "}
              <span className="text-[#D4AF37]">
                Smarter Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Iruap Tech Studio Limited is a technology company focused on
              building digital solutions that help businesses, organizations,
              and individuals bring their ideas to life. From websites and
              mobile applications to custom software, we turn challenges into
              practical technology solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 font-semibold text-[#071326] transition hover:bg-yellow-400"
              >
                Work With Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Registration summary */}
            <div className="mt-10 flex items-start gap-4 border-t border-slate-800 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Building2 className="text-[#D4AF37]" size={24} />
              </div>

              <div>
                <p className="font-semibold">
                  Iruap Tech Studio Limited
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Registered in Nigeria · RC8776122
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Information & Communication
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto w-full max-w-2xl lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

            <div className="absolute -right-3 -top-3 z-20 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-[#D4AF37]" />
            <div className="absolute -bottom-3 -left-3 z-20 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-[#D4AF37]" />

            <div className="group relative h-[350px] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-slate-900 sm:h-[450px]">
              <Image
                src="/images/about-developer.jpg"
                alt="Software developer working in a modern technology workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-[#071326]/80 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-[#071326]">
                    <Code2 size={23} />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Ideas into digital products
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Designed with purpose. Built with care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-7 sm:p-9"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
              <Target size={28} className="text-[#D4AF37]" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Mission
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Technology that solves real problems.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Our mission is to develop useful, reliable, and accessible
              digital solutions that empower businesses and individuals to
              work smarter, serve their customers better, and achieve their
              goals.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-7 sm:p-9"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
              <Eye size={28} className="text-[#D4AF37]" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Vision
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Making technology work for everyone.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Our vision is to grow into a trusted technology company known
              for thoughtful innovation, dependable software, and digital
              products that create lasting value.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Company story */}
      <section className="border-y border-slate-800 bg-[#09172B] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Built on a passion for{" "}
              <span className="text-[#D4AF37]">technology.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Iruap Tech Studio Limited was established to provide technology
              services that help turn ideas into working digital products.
              We believe software should do more than look good: it should
              solve a clear problem, be dependable, and serve the people who
              use it.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Our work focuses on web development, application development,
              hosting-related services, and technology consultancy. We aim to
              combine thoughtful design with practical engineering to deliver
              solutions suited to each project's needs.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              As we grow, our focus remains on learning, improving our
              technical capabilities, and building lasting relationships with
              the people and organizations we serve.
            </p>

            <Link
              href="/portfolio"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#D4AF37] transition hover:text-yellow-300"
            >
              Explore Our Work
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Company registration card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-slate-700 bg-[#071326] p-6 sm:p-8"
          >
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37] text-[#071326]">
                <Building2 size={28} />
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Iruap Tech Studio Limited
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Company registration profile
                </p>
              </div>
            </div>

            <div className="mt-2 divide-y divide-slate-800">
              {companyDetails.map((detail) => (
                <div key={detail.label} className="py-4">
                  <p className="text-sm text-slate-500">{detail.label}</p>
                  <p className="mt-1 font-medium leading-6 text-slate-200">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
              <BadgeCheck
                size={21}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
              />
              <p className="text-sm leading-6 text-slate-300">
                Company registration details are presented for business
                identification. Registration does not itself constitute
                certification or endorsement of individual services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              What Guides Us
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              The values behind our work.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              These principles guide how we approach our projects,
              collaborate with clients, and develop our solutions.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]/20">
                    <Icon size={24} className="text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-slate-800 bg-[#09172B] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Technology built around your needs.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-[#D4AF37] hover:text-yellow-300"
            >
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-700 bg-[#071326]/70 p-6 transition hover:border-[#D4AF37]/50"
                >
                  <Icon size={29} className="text-[#D4AF37]" />

                  <h3 className="mt-5 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and closing CTA */}
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.12),transparent_60%)]"
        />

        <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/40 bg-slate-900/60 p-7 sm:p-10 lg:p-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#D4AF37]">
                <MapPin size={17} />
                Abuja, Nigeria
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Have an idea worth building?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Tell us about your project. Let&apos;s explore how technology
                can help you solve problems, serve your customers, and move
                your business forward.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-bold text-[#071326] transition hover:bg-yellow-400"
            >
              Let&apos;s Talk
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
