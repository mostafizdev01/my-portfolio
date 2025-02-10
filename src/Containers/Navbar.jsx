import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // schrolling sctions starting 

    const [bgColor, setBgColor] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setBgColor(scrollY > 100 ? "bg-black/30 backdrop-blur-md rounded-lg" : "");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header className={`flex w-full items-center dark:bg-dark sticky top-0 z-50`}>
                <div className={`${bgColor} container py-3`}>
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className=" text-left ml-7 text-3xl font-bold text-[#570acc]">
                            <Link to="/">M.D</Link>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button
                                    onClick={() => setOpen(!open)}
                                    id="navbarToggler"
                                    className={` ${open && "navbarTogglerActive"
                                        } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                                >
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                </button>
                            </div>
                            <div>
                                <nav
                                    // :className="!navbarOpen && 'hidden' "
                                    id="navbarCollapse"
                                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                        } `}
                                >
                                    <ul className="block lg:flex gap-16">
                                        <Link to="#contact">Home</Link>
                                        <Link to="/">About</Link>
                                        <Link to="/">Skills</Link>
                                        <Link to="/">Projects</Link>
                                        <Link to="/">Career</Link>
                                        <Link to="/">Contact</Link>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">

                                <a
                                    href="/#"
                                    className="rounded-md bg-[#570acc] px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
