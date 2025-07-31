import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Measure header height and setup scroll listener
  useEffect(() => {
    const headerElement = document.getElementById('top-header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Main Navigation - FIXED after scrolling past header */}
      <nav
        className={`${
          scrolled ? "fixed top-0 left-0 right-0" : ""
        } bg-white border-b border-gray-200 px-4 py-2 z-50 shadow-md transition-all duration-300`}
      >
        <div className="container mx-auto">
          {/* Desktop Navigation - All items centered */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={handleLogoClick}>
                <img src="/logo.png" alt="Logo" className="h-20 w-24" />
              </Link>
            </div>

            <Link to="/about" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">ABOUT</Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link to="/courses" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
                  COURSES
                </Link>
                <button className="ml-1 focus:outline-none group-hover:text-blue-600">
                  <span className="transition-all duration-300">
                    <span className="group-hover:hidden">+</span>
                    <span className="hidden group-hover:inline">-</span>
                  </span>
                </button>
              </div>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="../subpages/courses/bams" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">BAMS</Link>
                  <Link to="../subpages/courses/PostGraduate" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Post Graduate</Link>
                  <Link to="../subpages/courses/DiplomaPrograms" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Diploma Programs</Link>
                  <Link to="../subpages/courses/CertificateCourses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Certificate Courses</Link>
                </div>
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link to="/academics" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
                  ACADEMICS
                </Link>
              </div>
            </div>

            {/* Achievements Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link to="/achievements" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
                  ACHIEVEMENTS & EVENTS
                </Link>
              </div>
            </div>

            {/* Blog Link */}
            {/* <Link
              to="/blog"
              className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
            >
              BLOG
            </Link> */}

            <div className="relative group">
              <div className="flex items-center">
                <Link to="/muhs" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
                  MUHS MANDATE
                </Link>
                <button className="ml-1 focus:outline-none group-hover:text-blue-600">
                  <span className="transition-all duration-300">
                    <span className="group-hover:hidden">+</span>
                    <span className="hidden group-hover:inline">-</span>
                  </span>
                </button>
              </div>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">BLOG</Link>
                  </div>
              </div>
            </div>

            {/* MUHS Mandate */}
            {/* <div className="relative group">
              <div className="flex items-center">
                <Link to="/muhs" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
                  MUHS MANDATE
                </Link>
              </div>
            </div> */}

            <Link to="/contact" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">CONTACT</Link>

            <a
              href="/BVSS-Entrance-Form.pdf"
              download
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 inline-block"
            >
              APPLY NOW
            </a>
          </div>

          {/* Mobile Header - Logo and Hamburger */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={handleLogoClick}>
                <img src="/logo.png" alt="Logo" className="h-20 w-24" />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-2 px-2 pt-2 pb-3">
              <Link to="/about" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleDropdownItemClick}>ABOUT</Link>

              {/* Mobile Courses Dropdown */}
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/courses" 
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                    onClick={handleDropdownItemClick}
                  >
                    COURSES
                  </Link>
                  <button
                    onClick={() => toggleDropdown('mobile-courses')}
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                  >
                    {activeDropdown === 'mobile-courses' ? '-' : '+'}
                  </button>
                </div>
                {activeDropdown === 'mobile-courses' && (
                  <div className="pl-6 mt-1 space-y-1">
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:text-blue-600" onClick={handleDropdownItemClick}>BAMS</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:text-blue-600" onClick={handleDropdownItemClick}>Post Graduate</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:text-blue-600" onClick={handleDropdownItemClick}>Diploma Programs</Link>
                    <Link to="#" className="block px-3 py-1 text-gray-800 hover:text-blue-600" onClick={handleDropdownItemClick}>Certificate Courses</Link>
                  </div>
                )}
              </div>

              {/* Mobile Academics */}
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/academics" 
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                    onClick={handleDropdownItemClick}
                  >
                    ACADEMICS
                  </Link>
                </div>
              </div>

              {/* Mobile Achievements */}
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/achievements" 
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                    onClick={handleDropdownItemClick}
                  >
                    ACHIEVEMENTS & EVENTS
                  </Link>
                </div>
              </div>

              <Link to="/blog" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleDropdownItemClick}>BLOG</Link>

              {/* Mobile MUHS Mandate */}
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/muhs" 
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                    onClick={handleDropdownItemClick}
                  >
                    MUHS MANDATE
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleDropdownItemClick}>CONTACT</Link>
              
              <a
                href="/BVSS-Entrance-Form.pdf"
                download
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 w-[45%]"
              >
                APPLY NOW
              </a>

              <Link to="/inquiry">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4">
                  Inquiry Form
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer div to prevent content from hiding under fixed navbar when it's active */}
      {scrolled && <div className="h-20"></div>}
    </div>
  );
};

export default Navbar;