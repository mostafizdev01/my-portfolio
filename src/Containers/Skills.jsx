import React from 'react'
import TitleSection from './TitleSection'
import Lottie from 'lottie-react'
import language from '../assets/lottile/Language.json'
import database from '../assets/lottile/Database.json'
import tollss from '../assets/lottile/tools.json'

export default function Skills() {
    return (
        <>
        <TitleSection title={'Skills'} />
        <div className="skills-container md:flex justify-between items-center gap-10 mb-48">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                <div className='  w-8/12 h-68'>
                    <Lottie  animationData={language}></Lottie>
                </div>
                <h2 className=' text-2xl text-[#7e31f1] font-bold my-5'>Frontend</h2>
                <ul className=' flex flex-col gap-2'>
                    <li className=' text-lg'>HTML5</li>
                    <li className=' text-lg'>CSS</li>
                    <li className=' text-lg'>Tailwind</li>
                    <li className=' text-lg'>Boostrap</li>
                    <li className=' text-lg'>JavaScript</li>
                    <li className=' text-lg'>TypeScript</li>
                    <li className=' text-lg'>Pythone (Beginner)</li>
                </ul>
            </div>

            {/* 2nd section */}

            <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 my-5 md:my-0 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                <div className=' w-8/12 h-68'>
                    <Lottie  animationData={database}></Lottie>
                </div>
                <h2 className=' text-2xl text-[#7e31f1] font-bold my-5'>Backend</h2>
                <ul className=' flex flex-col gap-2'>
                    <li className=' text-lg'>React.js</li>
                    <li className=' text-lg'>Node.js</li>
                    <li className=' text-lg'>Express.js</li>
                    <li className=' text-lg'>MongoDB</li>
                    <li className=' text-lg'>Firebase SDK</li>
                    <li className=' text-lg'>Stripe SDK</li>
                    <li className=' text-lg'>AWS(Beginner)</li>
                </ul>
            </div>

            {/* 3rd section */}

            <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                <div className='  w-8/12 h-68'>
                    <Lottie  animationData={tollss}></Lottie>
                </div>
                <h2 className=' text-2xl text-[#7e31f1] font-bold my-5'>Tools</h2>
                <ul className=' flex flex-col gap-2'>
                    <li className=' text-lg'>Git</li>
                    <li className=' text-lg'>GitHub</li>
                    <li className=' text-lg'>Figma</li>
                    <li className=' text-lg'>Terminal</li>
                    <li className=' text-lg'>VS Code</li>
                    <li className=' text-lg'>WordPress</li>
                    <li className=' text-lg'>Elementor</li>
                </ul>
            </div>
        </div>
        </>
    )
}
