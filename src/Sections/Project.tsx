import ProjectCard from "./ProjectCard";
// import coinview from "../assets/images/coinview.png";
import Nlogo from "../assets/images/N logo.png";
import Spotifylogo from "../assets/images/Spotify logo.png";
import Kfclogo from "../assets/images/Kfc logo.png";
import FitLablogo from "../assets/images/fitlab_logo_v3.png";
import ComputerizedLogo from "../assets/images/computerized_logo_v4.png";
import QalbSynclogo from "../assets/images/qalbsync-logo.png";
import TodoApplogo from "../assets/images/TaskMaster-logo.jpg";

const Project = () => {
  const fitlabLink = import.meta.env.VITE_FITLAB_LINK;
  const qalbSyncLink = import.meta.env.VITE_QALB_SYNC_LINK;
  const computerizedAiLink = import.meta.env.VITE_COMPUTERIZED_AI_LINK;
  return (
    <div className="ProjectContainer mt-40 w-11/12 mx-auto text-white">
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="myProject flex flex-col gap-4 bg-black p-10 max-md:p-0">
          <div className="opacity-70 text-sm tracking-widest">MY PROJECTS</div>
          <div className="text-5xl max-md:text-2xl max-lg:text-3xl max-sm:text-[19px] font-extrabold leading-tight">
            Work that I’ve done for the past 1 year
          </div>
        </div>

        <ProjectCard
          imagesrc={FitLablogo}
          heading={"FitLab — Gym Management App"}
          descr={
            "A full-stack fitness and gym management platform with a NestJS backend and React/TypeScript frontend. Includes role-based QR code check-ins, member goal tracking, and invoice generation with PDF export."
          }
          height={"h-auto"}
          margin={"mt-0"}
          link={fitlabLink}
        />
      </div>

      <div className="cards grid grid-cols-2 gap-6 mt-10 items-start [&>*:nth-child(even)]:mt-10 max-md:[&>*:nth-child(even)]:mt-0">
        <ProjectCard
          imagesrc={ComputerizedLogo}
          heading={"Computerized.ai — Website Revamp"}
          descr={
            "A premium 3D animated website rebuild for an AI software agency, built with Next.js and React Three Fiber. Features a cinematic loader, GSAP-driven scroll animations, and an ink-black and amber-gold design system."
          }
          height={"h-auto"}
          margin={"-mt-48"}
          link={computerizedAiLink}
        />

        <ProjectCard
          imagesrc={Nlogo}
          heading={"Netflix Clone"}
          descr={
            "A front-end clone inspired by Netflix, built to replicate a real streaming platform experience. Emphasis was placed on responsive layouts, reusable components, and clean state-driven UI behavior across devices."
          }
          height={"h-auto"}
          margin={"mt-0"}
        />

        <ProjectCard
          imagesrc={QalbSynclogo}
          heading={"QalbSync — Religious App"}
          descr={
            "A faith-focused application designed to support daily religious practice and spiritual habit tracking. Built with an emphasis on calm, distraction-free UI and reliable, accessible functionality."
          }
          height={"h-auto"}
          margin={"-mt-48"}
          link={qalbSyncLink}
        />

        <ProjectCard
          imagesrc={TodoApplogo}
          heading={"Todo Master — Task Management App"}
          descr={
            "A clean, minimal task management app focused on fast interactions and clear organization. Built with reusable components and straightforward state management for a smooth day-to-day workflow."
          }
          height={"h-auto"}
          margin={"mt-0"}
        />

        <ProjectCard
          imagesrc={Spotifylogo}
          heading={"Spotify Clone"}
          descr={
            "A Spotify-style music streaming interface focused on modern UI patterns and seamless navigation. Features dynamic layouts, interactive components, and a scalable design structure that reflects real product-level frontend development."
          }
          height={"h-auto"}
          margin={"-mt-48"}
        />

        {/* <ProjectCard
          imagesrc={coinview}
          heading={"Coin view Mobile App Design"}
          descr={
            "A mobile app design concept focused on simplifying cryptocurrency tracking and market insights. The project explores clean visual hierarchy, intuitive navigation, and a modern interface tailored for fast, data-heavy interactions."
          }
          height={"h-auto"}
          margin={"mt-5"}
        /> */}

        <ProjectCard
          imagesrc={Kfclogo}
          heading={"KFC Clone"}
          descr={
            "A detailed recreation of the KFC website, concentrating on visual accuracy, layout hierarchy, and responsive design. This project demonstrates the ability to translate an established brand’s identity into a functional, well-structured web interface."
          }
          height={"h-auto"}
          margin={"mt-0"}
        />
      </div>
    </div>
  );
};

export default Project;