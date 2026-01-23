

const Navbar = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <nav className="text-white flex  justify-end items-center mr-13 max-md:mr-6 max-sm:mr-0 ">
                <ul className="list-none flex items-center text-[17px] max-md:text-sm max-sm:text-[10px] max-sm:gap-2 gap-8">
                    <li onClick={() => scrollToSection("experience")} className="opacity-80  hover:text-[#00FFFF] hover:cursor-pointer">Experience</li>
                    <li onClick={() => scrollToSection("skills")} className="opacity-80  hover:text-[#00FFFF] hover:cursor-pointer">Skills</li>
                    <li onClick={() => scrollToSection("project")} className="opacity-80  hover:text-[#00FFFF] hover:cursor-pointer">Project</li>
                    <li onClick={() => scrollToSection("input")} className="opacity-80  hover:text-[#00FFFF] hover:cursor-pointer">Contact </li>
                    <li onClick={() => scrollToSection("intro")} className="bg-blue-800 max-md:p-6 max-sm:p-4 p-8 font-bold hover:text-[#00FFFF] hover:cursor-pointer">Home</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar 
