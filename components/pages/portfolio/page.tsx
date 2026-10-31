
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MessageSquare, } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const GOLD = "#D4AF37";

type Category =
  | "All"
  | "Websites"
  | "Web Applications"
  | "Mobile Apps"
  | "Hosting & Others";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  technologies: string[];
  href: string;
  featured?: boolean;
};

const categories: Category[] = [
  "All",
  "Websites",
  "Web Applications",
  "Mobile Apps",
  "Hosting & Others",
];

const projects: Project[] = [
  {
    title: "Business Website",
    category: "Websites",
    description:
      "A modern, responsive website for a growing business, with a clean design and smooth user experience.",
    image: "/images/projects/business-website.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "/contact?service=website-development",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile Apps",
    description:
      "A cross-platform mobile app concept to help users track workouts, monitor progress and stay motivated.",
    image: "/images/projects/fitness-app.jpg",
    technologies: ["React Native", "TypeScript", "Firebase"],
    href: "/contact?service=mobile-app-development",
  },
  {
    title: "Analytics Dashboard",
    category: "Web Applications",
    description:
      "A data-focused dashboard concept for visualizing business metrics and turning information into insights.",
    image: "/images/projects/analytics-dashboard.jpg",
    technologies: ["Next.js", "Charts", "Tailwind CSS"],
    href: "/contact?service=web-application",
  },
  {
    title: "IruHost — Hosting Platform",
    category: "Hosting & Others",
    description:
      "An affordable web hosting platform offering domain services, hosting plans and customer support.",
    image: "/images/projects/iruhost.jpg",
    technologies: ["PHP", "cPanel", "MySQL"],
    href: "https://iruhost.com",
    featured: true,
  },
  {
    title: "WiseGen Youth Fellowship",
    category: "Websites",
    description:
      "A community platform for Christian youth, with fellowship information, events and mentoring resources.",
    image: "/images/projects/wisegen.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Laravel"],
    href: "https://wisegen.ca",
    featured: true,
  },
  {
    title: "Iruap Tech Studio",
    category: "Hosting & Others",
    description:
      "The digital identity and website for Iruap Tech Studio, a software development and technology company.",
    image: "/images/projects/iruap-brand.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "/",
    featured: true,
  },
];

const projectStats = [
  { value: "10+", label: "Projects Completed" },
  { value: "8+", label: "Happy Clients" },
  { value: "3+", label: "Technologies Used" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#031225] text-white">
      {/* HERO */}
      <section className="relative border-b border-[#17344C]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_40%,rgba(212,175,55,0.06),transparent_48%)]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-10"
          >
            <Eyebrow>Our Work</Eyebrow>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Recent Projects
              <span className="mt-1 block text-[#D4AF37]">
                We&apos;ve Worked On
              </span>
            </h1>

            <p className="mt-4 max-w-[420px] text-sm leading-[1.65] text-slate-200">
              Explore some of our projects. We build modern, reliable and
              scalable digital solutions for businesses, organizations and
              individuals.
            </p>

            <div className="mt-6 grid max-w-[440px] grid-cols-3">
              {projectStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${
                    index !== 0 ? "border-l border-[#25445D] pl-4 sm:pl-5" : ""
                  } ${index !== 0 ? "ml-3 sm:ml-5" : ""}`}
                >
                  <p className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-300 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-h-[260px] overflow-hidden sm:min-h-[350px] lg:min-h-[335px]"
          >
            <Image
              src="/images/portfolio-hero.png"
              alt="Iruap Tech Studio software development workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/65 via-transparent to-[#031225]/10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#031225]/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* PROJECT FILTERS */}
      <section className="px-5 pt-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1150px]">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-full border px-5 py-2 text-xs font-medium transition duration-200 ${
                    selected
                      ? "border-[#D4AF37] bg-[#D4AF37] text-[#071326]"
                      : "border-[#24445F] bg-transparent text-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* PROJECT GRID */}
          <motion.div
            layout
            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25, delay: index * 0.035 }}
                className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#17415F] bg-gradient-to-b from-[#06192C] to-[#031326] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70"
              >
                {/* Project image */}
                <div className="relative h-[190px] overflow-hidden border-b border-[#17415F] sm:h-[160px] lg:h-[160px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/35 via-transparent to-transparent" />
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-4">
                  <span className="w-fit rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-semibold text-[#071326]">
                    {project.category === "Websites"
                      ? "Website"
                      : project.category === "Web Applications"
                        ? "Web Application"
                        : project.category === "Mobile Apps"
                          ? "Mobile App"
                          : "Hosting & Others"}
                  </span>

                  <h2 className="mt-3 text-[15px] font-semibold leading-snug">
                    {project.title}
                  </h2>

                  <p className="mt-2 min-h-[58px] text-xs leading-[1.6] text-slate-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-1.5 text-[10px] text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <Link
                      href={project.href}
                      target={
                        project.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D4AF37] transition hover:gap-3"
                    >
                      {project.href.startsWith("/contact")
                        ? "Discuss a Project"
                        : "View Project"}
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      href={project.href}
                      target={
                        project.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={`Open ${project.title}`}
                      className="text-[#D4AF37] transition hover:text-[#F4D66C]"
                    >
                      <ExternalLink size={15} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="py-12 text-center text-sm text-slate-300">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 py-9 sm:px-8 sm:py-10 lg:px-12">
        <div className="relative mx-auto flex max-w-[1150px] flex-col gap-5 overflow-hidden rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#071A2D] via-[#041326] to-[#071A2D] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
          <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 right-20 h-36 w-64 rounded-full bg-[#D4AF37]/[0.07] blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-[#071326]">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="text-base font-bold sm:text-lg">
                Have a project in mind?
              </h2>
              <p className="mt-1 max-w-md text-xs leading-5 text-slate-200">
                Let&apos;s bring your ideas to life with the right technology
                and creative solutions.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-xs font-bold text-[#071326] transition hover:bg-[#E9C653]"
          >
            Get Started <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function BrandMark() {
  return (
    <span
      role="img"
      aria-label="Iruap three-square logo"
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
    <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">
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
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="transition-colors hover:text-[#D4AF37]">
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
