import React from 'react'
// import animationData from "../../assets/lottile/projapoti.json";
import animationData from "../../assets/lottile/bg.json";
import Lottie from 'lottie-react';
import AboutMe from '../../Containers/AboutMe';

export default function MainPage() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Fixed Lottie Background */}
        <div className="fixed bg-[#0E0E1B] inset-0 -z-10 w-full h-screen">
          <Lottie animationData={animationData} loop className="w-full h-full object-cover" />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 text-center text-white space-y-10">
        {/* <AboutMe /> */}
        <h2 className=' bg-red-200'>amr sonar bangla ami tomai valo basi</h2>
        </div>
      </div>
    </>
  )
}
