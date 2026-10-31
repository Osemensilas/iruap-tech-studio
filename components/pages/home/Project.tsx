
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Layers3,
  Star,
} from "lucide-react";

type ProjectCategory =
  | "Website"
  | "Mobile App"
  | "Web Application"
  | "Other";

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  href: string;
  featured?: boolean;
};

const filters = [
  "All",
  "Websites",
  "Mobile Apps",
  "Web Apps",
  "Other",
] as const;

type Filter = (typeof filters)[number];

const projects: Project[] = [
  {
    title: "IruHost Website",
    category: "Website",
    description:
      "A modern hosting platform for domain registration, web hosting, and customer account management.",
    image: "/images/projects/iruhost.png",
    technologies: ["Next.js", "Tailwind CSS", "PHP", "cPanel"],
    href: "https://iruhost.com",
    featured: true,
  },
  {
    title: "WiseGen Christian Fellowship",
    category: "Website",
    description:
      "A digital home for a youth fellowship focused on mentoring, events, and spiritual growth.",
    image: "/images/projects/wisegen.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    href: "https://wisegen.ca",
  },
  {
    title: "Mobile Application",
    category: "Mobile App",
    description:
      "A mobile-first experience designed to make essential tasks easier on the go.",
    image: "/images/projects/mobile-app.png",
    technologies: ["React Native"],
    href: "/contact",
  },
  {
    title: "IruHost Admin Dashboard",
    category: "Web Application",
    description:
      "An administration interface for managing hosting services and customer activity.",
    image: "/images/projects/iruhost-dashboard.png",
    technologies: ["React", "PHP", "Tailwind CSS"],
    href: "/contact",
  },
  {
    title: "E-commerce Platform",
    category: "Web Application",
    description:
      "An online shopping experience with product discovery and a clean, responsive interface.",
    image: "/images/projects/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS"],
    href: "/contact",
  },
];

const filterMap: Record<Filter, ProjectCategory[]> = {
  All: ["Website", "Mobile App", "Web Application", "Other"],
  Websites: ["Website"],
  "Mobile Apps": ["Mobile App"],
  "Web Apps": ["Web Application"],
  Other: ["Other"],
};

export default function SelectedProjects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects = projects.filter(
    (project) =>
      !project.featured &&
      filterMap[activeFilter].includes(project.category)
  );

  return (
    <section
      id="selected-projects"
      className="relative isolate overflow-hidden bg-[#0B1220] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading and filters */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                Selected Projects
              </span>
              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Our Latest Work
              <span className="block text-[#D4AF37]">
                Speaks for Us.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We build digital solutions that solve real problems, create
              value, and help businesses grow.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "border-[#D4AF37] bg-[#D4AF37] text-[#0B1220]"
                    : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-[#D4AF37]/60 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured project */}
        {featuredProject && (
          <motion.div
            key={featuredProject.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mb-16 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
          >
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${featuredProject.title}`}
              className="group relative block"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 sm:aspect-[16/10]">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} project preview`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />

                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0B1220]/80 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  <Star size={15} className="fill-[#D4AF37] text-[#D4AF37]" />
                  Featured Project
                </span>

                <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1220] transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </a>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-semibold text-[#D4AF37]">
                <Star size={13} />
                Featured Project
              </span>

              <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="mt-2 text-lg text-slate-400">
                Web Development & Hosting Platform
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                {featuredProject.description}
              </p>

              <div className="mt-7 space-y-5 border-y border-slate-800 py-6">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    size={20}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  />
                  <div className="flex-1 sm:flex sm:justify-between sm:gap-4">
                    <span className="text-sm text-slate-400">
                      Project
                    </span>
                    <span className="text-sm font-medium">
                      Web Hosting Platform
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Layers3
                    size={20}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  />
                  <div className="flex-1">
                    <span className="text-sm text-slate-400">
                      Technologies
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {featuredProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={featuredProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 font-semibold text-[#0B1220] transition hover:bg-yellow-400"
                >
                  View Project
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-[#D4AF37]"
                >
                  View All Projects
                  <ArrowDownRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
            >
              <Link
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#0B1220]/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1220] opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink size={17} />
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="font-semibold transition-colors group-hover:text-[#D4AF37]">
                    {project.title}
                  </h4>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="text-xs text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                    Explore Project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-7 text-center sm:p-9 md:flex-row md:text-left">
          <div>
            <p className="text-sm font-medium text-[#D4AF37]">
              Have an idea?
            </p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Let&apos;s build something meaningful.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Have a project in mind? Let&apos;s discuss how we can help.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#D4AF37] px-6 py-3.5 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B1220]"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
