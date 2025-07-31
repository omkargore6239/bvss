import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaAward, 
  FaCalendarAlt, 
  FaUsers, 
  FaStar, 
  FaChevronRight, 
  FaEye, 
  FaHeart, 
  FaShare, 
  FaFilter, 
  FaTh, 
  FaList,
  FaDownload,
  FaMedal,
  FaCertificate,
  FaGraduationCap,
  FaSpinner,
  FaChevronLeft,
  FaTimes,
  FaSearchPlus
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { Link } from 'react-router-dom';
import { govColors } from '../utils/colors';

// Lazy loading image component
const LazyImage = ({ src, alt, className, onClick, onLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: govColors.background.secondary }}
        >
          <FaSpinner className="animate-spin text-2xl" style={{ color: govColors.primary.blue }} />
        </div>
      )}
      {error ? (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            backgroundColor: govColors.background.secondary,
            color: govColors.text.secondary
          }}
        >
          <span className="text-sm">Image not found</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(12);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

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

  const achievements = [
    {
      title: 'Government Recognition Award',
      year: '2024',
      description: 'Awarded highest recognition by Government of Maharashtra for excellence in fellowship training programs',
      category: 'Government Award',
      icon: FaTrophy,
      impact: 'Institutional Excellence',
      color: govColors.primary.blue
    },
    {
      title: 'Best Fellowship Training Institute',
      year: '2023',
      description: 'Recognized as the leading fellowship training institution by Medical Council of India',
      category: 'National Award',
      icon: FaMedal,
      impact: 'National Recognition',
      color: govColors.primary.orange
    },
    {
      title: 'Healthcare Excellence Award',
      year: '2023',
      description: 'Received excellence award for outstanding contribution to healthcare professional development',
      category: 'Healthcare',
      icon: FaAward,
      impact: 'Healthcare Development',
      color: govColors.primary.blue
    },
    {
      title: 'Quality Certification ISO 9001:2015',
      year: '2022',
      description: 'Quality management system certification for educational and training excellence',
      category: 'Quality',
      icon: FaCertificate,
      impact: 'Quality Assurance',
      color: govColors.primary.orange
    },
    {
      title: 'Digital Healthcare Initiative',
      year: '2022',
      description: 'Successfully implemented digital learning infrastructure for fellowship programs',
      category: 'Technology',
      icon: MdSchool,
      impact: 'Digital Transformation',
      color: govColors.primary.blue
    },
    {
      title: 'Community Health Service Award',
      year: '2021',
      description: 'Recognized for outstanding community health services through fellowship graduates',
      category: 'Community Service',
      icon: FaUsers,
      impact: 'Community Impact',
      color: govColors.primary.orange
    }
  ];

  // Updated gallery with proper file names from your images
  const galleryItems = [
    { id: 1, image: '/BVG Imges/images/gallery/f1.jpg', title: 'Fellowship Graduation Ceremony', category: 'Academic', views: 1250, likes: 89 },
    { id: 2, image: '/BVG Imges/images/gallery/f2.jpg', title: 'Clinical Training Session', category: 'Training', views: 1100, likes: 75 },
    { id: 3, image: '/BVG Imges/images/gallery/f3.jpg', title: 'Student Practical Training', category: 'Training', views: 980, likes: 67 },
    { id: 4, image: '/BVG Imges/images/gallery/f4.jpg', title: 'Award Ceremony 2024', category: 'Awards', views: 1340, likes: 108 },
    { id: 5, image: '/BVG Imges/images/gallery/g1.jpg', title: 'Faculty Recognition', category: 'Faculty', views: 920, likes: 71 },
    { id: 6, image: '/BVG Imges/images/gallery/g2.jpg', title: 'Campus Infrastructure', category: 'Campus', views: 1180, likes: 83 },
    { id: 7, image: '/BVG Imges/images/gallery/g3.jpg', title: 'Fellowship Program Launch', category: 'Academic', views: 1050, likes: 78 },
    { id: 8, image: '/BVG Imges/images/gallery/g4.jpg', title: 'Healthcare Workshop', category: 'Training', views: 890, likes: 62 },
    { id: 9, image: '/BVG Imges/images/gallery/g5.jpg', title: 'Student Achievement', category: 'Academic', views: 1200, likes: 91 },
    { id: 10, image: '/BVG Imges/images/gallery/g6.jpg', title: 'Medical Equipment Training', category: 'Training', views: 870, likes: 65 },
    { id: 11, image: '/BVG Imges/images/gallery/g7.jpg', title: 'Community Health Camp', category: 'Community', views: 1150, likes: 86 },
    { id: 12, image: '/BVG Imges/images/gallery/g8.jpg', title: 'Faculty Development Program', category: 'Faculty', views: 950, likes: 73 },
    { id: 13, image: '/BVG Imges/images/gallery/g9.jpg', title: 'Clinical Skills Assessment', category: 'Training', views: 1080, likes: 79 },
    { id: 14, image: '/BVG Imges/images/gallery/g10.jpg', title: 'Research Presentation', category: 'Academic', views: 990, likes: 68 },
    { id: 15, image: '/BVG Imges/images/gallery/g11.jpg', title: 'Laboratory Training', category: 'Training', views: 1120, likes: 84 },
    { id: 16, image: '/BVG Imges/images/gallery/g12.jpg', title: 'Student Counseling Session', category: 'Academic', views: 820, likes: 58 },
    { id: 17, image: '/BVG Imges/images/gallery/gc1.jpg', title: 'Healthcare Seminar', category: 'Academic', views: 1300, likes: 95 },
    { id: 18, image: '/BVG Imges/images/gallery/gc2.jpg', title: 'Campus Celebration', category: 'Campus', views: 1080, likes: 77 },
    { id: 19, image: '/BVG Imges/images/gallery/gc3.jpg', title: 'Fellowship Certificate Distribution', category: 'Awards', views: 1220, likes: 88 },
    { id: 20, image: '/BVG Imges/images/gallery/gc4.jpg', title: 'Medical Conference', category: 'Academic', views: 1160, likes: 82 },
    { id: 21, image: '/BVG Imges/images/gallery/gc5.jpg', title: 'Practical Examination', category: 'Academic', views: 940, likes: 69 },
    { id: 22, image: '/BVG Imges/images/gallery/gc6.jpg', title: 'Health Awareness Program', category: 'Community', views: 1090, likes: 76 },
    { id: 23, image: '/BVG Imges/images/gallery/gc7.jpg', title: 'Faculty Meeting', category: 'Faculty', views: 780, likes: 54 },
    { id: 24, image: '/BVG Imges/images/gallery/gc8.jpg', title: 'Student Project Presentation', category: 'Academic', views: 1040, likes: 74 },
    { id: 25, image: '/BVG Imges/images/gallery/gcc1.jpg', title: 'Clinical Rounds', category: 'Training', views: 1190, likes: 85 },
    { id: 26, image: '/BVG Imges/images/gallery/gcc5.jpg', title: 'Educational Workshop', category: 'Training', views: 910, likes: 63 },
    { id: 27, image: '/BVG Imges/images/gallery/gcc6.jpg', title: 'Achievement Recognition', category: 'Awards', views: 1270, likes: 92 },
    { id: 28, image: '/BVG Imges/images/gallery/gcc7.jpg', title: 'Campus Tour', category: 'Campus', views: 860, likes: 61 },
    { id: 29, image: '/BVG Imges/images/gallery/im1.jpg', title: 'Fellowship Orientation', category: 'Academic', views: 1140, likes: 81 },
    { id: 30, image: '/BVG Imges/images/gallery/im2.jpg', title: 'Healthcare Innovation', category: 'Training', views: 1020, likes: 72 },
    { id: 31, image: '/BVG Imges/images/gallery/im3.jpg', title: 'Student Support Services', category: 'Academic', views: 970, likes: 66 },
    { id: 32, image: '/BVG Imges/images/gallery/im4.jpg', title: 'Medical Equipment', category: 'Campus', views: 1100, likes: 78 },
    { id: 33, image: '/BVG Imges/images/gallery/l1.jpg', title: 'Faculty Training Program', category: 'Faculty', views: 930, likes: 67 },
    { id: 34, image: '/BVG Imges/images/gallery/l2.jpg', title: 'Fellowship Completion', category: 'Awards', views: 1210, likes: 87 },
    { id: 35, image: '/BVG Imges/images/gallery/l3.jpg', title: 'Healthcare Excellence', category: 'Training', views: 1050, likes: 75 },
    { id: 36, image: '/BVG Imges/images/gallery/l4.jpg', title: 'Student Activities', category: 'Campus', views: 890, likes: 64 },
    { id: 37, image: '/BVG Imges/images/gallery/sagar.jpg', title: 'Institution Pride', category: 'Campus', views: 1180, likes: 83 }
  ];

  const stats = [
    { number: '25+', label: 'Awards Won', icon: FaTrophy },
    { number: '500+', label: 'Fellowship Graduates', icon: FaGraduationCap },
    { number: '1K+', label: 'Students Impacted', icon: FaUsers },
    { number: '27+', label: 'Years of Excellence', icon: FaStar }
  ];

  const categories = ['all', 'Academic', 'Training', 'Awards', 'Faculty', 'Campus', 'Community'];

  // Enhanced filtering with search
  const filteredGallery = galleryItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openImageModal = useCallback((image) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredGallery.findIndex(item => item.id === image.id));
  }, [filteredGallery]);

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  }, []);

  const navigateImage = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredGallery.length
      : (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredGallery[newIndex]);
  }, [currentImageIndex, filteredGallery]);

  const handleKeyPress = useCallback((e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'Escape') closeImageModal();
    }
  }, [selectedImage, navigateImage, closeImageModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 12, filteredGallery.length));
  };

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const resetFiltersAndView = () => {
    setActiveFilter('all');
    setSearchQuery('');
    setVisibleImages(12);
  };

  return (
    <div style={{ backgroundColor: govColors.background.primary }}>
      <style>{`
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

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .image-hover {
          transition: transform 0.3s ease;
        }

        .image-hover:hover {
          transform: scale(1.05);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
        }

        .modal-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: ${govColors.primary.blue};
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .modal-nav-button:hover {
          background: ${govColors.primary.orange};
          transform: translateY(-50%) scale(1.1);
        }

        .modal-nav-prev {
          left: -70px;
        }

        .modal-nav-next {
          right: -70px;
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: ${govColors.primary.orange};
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .modal-close:hover {
          background: ${govColors.secondary.darkOrange};
          transform: scale(1.1);
        }

        .modal-info {
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
          background: ${govColors.primary.blue};
          color: white;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .modal-nav-button {
            width: 40px;
            height: 40px;
          }
          
          .modal-nav-prev {
            left: -50px;
          }
          
          .modal-nav-next {
            right: -50px;
          }
          
          .modal-info {
            bottom: -80px;
            font-size: 14px;
          }
        }

        .lazy-image-container {
          position: relative;
          overflow: hidden;
          background-color: ${govColors.background.secondary};
        }

        .filter-search-container {
          background: ${govColors.primary.white};
          border: 2px solid ${govColors.border.light};
          border-radius: 8px;
          padding: 4px;
        }

        .image-grid-masonry {
          column-count: 4;
          column-gap: 1.5rem;
          column-fill: balance;
        }

        @media (max-width: 1024px) {
          .image-grid-masonry {
            column-count: 3;
          }
        }

        @media (max-width: 768px) {
          .image-grid-masonry {
            column-count: 2;
          }
        }

        @media (max-width: 480px) {
          .image-grid-masonry {
            column-count: 1;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section 
        className="relative text-white py-20 overflow-hidden"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Achievements &
              <span style={{ color: govColors.primary.orange }}> Gallery</span>
            </h1>
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed opacity-95">
              Celebrating milestones, fostering innovation, and building a legacy of excellence 
              in fellowship training and healthcare education.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gov-button"
                onClick={() => document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' })}
              >
                View Achievements
              </button>
              <button 
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? govColors.primary.orange : govColors.primary.blue 
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: govColors.primary.blue }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="font-medium"
                    style={{ color: govColors.text.secondary }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Achievements Section */}
      <section 
        id="achievements" 
        className="py-20"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Our Achievements
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: govColors.text.secondary }}
            >
              Recognition of our commitment to excellence in fellowship training 
              and healthcare professional development
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden border-l-4"
                style={{ borderLeftColor: achievement.color }}
                variants={fadeInUp}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <achievement.icon 
                      className="text-4xl" 
                      style={{ color: achievement.color }}
                    />
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ 
                        backgroundColor: achievement.color === govColors.primary.blue ? govColors.background.accent : govColors.background.orange,
                        color: achievement.color
                      }}
                    >
                      {achievement.year}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: govColors.text.primary }}
                  >
                    {achievement.title}
                  </h3>
                  <p 
                    className="mb-4 leading-relaxed"
                    style={{ color: govColors.text.secondary }}
                  >
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: govColors.background.accent,
                        color: govColors.primary.blue
                      }}
                    >
                      {achievement.category}
                    </span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: govColors.text.secondary }}
                    >
                      {achievement.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Enhanced Gallery Section */}
      <section 
        id="gallery" 
        className="py-20"
        style={{ backgroundColor: govColors.primary.white }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Campus Gallery
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-xl max-w-3xl mx-auto mb-8"
              style={{ color: govColors.text.secondary }}
            >
              Capturing moments of learning, achievement, and community engagement 
              in our fellowship programs
            </p>
            
            {/* Enhanced Filter and Search Controls */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8">
              {/* Category Filter */}
              <div className="filter-search-container">
                <div className="flex items-center flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 m-1 ${
                        activeFilter === category
                          ? 'text-white'
                          : 'hover:opacity-75'
                      }`}
                      style={{
                        backgroundColor: activeFilter === category ? govColors.primary.blue : 'transparent',
                        color: activeFilter === category ? govColors.primary.white : govColors.text.secondary
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="filter-search-container">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border-0 outline-none bg-transparent"
                    style={{ color: govColors.text.primary }}
                  />
                  <FaFilter 
                    className="text-lg mr-2" 
                    style={{ color: govColors.primary.blue }}
                  />
                </div>
              </div>
              
              {/* View Mode Toggle */}
              <div className="filter-search-container">
                <div className="flex items-center">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors duration-300`}
                    style={{
                      backgroundColor: viewMode === 'grid' ? govColors.primary.orange : 'transparent',
                      color: viewMode === 'grid' ? govColors.primary.white : govColors.text.secondary
                    }}
                  >
                    <FaTh className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('masonry')}
                    className={`p-2 rounded-lg transition-colors duration-300`}
                    style={{
                      backgroundColor: viewMode === 'masonry' ? govColors.primary.orange : 'transparent',
                      color: viewMode === 'masonry' ? govColors.primary.white : govColors.text.secondary
                    }}
                  >
                    <FaSearchPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Reset Button */}
              {(activeFilter !== 'all' || searchQuery) && (
                <button
                  onClick={resetFiltersAndView}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 gov-button-secondary"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Loading Progress */}
          {imagesLoaded < visibleImages && (
            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center px-4 py-2 rounded-lg"
                style={{ 
                  backgroundColor: govColors.background.accent,
                  color: govColors.primary.blue
                }}
              >
                <FaSpinner className="animate-spin mr-2" />
                Loading images... ({imagesLoaded}/{visibleImages})
              </div>
            </div>
          )}

          {/* Gallery Grid/Masonry */}
          {filteredGallery.length === 0 ? (
            <div 
              className="text-center py-12 rounded-lg border-2"
              style={{ 
                backgroundColor: govColors.background.secondary,
                borderColor: govColors.border.light
              }}
            >
              <p 
                className="text-xl"
                style={{ color: govColors.text.secondary }}
              >
                No images found matching your criteria.
              </p>
              <button
                onClick={resetFiltersAndView}
                className="mt-4 px-6 py-2 rounded-lg gov-button"
              >
                Show All Images
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "image-grid-masonry"
            }>
              {filteredGallery.slice(0, visibleImages).map((item) => (
                <motion.div 
                  key={item.id} 
                  className={`group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover cursor-pointer ${
                    viewMode === 'masonry' ? 'masonry-item' : ''
                  }`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onClick={() => openImageModal(item)}
                >
                  <div className="relative overflow-hidden lazy-image-container">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 image-hover ${
                        viewMode === 'grid' ? 'h-48' : 'h-auto'
                      }`}
                      onLoad={handleImageLoad}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaSearchPlus className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: govColors.primary.white,
                          color: govColors.text.primary,
                          opacity: 0.9
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 
                      className="text-sm font-bold mb-2 leading-tight"
                      style={{ color: govColors.text.primary }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <FaEye 
                            className="w-3 h-3 mr-1" 
                            style={{ color: govColors.primary.blue }}
                          />
                          <span style={{ color: govColors.text.secondary }}>
                            {item.views}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FaHeart 
                            className="w-3 h-3 mr-1" 
                            style={{ color: govColors.primary.orange }}
                          />
                          <span style={{ color: govColors.text.secondary }}>
                            {item.likes}
                          </span>
                        </div>
                      </div>
                      <button 
                        className="transition-colors duration-300 hover:opacity-75"
                        style={{ color: govColors.primary.blue }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add share functionality here
                        }}
                      >
                        <FaShare className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleImages < filteredGallery.length && (
            <div className="text-center mt-12">
              <button 
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gov-button"
                onClick={loadMoreImages}
              >
                Load More Images ({filteredGallery.length - visibleImages} remaining)
              </button>
            </div>
          )}

          {/* Gallery Stats */}
          <div 
            className="mt-16 rounded-lg p-8 text-center border-2"
            style={{ 
              backgroundColor: govColors.background.secondary,
              borderColor: govColors.border.light
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: govColors.primary.blue }}
                >
                  {galleryItems.length}
                </div>
                <div style={{ color: govColors.text.secondary }}>Total Images</div>
              </div>
              <div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: govColors.primary.orange }}
                >
                  {categories.length - 1}
                </div>
                <div style={{ color: govColors.text.secondary }}>Categories</div>
              </div>
              <div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: govColors.primary.blue }}
                >
                  {Math.floor(galleryItems.reduce((sum, item) => sum + item.views, 0) / 1000)}K+
                </div>
                <div style={{ color: govColors.text.secondary }}>Total Views</div>
              </div>
              <div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: govColors.primary.orange }}
                >
                  {galleryItems.reduce((sum, item) => sum + item.likes, 0)}
                </div>
                <div style={{ color: govColors.text.secondary }}>Total Likes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-16 text-white"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Success Story
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Be part of our journey towards excellence in fellowship training 
              and make your mark in healthcare innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions">
                <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gov-button">
                  Apply Now
                </button>
              </Link>
              <a href="/brochure/BVSS-Fellowship-Brochure-2025.pdf" download>
                <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  <FaDownload className="mr-2 inline" />
                  Download Brochure
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div 
        className="py-16"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <InquiryForm />
      </div>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeImageModal}
            >
              <FaTimes />
            </button>
            
            <button 
              className="modal-nav-button modal-nav-prev"
              onClick={() => navigateImage('prev')}
            >
              <FaChevronLeft />
            </button>
            
            <LazyImage
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            
            <button 
              className="modal-nav-button modal-nav-next"
              onClick={() => navigateImage('next')}
            >
              <FaChevronRight />
            </button>
            
            <div className="modal-info">
              <h3 className="text-lg font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <span>{selectedImage.category}</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <FaEye className="w-4 h-4 mr-1" />
                    {selectedImage.views}
                  </span>
                  <span className="flex items-center">
                    <FaHeart className="w-4 h-4 mr-1" />
                    {selectedImage.likes}
                  </span>
                  <span>
                    {currentImageIndex + 1} of {filteredGallery.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
