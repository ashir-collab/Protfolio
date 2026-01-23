import AOS from 'aos'
import { useEffect } from 'react'

const Experience = () => {

    useEffect(() => {

        AOS.init({
            duration: 300,
            easing: "ease-out-cubic",
            offset: 120,
            once: false
        })

    }, [])

    return (
        <>
            <div className="MainExperienceContainer flex flex-col gap-4 text-white w-[85vw] m-auto mt-70 max-md:mt-40 max-sm:mt-0 max-md:pt-4 ">
                <h1 className="opacity-80 font-bold max-sm:text-sm">WORK EXPERIENCE</h1>
                <div className="text-6xl font-bold max-md:w-10/12 w-10/14  max-md:text-4xl max-lg:text-5xl max-sm:text-3xl">Companies I have worked for in the past.</div>

                <div className="Companies flex max-md:flex-wrap gap-25 mt-12">

                    <div className="C1 flex flex-col gap-6 w-1/3  " data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic">
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl ">01</div>
                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#3cc74e] text-3xl font-bold  max-md:text-2xl max-sm:text-xl">Google, </div>
                            <div className="text-3xl max-md:text-2xl  max-sm:text-xl font-bold">Interaction Designer</div>
                        </div>
                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px] ">I currently am the lead designer on the interaction design team for Google Play.</div>
                    </div>
                    <div className="C2 flex flex-col gap-6 w-1/3" data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-easing="ease-out-cubic">
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl ">02</div>
                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#609bff] text-3xl font-bold max-md:text-2xl max-sm:text-xl">Facebook, </div>
                            <div className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold"> Product Designer</div>
                        </div>
                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px] ">I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</div>
                    </div>
                    <div className="C3 flex flex-col gap-6 w-1/3" data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-easing="ease-out-cubic">
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl ">03</div>
                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#dc5888] text-3xl font-bold max-md:text-2xl max-sm:text-xl">Dribbble,  </div>
                            <div className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold">Graphic Designer</div>
                        </div>
                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px] ">I started my design career with Dribbble. I was incharge of creating illustrations for the platform.</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience
