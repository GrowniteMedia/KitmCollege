// import React, { useState } from "react";
// import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="text-white">
//       {/* Top Header Section */}
//       <div className="flex flex-col md:flex-row w-full">
//         {/* Logo */}
//         <div className="w-full md:w-1/5 hidden  md:flex justify-center md:justify-start items-center p-4">
//           <img src="/kitmLogoo.svg" alt="KITM Logo" className="h-16 md:h-32" />
//         </div>

//         <div className="w-full">
//           {/* Contact and Social Section */}
//           <div className="md:flex hidden  flex-col-reverse pt-0 md:flex-row items-center justify-between w-full p-4 gap-4">
//             <p className="text-blue-700 text-[16px] md:text-[25px] font-bold text-center md:w-[80%] md:text-left">
//               Call at - +919568110012
//             </p>

//             <div
//               className=" flex-wrap hidden md:flex items-center justify-center md:justify-evenly bg-gradient-blue px-4 py-2 md:ps-10 md:py-4 w-full gap-4 md:gap-6"
//               style={{ borderRadius: "0 0 0 48px" }}
//             >
//               <a href="#" className="hover:text-gray-300">
//                 ALIMINI
//               </a>
//               <a href="#" className="hover:text-gray-300">
//                 OTHERS
//               </a>
//               <a href="#" className="hover:text-gray-300">
//                 <FaLinkedin size={20} />
//               </a>
//               <a href="#" className="hover:text-gray-300">
//                 <FaFacebook size={20} />
//               </a>
//               <a href="#" className="hover:text-gray-300">
//                 <FaInstagram size={20} />
//               </a>
//               <a href="#" className="hover:text-gray-300">
//                 <FaYoutube size={20} />
//               </a>
//               <button className="bg-red-600 px-4 py-1 hidden md:block text-sm rounded-full hover:bg-red-700 text-white font-bold">
//                 APPLY NOW
//               </button>
//             </div>
//           </div>

//           {/* Institute Name Section */}
//           <div className="bg-white py-4 flex flex-col md:flex-row items-center justify-between">
//             <img
//               src="/kitm_Banner.svg"
//               alt="Institute Banner"
//               className="w-full md:w-auto h-auto"
//             />
//             <div className="flex items-center justify-center md:justify-end bg-white py-2 px-4 md:px-10">
//               <img
//                 src="/ssjuLogo.svg"
//                 alt="Logo 1"
//                 className="mx-2 h-8 md:h-16"
//               />
//               <img
//                 src="/Uttarakhand.svg"
//                 alt="Logo 2"
//                 className="mx-2 h-8 md:h-16"
//               />
//             </div>
//           </div>

//           <div className="w-full flex md:hidden px-4 pb-4 justify-between">
//             <p className="text-blue-700 text-[16px] md:text-[25px] font-bold text-center md:w-[80%] md:text-left">
//               Call at - +919568110012
//             </p>

//             <button className="bg-red-600 px-4 py-1  md:hidden text-sm rounded-full hover:bg-red-700 text-white font-bold">
//               APPLY NOW
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Section */}
//       <nav className="bg-gradient-blue text-white relative">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex space-x-6 font-medium">
//               {[
//                 { name: "HOME", path: "/" },
//                 { name: "ABOUT KITM", path: "/about" },
//                 { name: "ACADEMICS", path: "/academics" },
//                 { name: "LIFE @KITM", path: "/life-at-kitm" },
//                 { name: "GALLERY", path: "/gallery" },
//                 { name: "BLOGS", path: "/blogs" },
//                 { name: "NEWS & EVENTS", path: "/news-events" },
//                 { name: "CONTACT US", path: "/contact" },
//               ].map(({ name, path }) => (
//                 <Link key={name} to={path} className="hover:text-gray-300">
//                   {name}
//                 </Link>
//               ))}
//             </div>
//             {/* Registration Button (Desktop) */}
//             <div className="hidden md:block">
//               <button className="bg-red-600 flex px-4 py-2 rounded-full hover:bg-red-700 font-semibold">
//                 REGISTRATION OPEN 2025
//               </button>
//             </div>
//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center w-full">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 focus:outline-none"
//               >
//                 {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//               </button>
//               <div className="flex justify-between w-full">
//                 <a href="#" className="hover:text-gray-300">
//                   ALIMINI
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   OTHERS
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <FaLinkedin size={20} />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <FaFacebook size={20} />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <FaInstagram size={20} />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <FaYoutube size={20} />
//                 </a>
//                 <button className="bg-red-600 px-4 py-1 hidden md:block text-sm rounded-full hover:bg-red-700 text-white font-bold">
//                   APPLY NOW
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <div className="md:hidden px-4 pb-4">
//             <div className="flex flex-col gap-4 font-medium">
//               {[
//                 "HOME",
//                 "ABOUT KITM",
//                 "ACADEMICS",
//                 "LIFE @KITM",
//                 "GALLERY",
//                 "BLOGS",
//                 "NEWS & EVENTS",
//                 "CONTACT US",
//               ].map((item) => (
//                 <a key={item} href="#" className="block hover:text-gray-300">
//                   {item}
//                 </a>
//               ))}
//             </div>
//             <div className="mt-4">
//               <button className="w-full bg-red-600 flex justify-center px-4 py-2 rounded-full hover:bg-red-700 font-semibold">
//                 REGISTRATION OPEN 2025
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Logo */}
        <div className="w-full md:w-1/5 hidden md:flex justify-center md:justify-start items-center p-4">
          <img src="/kitmLogoo.svg" alt="KITM Logo" className="h-16 md:h-32" />
        </div>

        <div className="w-full">
          {/* Contact and Social Section */}
          <div className="md:flex hidden flex-col-reverse pt-0 md:flex-row items-center justify-between w-full p-4 gap-4">
            <p className="text-blue-700 text-[16px] md:text-[25px] font-bold text-center md:w-[80%] md:text-left">
              Call at - +919568110012
            </p>

            <div
              className="flex-wrap hidden md:flex items-center justify-center md:justify-evenly bg-gradient-blue px-4 py-2 md:ps-10 md:py-4 w-full gap-4 md:gap-6"
              style={{ borderRadius: "0 0 0 48px" }}
            >
              <Link to="#" className="hover:text-gray-300">
                ALUMNI
              </Link>
              <Link to="#" className="hover:text-gray-300">
                OTHERS
              </Link>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube size={20} />
              </a>
              <button className="bg-red-600 px-4 py-1 hidden md:block text-sm rounded-full hover:bg-red-700 text-white font-bold">
                APPLY NOW
              </button>
            </div>
          </div>

          {/* Institute Name Section */}
          <div className="bg-white py-4 flex flex-col md:flex-row items-center justify-between">
            <img
              src="/kitm_Banner.svg"
              alt="Institute Banner"
              className="w-full md:w-auto h-auto"
            />
            <div className="flex items-center justify-center md:justify-end bg-white py-2 px-4 md:px-10">
              <img
                src="/ssjuLogo.svg"
                alt="Logo 1"
                className="mx-2 h-8 md:h-16"
              />
              <img
                src="/Uttarakhand.svg"
                alt="Logo 2"
                className="mx-2 h-8 md:h-16"
              />
            </div>
          </div>

          {/* Mobile Call & Apply Button */}
          <div className="w-full flex md:hidden px-4 pb-4 justify-between">
            <p className="text-blue-700 text-[16px] md:text-[25px] font-bold text-center md:w-[80%] md:text-left">
              Call at - +919568110012
            </p>

            <button className="bg-red-600 px-4 py-1 md:hidden text-sm rounded-full hover:bg-red-700 text-white font-bold">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="bg-gradient-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6 font-medium">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT KITM", path: "/aboutkitm" },
                { name: "ACADEMICS", path: "/academics" },
                { name: "LIFE @KITM", path: "/life-at-kitm" },
                { name: "GALLERY", path: "/gallery" },
                { name: "BLOGS", path: "/blogs" },
                { name: "NEWS & EVENTS", path: "/news-events" },
                { name: "CONTACT US", path: "/contact" },
              ].map(({ name, path }) => (
                <Link key={name} to={path} className="hover:text-gray-300">
                  {name}
                </Link>
              ))}
            </div>

            {/* Registration Button (Desktop) */}
            <div className="hidden md:block">
              <button className="bg-red-600 flex px-4 py-2 rounded-full hover:bg-red-700 font-semibold">
                REGISTRATION OPEN 2025
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 focus:outline-none"
              >
                {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col gap-4 font-medium">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT KITM", path: "/about" },
                { name: "ACADEMICS", path: "/academics" },
                { name: "LIFE @KITM", path: "/life-at-kitm" },
                { name: "GALLERY", path: "/gallery" },
                { name: "BLOGS", path: "/blogs" },
                { name: "NEWS & EVENTS", path: "/news-events" },
                { name: "CONTACT US", path: "/contact" },
              ].map(({ name, path }) => (
                <Link key={name} to={path} className="block hover:text-gray-300">
                  {name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full bg-red-600 flex justify-center px-4 py-2 rounded-full hover:bg-red-700 font-semibold">
                REGISTRATION OPEN 2025
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

