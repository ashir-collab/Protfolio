import { FaHtml5, FaReact, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
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
import { useEffect } from "react";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "orange" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 300,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="SkillContainer grid grid-cols-2 max-md:grid-cols-1 gap-10 text-gray-500 mt-40 max-md:mt-28 w-10/11 mx-auto">
        <div className="skill flex flex-col gap-6 w-[90%] max-md:w-full">
          <div className="text-5xl max-md:text-4xl max-sm:text-3xl font-extrabold text-white">
            Skillset
          </div>
          <div className="font-semibold max-md:text-sm max-sm:text-[10px]">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </div>
        </div>

        <div className="languages m-auto grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-x-12 gap-y-12 max-lg:gap-x-8 max-lg:gap-y-10 max-md:mr-2 w-full place-items-center">
          {skills.map(({ name, icon: Icon, color }, i) => (
            <div
              key={name}
              className="group relative flex flex-col items-center gap-3"
              data-aos="zoom-out"
              data-aos-duration="800"
              data-aos-delay={(i % 4) * 100}
              data-aos-easing="ease-out-cubic"
            >
              {/* glow blob behind icon */}
              <div
                className="absolute top-0 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: color } as React.CSSProperties}
              />

              <Icon
                size={48}
                color={color}
                className="relative z-10 transition-all duration-300 ease-out
                           group-hover:scale-125 group-hover:-translate-y-1
                           drop-shadow-[0_0_0_transparent]
                           group-hover:drop-shadow-[0_0_14px_var(--tw-shadow-color)]"
                style={{ "--tw-shadow-color": color } as React.CSSProperties}
              />

              <span className="relative z-10 text-xs max-sm:text-[10px] font-semibold text-gray-500 group-hover:text-white transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
