import { useEffect, useRef, useState } from "react";
import logoImg from "../assets/logo/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    let rafId: number | null = null;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 30;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      // Direct GPU transform update (scaleX) with zero layout reflow and zero lag
      const totalDocHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalDocHeight > 0
          ? Math.min(1, Math.max(0, scrollY / totalDocHeight))
          : 0;

      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `scaleX(${progress})`;
      }

      // Active section detection with state change check to prevent unnecessary re-renders
      const sections = ["intro", "experience", "skills", "project", "input"];
      let matchedSection = "intro";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            matchedSection = sections[i];
            break;
          }
        }
      }
      setActiveSection((prev) =>
        prev !== matchedSection ? matchedSection : prev
      );
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
        fixed top-0 left-0 w-full z-50 text-white
        transition-all duration-300 ease-out
        ${scrolled
          ? "bg-[#08090e]/80 backdrop-blur-xl backdrop-saturate-150 border-b border-cyan-500/20 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.85),0_1px_15px_rgba(0,255,255,0.08)]"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      {/* Top subtle highlight reflection on glass */}
      {scrolled && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      )}

      {/* Main navigation container */}
      <div
        className={`
          mx-auto flex items-center justify-between
          px-10 max-md:px-6 max-sm:px-4
          transition-all duration-300 ease-out
          ${scrolled ? "py-2.5 sm:py-3" : "py-5 sm:py-6"}
        `}
      >
        {/* Logo with micro-scaling */}
        <div
          onClick={() => scrollToSection("intro")}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div
            className={`
              relative rounded-xl overflow-hidden transition-all duration-300 ease-out
              ${scrolled
                ? "w-9 h-9 sm:w-10 sm:h-10 ring-1 ring-cyan-400/40 shadow-[0_0_15px_rgba(0,255,255,0.25)] group-hover:ring-cyan-300 group-hover:shadow-[0_0_22px_rgba(0,255,255,0.45)] scale-90 sm:scale-95"
                : "w-11 h-11 sm:w-12 sm:h-12 ring-1 ring-white/10 group-hover:ring-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] scale-100"
              }
            `}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="w-full h-full object-cover bg-black transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <span
            className={`
              font-bold tracking-tight transition-all duration-300
              ${scrolled ? "text-xl max-sm:text-lg" : "text-2xl max-md:text-xl max-sm:text-lg"}
              group-hover:text-[#00FFFF]
              group-hover:[text-shadow:0_0_15px_#00FFFF]
            `}
          >
            Ashir<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          <li
            onClick={() => scrollToSection("experience")}
            className={`nav-link text-sm lg:text-base ${activeSection === "experience" ? "active" : ""
              }`}
          >
            Experience
          </li>

          <li
            onClick={() => scrollToSection("skills")}
            className={`nav-link text-sm lg:text-base ${activeSection === "skills" ? "active" : ""
              }`}
          >
            Skills
          </li>

          <li
            onClick={() => scrollToSection("project")}
            className={`nav-link text-sm lg:text-base ${activeSection === "project" ? "active" : ""
              }`}
          >
            Projects
          </li>

          {/* Contact Button */}
          <li>
            <button
              onClick={() => scrollToSection("input")}
              className={`
                relative inline-flex items-center justify-center font-semibold rounded-full
                cursor-pointer overflow-hidden transition-all duration-300
                ${scrolled
                  ? "px-5 py-2 text-sm bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white border border-cyan-400/40 shadow-[0_0_18px_rgba(0,255,255,0.25)] hover:border-cyan-300 hover:shadow-[0_0_24px_rgba(0,255,255,0.5)] hover:text-[#00FFFF] hover:-translate-y-0.5"
                  : "px-6 py-2.5 text-base bg-[#2445b8] text-white hover:bg-[#3156d3] hover:text-[#00FFFF] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:-translate-y-0.5"
                }
              `}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle & quick contact */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => scrollToSection("input")}
            className={`
              inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-full
              transition-all duration-300 cursor-pointer
              ${scrolled
                ? "bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] border border-cyan-400/30 text-white shadow-[0_0_12px_rgba(0,255,255,0.2)]"
                : "bg-[#2445b8] text-white"
              }
            `}
          >
            <span className="relative flex h-1.5 w-1.5 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
            </span>
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dynamic bottom scroll progress bar indicator (GPU-accelerated scaleX) */}
      <div
        ref={progressLineRef}
        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-[#00FFFF] shadow-[0_0_12px_#00FFFF] origin-left pointer-events-none transition-opacity duration-300 ease-out will-change-transform ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "scaleX(0)" }}
      />

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-b border-cyan-500/20 bg-[#08090e]/95 backdrop-blur-2xl shadow-[0_20px_35px_rgba(0,0,0,0.9)] animate-in fade-in duration-200">
          <ul className="flex flex-col gap-3.5 text-center">
            <li
              onClick={() => scrollToSection("experience")}
              className={`py-2 text-base cursor-pointer transition-colors ${activeSection === "experience"
                  ? "text-[#00ffff] font-semibold"
                  : "text-gray-300 hover:text-[#00ffff]"
                }`}
            >
              Experience
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className={`py-2 text-base cursor-pointer transition-colors ${activeSection === "skills"
                  ? "text-[#00ffff] font-semibold"
                  : "text-gray-300 hover:text-[#00ffff]"
                }`}
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection("project")}
              className={`py-2 text-base cursor-pointer transition-colors ${activeSection === "project"
                  ? "text-[#00ffff] font-semibold"
                  : "text-gray-300 hover:text-[#00ffff]"
                }`}
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("input")}
              className={`py-2 text-base cursor-pointer transition-colors ${activeSection === "input"
                  ? "text-[#00ffff] font-semibold"
                  : "text-gray-300 hover:text-[#00ffff]"
                }`}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
