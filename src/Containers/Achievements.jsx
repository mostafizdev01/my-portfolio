import React from 'react'
import TitleSection from './TitleSection'
import Lottie from 'lottie-react'
import time from '../assets/lottile/time.json'
import connect from '../assets/lottile/product.json'
import man from '../assets/lottile/man.json'
import star from '../assets/lottile/star.json'

export default function Achievements() {
    return (
        <>
            <TitleSection title={'Achievements'} />
            <div className=' md:flex justify-between items-center gap-10 mb-48'>
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-6/12'>
                            <Lottie animationData={man}></Lottie>
                        </div>
                        <div className=' text-5xl pt-5 text-[#fff] font-bold w-full'>3+</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5 text-xl font-bold text-[#8434fc]'>
                    Years Active
                    </p>
                </div>
                {/* 3rd section */}
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-6/12'>
                            <Lottie animationData={time}></Lottie>
                        </div>
                        <div className=' text-5xl text-[#fff] pt-5 font-bold w-full'>100k+</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5 text-xl font-bold text-[#8434fc]'>
                    Worldwide Users
                    </p>
                </div>
                {/* 4th section */}
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:border-[#5104c5ce]">
                    <div className=' flex flex-col justify-between items-center w-full'>
                        <div className=' w-5/12'>
                            <Lottie animationData={star}></Lottie>
                        </div>
                        <div className=' text-5xl text-[#fff] pt-5 font-bold w-full'>2.3+</div>
                        {/* <div className=' text-2xl text-[#f33b54]'><Link><RiExternalLinkLine /></Link></div> */}
                    </div>
                    <p className=' w-full py-5 text-xl font-bold text-[#8434fc]'>
                    Average Rating
                    </p>
                </div>
            </div>
        </>
    )
}
