import React from 'react'
import TitleSection from './TitleSection'
import { Link } from 'react-router-dom'
import { RiExternalLinkLine } from 'react-icons/ri'

export default function Projects() {
    return (
        <>
            <TitleSection title="Project" />
            <div className=' md:grid grid-cols-3 gap-10'>

                <Link to='/'>
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#7e31f1] font-bold'>FoodSharing</div>
                            <div className=' text-2xl text-[#7e31f1]'><Link to='/'><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className='  flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>React js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Express</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>JavaScript</li>
                        </ul>
                    </div>
                </Link>

                {/* 2nd section */}

                <Link to='/'>
                    <div className="bg-black/30 my-5 md:my-0 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#f33b54] font-bold'>FoodSharing</div>
                            <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className=' flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Node Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Firebase</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>HTML</li>
                            {/* <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>CSS</li> */}
                        </ul>
                    </div>
                </Link>

                {/* 3rd section */}
                <Link to='/'>
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#f3ba1e] font-bold'>Bistro Boss</div>
                            <div className=' text-2xl text-[#f3ba1e]'><Link><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className=' flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Express Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Tailwind</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>MongoDB</li>
                        </ul>
                    </div>
                </Link>

                {/* 4th section */}
                <Link to='/'>
                    <div className="bg-black/30 backdrop-blur-md my-5 md:my-0 rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#60f542] font-bold'>BPL24</div>
                            <div className=' text-2xl text-[#60f542]'><Link><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className=' flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Node Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Express Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>HTML</li>
                            {/* <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Tailwind</li> */}
                        </ul>
                    </div>
                </Link>

                {/* 5th section */}
                <Link to='/'>
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#1eb7f3] font-bold'>FoodSharing</div>
                            <div className=' text-2xl text-[#1eb7f3]'><Link to='https://tailwindui.com/components' target='_blank'><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className=' flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Express Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>React Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Tailwind</li>
                        </ul>
                    </div>
                </Link>

                {/* 6th section */}
                <Link to='https://tailwindui.com/components' target='_blank'>
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full mt-5 md:mt-0 border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                        <div className=' flex justify-between items-center w-full'>
                            <div className=' text-2xl text-[#da1ef3] font-bold'>Movie portal</div>
                            <div className=' text-2xl text-[#da1ef3]'><Link to='https://tailwindui.com/components' target='_blank'><RiExternalLinkLine /></Link></div>
                            {/* <Lottie animationData={language}></Lottie> */}
                        </div>
                        <p className=' w-full text-left py-5'>
                            Gamify language learning with immersive AI conversations,
                            personalised curriculum, and real-time comprehensive feedback.
                        </p>
                        <ul className=' flex gap-3 text-left w-full'>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Js</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Tailwind</li>
                            <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>HTML</li>
                            {/* <li className=' bg-white/5 hover:bg-white/10 backdrop-blur-md py-2 px-5 rounded-md hover:border-[#7e31f1ab] border border-gray-800'>Figma</li> */}
                        </ul>
                    </div>
                </Link>
            </div>
        </>
    )
}
