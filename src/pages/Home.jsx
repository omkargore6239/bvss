import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaUsers, 
  FaAward, 
  FaBookOpen,
  FaCalendarAlt,
  FaLeaf,
  FaHandsHelping,
  FaGlobe,
  FaDownload,
  FaFileAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { MdAnnouncement, MdSchool } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { Link } from 'react-router-dom';
import { govColors } from '../utils/colors';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !absolute !top-1/2 !right-6 !transform !-translate-y-1/2 text-white text-2xl cursor-pointer z-20 hover:scale-110 transition-all duration-300`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: govColors.primary.blue,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: `2px solid ${govColors.primary.white}`
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !absolute !top-1/2 !left-6 !transform !-translate-y-1/2 text-white text-2xl cursor-pointer z-20 hover:scale-110 transition-all duration-300`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: govColors.primary.blue,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: `2px solid ${govColors.primary.white}`
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Announcement data
  const announcements = [
    "🎓 New Admission 2025 Open - Apply Now for BAMS & Diploma Courses",
    "📚 Academic Session starts from August 15, 2025",
    "🏆 BVSS Ranked Among Top Ayurveda Institutes in Maharashtra",
    "💡 Special Scholarship Program for Meritorious Students",
    "🌿 New Herbal Garden & Research Center Inaugurated",
    "📋 Online Application Portal Now Live - Quick & Easy Process"
  ];

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplaySpeed: 4000
        }
      }
    ]
  };

  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    setFlippedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Updated slider images
  const sliderImages = [
    "/BVG Imges/images/slider/banner-3.jpg",
    "/BVG Imges/images/slider/banner-2.jpg", 
    "/BVG Imges/images/slider/3.JPG",
    "/BVG Imges/images/slider/4.JPG",
    "/BVG Imges/images/slider/bvg.jpg",
    "/BVG Imges/images/slider/bvgteam.jpg"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundColor: govColors.background.primary }}>
      <style>{`
        .announcement-scroll {
          animation: scroll-left 45s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .slick-dots {
          bottom: 20px;
        }

        .slick-dots li button:before {
          color: ${govColors.primary.white};
          font-size: 12px;
          opacity: 0.7;
          width: 16px;
          height: 16px;
        }

        .slick-dots li.slick-active button:before {
          color: ${govColors.primary.orange};
          opacity: 1;
          transform: scale(1.2);
        }

        .flip-card {
          perspective: 1000px;
          height: 400px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid ${govColors.border.light};
        }

        .flip-card-front {
          background-color: ${govColors.background.primary};
        }

        .flip-card-back {
          background-color: ${govColors.background.secondary};
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          color: ${govColors.text.primary};
        }

        .hero-slider {
          height: 500px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-slider {
            height: 350px;
          }
          .hero-slider .slick-slide img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        .brochure-download {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          background: ${govColors.primary.white};
          border: 2px solid ${govColors.primary.orange};
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }

        .brochure-download:hover {
          background: ${govColors.background.orange};
          transform: translateY(-50%) scale(1.05);
        }

        .section-divider {
          height: 4px;
          background: linear-gradient(to right, ${govColors.primary.blue}, ${govColors.primary.orange}, ${govColors.primary.blue});
          margin: 3rem 0;
        }

        .gov-button {
          background: ${govColors.primary.orange};
          color: ${govColors.primary.white};
          border: 2px solid ${govColors.primary.orange};
          transition: all 0.3s ease;
        }

        .gov-button:hover {
          background: ${govColors.secondary.darkOrange};
          border-color: ${govColors.secondary.darkOrange};
          transform: translateY(-2px);
        }

        .gov-button-secondary {
          background: ${govColors.primary.white};
          color: ${govColors.primary.blue};
          border: 2px solid ${govColors.primary.blue};
          transition: all 0.3s ease;
        }

        .gov-button-secondary:hover {
          background: ${govColors.background.accent};
          transform: translateY(-2px);
        }
      `}</style>

      {/* Brochure Download - Sticky */}
      <div className="brochure-download">
        <a 
          href="/brochure/BVSS-Brochure-2025.pdf" 
          download="BVSS-Brochure-2025.pdf"
          className="flex flex-col items-center p-4 text-center no-underline"
          style={{ color: govColors.primary.orange }}
        >
          <FaDownload className="text-2xl mb-2" />
          <span className="font-bold text-sm">DOWNLOAD</span>
          <span className="text-xs mt-1">BROCHURE</span>
        </a>
      </div>

      {/* Announcement Banner */}
      <motion.div 
        className="overflow-hidden relative"
        style={{ 
          background: `linear-gradient(90deg, ${govColors.primary.blue}, ${govColors.secondary.lightBlue})`,
          color: govColors.primary.white
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center py-3">
          <div 
            className="flex items-center px-6"
            style={{ 
              backgroundColor: govColors.primary.orange,
              color: govColors.primary.white
            }}
          >
            <MdAnnouncement className="text-xl mr-2 animate-pulse" />
            <span className="font-bold text-sm">ANNOUNCEMENTS</span>
          </div>
          <div className="flex-1 relative">
            <div className="announcement-scroll whitespace-nowrap py-1">
              {announcements.map((announcement, index) => (
                <span key={index} className="mx-8 text-sm font-medium">
                  {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Slider Section - Clean without overlay content */}
      <motion.div
        className="w-full hero-slider relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Slider {...sliderSettings} className="w-full h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`BVSS Campus ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex-grow py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Welcome Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Bharat Vikas Shikshan Sanstha
            </h1>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-lg max-w-4xl mx-auto leading-relaxed"
              style={{ color: govColors.text.secondary }}
            >
              Government Recognized Institution for Ayurvedic and Medical Education Excellence. 
              Empowering Healthcare Professionals Since 1998.
            </p>
          </motion.div>

          <div className="section-divider"></div>

          {/* Quick Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: FaUsers, number: "2000+", label: "Students Enrolled" },
              { icon: MdSchool, number: "95%", label: "Graduation Rate" },
              { icon: FaAward, number: "3.8", label: "Average CGPA" },
              { icon: FaGlobe, number: "50+", label: "Partner Hospitals" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-lg text-center border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: govColors.background.primary,
                  borderColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange,
                  color: govColors.text.primary
                }}
              >
                <stat.icon 
                  className="text-3xl mx-auto mb-3" 
                  style={{ color: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                />
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</h3>
                <p className="text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-divider"></div>

          {/* About Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: govColors.primary.blue }}
                >
                  About Our Institution
                </h2>
                <div 
                  className="w-20 h-1 mb-6"
                  style={{ backgroundColor: govColors.primary.orange }}
                ></div>
                <p 
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Bharat Vikas Shikshan Sanstha stands as a beacon of excellence in Ayurvedic and medical education. 
                  As the educational arm of BVG India Ltd, we are committed to nurturing the next generation of healthcare professionals.
                </p>
                <p 
                  className="text-lg mb-8 leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Our institution combines traditional Ayurvedic wisdom with modern medical practices, providing students 
                  with a comprehensive understanding of holistic healthcare approaches.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: FaHandsHelping, text: "Government Approved" },
                    { icon: FaLeaf, text: "Ayurvedic Excellence" },
                    { icon: FaAward, text: "Expert Faculty" },
                    { icon: FaBookOpen, text: "Modern Facilities" }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: govColors.background.secondary,
                        borderColor: govColors.border.light
                      }}
                    >
                      <feature.icon 
                        className="text-xl mr-3" 
                        style={{ color: govColors.primary.orange }}
                      />
                      <span 
                        className="font-medium"
                        style={{ color: govColors.text.primary }}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/BVG Imges/images/slider/banner-3.jpg" 
                  alt="BVSS Campus" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover border-4"
                  style={{ borderColor: govColors.primary.blue }}
                />
                <div 
                  className="absolute -bottom-4 -left-4 p-6 rounded-lg shadow-lg border-2"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.primary.orange
                  }}
                >
                  <h4 
                    className="text-2xl font-bold"
                    style={{ color: govColors.primary.orange }}
                  >
                    25+
                  </h4>
                  <p style={{ color: govColors.text.secondary }}>Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="section-divider"></div>

          {/* Our Strength Section */}
          <motion.div
            className="mb-16 p-10 rounded-lg shadow-lg border-2"
            style={{ 
              backgroundColor: govColors.background.secondary,
              borderColor: govColors.border.medium
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Our Institutional Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaAward,
                  title: "Government Recognition",
                  description: "Registered with Office of Public Trust with full government approval for all courses."
                },
                {
                  icon: FaBookOpen,
                  title: "Modern Infrastructure",
                  description: "Dedicated administrative and educational buildings with state-of-the-art facilities."
                },
                {
                  icon: FaUsers,
                  title: "Expert Faculty",
                  description: "Experienced doctors in Ayurveda and Allopathy delivering quality education."
                },
                {
                  icon: FaHandsHelping,
                  title: "Hospital Network",
                  description: "350+ affiliated hospitals with 10,000+ beds for practical training."
                },
                {
                  icon: MdSchool,
                  title: "Professional Enhancement",
                  description: "MCIM registered programs for advancing healthcare professional skills."
                },
                {
                  icon: FaLeaf,
                  title: "Holistic Approach",
                  description: "Integration of traditional Ayurvedic practices with modern medical science."
                }
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.border.light
                  }}
                  whileHover={{ y: -5 }}
                >
                  <strength.icon 
                    className="text-3xl mb-4" 
                    style={{ color: govColors.primary.orange }}
                  />
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: govColors.text.primary }}
                  >
                    {strength.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: govColors.text.secondary }}
                  >
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="section-divider"></div>

          {/* Medical Plantation Section */}
           <div 
            className="p-10 rounded-lg shadow-lg mb-16 border-2"
            style={{ 
              backgroundColor: govColors.background.accent,
              borderColor: govColors.primary.blue
            }}
          >
            <h2 
              className="text-3xl font-bold mb-4 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Medicinal Plant Cultivation
            </h2>
            <p 
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: govColors.text.secondary }}
            >
              Our medicinal plant garden provides hands-on learning experience for students in fellowship programs, 
              especially those specializing in Ayurvedic treatments and dermatology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Aloe Vera",
                  sanskrit: "Kumari",
                  description: "Essential for dermatology fellowship students. Used extensively in skin treatments and wound healing.\n\nKey Features:\n• Anti-inflammatory properties\n• Wound healing acceleration\n• Skin moisturizing effects\n• Burn treatment applications\n\nFellowship Applications:\n• Dermatology practice\n• Pediatric skin care\n• Women's health treatments",
                  image: "/aloevera.jpg"
                },
                {
                  name: "Tulsi",
                  sanskrit: "Ocimum sanctum",
                  description: "Vital for general medicine and respiratory health management in our fellowship programs.\n\nMedicinal Properties:\n• Immune system enhancement\n• Respiratory health support\n• Stress reduction\n• Antimicrobial effects\n\nFellowship Applications:\n• General medicine practice\n• Child healthcare\n• Maternal health support",
                  image: "/tulsi.jpg"
                },
                {
                  name: "Ashwagandha",
                  sanskrit: "Withania somnifera",
                  description: "Important adaptogen studied in our healthcare management programs for stress-related conditions.\n\nTherapeutic Benefits:\n• Stress management\n• Hormonal balance\n• Energy enhancement\n• Cognitive improvement\n\nFellowship Applications:\n• Women's health management\n• General medicine practice\n• Stress-related disorders",
                  image: "/ashwagandha.jpg"
                }
              ].map((plant, index) => (
                <div
                  key={index}
                  className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
                  onClick={() => handleFlip(index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="relative w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={plant.image}
                          alt={plant.name}
                        />
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-6 text-white"
                          style={{ 
                            background: `linear-gradient(transparent, ${govColors.primary.blue}dd)`
                          }}
                        >
                          <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
                          <p className="text-sm opacity-90 mb-3">{plant.sanskrit}</p>
                          <div className="flex items-center text-sm">
                            <FaInfoCircle className="mr-2" />
                            <span>Click to explore fellowship applications</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card-back">
                      <h3 
                        className="text-xl font-bold mb-2"
                        style={{ color: govColors.primary.blue }}
                      >
                        {plant.name}
                      </h3>
                      <p 
                        className="text-sm mb-4"
                        style={{ color: govColors.primary.orange }}
                      >
                        {plant.sanskrit}
                      </p>
                      <div className="flex-grow overflow-auto">
                        <p 
                          className="text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: govColors.text.secondary }}
                        >
                          {plant.description}
                        </p>
                      </div>
                      <div 
                        className="pt-4 mt-auto border-t"
                        style={{ borderColor: govColors.border.light }}
                      >
                        <div className="flex justify-between items-center">
                          <span 
                            className="text-xs"
                            style={{ color: govColors.text.secondary }}
                          >
                            Tap to flip back
                          </span>
                          <button 
                            className="px-4 py-2 rounded text-sm font-medium gov-button"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="p-12 rounded-lg shadow-lg text-center border-2"
            style={{ 
              backgroundColor: govColors.primary.blue,
              borderColor: govColors.primary.orange,
              color: govColors.primary.white
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Healthcare Journey
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Join our distinguished community of healthcare professionals and embark on a transformative 
              educational experience that bridges ancient wisdom with modern medical science.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: FaCalendarAlt, title: "Admissions Open", desc: "Apply for 2025 batch" },
                { icon: FaAward, title: "Scholarship Available", desc: "Merit-based programs" },
                { icon: MdSchool, title: "Career Support", desc: "100% placement assistance" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border-2"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.primary.orange,
                    color: govColors.text.primary
                  }}
                >
                  <item.icon 
                    className="text-3xl mb-3 mx-auto"
                    style={{ color: govColors.primary.orange }}
                  />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p 
                    className="text-sm"
                    style={{ color: govColors.text.secondary }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="px-10 py-4 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gov-button">
                  <MdSchool className="mr-2" />
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-4 font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gov-button-secondary">
                  <FaCalendarAlt className="mr-2" />
                  Schedule Visit
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div 
        className="py-16"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <InquiryForm />
      </div>
    </div>
  );
};

export default Home;
