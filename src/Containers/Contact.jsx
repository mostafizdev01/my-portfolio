import React from 'react'
import TitleSection from './TitleSection'
import { LuSend } from 'react-icons/lu'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  return (
    <>
      <TitleSection title={'Contact Us'} />

      <div className=' md:flex gap-20 pb-20'>
        <div className=' w-full text-left'>
          <button className="btn rounded-full border border-[#570acc]">CONTACT ME!</button>
          <h1 className=" w-full text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
            Let's Get In Touch!
          </h1>
          <p className=" text-base text-body-color dark:text-dark-6 mt-5 w-full">
            If you're interested in learning more about me, collaborating on a project, or simply curious and want to say hello, please don't hesitate to send me a message. I enjoy receiving messages from people on the internet!
          </p>
          <div className="divider"></div>
          <h4 className=' text-xl'> Follow Me</h4>
          <ul className=" w-full my-3 flex gap-5">
            <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaFacebookF /></Link></li>
            <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaLinkedinIn /></Link></li>
            <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaGithub /></Link></li>
            <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaXTwitter /></Link></li>
          </ul>
        </div>

        {/* contact from start  now*/}

        <div className=' w-full py-10 px-5 md:px-20 rounded-lg bg-white/5 mt-20 md:mt-0 backdrop-blur-md'>
          <h2 className=' text-3xl font-semibold font-sans text-[#ddd8e4]'>Message Me!</h2>
          <form action="#" method="POST" className="space-y-6 w-full">
            <div>
              {/* <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Message Me!
              </label> */}
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder='Enter Your Name'
                  required
                  className=" w-full rounded-md outline-none border-b-2 border-0 border-[#570acc] px-3 py-1.5 text-base  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="email"
                  required
                  placeholder='Enter Your Email'
                  autoComplete="email"
                  className="block w-full rounded-md my-5 px-3 py-1.5 text-base outline-none border-b-2 border-0 border-[#570acc] placeholder:text-gray-400 "
                />
              </div>
              <textarea className=' w-full outline-none border-b-2 border-[#570acc] p-3 rounded-md  h-40' placeholder='Message' name="" id=""></textarea>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md bg-[#570acc] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs cursor-pointer hover:bg-[#580accde] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className=' '><FaTelegramPlane /></span> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
