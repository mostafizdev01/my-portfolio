import React, { useState } from "react";
import { FaCloudDownloadAlt, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import {myphoto} from "../assets/images/myphoto.png";

export default function AboutMe() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content flex flex-col text-left">
                <h1 className=" w-full text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Hi there! <br />
                  <span className=" text-[#5104c5]">I'm Mostafiz</span>
                </h1>
                <h3 className=" w-full text-[#813aeb] font-bold text-xl mb-5">Full-Stack Developer</h3>
                <p className=" text-base text-body-color dark:text-dark-6 w-full">
                  Hi, I’m Mostafiz, a passionate self-taught programmer from Bangladesh. Basically I build several web application based on JavaScript. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and catch user’s eye. I am especially focusing on ReactJS & NodeJS.

                  I also do WordPress and UI-UX designing. Since I love both, programming and designing. I’m also interested in open source, and creative coding projects
                </p>
                <ul className=" w-full my-3 flex gap-5">
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaLinkedinIn /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaTwitter /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaFacebookF /></Link></li>
                  <li className=" bg-[#570acc] hover:bg-[#580accb9] w-10 h-10 flex justify-center items-center rounded-full text-lg"><Link to=""><FaWhatsapp /></Link></li>
                </ul>
                <ul className="flex flex-wrap items-center gap-5 w-full">
                  <li><button className="btn bg-[#570acc] border-none text-lg"><FaCloudDownloadAlt /> Resume</button></li>
                  <li><button className="btn  text-lg"><MdOutlineEmail /> Contact</button></li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://i.ibb.co.com/HfSv1rjn/download10.jpg"
                    alt="hero"
                    className=" lg:ml-auto max-w-md rounded-tl-full rounded-tr-full rounded-br-full"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


// const SingleImage = ({ href, imgSrc }) => {
//   return (
//     <>
//       <a href={href} className="flex w-full items-center justify-center">
//         <img src={imgSrc} alt="brand image" className="h-10 w-full" />
//       </a>
//     </>
//   );
// };

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
//                 alt="logo"
//                 className="w-full dark:hidden"
//               />
//               <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
//                 alt="logo"
//                 className="w-full hidden dark:block"
//               />
//             </a>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//               </button>
//               <nav
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
//                   !open && "hidden"
//                 } `}
//               >
//                 <ul className="block lg:flex">
//                   <ListItem NavLink="/#">Home</ListItem>
//                   <ListItem NavLink="/#">Payment</ListItem>
//                   <ListItem NavLink="/#">About</ListItem>
//                   <ListItem NavLink="/#">Blog</ListItem>
//                 </ul>
//               </nav>
//             </div>
//             <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//               <a
//                 href="/#"
//                 className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
//               >
//                 Sign in
//               </a>

//               <a
//                 href="/#"
//                 className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <>
//       <li>
//         <a
//           href={NavLink}
//           className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
//         >
//           {children}
//         </a>
//       </li>
//     </>
//   );
// };
