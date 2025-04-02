import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white">
   
      <div className="bg-gradient-blue px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                About KITM
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-2 -mb-3"></span>
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-6">
                <img src="/kitmLogoo.png" alt="KITM Logo" className="h-16" />
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                KITM is committed to academic excellence and holistic development of students, 
                preparing them for successful careers in the rapidly evolving technological landscape.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/share/1Y4Sg1j52u/" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/kitm_group_of_institutions?igsh=ZnZvNzV6anlxOTI5" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@kitmcollege?si=-r87bx3B3vd79aZG" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-2 -mb-3"></span>
              </h3>
              <ul className="space-y-3">
                {['HOME', 'ABOUT KITM', 'ACADEMICS', 'LIFE @KITM', 'GALLERY', 'BLOGS', 'NEWS & EVENTS', 'CONTACT US'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-100 hover:text-white flex items-center group transition-all duration-300">
                      <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Programs
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-2 -mb-3"></span>
              </h3>
              <ul className="space-y-3">
                {['B.Tech', 'M.Tech', 'MBA', 'BCA', 'MCA', 'Polytechnic', 'Ph.D Programs', 'Certificate Courses'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-100 hover:text-white flex items-center group transition-all duration-300">
                      <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-2 -mb-3"></span>
              </h3>
              <div className="space-y-5">
                <div className="flex items-start  transition-colors duration-300">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-red-500" />
                  <p className="text-blue-100">Kumaon Institute of Technology & Management, Uttarakhand, India</p>
                </div>
                <div className="flex items-center p-4  transition-colors duration-300">
                  <FaPhone className="mr-3 text-red-500" />
                  <p className="text-blue-100">+919258351065</p>
                </div>
                <div className="flex items-center p-4  transition-colors duration-300">
                  <FaEnvelope className="mr-3 text-red-500" />
                  <p className="text-blue-100">kitminfo.india@gmail.com</p>
                </div>
              </div>
              <button className="mt-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 px-6 py-3 rounded-full font-bold flex items-center">
                APPLY NOW <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gradient-blue py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 mb-4 md:mb-0">&copy; 2025 Khatima Institute of Technology & Management. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;