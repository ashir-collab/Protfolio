import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNestjs,
  SiTypescript,
  SiMongodb,
  SiThreedotjs,
  SiRedux,
  SiGraphql,
  SiVercel,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import AOS from "aos";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
  category: "Frontend" | "Backend" | "Tools & DevOps";
}

const skills: SkillItem[] = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8", category: "Frontend" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF", category: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  { name: "Three.js", icon: SiThreedotjs, color: "#E2E8F0", category: "Frontend" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "Tools & DevOps" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E", category: "Tools & DevOps" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "Tools & DevOps" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Tools & DevOps" },
];

const categories = ["All", "Frontend", "Backend", "Tools & DevOps"] as const;
type CategoryType = (typeof categories)[number];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 350,
      easing: "ease-out-cubic",
    });
  }, []);

  // Reset expanded state whenever category filter changes
  useEffect(() => {
    setShowAllMobile(false);
  }, [selectedCategory]);

  const handleToggleExpand = () => {
    setShowAllMobile((prev) => {
      const next = !prev;
      setTimeout(() => {
        AOS.refresh();
      }, 100);
      return next;
    });
  };

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section className="relative mt-36 sm:mt-44 w-11/12 mx-auto text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* =========================================================
            LEFT COLUMN: Heading, Description & Stats Badges
        ========================================================= */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              SKILLSET & EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Modern Tech Stack
            </h2>
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Proficient across full-stack development, modern frontend ecosystems, API architectures, and scalable cloud deployments. Ready to tackle end-to-end software challenges with clean, robust code.
          </p>

          {/* Quick Highlight Stats Pills */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">16+</div>
              <div className="text-xs text-gray-400 mt-0.5">Core Technologies</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8]">100%</div>
              <div className="text-xs text-gray-400 mt-0.5">Modern Standards</div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer
                  ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,255,255,0.3)] scale-105"
                      : "bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.09]"
                  }
                `}
              >
                {cat}
                {cat === "All"
                  ? ` (${skills.length})`
                  : ` (${skills.filter((s) => s.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: Animated Glassmorphic Skills Grid
        ========================================================= */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {filteredSkills.map(({ name, icon: Icon, color, category }, i) => {
              const isHiddenOnSmall = i >= 8 && !showAllMobile;

              return (
                <div
                  key={name}
                  className={`
                    ${isHiddenOnSmall ? "hidden sm:flex" : "flex"}
                    group relative flex-col items-center justify-center p-5 sm:p-6
                    rounded-2xl bg-[#0c0d16]/80 border border-white/[0.08]
                    backdrop-blur-md cursor-pointer select-none
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:border-[var(--glow-color)]/60
                    hover:shadow-[0_12px_30px_-5px_var(--glow-color)]
                    overflow-hidden
                  `}
                  style={
                    {
                      "--glow-color": `${color}55`,
                    } as React.CSSProperties
                  }
                  data-aos="fade-up"
                  data-aos-duration="350"
                  data-aos-delay={(i % 4) * 50}
                >
                  {/* Radial Glow Blob Behind Icon on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: color }}
                  />

                  {/* Subtle Top Accent Highlight on Hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    }}
                  />

                  {/* Icon with Hover Scale & Glow */}
                  <div className="relative z-10 my-1 transition-transform duration-300 ease-out group-hover:scale-115 group-hover:-translate-y-1">
                    <Icon
                      size={46}
                      color={color}
                      className="drop-shadow-[0_0_0_transparent] group-hover:drop-shadow-[0_0_14px_var(--glow-color)] transition-all duration-300"
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="relative z-10 text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 mt-2 text-center">
                    {name}
                  </span>

                  {/* Category Micro-Badge */}
                  <span className="relative z-10 text-[9px] text-gray-500 group-hover:text-cyan-300/80 transition-colors duration-300 mt-0.5">
                    {category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile "Load More" / "Show Less" Button */}
          {filteredSkills.length > 8 && (
            <div className="sm:hidden flex justify-center mt-6">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="
                  group relative inline-flex items-center gap-2.5 px-6 py-2.5
                  rounded-full text-xs font-semibold tracking-wide
                  bg-white/[0.04] hover:bg-white/[0.08]
                  border border-cyan-500/30 hover:border-cyan-400/70
                  text-cyan-300 hover:text-white
                  shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
                  backdrop-blur-md transition-all duration-300 ease-out
                  active:scale-95 cursor-pointer
                "
              >
                <span>{showAllMobile ? "Show Less" : "Load More"}</span>
                <span className="p-1 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 text-cyan-400 transition-colors duration-300">
                  {showAllMobile ? (
                    <FaChevronUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  ) : (
                    <FaChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
