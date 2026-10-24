import { useEffect, useRef, useState } from "react";
import logoImg from "../assets/logo/logo.png";

const links = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    let rafId: number | null = null;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 30;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalDocHeight > 0 ? Math.min(1, Math.max(0, scrollY / totalDocHeight)) : 0;

      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `scaleX(${progress})`;
      }

      const sections = ["intro", "experience", "skills", "project", "input"];
      let matchedSection = "intro";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          matchedSection = sections[i];
          break;
        }
      }
      setActiveSection((prev) => (prev !== matchedSection ? matchedSection : prev));
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateScroll();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full text-white
        transition-all duration-300 ease-out
        ${scrolled
          ? "border-b border-white/10 bg-[#111215]/75 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent bg-transparent"
        }
      `}
    >
      {/* Top glass highlight */}
      {scrolled && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      )}

      <div
        className={`
          mx-auto flex items-center justify-between
          px-10 max-md:px-6 max-sm:px-4
          transition-all duration-300 ease-out
          ${scrolled ? "py-2.5 sm:py-3" : "py-5 sm:py-6"}
        `}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("intro")}
          className="group flex cursor-pointer select-none items-center gap-3"
        >
          <div
            className={`
              relative overflow-hidden rounded-xl ring-1 ring-white/15
              transition-all duration-300 ease-out group-hover:ring-white/40
              ${scrolled
                ? "h-9 w-9 scale-95 sm:h-10 sm:w-10"
                : "h-11 w-11 sm:h-12 sm:w-12"
              }
            `}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="h-full w-full bg-black object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <span
            className={`
              font-bold tracking-tight text-zinc-100 transition-all duration-300
              ${scrolled ? "text-xl max-sm:text-lg" : "text-2xl max-md:text-xl max-sm:text-lg"}
            `}
          >
            Ashir<span className="text-white/50">.</span>
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`nav-link text-sm lg:text-base ${activeSection === id ? "active" : ""
                }`}
            >
              {label}
            </li>
          ))}

          <li>
            <button
              onClick={() => scrollToSection("input")}
              className={`
                inline-flex cursor-pointer items-center justify-center rounded-full
                bg-zinc-100 font-semibold text-zinc-900
                transition-all duration-300 hover:bg-white active:scale-[0.98]
                ${scrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-base"}
              `}
            >
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={() => scrollToSection("input")}
            className="inline-flex cursor-pointer items-center rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 transition hover:bg-white"
          >
            <span className="relative mr-1.5 flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="cursor-pointer rounded-lg p-1.5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll progress */}
      <div
        ref={progressLineRef}
        className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-white/10 via-white/50 to-white will-change-transform transition-opacity duration-300 ease-out ${scrolled ? "opacity-100" : "opacity-0"
          }`}
        style={{ transform: "scaleX(0)" }}
      />

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#111215]/95 px-6 pb-6 pt-3 shadow-[0_20px_35px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-1 text-center">
            {[...links, { id: "input", label: "Contact" }].map(({ id, label }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer rounded-lg py-3 text-base transition-colors ${activeSection === id
                    ? "bg-white/[0.06] font-semibold text-white"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;