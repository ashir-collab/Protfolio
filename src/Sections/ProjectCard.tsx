import AOS from "aos";
import { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  imagesrc,
  heading,
  descr,
  height,
  margin,
  link,
}: {
  imagesrc: string;
  heading: string;
  descr: string;
  height: string;
  margin: string;
  link?: string;
}) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const cardContent = (
    <div
      className={`${height} ${margin} CardContainer flex flex-col text-white gap-2 w-9/12 max-md:w-full bg-[#181823]`}
      data-aos="zoom-out"
      data-aos-duration="300"
      data-aos-offset="150"
    >
      {/* Project Image */}
      <div className="w-full aspect-[16/10] overflow-hidden">
        <img
          src={imagesrc}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Heading + External Link Icon */}
      <div className="px-3 pt-3 flex items-center justify-between gap-3">
        <div className="font-bold text-xl max-sm:text-[16px]">{heading}</div>

        {link && (
          <FiExternalLink
            size={18}
            className="shrink-0 text-gray-400 group-hover:text-[#00FFFF] transition-colors duration-300"
            aria-label="View project"
          />
        )}
      </div>

      {/* Project Description */}
      <div className="px-4 pb-4 opacity-70 text-sm max-md:text-xs max-sm:text-[10px]">
        {descr}
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${heading} project`}
      className="container group transition-all duration-300 hover:scale-105 block"
    >
      {cardContent}
    </a>
  ) : (
    <div className="container transition-all duration-300 hover:scale-105">
      {cardContent}
    </div>
  );
};

export default ProjectCard;
