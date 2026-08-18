import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const linkedinLink = import.meta.env.VITE_LINKDIN_LINK;
  const githubLink = import.meta.env.VITE_GITHUB_LINK;
  return (
    <footer className="bg-[#181823] text-white mt-40 px-8 md:px-16 lg:px-24 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ashir<span className="text-[#00FFFF]">.</span>D
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-6 max-w-sm">
              Full-Stack Developer building modern, scalable and user-focused
              web applications.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full
                                bg-white/5 border border-white/10
                                hover:bg-[#00FFFF]/10 hover:border-[#00FFFF]
                                hover:text-[#00FFFF] transition-all duration-300"
              >
                <FaTwitter size={17} />
              </a>

              <a
                href={linkedinLink}
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full
                                bg-white/5 border border-white/10
                                hover:bg-[#00FFFF]/10 hover:border-[#00FFFF]
                                hover:text-[#00FFFF] transition-all duration-300"
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href={githubLink}
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full
                                bg-white/5 border border-white/10
                                hover:bg-[#00FFFF]/10 hover:border-[#00FFFF]
                                hover:text-[#00FFFF] transition-all duration-300"
              >
                <FaGithub size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-5 text-sm">
              <p
                onClick={() => scrollToSection("intro")}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300"
              >
                Home
              </p>

              <p
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300"
              >
                Experience
              </p>

              <p
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300"
              >
                Skills
              </p>

              <p
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300"
              >
                Projects
              </p>

              <p
                onClick={() => scrollToSection("input")}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300"
              >
                Contact
              </p>

              
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5 max-w-xs">
              Have a project in mind or want to work together? Feel free to get
              in touch.
            </p>

            <p
              onClick={() => scrollToSection("input")}
              className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer
                            text-[#00FFFF] hover:gap-3 transition-all duration-300"
            >
              Get in touch
              <span>→</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6">
          <div
            className="flex flex-col md:flex-row justify-between
                    items-center gap-3 text-xs md:text-sm text-gray-500"
          >
            <p>© {new Date().getFullYear()} Ashir.D. All rights reserved.</p>

            <p>
              Designed & Built with
              <span className="text-[#00FFFF] mx-1">♥</span>
              by Ashir
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
