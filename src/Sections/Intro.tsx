import Protfolioimg from "../assets/images/Protfolio-img.jpeg";
import resume from "../assets/resume/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import "../index.css";

const technologies = ["React", "Next.js", "TypeScript", "NestJS", "Tailwind"];

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#26272c] via-[#111215] to-black text-white">
      {/* Soft overhead light */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Silver aurora */}
      <div className="aurora pointer-events-none absolute -left-32 top-[10%] -z-10 h-[420px] w-[420px] rounded-full bg-zinc-300/10 blur-[130px]" />
      <div className="aurora-slow pointer-events-none absolute -right-24 -top-24 -z-10 h-[380px] w-[380px] rounded-full bg-slate-200/10 blur-[130px]" />

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-28 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-10">
        {/* LEFT: portrait */}
        <div
          className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="relative">
            <div className="ring-wrap">
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[28px] bg-[#16171b]">
                <img
                  src={Protfolioimg}
                  alt="Muhammad Ashir"
                  className="h-full w-full object-cover object-top saturate-[0.9] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-transparent" />

                {/* info chip */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm text-zinc-200">
                    <IoLocationSharp className="h-4 w-4 text-zinc-400" />
                    Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available
                  </div>
                </div>
              </div>
            </div>

            {/* Floating code card */}
            <div className="animate-float absolute -right-3 top-8 z-20 hidden w-[210px] rounded-2xl border border-white/10 bg-[#16171b]/85 p-4 font-mono text-[11px] leading-relaxed shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:block lg:-right-10">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <p>
                <span className="text-zinc-400">const</span>{" "}
                <span className="text-zinc-100">dev</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-zinc-400">{"{"}</span>
              </p>
              <p className="pl-3">
                <span className="text-zinc-300">role</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-400">"Full-Stack"</span>,
              </p>
              <p className="pl-3">
                <span className="text-zinc-300">stack</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-400">"React · Nest"</span>,
              </p>
              <p className="text-zinc-400">{"}"}</p>
            </div>

            {/* Floating badge */}
            <div className="animate-float-delayed absolute -left-3 top-1/2 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-[#16171b]/85 px-3.5 py-2 text-xs text-zinc-200 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex lg:-left-8">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
              AI-powered features
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col items-start gap-6" data-aos="fade-left" data-aos-delay="150">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
            Full-Stack Developer
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Hi, I'm <span className="text-white/50">Ashir.</span>
            <span className="mt-2 block text-zinc-100">
              I build web experiences that{" "}
              <span className="relative whitespace-nowrap text-white/50">
                make ideas work.
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-white/50 to-transparent" />
              </span>
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 lg:text-lg">
            I turn ideas into{" "}
            <span className="text-zinc-100">responsive web applications</span>, combining{" "}
            <span className="text-zinc-100">thoughtful design</span>, reliable development and{" "}
            <span className="text-zinc-100">AI-powered features</span> to solve real-world
            problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection("project")}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white active:scale-[0.98]"
            >
              Explore My Work
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("input")}
              className="cursor-pointer rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10 active:scale-[0.98]"
            >
              Get in Touch
            </button>

            <a
              href={resume}
              download="Muhammad-Ashir-Resume.pdf"
              className="inline-flex cursor-pointer items-center gap-2 px-3 py-3 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-4 hidden w-full items-center gap-3 border-t border-white/10 pt-6 sm:flex">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;