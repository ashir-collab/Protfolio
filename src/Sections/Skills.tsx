import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import AOS from 'aos'
import { useEffect } from "react";






const Skills = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 300,
            easing: "ease-out-cubic"
        })

    }, [])

    return (
        <>
            <div className="SkillContainer  grid grid-cols-2 gap-1  text-gray-500 mt-40 max-md:mt-82 w-10/11 mx-auto">
                <div className="skill flex flex-col gap-6 w-[90%]">
                    <div className="text-5xl max-md:text-4xl max-sm:text-3xl font-extrabold text-white">Skillset</div>
                    <div className="font-semibold max-md:text-sm max-sm:text-[10px]" >With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</div>
                </div>
                <div className="languages m-auto grid grid-cols-2 max-sm:grid-cols-1  gap-30 max-lg:gap-20 max-xl:gap-30 max-md:mr-2 w-full">
                    <div className="Html  flex flex-col gap-3 max-md:w-46.25 max-lg:w-48 max-xl:w-57 w-62.5" data-aos="zoom-out" data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">
                        <div className="logo"><FaHtml5 size={45} color="orange" className="hover:transform hover:scale-110 transition-all duration-300" /></div>
                        <div className="desc max-md:text-sm max-sm:text-[10px] md:text-sm">Proficient in semantic HTML5, creating scalable page structures that integrate smoothly with CSS, JavaScript, and modern frameworks while maintaining accessibility standards.</div>
                    </div>
                    <div className="CSS  flex flex-col gap-3 max-md:w-46.25 max-lg:w-48 max-xl:w-57 w-62.5" data-aos="zoom-out" data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">
                        <div className="logo"><RiTailwindCssFill size={45} color="blue" className="hover:transform hover:scale-110 transition-all duration-300" /></div>
                        <div className="desc max-md:text-sm max-sm:text-[10px] md:text-sm">Utility-first styling for building responsive, consistent interfaces quickly while maintaining clean design systems.</div>
                    </div>
                    <div className="JavaScript flex flex-col gap-3 max-md:w-46.25 max-lg:w-48 max-xl:w-57 w-62.5" data-aos="zoom-out" data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">
                        <div className="logo"><IoLogoJavascript size={45} color="yellow" className="hover:transform hover:scale-110 transition-all duration-300" /></div>
                        <div className="desc max-md:text-sm max-sm:text-[10px] md:text-sm">Interactive, efficient functionality focused on usability, performance, and real-world problem solving.</div>
                    </div>
                    <div className="ReactJs flex flex-col gap-3 max-md:w-46.25 max-lg:w-48 max-xl:w-57 w-62.5" data-aos="zoom-out" data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">
                        <div className="logo"><FaReact size={45} color="aqua" className="hover:transform hover:scale-110 transition-all duration-300" /></div>
                        <div className="desc max-md:text-sm max-sm:text-[10px] md:text-sm">Component-based development for scalable, dynamic user interfaces with a focus on state management and reusability.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
