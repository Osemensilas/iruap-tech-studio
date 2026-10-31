
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {ArrowRight, Code2, Lightbulb, Users, ShieldCheck, TrendingUp, Globe, Smartphone, Laptop } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and modern technologies.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your goals guide every solution we build.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We prioritize clean code and reliable solutions.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We build solutions designed to scale.",
  },
];

const services = [
  { icon: Globe, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Applications" },
  { icon: Code2, label: "Custom Software" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1220] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/6 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: About content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm">
              About Iruap Tech Studio
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Building Smart Solutions for a{" "}
            <span className="text-[#D4AF37]">
              Digital Tomorrow.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            At Iruap Tech Studio Limited, we build digital solutions
            that help businesses turn ideas into reality. Our work
            spans website development, web applications, mobile apps,
            and custom software tailored to real business needs.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We believe great software starts with understanding the
            people who use it. By combining thoughtful problem-solving,
            modern technologies, and a commitment to quality, we aim
            to deliver solutions that are practical, reliable, and
            ready to grow with your business.
          </p>

          {/* Core values */}
          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="border-l border-white/10 pl-3 sm:pl-4"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="mb-3 text-[#D4AF37]"
                  />

                  <h3 className="text-sm font-semibold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#0B1220] transition-all duration-300 hover:bg-[#E7C85B] hover:shadow-lg hover:shadow-[#D4AF37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Right: Picture and service overlays */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          {/* Image frame */}
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-slate-900 sm:aspect-5/4">
            <Image
              src="/images/about.png"
              alt="Software developer working on digital solutions at a computer"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Image contrast overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1220]/80 via-transparent to-[#0B1220]/10" />

            {/* Bottom image caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#0B1220]/80 text-[#D4AF37] backdrop-blur">
                  <Laptop size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Built with Purpose
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Thoughtful engineering. Practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating service card */}
          <div className="absolute -right-2 top-7 flex w-48 flex-col gap-4 rounded-xl border border-white/10 bg-[#101B2D]/95 p-4 shadow-2xl backdrop-blur-md sm:-right-5 sm:top-10 sm:w-56 sm:p-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.label}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-medium text-slate-200 sm:text-sm">
                    {service.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Decorative code card */}
          <div className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-[#101B2D]/95 p-4 shadow-2xl backdrop-blur-md sm:block sm:-left-8">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2 text-[10px] text-slate-500">
                solution.ts
              </span>
            </div>

            <div className="space-y-2 font-mono text-[10px] leading-5 text-slate-400">
              <p>
                <span className="text-purple-400">const</span>{" "}
                solution = {"{"}
              </p>
              <p className="pl-3 text-sky-300">
                innovate: true,
              </p>
              <p className="pl-3 text-sky-300">
                quality: true,
              </p>
              <p className="pl-3 text-sky-300">
                scalable: true,
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* Gold corner accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-2xl border border-[#D4AF37]/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
