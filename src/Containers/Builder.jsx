import React from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import TitleSection from './TitleSection'
import Lottie from 'lottie-react'
import engineer from '../assets/lottile/enginnering.json'
import design from '../assets/lottile/rocket.json'
import marketing from '../assets/lottile/marketing.json'

export default function Builder() {
    return (
        <>
            <TitleSection title={'A True Builder'} />
            <div className=' md:flex justify-between items-center gap-10'>
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-6/12'>
                            <Lottie animationData={engineer}></Lottie>
                        </div>
                        <div className=' text-2xl text-[#570acc] font-bold w-full'>Enginnering</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5'>
                    Software engineering with expertise in Web and AI Technologies.
                    </p>
                </div>

                {/* 2nd section */}

                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 my-5 md:my-0 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-6/12'>
                            <Lottie animationData={design}></Lottie>
                        </div>
                        <div className=' text-2xl text-[#570acc] font-bold w-full'>Design</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5'>
                    Creating intuitive user experiences and visually appealing interfaces.
                    </p>
                </div>
                {/* 3rd section */}
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-6/12'>
                            <Lottie animationData={marketing}></Lottie>
                        </div>
                        <div className=' text-2xl text-[#570acc] font-bold w-full'>Marketing</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5'>
                    Building and growing products with effective marketing strategies.
                    </p>
                </div>
            </div>
        </>
    )
}
