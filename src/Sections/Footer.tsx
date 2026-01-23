import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <>
            <div className="FooterContainer bg-[#181823] grid grid-cols-2 w-screen h-[40vh] mt-40 text-white p-5">

                <div className="flex flex-col gap-2">
                    <div className="Name  text-[3rem] max-lg:text-4xl max-md:text-3xl max-md:px-2 font-bold text-white pt-6 px-11">Ashir.D</div>
                    <ul className="flex justify-center items-center w-[30%] max-md:w-[40%] max-sm:w-[50%] gap-3 ">
                        <a href=""><FaTwitter size={18} color="#26a7de" /></a>
                        <a href=""><FaLinkedin size={18} color="blue" /></a>
                        <a href=""><FaGithub size={18} color="purple" /></a>
                    </ul>
                </div>
                <div className="links mt-10 grid grid-cols-2 gap-3 max-md:text-xs">
                    <div className="grid1">
                        <div className="hover:text-[#00FFFF] cursor-pointer ">Home</div>
                        <div className="hover:text-[#00FFFF] cursor-pointer mt-4">About</div>
                        <div className="hover:text-[#00FFFF] cursor-pointer mt-4">Work</div>
                        <div className="hover:text-[#00FFFF] cursor-pointer mt-4">Process</div>

                    </div>
                    <div className="grid2">
                        <div className="hover:text-[#00FFFF] cursor-pointer ">Store</div>
                        <div className="hover:text-[#00FFFF] cursor-pointer mt-4">Blog</div>
                        <div className="hover:text-[#00FFFF] cursor-pointer mt-4">Reading List</div>
                    </div>

                </div>
                <div className="copyright ml-2 max-md:text-sm max-md:mb-2">
                    <div className="">&copy; copyright | All rights reserved.</div>
                </div>
            </div>

        </>
    )
}

export default Footer
