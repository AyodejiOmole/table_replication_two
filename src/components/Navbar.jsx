import React, { useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between flex-row items-center shadow-lg p-3 w-full">
                <h2>Developer X.</h2>

                <ul className="lg:flex md:flex justify-between hidden gap-4">
                    <li className="hover:underline cursor-pointer"><a href="#" className="hover:text-underline cursor-pointer">Uploads</a></li>
                    <li className="hover:underline cursor-pointer"><a href="#">Optimizations</a></li>
                    <li className="hover:underline cursor-pointer"><a href="#">Scopes</a></li>
                    <li className="hover:underline cursor-pointer"><a href="#">Rules</a></li>
                </ul>

                <div className="lg:flex md:flex justify-between hidden items-center gap-5">
                    <span className="flex block space-between gap-1 cursor-pointer">
                        <IoPersonCircleSharp size={30} />
                        <p className="text-md text-gray-600 font-semibold">Andrea Antonescu</p>
                        <IoMdArrowDropdown className="my-auto"/>
                    </span>
                    
                    <div className="relative cursor-pointer">
                        <IoIosNotifications size={25}/>
                        <div className="absolute bg-red-700 bottom-4 right-0 flex text-[10px] p-[1px] text-white items-center justify-center rounded-full">10</div>
                    </div>

                    <div className="border-l-2 px-4">
                        <span className="bg-blue-600 p-4 flex items-center justify-center shadow-md rounded-full">
                            <FiLogOut color={"#000000"}/>
                        </span>
                    </div>
                </div>

                <FaBars className="lg:hidden md:hidden cursor-pointer" onClick={() => setNavOpen(!navOpen)}/>
            </div>

            {/* {navOpen && 
                <div className={`fixed overflow-y-hidden z-50 duration-300 h-screen transition-all ease-in-out delay-150 top-0 bottom-0 left-0 w-full overflow-y-hidden`}>
                    <div className={`w-1/2 bg-white h-full py-4 px-2 transition-all transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} duration-100 ease-in-out`}>
                        <p className="mb-10 font-semibold text-2xl cursor-pointer" onClick={() => setNavOpen(!navOpen)}>x</p>
                        <ul className="flex flex-col justify-between gap-4 items-center mb-4">
                            <li className="hover:underline cursor-pointer"><a href="#">Uploads</a></li>
                            <li className="hover:underline cursor-pointer"><a href="#">Optimizations</a></li>
                            <li className="hover:underline cursor-pointer"><a href="#">Scopes</a></li>
                            <li className="hover:underline cursor-pointer"><a href="#">Rules</a></li>
                        </ul>

                        <div className="flex flex-col justify-between items-center gap-5">
                            <span className="flex block space-between gap-1 cursor-pointer">
                                <IoPersonCircleSharp size={30} />
                                <p className="text-sm text-gray-600 font-semibold">Andrea Antonescu</p>
                                <IoMdArrowDropdown className="my-auto"/>
                            </span>
                            
                            <div className="relative cursor-pointer flex justify-between ">
                                <IoIosNotifications size={25}/>
                                <div className="absolute bg-red-700 bottom-4 left-0 flex text-[10px] p-[1px] text-white items-center justify-center rounded-full">10</div>
                                <p>Notifications</p>
                            </div>

                            <div className="px-4">
                                <span className="bg-blue-600 p-4 flex items-center justify-center shadow-md rounded-full">
                                    <FiLogOut color={"#000000"}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            } */}


            <div className={`fixed z-50 h-screen lg:hidden bg-white top-0 right-0 w-full overflow-y-hidden transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className={`w-full bg-white h-full py-4 px-2`}>
                    <p className="mb-10 text-right font-semibold text-2xl cursor-pointer" onClick={() => setNavOpen(!navOpen)}>x</p>
                    <ul className="flex flex-col justify-between gap-4 items-center mb-4">
                        <li className="hover:underline cursor-pointer"><a href="#">Uploads</a></li>
                        <li className="hover:underline cursor-pointer"><a href="#">Optimizations</a></li>
                        <li className="hover:underline cursor-pointer"><a href="#">Scopes</a></li>
                        <li className="hover:underline cursor-pointer"><a href="#">Rules</a></li>
                    </ul>

                    <div className="flex flex-col justify-between items-center gap-5">
                        <span className="flex block space-between gap-1 cursor-pointer">
                            <IoPersonCircleSharp size={30} />
                            <p className="text-sm text-gray-600 font-semibold">Andrea Antonescu</p>
                            <IoMdArrowDropdown className="my-auto"/>
                        </span>
                        
                        <div className="relative cursor-pointer flex justify-between ">
                            <IoIosNotifications size={25}/>
                            <div className="absolute bg-red-700 bottom-4 left-0 flex text-[10px] p-[1px] text-white items-center justify-center rounded-full">10</div>
                            <p>Notifications</p>
                        </div>

                        <div className="px-4">
                            <span className="bg-blue-600 p-4 flex items-center justify-center shadow-md rounded-full">
                                <FiLogOut color={"#000000"}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
