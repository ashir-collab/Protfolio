import ProjectCard from "./ProjectCard";
import coinview from "../assets/images/coinview.png"
import Nlogo from "../assets/images/N logo.png"
import Spotifylogo from "../assets/images/Spotify logo.png"
import Kfclogo from "../assets/images/Kfc logo.png"


const Project = () => {
    return (
        <div className="ProjectContainer mt-40 w-11/12 mx-auto text-white">

            <div className="grid grid-cols-2 gap-6 items-start">

                <div className="myProject flex flex-col gap-4 bg-black p-10 max-md:p-0">
                    <div className="opacity-70 text-sm tracking-widest">
                        MY PROJECTS
                    </div>
                    <div className="text-5xl max-md:text-2xl max-lg:text-3xl max-sm:text-[19px] font-extrabold leading-tight">
                        Work that I’ve done for the past 8 years
                    </div>
                </div>

                <ProjectCard imagesrc={Nlogo} heading={"Netflix Clone"} descr={"A front-end clone inspired by Netflix, built to replicate a real streaming platform experience. Emphasis was placed on responsive layouts, reusable components, and clean state-driven UI behavior across devices."} height={"h-auto"} margin={"mt-0"} />
            </div>

            <div className="cards grid grid-cols-2 gap-6 mt-10">

                <ProjectCard imagesrc={Spotifylogo} heading={"Spotify Clone"} descr={"A Spotify-style music streaming interface focused on modern UI patterns and seamless navigation. Features dynamic layouts, interactive components, and a scalable design structure that reflects real product-level frontend development."} height={"h-auto"} margin={"mt-[-100px]"} />

                <ProjectCard imagesrc={coinview} heading={"Coin view Mobile App Design"} descr={"A mobile app design concept focused on simplifying cryptocurrency tracking and market insights. The project explores clean visual hierarchy, intuitive navigation, and a modern interface tailored for fast, data-heavy interactions."} height={"h-auto"} margin={"mt-5"} />

                <ProjectCard imagesrc={Kfclogo} heading={"KFC Clone"} descr={"A detailed recreation of the KFC website, concentrating on visual accuracy, layout hierarchy, and responsive design. This project demonstrates the ability to translate an established brand’s identity into a functional, well-structured web interface."} height={"h-auto"} margin={"mt-[-100px]"} />

            </div>

        </div>
    );
}

export default Project;
