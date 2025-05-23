import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

const icons = {
    ...FaIcons,
    ...SiIcons,
    ...BiIcons,
    ...RiIcons,
}
export default function SkillLogo({ iconName, logoName }) {
    const IconComponents = icons[iconName?.trim()]
    return (
        <>
            <div className='bg-black/30 backdrop-blur-md rounded-lg p-4 w-full border-2 flex flex-col justify-center items-center border-gray-800 hover:bg-[#110C24] cursor-pointer'>
                <div className=' text-[#00CDF4] text-5xl'>
                  <IconComponents />
                </div>
                <h2 className=' text-md mt-3'>{logoName}</h2>
            </div>
        </>
    )
}
