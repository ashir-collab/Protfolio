import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Nlogo from "../assets/images/N logo.png";
import Spotifylogo from "../assets/images/Spotify logo.png";
import Kfclogo from "../assets/images/Kfc logo.png";
import FitLablogo from "../assets/images/fitlab_logo_v3.png";
import ComputerizedLogo from "../assets/images/computerized_logo_v4.png";
import QalbSynclogo from "../assets/images/qalbsync-logo.png";
import TodoApplogo from "../assets/images/TaskMaster-logo.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Project = () => {
  const fitlabLink = import.meta.env.VITE_FITLAB_LINK;
  const qalbSyncLink = import.meta.env.VITE_QALB_SYNC_LINK;
  const computerizedAiLink = import.meta.env.VITE_COMPUTERIZED_AI_LINK;
  const taskMasterLink = import.meta.env.VITE_TASK_MASTER_LINK;

  const projects = [
    {
      id: "fitlab",
      imagesrc: FitLablogo,
      heading: "FitLab — Gym Management App",
      descr:
        "A full-stack fitness and gym management platform with a NestJS backend and React/TypeScript frontend. Includes role-based QR code check-ins, member goal tracking, and invoice generation with PDF export.",
      link: fitlabLink,
      tags: ["NestJS", "React", "TypeScript", "PostgreSQL"],
    },
    {
      id: "computerized",
      imagesrc: ComputerizedLogo,
      heading: "Computerized.ai — Website Revamp",
      descr:
        "A premium 3D animated website rebuild for an AI software agency, built with Next.js and React Three Fiber. Features a cinematic loader, GSAP-driven scroll animations, and an ink-black and amber-gold design system.",
      link: computerizedAiLink,
      tags: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    },
    {
      id: "netflix",
      imagesrc: Nlogo,
      heading: "Netflix Clone",
      descr:
        "A front-end clone inspired by Netflix, built to replicate a real streaming platform experience. Emphasis was placed on responsive layouts, reusable components, and clean state-driven UI behavior across devices.",
      tags: ["React", "Tailwind CSS", "REST API", "Responsive"],
    },
    {
      id: "qalbsync",
      imagesrc: QalbSynclogo,
      heading: "QalbSync — Religious App",
      descr:
        "A faith-focused application designed to support daily religious practice and spiritual habit tracking. Built with an emphasis on calm, distraction-free UI and reliable, accessible functionality.",
      link: qalbSyncLink,
      tags: ["React", "TypeScript", "UI/UX", "PWA"],
    },
    {
      id: "todomaster",
      imagesrc: TodoApplogo,
      heading: "Todo Master — Task Management App",
      descr:
        "A clean, minimal task management app focused on fast interactions and clear organization. Built with reusable components and straightforward state management for a smooth day-to-day workflow.",
      link: taskMasterLink,
      tags: ["React", "TypeScript", "State Management"],
    },
    {
      id: "spotify",
      imagesrc: Spotifylogo,
      heading: "Spotify Clone",
      descr:
        "A Spotify-style music streaming interface focused on modern UI patterns and seamless navigation. Features dynamic layouts, interactive components, and a scalable design structure that reflects real product-level frontend development.",
      tags: ["React", "Tailwind CSS", "Audio Web API"],
    },
    {
      id: "kfc",
      imagesrc: Kfclogo,
      heading: "KFC Clone",
      descr:
        "A detailed recreation of the KFC website, concentrating on visual accuracy, layout hierarchy, and responsive design. This project demonstrates the ability to translate an established brand’s identity into a functional, well-structured web interface.",
      tags: ["React", "CSS Modules", "Responsive Design"],
    },
  ];

  // Mobile Swipe Carousel State
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleMobileScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.82;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    setActiveSlide(
      Math.min(projects.length - 1, Math.max(0, currentIndex))
    );
  };

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth * 0.82;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollToSlide(Math.max(0, activeSlide - 1));
  };

  const scrollNext = () => {
    scrollToSlide(Math.min(projects.length - 1, activeSlide + 1));
  };

  return (
    <section className="relative ProjectContainer mt-36 sm:mt-44 w-11/12 mx-auto text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_70%)] blur-3xl" />

      {/* =========================================================
          MOBILE VIEW (< md): SWIPEABLE HORIZONTAL CAROUSEL
      ========================================================= */}
      <div className="block md:hidden">
        {/* Mobile Section Header */}
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            MY PROJECTS
          </span>
          <h2 className="text-3xl font-extrabold text-white leading-tight">
            Work that I’ve done for the past 1 year
          </h2>
        </div>

        {/* Swipe Prompt & Navigation Controls */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-3 px-1">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <span className="inline-block animate-pulse">&larr;</span> Swipe to explore <span className="inline-block animate-pulse">&rarr;</span>
          </span>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-400 text-xs mr-1">
              {activeSlide + 1} / {projects.length}
            </span>
            <button
              onClick={scrollPrev}
              disabled={activeSlide === 0}
              aria-label="Previous Project"
              className="p-1.5 rounded-full bg-white/[0.06] border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/20 text-white cursor-pointer transition-colors"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeSlide === projects.length - 1}
              aria-label="Next Project"
              className="p-1.5 rounded-full bg-white/[0.06] border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/20 text-white cursor-pointer transition-colors"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Swipeable Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4.5 pb-6 pt-1 -mx-4 px-4 select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="snap-center shrink-0 w-[84vw] max-w-[340px] flex flex-col"
            >
              <ProjectCard
                imagesrc={proj.imagesrc}
                heading={proj.heading}
                descr={proj.descr}
                link={proj.link}
                tags={proj.tags}
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeSlide
                  ? "w-7 bg-cyan-400 shadow-[0_0_10px_#00ffff]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          DESKTOP VIEW (>= md): ORIGINAL 2-COLUMN MASONRY SHOWCASE
      ========================================================= */}
      <div className="hidden md:block">
        {/* First Row: Header on Left, FitLab on Right */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="myProject flex flex-col gap-4 p-8 lg:p-10 bg-black/60 rounded-3xl border border-white/[0.05]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              MY PROJECTS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Work that I’ve done for the past 1 year
            </h2>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed mt-2">
              A curated selection of production apps, animated web experiences, and robust full-stack solutions built with modern technology stacks.
            </p>
          </div>

          <ProjectCard
            imagesrc={projects[0].imagesrc}
            heading={projects[0].heading}
            descr={projects[0].descr}
            height="h-auto"
            margin="mt-0"
            link={projects[0].link}
            tags={projects[0].tags}
          />
        </div>

        {/* Second Row: Remaining 6 Projects in 2-Column Staggered Grid */}
        <div className="cards grid grid-cols-2 gap-8 lg:gap-12 mt-12 items-start [&>*:nth-child(even)]:mt-12">
          {projects.slice(1).map((proj, idx) => (
            <ProjectCard
              key={proj.id}
              imagesrc={proj.imagesrc}
              heading={proj.heading}
              descr={proj.descr}
              height="h-auto"
              margin={idx % 2 === 0 ? "-mt-40 lg:-mt-48" : "mt-0"}
              link={proj.link}
              tags={proj.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
