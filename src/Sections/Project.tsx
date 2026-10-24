import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
// import Nlogo from "../assets/images/N logo.png";
import Spotifylogo from "../assets/images/Spotify logo.png";
// import Kfclogo from "../assets/images/Kfc logo.png";
import FitLablogo from "../assets/images/fitlab_logo_v3.png";
import ComputerizedLogo from "../assets/images/computerized_logo_v4.png";
import QalbSynclogo from "../assets/images/qalbsync-logo.png";
import TodoApplogo from "../assets/images/TaskMaster-logo.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AUTO_DELAY = 2000; // time between auto slides
const RESUME_DELAY = 4000; // idle time after user interaction before auto resumes

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
    // {
    //   id: "netflix",
    //   imagesrc: Nlogo,
    //   heading: "Netflix Clone",
    //   descr:
    //     "A front-end clone inspired by Netflix, built to replicate a real streaming platform experience. Emphasis was placed on responsive layouts, reusable components, and clean state-driven UI behavior across devices.",
    //   tags: ["React", "Tailwind CSS", "REST API", "Responsive"],
    // },
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
    // {
    //   id: "kfc",
    //   imagesrc: Kfclogo,
    //   heading: "KFC Clone",
    //   descr:
    //     "A detailed recreation of the KFC website, concentrating on visual accuracy, layout hierarchy, and responsive design. This project demonstrates the ability to translate an established brand’s identity into a functional, well-structured web interface.",
    //   tags: ["React", "CSS Modules", "Responsive Design"],
    // },
  ];

  // ---------- Mobile carousel state ----------
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Refs so the autoplay interval always reads fresh values
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const inViewRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    const slide = container?.children[index] as HTMLElement | undefined;
    if (!container || !slide) return;

    // Center the slide (matches snap-center)
    const left = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  };

  // Figure out which slide is closest to the center of the track
  const handleMobileScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    if (closest !== activeRef.current) {
      activeRef.current = closest;
      setActiveSlide(closest);
    }
  };

  // ---------- Autoplay controls ----------
  const pauseAutoplay = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeAutoplay = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  // Any manual action (arrows, dots) pauses autoplay briefly
  const manual = (action: () => void) => {
    pauseAutoplay();
    action();
    resumeAutoplay();
  };

  const scrollPrev = () => scrollToSlide(Math.max(0, activeRef.current - 1));
  const scrollNext = () =>
    scrollToSlide(Math.min(projects.length - 1, activeRef.current + 1));

  // Only auto-advance while the carousel is actually on screen
  useEffect(() => {
    const el = mobileWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The autoplay loop
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      if (pausedRef.current || !inViewRef.current || document.hidden) return;
      const next = (activeRef.current + 1) % projects.length; // loops back to the first
      scrollToSlide(next);
    }, AUTO_DELAY);

    return () => {
      clearInterval(id);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative ProjectContainer mt-36 sm:mt-44 w-11/12 mx-auto text-white">
      {/* Background ambient lighting (silver, subtle) */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-zinc-300/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-slate-200/[0.04] blur-[120px]" />

      {/* =========================================================
          MOBILE VIEW (< md): AUTO-PLAYING SWIPE CAROUSEL
      ========================================================= */}
      <div ref={mobileWrapRef} className="block md:hidden">
        {/* Mobile Section Header */}
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            MY PROJECTS
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-100 leading-tight">
            Work that I’ve done for the past 1 year
          </h2>
        </div>

        {/* Swipe Prompt & Navigation Controls */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="inline-block animate-pulse">&larr;</span> Swipe to explore{" "}
            <span className="inline-block animate-pulse">&rarr;</span>
          </span>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-400 text-xs mr-1">
              {activeSlide + 1} / {projects.length}
            </span>
            <button
              onClick={() => manual(scrollPrev)}
              disabled={activeSlide === 0}
              aria-label="Previous Project"
              className="p-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white cursor-pointer transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.06] disabled:hover:text-white disabled:hover:border-white/10"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={() => manual(scrollNext)}
              disabled={activeSlide === projects.length - 1}
              aria-label="Next Project"
              className="p-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white cursor-pointer transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.06] disabled:hover:text-white disabled:hover:border-white/10"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Swipeable Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
          onTouchCancel={resumeAutoplay}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          className="relative flex overflow-x-auto snap-x snap-mandatory gap-4.5 pb-6 pt-1 -mx-4 px-4 select-none scroll-smooth"
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
        <div className="mt-2 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => manual(() => scrollToSlide(i))}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeSlide}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${i === activeSlide
                ? "w-7 bg-gradient-to-r from-zinc-400 to-white"
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              MY PROJECTS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-zinc-100">
              Work that I’ve done for the past 1 year
            </h2>
            <p className="text-zinc-400 text-sm lg:text-base leading-relaxed mt-2">
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