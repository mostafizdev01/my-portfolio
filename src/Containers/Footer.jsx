import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="divider"></div>
    <div>
        <span>© {new Date().getFullYear()} All rights reserved - <span className=' text-[#6c1fe0] font-semibold text-lg pb-5 cursor-pointer'>Mostafiz</span></span>
    </div>
    </>
  )
}
