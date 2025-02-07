import React from 'react'
import TitleSection from './TitleSection'

export default function Contact() {
  return (
    <>
      <TitleSection title={'Contact Us'} />

      <div className=' flex justify-between items-center gap-5'>
        <div className=' w-full'>this is lottile file</div>
        {/* from faild start */}
        <div className=' w-full'>
          <form action="#" method="POST" className="space-y-6 w-full">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Enter Your Name'
                  required
                  autoComplete="email"
                  className=" w-full rounded-md outline-none border-b-amber-100 border-none px-3 py-1.5 text-base  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                  type="password"
                  required
                  placeholder='Enter Your Email'
                  autoComplete="current-password"
                  className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <textarea className=' w-full' name="" id=""></textarea>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
