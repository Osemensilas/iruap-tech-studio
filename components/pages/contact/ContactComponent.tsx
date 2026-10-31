
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "YOUR_BUSINESS_EMAIL",
    description: "Send us a message about your project.",
    href: "mailto:YOUR_BUSINESS_EMAIL",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abuja, Nigeria",
    description: "Serving clients locally and internationally.",
    href: "https://www.google.com/maps/search/?api=1&query=Abuja%2C+Nigeria",
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/YOUR_COMPANY",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/YOUR_USERNAME",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/YOUR_PAGE",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/YOUR_USERNAME",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Prompt Communication",
    description: "We aim to respond to project enquiries promptly.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service",
    description: "Clear communication and a thoughtful approach to your needs.",
  },
  {
    icon: CheckCircle2,
    title: "Your Goals Matter",
    description: "We focus on understanding what you want to achieve.",
  },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Web Application",
  "Custom Software",
  "UI/UX Design",
  "Hosting & Domains",
  "IT Consultancy",
  "Other",
];

export default function ContactComponent() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061326] text-white">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_30%,rgba(212,175,55,0.12),transparent_45%)]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#D4AF37] sm:text-sm">
                Get in Touch
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something{" "}
              <span className="text-[#D4AF37]">Great Together.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Have a project in mind, a question, or need technical help?
              We&apos;d love to hear from you. Tell us what you&apos;re
              planning, and let&apos;s explore how we can help.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="border-r border-slate-700 pr-2 last:border-r-0 sm:pr-4"
                  >
                    <Icon
                      size={24}
                      className="mb-3 text-[#D4AF37]"
                      strokeWidth={1.8}
                    />
                    <h2 className="text-xs font-semibold leading-5 sm:text-sm">
                      {benefit.title}
                    </h2>
                    <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs sm:leading-5">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-w-0"
          >
            <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" />

            <div className="group relative h-[290px] overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-slate-900 sm:h-[360px] lg:h-[370px]">
              <Image
                src="/images/contact-hero.png"
                alt="A modern software development workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-white/15 bg-[#061326]/80 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-[#061326]">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="font-semibold">Have an idea?</p>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                    Let&apos;s turn it into something real.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-sky-900/80 bg-[#07172C] lg:grid-cols-[0.78fr_1.22fr]">
          {/* Left contact information */}
          <div className="border-b border-sky-900/80 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Reach Us
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Have a question or want to discuss a project? Choose the
              contact option that works best for you.
            </p>

            <div className="mt-7 space-y-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <a
                    key={detail.title}
                    href={detail.href}
                    target={detail.href.startsWith("https://") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-[#091D36] text-[#D4AF37] transition group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-sm font-semibold">{detail.title}</h3>
                      <p className="mt-1 break-words text-sm font-medium text-slate-200 transition group-hover:text-[#D4AF37]">
                        {detail.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {detail.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-7 border-t border-slate-700 pt-6">
              <h3 className="text-sm font-semibold">Connect with us</h3>
              <p className="mt-1 text-xs text-slate-400">
                Follow our work and company updates.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061326]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-700 bg-[#061326]/60 p-4">
              <MessageCircle
                size={20}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
              />
              <div>
                <p className="text-sm font-semibold">Let&apos;s discuss it</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Share your requirements and we&apos;ll get back to you
                  using the contact information you provide.
                </p>
              </div>
            </div>
          </div>

          {/* Right contact form */}
          <div className="p-6 sm:p-8 lg:p-9">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Fill out the form below with a few details about your enquiry.
            </p>

            <form
              action="/api/contact"
              method="POST"
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-slate-600 bg-[#061326] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-600 bg-[#061326] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  What service do you need?{" "}
                  <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-600 bg-[#061326] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is your enquiry about?"
                  className="w-full rounded-lg border border-slate-600 bg-[#061326] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project and how we can help..."
                  className="w-full resize-y rounded-lg border border-slate-600 bg-[#061326] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5C75E] px-6 py-3.5 font-bold text-[#061326] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#07172C]"
              >
                <Send size={17} />
                Send Message
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your information should only be used to respond to your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Location section */}
      <section className="px-5 pb-8 pt-2 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {/* Workspace image */}
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-700">
            <Image
              src="/images/workspace.png"
              alt="A professional technology workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Where ideas take shape
              </p>
              <p className="mt-2 text-xl font-bold">
                Built with purpose.
              </p>
            </div>
          </div>

          {/* Location details and map-style panel */}
          <div className="grid overflow-hidden rounded-2xl border border-slate-700 bg-[#07172C] sm:grid-cols-2">
            <div className="p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Our Location
              </p>

              <h2 className="mt-3 text-2xl font-bold">Abuja, Nigeria</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                We are based in Abuja and work with clients across Nigeria
                and beyond. Contact us to discuss your next digital project.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Abuja%2C+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#061326]"
              >
                <MapPin size={16} />
                View on Google Maps
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Decorative map graphic, not a precise map */}
            <div className="relative min-h-[230px] overflow-hidden border-t border-slate-700 bg-[#0A203A] sm:border-l sm:border-t-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40 [background-image:linear-gradient(28deg,transparent_47%,#285071_48%,#285071_49%,transparent_50%),linear-gradient(145deg,transparent_43%,#244865_44%,#244865_45%,transparent_46%),linear-gradient(90deg,transparent_48%,#183B59_49%,#183B59_50%,transparent_51%)] [background-size:100px_85px,130px_100px,75px_75px]"
              />

              <div className="absolute left-[15%] top-[22%] h-20 w-28 rotate-12 rounded-[35%] border border-sky-800/70" />
              <div className="absolute bottom-[10%] right-[12%] h-24 w-32 -rotate-12 rounded-[40%] border border-sky-800/70" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/50 bg-[#061326]/95 px-4 py-3 shadow-xl">
                  <MapPin size={25} className="shrink-0 text-[#D4AF37]" />
                  <div>
                    <p className="text-xs font-semibold">Iruap Tech Studio</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Abuja · Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative isolate overflow-hidden px-5 pb-10 pt-5 sm:px-8 lg:px-12 lg:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.15),transparent_70%)]"
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl border border-[#D4AF37]/70 bg-gradient-to-r from-[#091A30] via-[#071326] to-[#091A30] p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
          <div className="flex items-center gap-4">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37] text-[#061326] sm:flex">
              <Code2 size={30} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Ready to Start Your Project?
              </p>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                Let&apos;s turn your ideas into reality.
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Get in touch and let&apos;s discuss your next project.
              </p>
            </div>
          </div>

          <Link
            href="#contact-form"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("fullName")?.focus();
              document.getElementById("fullName")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3.5 font-bold text-[#061326] transition hover:bg-yellow-400"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
