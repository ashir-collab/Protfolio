import Globe from "../assets/images/Globe.png"

const Aboutme = () => {
    return (
        <>
            <div className="AboutMeContainer flex w-full max-md:flex-col mt-40 max-md:h-[25vh] h-screen items-stretch">
                <div className="Content w-1/2 flex flex-col justify-between gap-12 p-10 max-md:p-3 max-md:gap-6 max-sm:p-1 max-sm:gap-3   bg-[#fff3e4] max-md:w-full ">
                    <div className="text-6xl font-extrabold px-10 max-lg:text-5xl max-md:text-4xl max-sm:text-xl">Philosophy & Values</div>
                    <div className="px-10 opacity-70 text-[17px] max-md:text-sm max-sm:text-[10px] max-md:px-1 mx-auto w-10/12 max-md:h-[10vh] overflow-clip "> I see the web as a tool for clarity and access. Good development removes friction, respects the user’s time, and lets ideas speak for themselves. My approach is rooted in authenticity—writing honest, maintainable code; creativity—finding smart, flexible solutions to complex problems; and hospitality—building interfaces that feel welcoming, intuitive, and easy to use for everyone.</div>

                    <div className="font-light self-start ml-10 mt-5 max-md:mt-3 max-sm:mt-0 mb-4"><button className="border-b w-fit pb-2 max-sm:pb-0  opacity-80 max-md:text-sm max-sm:text-[10px]">More about me</button></div>
                </div>
                <div className="Picture  w-1/2 max-md:w-full h-full">
                    <img src={Globe} alt="Globe" className=" w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default Aboutme
