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
            <div className="MainExperienceContainer flex flex-col gap-4 text-white w-[85vw] m-auto mt-70 max-md:mt-40 max-sm:mt-0 max-md:pt-4">

                <h1 className="opacity-80 font-bold max-sm:text-sm">
                    WORK EXPERIENCE
                </h1>

                <div className="text-6xl font-bold max-md:w-10/12 w-10/14 max-md:text-4xl max-lg:text-5xl max-sm:text-3xl">
                    My journey as a developer.
                </div>

                <div className="Companies flex max-md:flex-wrap gap-25 mt-12">

                    {/* Experience 01 */}
                    <div
                        className="C1 flex flex-col gap-6 w-1/3"
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl">
                            01
                        </div>

                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#3cc74e] text-3xl font-bold max-md:text-2xl max-sm:text-xl">
                                Computerized-ai,
                            </div>

                            <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold">
                                Full-Stack Developer
                            </div>
                        </div>

                        <div className="text-sm opacity-70 font-semibold">
                            July 2024 – Present
                        </div>

                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px]">
                            Developing and maintaining modern web applications using
                            React, Next.js, TypeScript, NestJS, PostgreSQL and other
                            modern web technologies.
                        </div>
                    </div>


                    {/* Experience 02 */}
                    <div
                        className="C2 flex flex-col gap-6 w-1/3"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl">
                            02
                        </div>

                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#609bff] text-3xl font-bold max-md:text-2xl max-sm:text-xl">
                                Freelance,
                            </div>

                            <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold">
                                Web Developer
                            </div>
                        </div>

                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px]">
                            Building responsive and user-focused websites for clients
                            using React, Next.js, Tailwind CSS and TypeScript, with a
                            focus on clean design and performance.
                        </div>
                    </div>


                    {/* Experience 03 */}
                    <div
                        className="C3 flex flex-col gap-6 w-1/3"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        data-aos-easing="ease-out-cubic"
                    >
                        <div className="FirmNo text-7xl opacity-80 max-md:text-6xl max-sm:text-5xl">
                            03
                        </div>

                        <div className="FirmName flex flex-wrap gap-1.5">
                            <div className="text-[#dc5888] text-3xl font-bold max-md:text-2xl max-sm:text-xl">
                                Full-Stack Projects,
                            </div>

                            <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold">
                                Developer
                            </div>
                        </div>

                        <div className="FirmDesc font-semibold text-sm max-md:text-[10px]">
                            Creating full-stack applications with REST APIs,
                            authentication, databases, analytics, third-party
                            integrations and scalable backend architectures.
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience