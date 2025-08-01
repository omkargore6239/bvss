import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaGraduationCap,
  FaClock,
  FaUserFriends
} from 'react-icons/fa';
import { govColors } from '../utils/colors';

const Footer = () => {
  return (
    <footer 
      className="text-white py-8 px-4"
      style={{ backgroundColor: govColors.primary.blue }}
    >
      <style>{`
        @media (max-width: 768px) {
          .mobile-footer-spacing {
            margin-bottom: 1rem;
          }
          
          .mobile-footer-grid {
            gap: 1.5rem;
          }
        }
        
        .footer-section-divider {
          margin: 1.5rem 0;
        }
        
        @media (min-width: 768px) {
          .footer-section-divider {
            margin: 2rem 0;
          }
        }

        .full-width-section {
          margin-left: -1rem;
          margin-right: -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .full-width-section {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .full-width-section {
            margin-left: -2rem;
            margin-right: -2rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        .zero-bottom-gap {
          margin-bottom: 0;
          padding-bottom: 0;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 mobile-footer-grid">
          
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="BVSS Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-3 rounded-full border-2"
                style={{ borderColor: govColors.primary.orange }}
              />
              <div>
                <h3 className="text-base md:text-lg font-bold">BVSS</h3>
                <p className="text-xs md:text-sm opacity-90">Excellence in Education</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm mb-4 text-center md:text-left leading-relaxed opacity-90">
              Bharat Vikas Shikshan Sanstha is committed to providing quality fellowship training in healthcare, 
              fostering innovation in medical education, and nurturing future healthcare professionals.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 mb-4 mobile-footer-spacing">
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaYoutube, href: "#", label: "YouTube" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: govColors.primary.orange,
                    color: govColors.primary.white
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = govColors.secondary.darkOrange;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = govColors.primary.orange;
                  }}
                >
                  <social.icon className="text-xs sm:text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg xl:text-xl font-bold mb-4 relative pb-2">
              QUICK LINKS
              <span 
                className="absolute bottom-0 left-0 w-12 md:w-16 h-1"
                style={{ backgroundColor: govColors.primary.orange }}
              ></span>
            </h3>
            <ul className="space-y-2">
              {[
                { text: "Home", link: "/" },
                { text: "About Us", link: "/about" },
                { text: "Courses", link: "/courses" },
                { text: "Academics", link: "/academics" },
                { text: "MUHS Mandate", link: "/muhs" },
                { text: "Blog", link: "/blog" },
                { text: "Contact", link: "/contact" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span 
                    className="mr-2 text-xs transition-colors duration-300"
                    style={{ color: govColors.primary.orange }}
                  >
                    ▶
                  </span>
                  <Link 
                    to={item.link} 
                    className="text-xs sm:text-sm hover:underline transition-all duration-300 hover:translate-x-1"
                    style={{ color: govColors.primary.white }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information - Full Width Section */}
        <div 
          className="full-width-section border-t py-6 mb-6"
          style={{ 
            borderColor: govColors.secondary.lightBlue,
            backgroundColor: `${govColors.primary.blue}ee`
          }}
        >
          <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-6 text-center relative pb-3">
            CONTACT INFORMATION
            <span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1"
              style={{ backgroundColor: govColors.primary.orange }}
            ></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: govColors.primary.orange }}
              >
                <FaMapMarkerAlt className="text-lg md:text-2xl text-white" />
              </div>
              <h4 className="font-bold text-sm md:text-base mb-2">ADDRESS</h4>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                Bharat Vikas Shikshan Sanstha<br />
                Chinchwad, Pune 411019<br />
                Maharashtra, India
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: govColors.primary.orange }}
              >
                <FaPhone className="text-lg md:text-2xl text-white" />
              </div>
              <h4 className="font-bold text-sm md:text-base mb-2">PHONE</h4>
              <a 
                href="tel:+919876543210" 
                className="text-xs sm:text-sm hover:underline transition-all duration-300 opacity-90 hover:opacity-100"
                style={{ color: govColors.primary.white }}
              >
                +91 98765 43210
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: govColors.primary.orange }}
              >
                <FaEnvelope className="text-lg md:text-2xl text-white" />
              </div>
              <h4 className="font-bold text-sm md:text-base mb-2">EMAIL</h4>
              <a 
                href="mailto:info@bvss.edu.in" 
                className="text-xs sm:text-sm hover:underline transition-all duration-300 opacity-90 hover:opacity-100"
                style={{ color: govColors.primary.white }}
              >
                info@bvss.edu.in
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information Section - Optimized */}
        <div 
          className="border-t py-4 md:py-6 mb-4 footer-section-divider"
          style={{ borderColor: govColors.secondary.lightBlue }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaGraduationCap 
                className="text-2xl md:text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-sm md:text-base lg:text-lg mb-1">Accreditation</h4>
              <p className="text-xs md:text-sm opacity-90">Government Approved Institution</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClock 
                className="text-2xl md:text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-sm md:text-base lg:text-lg mb-1">24/7 Support</h4>
              <p className="text-xs md:text-sm opacity-90">Student Helpline Available</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserFriends 
                className="text-2xl md:text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-sm md:text-base lg:text-lg mb-1">Visit Campus</h4>
              <p className="text-xs md:text-sm opacity-90">Schedule Your Tour Today</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section - Compact */}
        <div 
          className="border-t pt-4 flex flex-col lg:flex-row justify-between items-center"
          style={{ borderColor: govColors.secondary.lightBlue }}
        >
          <div className="flex flex-col md:flex-row items-center mb-3 lg:mb-0">
            <p className="text-xs md:text-sm opacity-90 mb-2 md:mb-0 md:mr-4 text-center md:text-left">
              © 2025 Bharat Vikas Shikshan Sanstha. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-3 md:space-x-4 text-xs">
              <Link 
                to="/#" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <span className="opacity-50">|</span>
              <Link 
                to="/#" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms & Conditions
              </Link>
              <span className="opacity-50">|</span>
              <Link 
                to="/#" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-xs opacity-75 mb-1">Developed & Maintained By</p>
            <a 
              href="https://eptiq.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold hover:underline transition-all duration-300"
              style={{ color: govColors.primary.orange }}
            >
              Eptiq Technologies
            </a>
          </div>
        </div>
      </div>

      {/* Government Website Style Disclaimer - Full Width with Zero Bottom Gap */}
      <div 
        className="full-width-section mt-4 py-4 text-center zero-bottom-gap"
        style={{ 
          backgroundColor: govColors.secondary.darkBlue,
          borderTop: `2px solid ${govColors.primary.orange}`,
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p className="opacity-75 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
          This is an official website of Bharat Vikas Shikshan Sanstha, Government Recognized Educational Institution
        </p>
      </div>
    </footer>
  );
};

export default Footer;
