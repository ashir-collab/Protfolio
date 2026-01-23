const Input = () => {
    return (
        <>
            <div className="LastContainer w-11/12 m-auto gap-x-16 max-md:gap-x-8 max-sm:gap-2 grid grid-cols-2 text-white mt-50">
                <div className="head flex flex-col gap-2 w-full">
                    <div className="text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-2xl font-bold">Let's talk business</div>
                    <div className="text-gray-500 max-md:text-xs max-lg:text-sm"> Now that you know a lot about me, let me know if you are interested to work with me.</div>
                </div>
                <div className="InputContainer w-full ">
                    <form action="" className="text-white flex flex-col gap-2 ">
                        <label htmlFor="" className="font-bold  max-md:text-sm max-sm:text-xs">Name</label>
                        <input type="text" className=" bg-[#181823] h-8 p-2" />
                        <label htmlFor="" className="font-bold mt-5 max-sm:mt-2 max-md:text-sm max-sm:text-xs">Email</label>
                        <input type="email" className=" bg-[#181823] h-12 max-sm:h-8  max-md:h-10 p-2" />
                        <label htmlFor="" className="font-bold mt-5  max-sm:mt-2 max-md:text-sm max-sm:text-xs">Message</label>
                        <input type="text" className=" bg-[#181823] h-25 max-sm:h-15 max-md:h-20 p-2" />
                        <button className="bg-[#5221e6] hover:hover:text-[#00FFFF] font-bold p-4 mt-4 text-xl max-md:text-[16px] max-sm:text-sm">LET'S GET STARTED</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Input
