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
  FaExternalLinkAlt
} from 'react-icons/fa';
import { govColors } from '../utils/colors';

const Footer = () => {
  return (
    <footer 
      className="text-white py-16 px-4"
      style={{ backgroundColor: govColors.primary.blue }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="BVSS Logo" 
                className="w-16 h-16 mr-3 rounded-full border-2"
                style={{ borderColor: govColors.primary.orange }}
              />
              <div>
                <h3 className="text-lg font-bold">BVSS</h3>
                <p className="text-sm opacity-90">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm mb-6 text-center md:text-left leading-relaxed opacity-90">
              Bharat Vikas Shikshan Sanstha is committed to providing quality Ayurvedic and medical education, 
              fostering innovation in healthcare, and nurturing future healthcare professionals.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
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
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              CONTACT INFO
              <span 
                className="absolute bottom-0 left-0 w-16 h-1"
                style={{ backgroundColor: govColors.primary.orange }}
              ></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span 
                  className="text-lg mr-3 mt-1 transition-colors duration-300"
                  style={{ color: govColors.primary.orange }}
                >
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm leading-relaxed">
                    Bharat Vikas Shikshan Sanstha<br />
                    Chinchwad, Pune 411019<br />
                    Maharashtra, India
                  </p>
                </div>
              </li>
              <li className="flex items-center group">
                <span 
                  className="text-lg mr-3 transition-colors duration-300"
                  style={{ color: govColors.primary.orange }}
                >
                  <FaPhone />
                </span>
                <div>
                  <a 
                    href="tel:+919876543210" 
                    className="text-sm hover:underline transition-all duration-300"
                    style={{ color: govColors.primary.white }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-center group">
                <span 
                  className="text-lg mr-3 transition-colors duration-300"
                  style={{ color: govColors.primary.orange }}
                >
                  <FaEnvelope />
                </span>
                <div>
                  <a 
                    href="mailto:bvss.edu@gmail.com" 
                    className="text-sm hover:underline transition-all duration-300"
                    style={{ color: govColors.primary.white }}
                  >
                    info@bvss.edu.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              QUICK LINKS
              <span 
                className="absolute bottom-0 left-0 w-16 h-1"
                style={{ backgroundColor: govColors.primary.orange }}
              ></span>
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Home", link: "/" },
                { text: "About Us", link: "/about" },
                { text: "Courses", link: "/courses" },
                { text: "Academics", link: "/academics" },
                { text: "Admissions", link: "/admissions" },
                { text: "Faculty", link: "/faculty" },
                { text: "Contact", link: "/contact" }
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span 
                    className="mr-3 text-xs transition-colors duration-300"
                    style={{ color: govColors.primary.orange }}
                  >
                    ▶
                  </span>
                  <Link 
                    to={item.link} 
                    className="text-sm hover:underline transition-all duration-300 hover:translate-x-1"
                    style={{ color: govColors.primary.white }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links & Updates */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              IMPORTANT LINKS
              <span 
                className="absolute bottom-0 left-0 w-16 h-1"
                style={{ backgroundColor: govColors.primary.orange }}
              ></span>
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Online Application", link: "/apply", external: false },
                { text: "Student Portal", link: "/student-portal", external: false },
                { text: "Academic Calendar", link: "/calendar", external: false },
                { text: "Fee Structure", link: "/fees", external: false },
                { text: "Downloads", link: "/downloads", external: false },
                { text: "RTI Information", link: "/rti", external: false },
                { text: "Grievance Cell", link: "/grievance", external: false }
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span 
                    className="mr-3 text-xs transition-colors duration-300"
                    style={{ color: govColors.primary.orange }}
                  >
                    {item.external ? <FaExternalLinkAlt /> : "▶"}
                  </span>
                  <Link 
                    to={item.link} 
                    className="text-sm hover:underline transition-all duration-300 hover:translate-x-1 flex items-center"
                    style={{ color: govColors.primary.white }}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Information Section */}
        <div 
          className="border-t py-8 mb-8"
          style={{ borderColor: govColors.secondary.lightBlue }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaGraduationCap 
                className="text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-lg mb-1">Accreditation</h4>
              <p className="text-sm opacity-90">Government Approved Institution</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone 
                className="text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-lg mb-1">24/7 Support</h4>
              <p className="text-sm opacity-90">Student Helpline Available</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt 
                className="text-3xl mb-2"
                style={{ color: govColors.primary.orange }}
              />
              <h4 className="font-bold text-lg mb-1">Visit Campus</h4>
              <p className="text-sm opacity-90">Schedule Your Tour Today</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div 
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: govColors.secondary.lightBlue }}
        >
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <p className="text-sm opacity-90 mb-2 md:mb-0 md:mr-4">
              © 2025 Bharat Vikas Shikshan Sanstha. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link 
                to="/privacy-policy" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <span className="opacity-50">|</span>
              <Link 
                to="/terms-conditions" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms & Conditions
              </Link>
              <span className="opacity-50">|</span>
              <Link 
                to="/disclaimer" 
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs opacity-75 mb-1">Developed & Maintained By</p>
            <a 
              href="https://eptiq.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline transition-all duration-300"
              style={{ color: govColors.primary.orange }}
            >
              Eptiq Technologies
            </a>
          </div>
        </div>
      </div>

      {/* Government Website Style Disclaimer */}
      <div 
        className="mt-8 py-4 text-center text-xs"
        style={{ 
          backgroundColor: govColors.secondary.darkBlue,
          borderTop: `2px solid ${govColors.primary.orange}`
        }}
      >
        <p className="opacity-75">
          This is an official website of Bharat Vikas Shikshan Sanstha, Government Recognized Educational Institution
        </p>
      </div>
    </footer>
  );
};

export default Footer;
