import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import resume from "../assets/resume/Resume.pdf";

const navLinks = [
  { id: "intro", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "input", label: "Contact" },
];

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkedinLink = import.meta.env.VITE_LINKDIN_LINK;
  const githubLink = import.meta.env.VITE_GITHUB_LINK;

  return (
    <footer className="relative isolate mt-28 overflow-hidden bg-gradient-to-b from-black via-[#111215] to-[#26272c] px-5 py-10 text-white sm:mt-36 sm:px-8 sm:py-14 md:mt-40 md:px-16 lg:px-24">
      {/* Soft light rising from the bottom edge */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(255,255,255,0.07),transparent_70%)]" />

      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
              Ashir<span className="text-white/50">.</span>D
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-400 md:text-base">
              Full-Stack Developer building modern, scalable and user-focused
              web applications.
            </p>

            {/* Socials */}
            <div className="mt-2 flex items-center gap-3">
              <a
                href={resume}
                title="Download Resume"
                download="Muhammad-Ashir-Resume.pdf"
                aria-label="Download Resume"
                className={socialClass}
              >
                <FaFileDownload size={17} />
              </a>

              <a
                href={linkedinLink}
                title="Open LinkedIn Profile"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href={githubLink}
                title="Open GitHub Profile"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <FaGithub size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-sm">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="w-fit cursor-pointer text-left text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Let's Connect
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-zinc-400">
              Have a project in mind or want to work together? Feel free to get
              in touch.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("input")}
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:gap-3 hover:text-white"
            >
              Get in touch
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-400 md:flex-row md:text-sm">
            <p>© {new Date().getFullYear()} Ashir.D. All rights reserved.</p>

            <p>
              Designed &amp; Built
              by Ashir
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;