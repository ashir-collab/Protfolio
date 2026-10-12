import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  number: string;
  company: string;
  highlightColor: string;
  role: string;
  date: string | null;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    number: "01",
    company: "Computerized-ai",
    highlightColor: "#3cc74e",
    role: "Full-Stack Developer",
    date: null,
    description:
      "Developing and maintaining modern web applications using React, Next.js, TypeScript, NestJS, PostgreSQL and other modern web technologies.",
  },
  {
    number: "02",
    company: "Freelance",
    highlightColor: "#609bff",
    role: "Web Developer",
    date: null,
    description:
      "Building responsive and user-focused websites for clients using React, Next.js, Tailwind CSS and TypeScript, with a focus on clean design and performance.",
  },
  {
    number: "03",
    company: "Full-Stack Projects",
    highlightColor: "#dc5888",
    role: "Developer",
    date: null,
    description:
      "Creating full-stack applications with REST APIs, authentication, databases, analytics, third-party integrations and scalable backend architectures.",
  },
];

// Interactive Particle Burst Canvas (matching computerized.ai)
function ParticleCanvas({
  trigger,
  origin = { x: 0.18, y: 0.5 },
  className,
}: {
  trigger: number | string;
  origin?: { x: number; y: number };
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const originX = rect.width * origin.x;
    const originY = rect.height * origin.y;
    const dist = 0.55 * Math.min(rect.width, 520);

    const particles = Array.from({ length: 42 }, () => {
      const angle = (Math.random() - 0.5) * 1.1;
      const speed = dist * (0.55 + 0.45 * Math.random());
      return {
        x: originX + (Math.random() - 0.5) * 24,
        y: originY + (Math.random() - 0.5) * 36,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed * 0.7,
        r: 1.2 + 1.4 * Math.random(),
        born: 220 * Math.random(),
        accent: Math.random() < 0.3,
      };
    });

    const startTime = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, rect.width, rect.height);
      let alive = false;

      for (const p of particles) {
        const age = elapsed - p.born;
        if (age < 0) {
          alive = true;
          continue;
        }
        const progress = age / 1150;
        if (progress >= 1) continue;
        alive = true;

        const ease = easeOutCubic(progress);
        const px = p.x + p.vx * ease;
        const py = p.y + p.vy * ease;
        const alpha =
          (progress < 0.12
            ? progress / 0.12
            : progress > 0.6
              ? 1 - (progress - 0.6) / 0.4
              : 1) * 0.85;

        ctx.beginPath();
        ctx.arc(px, py, p.r * (1 - 0.35 * progress), 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${p.accent ? "34, 211, 238" : "56, 189, 248"
          }, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (alive) {
        animIdRef.current = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, rect.width, rect.height);
      }
    };

    cancelAnimationFrame(animIdRef.current);
    animIdRef.current = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animIdRef.current);
  }, [trigger, origin.x, origin.y]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const numberRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  // ScrollTrigger Setup mirroring computerized.ai
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${85 * experiences.length}%`,
        pin: pin,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.min(
            experiences.length - 1,
            Math.floor(self.progress * experiences.length)
          );
          setActiveIndex((prev) => (prev === index ? prev : index));
        },
      });

      return () => scrollTriggerInstance.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  // Animation on activeIndex change (ClipPath & Scale wipe like computerized.ai)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    }

    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        {
          opacity: 0,
          scale: 0.72,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.55,
          ease: "power3.out",
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: "power3.out",
        }
      );
    }
  }, [activeIndex]);

  const activeExp = experiences[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative z-10 bg-black text-white"
    >
      <div
        ref={pinRef}
        className="relative flex h-screen flex-col justify-center overflow-hidden will-change-transform px-[7.5vw]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[20%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
          <div className="absolute right-[12%] bottom-[15%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_70%)] blur-3xl" />
        </div>

        <div className="container relative flex flex-1 flex-col justify-center py-16 sm:py-20 z-10">

          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
              WORK EXPERIENCE
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl lg:text-5xl">
              My journey as a developer.
            </h2>
          </div>


          <div className="relative mt-8 grid flex-1 grid-cols-1 items-center gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[auto_1fr] lg:gap-20 xl:gap-24">
            <ParticleCanvas
              trigger={activeIndex}
              origin={{ x: 0.2, y: 0.5 }}
              className="pointer-events-none absolute inset-0 h-full w-full z-0"
            />

            <div className="relative h-[6rem] w-full sm:h-[12rem] lg:h-[18rem] lg:w-[26rem] flex items-center select-none z-10">
              <span
                ref={numberRef}
                className="select-none bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400/40 bg-clip-text font-black text-transparent text-[6rem] sm:text-[11rem] lg:text-[16rem] leading-none tracking-tight will-change-transform"
              >
                {activeExp.number}
              </span>
            </div>

            <div className="relative min-h-[14rem] sm:min-h-[12rem] flex flex-col justify-center z-10">
              <div ref={contentRef} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                  EXPERIENCE {activeExp.number}
                </span>
                <h3 className="mt-2 text-3xl font-bold leading-tight sm:mt-3 sm:text-4xl lg:text-5xl">
                  <span style={{ color: activeExp.highlightColor }}>
                    {activeExp.company}
                  </span>
                  <br />
                  {activeExp.role}
                </h3>

                {/* Date (if available) */}
                {activeExp.date && (
                  <div className="mt-3 text-sm font-semibold opacity-70">
                    {activeExp.date}
                  </div>
                )}

                <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:mt-5 sm:text-lg">
                  {activeExp.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start z-10">
            {experiences.map((exp, i) => (
              <div key={exp.number} className="flex items-center gap-2">
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex
                    ? "w-10 bg-gradient-to-r from-sky-400 to-[#00FFFF] shadow-[0_0_10px_#00ffff]"
                    : "w-4 bg-white/20"
                    }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
