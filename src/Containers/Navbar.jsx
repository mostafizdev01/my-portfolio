import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className={`flex w-full items-center dark:bg-dark`}>
                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4">
                            <a href="/" className="block w-full py-5">
                                <img
                                    src="https://i.ibb.co.com/TD32htb1/icons8-subway-67.png"
                                    alt="logo"
                                    className="dark:hidden"
                                />
                                <img
                                    src="https://i.ibb.co.com/TD32htb1/icons8-subway-67.png"
                                    alt="logo"
                                    className="hidden dark:block"
                                />
                            </a>
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
                                    <ul className="block lg:flex gap-10">
                                        <Link to="/">Home</Link>
                                        <Link to="/">Payment</Link>
                                        <Link to="/">About</Link>
                                        <Link to="/">Blog</Link>
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
