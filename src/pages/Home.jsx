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
  FaFileAlt,
  FaInfoCircle,
  FaStar,
  FaQuoteLeft
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
    "🎓 Fellowship Programs 2025 Open - Apply Now for Healthcare Management Courses",
    "📚 Fellowship Session starts from August 15, 2025",
    "🏆 BVSS Ranked Among Top Fellowship Training Institutes in Maharashtra",
    "💡 Special Scholarship Program for Healthcare Professionals",
    "🌿 New Herbal Garden & Research Center for Fellowship Programs",
    "📋 Online Application Portal Now Live - Quick & Easy Process"
  ];

  // English only reviews
  const reviews = [
    {
      name: "Dr. Rajesh Sharma",
      course: "Fellowship in General Medicine",
      rating: 5,
      text: "The fellowship program at BVSS significantly enhanced my medical knowledge. The faculty is highly experienced and practical training is excellent. The hospital network provides incredible exposure to real-world healthcare scenarios.",
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Dr. Priya Patel",
      course: "Fellowship in Women & Maternal Health",
      rating: 5,
      text: "There's no better institute than BVSS for specialization in women's health. The facilities and teaching quality are outstanding. The comprehensive curriculum covers all aspects of maternal healthcare management.",
      location: "Pune, Maharashtra"
    },
    {
      name: "Dr. Amit Kumar",
      course: "Fellowship in Child Health Care",
      rating: 5,
      text: "BVSS is the perfect choice for gaining expertise in child healthcare management. The practical exposure and hospital network is excellent. Faculty provides personalized attention to each fellow.",
      location: "Nagpur, Maharashtra"
    },
    {
      name: "Dr. Sangeeta Deshmukh",
      course: "Fellowship in Ayurvedic Dermatology",
      rating: 5,
      text: "BVSS has no comparison for specialized training in Ayurvedic dermatology. It's a perfect combination of traditional and modern approaches. The hands-on training is exceptional.",
      location: "Aurangabad, Maharashtra"
    },
    {
      name: "Dr. Vikas Joshi",
      course: "Fellowship in Kharsutra Therapy",
      rating: 5,
      text: "BVSS is the best institute for hands-on training in Kharsutra therapy. The surgeons are highly skilled and teaching methodology is outstanding. Clinical exposure is unmatched.",
      location: "Nashik, Maharashtra"
    }
  ];

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 1500, // Reduced speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Reduced speed
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplaySpeed: 6000 // Reduced speed for mobile
        }
      }
    ]
  };

  const reviewSliderSettings = {
    dots: true,
    dotsClass: "slick-dots review-dots",
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
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
          animation: scroll-left 60s linear infinite; /* Reduced speed */
        }

        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .slick-dots {
          bottom: 20px;
          z-index: 10;
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

        .review-dots {
          bottom: -40px;
        }

        .review-dots li button:before {
          color: ${govColors.primary.blue};
          font-size: 10px;
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
            height: 300px;
          }
          .hero-slider .slick-slide img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        .brochure-download {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          background: ${govColors.primary.orange};
          color: ${govColors.primary.white};
          border: none;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
          writing-mode: vertical-lr;
          text-orientation: mixed;
          padding: 16px 12px;
          transition: all 0.3s ease;
          font-weight: bold;
          font-size: 12px;
        }

        .brochure-download:hover {
          background: ${govColors.secondary.darkOrange};
          transform: translateY(-50%) translateX(-5px);
          box-shadow: -8px 0 20px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 768px) {
          .brochure-download {
            writing-mode: initial;
            text-orientation: initial;
            top: auto;
            bottom: 20px;
            right: 20px;
            border-radius: 8px;
            padding: 12px 16px;
            font-size: 10px;
            transform: none;
          }
          
          .brochure-download:hover {
            transform: scale(1.05);
          }
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

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2rem;
          }
          .text-5xl {
            font-size: 2.5rem;
          }
          .px-10 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .py-4 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          .announcement-scroll {
            animation: scroll-left 40s linear infinite;
          }
        }

        .announcement-banner {
          position: relative;
          z-index: 30;
        }

        .slider-container {
          position: relative;
          z-index: 10;
        }

        /* Fixed announcement positioning */
        .announcement-content {
          display: flex;
          align-items: center;
          min-height: 48px;
        }

        .announcement-label {
          flex-shrink: 0;
          min-width: fit-content;
          padding: 12px 16px;
          background-color: ${govColors.primary.blue};
          color: ${govColors.primary.white};
          border-right: 2px solid ${govColors.primary.white};
          display: flex;
          align-items: center;
          height: 100%;
        }

        .announcement-text-container {
          flex: 1;
          overflow: hidden;
          height: 48px;
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .announcement-label {
            padding: 8px 12px;
            min-height: 40px;
          }
          
          .announcement-text-container {
            height: 40px;
          }
        }
      `}</style>

      {/* Brochure Download - Fixed to extreme right - Only "BROCHURE" */}
      <div className="brochure-download">
        <a 
          href="/brochure/BVSS-Fellowship-Brochure-2025.pdf" 
          download="BVSS-Fellowship-Brochure-2025.pdf"
          className="text-center no-underline text-white"
        >
          BROCHURE
        </a>
      </div>

      {/* Fixed Announcement Banner - Improved positioning */}
      <motion.div 
        className="overflow-hidden relative announcement-banner"
        style={{ 
          backgroundColor: govColors.primary.orange,
          color: govColors.primary.white
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="announcement-content">
          <div className="announcement-label">
            <MdAnnouncement className="text-lg md:text-xl mr-2 animate-pulse" />
            <span className="font-bold text-xs md:text-sm whitespace-nowrap">ANNOUNCEMENTS</span>
          </div>
          <div className="announcement-text-container">
            <div className="announcement-scroll whitespace-nowrap">
              {announcements.map((announcement, index) => (
                <span key={index} className="mx-4 md:mx-8 text-xs md:text-sm font-medium">
                  {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Slider Section */}
      <motion.div
        className="w-full hero-slider relative overflow-hidden slider-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Slider {...sliderSettings} className="w-full h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`BVSS Fellowship Training Campus ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex-grow py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Welcome Section */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Bharat Vikas Shikshan Sanstha
            </h1>
            <div 
              className="w-24 md:w-32 h-1 mx-auto mb-6"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4"
              style={{ color: govColors.text.secondary }}
            >
              Government Recognized Institution for Fellowship Training in Healthcare Management. 
              Empowering Healthcare Professionals Since 1998.
            </p>
          </motion.div>

          <div className="section-divider"></div>

          {/* Quick Stats Section - Mobile Responsive */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: FaUsers, number: "500+", label: "Fellowship Graduates" },
              { icon: MdSchool, number: "95%", label: "Completion Rate" },
              { icon: FaAward, number: "5", label: "Specialized Programs" },
              { icon: FaGlobe, number: "50+", label: "Partner Hospitals" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-4 md:p-6 rounded-lg text-center border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: govColors.background.primary,
                  borderColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange,
                  color: govColors.text.primary
                }}
              >
                <stat.icon 
                  className="text-2xl md:text-3xl mx-auto mb-2 md:mb-3" 
                  style={{ color: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                />
                <h3 className="text-xl md:text-3xl font-bold mb-1">{stat.number}</h3>
                <p className="text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-divider"></div>

          {/* About Section - Mobile Responsive */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="px-4 lg:px-0">
                <h2 
                  className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
                  style={{ color: govColors.primary.blue }}
                >
                  About Our Institution
                </h2>
                <div 
                  className="w-16 md:w-20 h-1 mb-4 md:mb-6"
                  style={{ backgroundColor: govColors.primary.orange }}
                ></div>
                <p 
                  className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Bharat Vikas Shikshan Sanstha stands as a beacon of excellence in fellowship training for healthcare professionals. 
                  As the educational arm of BVG India Ltd, we are committed to nurturing the next generation of specialized healthcare experts.
                </p>
                <p 
                  className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Our institution combines traditional medical wisdom with modern healthcare practices, providing students 
                  with a comprehensive understanding of specialized healthcare management.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: FaHandsHelping, text: "Government Approved" },
                    { icon: FaLeaf, text: "Healthcare Excellence" },
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
                        className="text-lg md:text-xl mr-3" 
                        style={{ color: govColors.primary.orange }}
                      />
                      <span 
                        className="font-medium text-sm md:text-base"
                        style={{ color: govColors.text.primary }}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative px-4 lg:px-0">
                <img 
                  src="/BVG Imges/images/slider/banner-3.jpg" 
                  alt="BVSS Fellowship Training Campus" 
                  className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover border-4"
                  style={{ borderColor: govColors.primary.blue }}
                />
                <div 
                  className="absolute -bottom-4 -left-4 p-4 md:p-6 rounded-lg shadow-lg border-2"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.primary.orange
                  }}
                >
                  <h4 
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: govColors.primary.orange }}
                  >
                    27+
                  </h4>
                  <p className="text-sm" style={{ color: govColors.text.secondary }}>Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="section-divider"></div>

          {/* Reviews Section - English Only */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
                style={{ color: govColors.primary.blue }}
              >
                Student <span style={{ color: govColors.primary.orange }}>Reviews</span>
              </h2>
              <div 
                className="w-20 md:w-24 h-1 mx-auto mb-6 md:mb-8"
                style={{ backgroundColor: govColors.primary.orange }}
              ></div>
              <p 
                className="text-base md:text-lg max-w-3xl mx-auto px-4"
                style={{ color: govColors.text.secondary }}
              >
                Real experiences from our fellowship graduates
              </p>
            </div>

            <Slider {...reviewSliderSettings} className="review-slider">
              {reviews.map((review, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 border-l-4 h-auto"
                    style={{ borderLeftColor: govColors.primary.orange }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className="text-yellow-400 text-sm"
                          />
                        ))}
                      </div>
                      <FaQuoteLeft 
                        className="text-2xl opacity-20"
                        style={{ color: govColors.primary.blue }}
                      />
                    </div>

                    <div className="mb-4">
                      <p 
                        className="text-sm mb-3 leading-relaxed"
                        style={{ color: govColors.text.secondary }}
                      >
                        {review.text}
                      </p>
                    </div>

                    <div 
                      className="pt-4 border-t"
                      style={{ borderColor: govColors.border.light }}
                    >
                      <h4 
                        className="font-bold text-base mb-1"
                        style={{ color: govColors.primary.blue }}
                      >
                        {review.name}
                      </h4>
                      <p 
                        className="text-xs font-medium mb-2"
                        style={{ color: govColors.primary.orange }}
                      >
                        {review.course}
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: govColors.text.secondary }}
                      >
                        {review.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          <div className="section-divider"></div>

          {/* Our Strength Section - Mobile Responsive */}
          <motion.div
            className="mb-12 md:mb-16 p-6 md:p-10 rounded-lg shadow-lg border-2"
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
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Our Institutional Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icon: FaAward,
                  title: "Government Recognition",
                  description: "Registered with Office of Public Trust with full government approval for all fellowship programs."
                },
                {
                  icon: FaBookOpen,
                  title: "Modern Infrastructure",
                  description: "Dedicated administrative and educational buildings with state-of-the-art facilities for fellowship training."
                },
                {
                  icon: FaUsers,
                  title: "Expert Faculty",
                  description: "Experienced doctors in various specializations delivering quality fellowship education."
                },
                {
                  icon: FaHandsHelping,
                  title: "Hospital Network",
                  description: "50+ affiliated hospitals with extensive clinical exposure for practical fellowship training."
                },
                {
                  icon: MdSchool,
                  title: "Professional Enhancement",
                  description: "MCIM registered fellowship programs for advancing healthcare professional skills."
                },
                {
                  icon: FaLeaf,
                  title: "Holistic Approach",
                  description: "Integration of traditional practices with modern medical science in specialized fellowship programs."
                }
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  className="p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.border.light
                  }}
                  whileHover={{ y: -5 }}
                >
                  <strength.icon 
                    className="text-2xl md:text-3xl mb-3 md:mb-4" 
                    style={{ color: govColors.primary.orange }}
                  />
                  <h3 
                    className="text-lg md:text-xl font-bold mb-2 md:mb-3"
                    style={{ color: govColors.text.primary }}
                  >
                    {strength.title}
                  </h3>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: govColors.text.secondary }}
                  >
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="section-divider"></div>

          {/* Medical Plantation Section - Mobile Responsive */}
          <div 
            className="p-6 md:p-10 rounded-lg shadow-lg mb-12 md:mb-16 border-2"
            style={{ 
              backgroundColor: govColors.background.accent,
              borderColor: govColors.primary.blue
            }}
          >
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Medicinal Plant Cultivation
            </h2>
            <p 
              className="text-base md:text-lg text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4"
              style={{ color: govColors.text.secondary }}
            >
              Our medicinal plant garden provides hands-on learning experience for students in fellowship programs, 
              especially those specializing in Ayurvedic treatments and dermatology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                          className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
                          style={{ 
                            background: `linear-gradient(transparent, ${govColors.primary.blue}dd)`
                          }}
                        >
                          <h3 className="text-lg md:text-xl font-bold mb-2">{plant.name}</h3>
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
                        className="text-lg md:text-xl font-bold mb-2"
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
                            className="px-3 py-2 rounded text-xs font-medium gov-button"
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

          {/* Call to Action - Mobile Responsive */}
          <motion.div
            className="p-8 md:p-12 rounded-lg shadow-lg text-center border-2"
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
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Begin Your Healthcare Journey
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed px-4">
              Join our distinguished community of healthcare professionals and embark on a transformative 
              educational experience in specialized fellowship programs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              {[
                { icon: FaCalendarAlt, title: "Admissions Open", desc: "Apply for 2025 fellowship batch" },
                { icon: FaAward, title: "Scholarship Available", desc: "Merit-based programs" },
                { icon: MdSchool, title: "Career Support", desc: "100% placement assistance" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 md:p-6 rounded-lg border-2"
                  style={{ 
                    backgroundColor: govColors.primary.white,
                    borderColor: govColors.primary.orange,
                    color: govColors.text.primary
                  }}
                >
                  <item.icon 
                    className="text-2xl md:text-3xl mb-3 mx-auto"
                    style={{ color: govColors.primary.orange }}
                  />
                  <h4 className="font-bold mb-2 text-sm md:text-base">{item.title}</h4>
                  <p 
                    className="text-xs md:text-sm"
                    style={{ color: govColors.text.secondary }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="px-6 md:px-10 py-3 md:py-4 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gov-button text-sm md:text-base">
                  <MdSchool className="mr-2" />
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 md:px-10 py-3 md:py-4 font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gov-button-secondary text-sm md:text-base">
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
        className="py-8 md:py-16"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <InquiryForm />
      </div>
    </div>
  );
};

export default Home;
