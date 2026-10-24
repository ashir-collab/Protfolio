import AOS from "aos";
import { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  imagesrc: string;
  heading: string;
  descr: string;
  height?: string;
  margin?: string;
  link?: string;
  tags?: string[];
}

const ProjectCard = ({
  imagesrc,
  heading,
  descr,
  height = "h-auto",
  margin = "",
  link,
  tags = [],
}: ProjectCardProps) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const cardContent = (
    <div
      className={`
        ${height} ${margin}
        CardContainer group relative flex flex-col w-full h-full
        rounded-2xl overflow-hidden
        bg-[#0c0d15] border border-white/[0.08]
        transition-all duration-500 ease-out
        hover:border-white/25 hover:-translate-y-2
        hover:shadow-[0_24px_40px_-18px_rgba(0,0,0,0.95)]
      `}
      data-aos="fade-up"
      data-aos-duration="400"
    >
      {/* Top highlight line: faint at rest, brighter on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/60 transition-all duration-500 z-20 pointer-events-none" />

      {/* Soft overhead light that fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

      {/* Project Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60 select-none">
        <img
          src={imagesrc}
          alt={heading}
          className="w-full h-full object-cover saturate-[0.85] transition-all duration-700 ease-out group-hover:scale-105 group-hover:saturate-100"
          loading="lazy"
        />
        {/* Soft gradient bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15] via-transparent to-transparent opacity-60" />
      </div>

      {/* Technology Tags */}
      {tags.length > 0 && (
        <div className="px-4 sm:px-5 pt-3.5 flex flex-wrap gap-1.5 z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Heading & External Link Icon */}
      <div className="px-4 sm:px-5 pt-2.5 flex items-start justify-between gap-3 z-10">
        <h3 className="font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-white transition-colors duration-300 leading-snug">
          {heading}
        </h3>

        {link && (
          <div className="shrink-0 p-1.5 rounded-lg bg-white/[0.04] border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-300">
            <FiExternalLink
              size={16}
              className="text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300"
              aria-label="View project"
            />
          </div>
        )}
      </div>

      {/* Description */}
      <p className="px-4 sm:px-5 pb-5 pt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed flex-1 z-10">
        {descr}
      </p>

      {/* View Demo CTA Link */}
      {link && (
        <div className="px-4 sm:px-5 pb-4 -mt-2 z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300">
            View Live Demo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      )}
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${heading} project`}
      className="block h-full cursor-pointer select-none"
    >
      {cardContent}
    </a>
  ) : (
    <div className="h-full select-none">{cardContent}</div>
  );
};

export default ProjectCard;