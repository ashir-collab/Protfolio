import AOS from 'aos'
import { useEffect } from 'react'

const ProjectCard = ({
    imagesrc,
    heading,
    descr,
    height,
    margin,
}) => {

    useEffect(() => {
        AOS.init({
            duration: 300,
            once: false,
            easing: "ease-out-cubic",
        })
    }, [])

    return (
        <>
            <div className="container transition-all duration-300 hover:transform hover:scale-105">

                <div className={` ${height} ${margin} CardContainer flex flex-col text-white gap-2 w-9/12 max-md:w-full  bg-[#181823]`} data-aos="zoom-out"
                    data-aos-duration="300"
                    data-aos-offset="150">
                    <div> <img src={imagesrc} alt="" className=" w-full " /></div>
                    <div className="p-3 font-bold text-xl max-sm:text-[16px] ">{heading}</div>
                    <div className=" px-4 pb-4 opacity-70 text-sm max-md:text-xs max-sm:text-[10px]">{descr}</div>

                </div>
            </div>
        </>
    )
}

export default ProjectCard
