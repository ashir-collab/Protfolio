import Navbar from "./Navbar"
import Protfolioimg from "../assets/images/Protfolio img.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import "../index.css"


const Intro = () => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            easing: "ease-out-cubic",
        })


    }, [])

    return (
        <>
            <div className="MainBoxContainer flex max-md:h-[75vh] h-screen ">

                <div className="leftbox w-[29vw] h-full ">
                    <div className="Name text-[2.5rem] font-bold text-white max-md:px-5 max-md:text-3xl py-6 px-11">Ashir.D</div>
                    <div className="w-[38vw] mt-5 " data-aos="fade-right"
                        data-aos-duration="400"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic"><img src={Protfolioimg} alt="Img" className="relative  w-[38vw] " /></div>


                </div>
                <div className="rightbox w-[71vw] max-md:h-105 flex flex-col bg-[#181823] ">
                    <Navbar />
                    <div className="content flex flex-col items-start mt-28 ml-6 max-md:ml-0 max-md:w-[120%] p-6 md:p-10 gap-0 md:gap-3 max-lg:mt-15 text-white " data-aos="fade-left"
                        data-aos-duration="600"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">

                        <div className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl  font-extrabold ">I'm Ashir.</div>
                        <div className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl font-extrabold ">A Web</div>
                        <div className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl font-extrabold ">Developer</div>
                        <div className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl font-extrabold opacity-70 ">Based in Pakistan.</div>
                    </div>

                    <div className="w-[80%]  max-md:w-[95%] mt-2 max-lg:mt-0 max-md:mx-auto max-md:text-xs max-sm:text-[10px] z-10 text-white text-[17px] max-lg:text-sm " data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="400"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="true"
                        data-aos-offset="0">
                        <div> I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default Intro
