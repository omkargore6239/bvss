import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt, 
  FaUser, 
  FaChevronLeft, 
  FaHeart, 
  FaShare, 
  FaComment,
  FaEye, 
  FaBookmark, 
  FaStar, 
  FaChartLine,
  FaGraduationCap,
  FaNewspaper,
  FaUserMd,
  FaCertificate
} from 'react-icons/fa';
import { govColors } from '../utils/colors';
import InquiryForm from '../components/InquiryForm';

const Blog = () => {
  // Add window scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated blog data with 4 separate blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Child Health Care Management Fellowship: Building Future Pediatric Specialists",
      content: `<div style="color: ${govColors.text.secondary}; line-height: 1.8;">
                <p>Our Child Health Care Management Fellowship program is designed to create specialized healthcare professionals who can address the unique needs of pediatric patients. This comprehensive program combines theoretical knowledge with practical experience in managing child health issues.</p>
                <p>The fellowship covers essential areas including pediatric emergency care, vaccination protocols, growth and development monitoring, and common childhood diseases. Our expert faculty provides hands-on training in our partner hospitals, ensuring fellows gain real-world experience.</p>
                <p>Graduates of this program are well-equipped to handle pediatric healthcare challenges and contribute significantly to improving child health outcomes in their communities.</p>
                </div>`,
      excerpt: "Comprehensive fellowship program focused on pediatric healthcare management, combining traditional knowledge with modern medical practices for child health specialists...",
      author: "Dr. Priya Sharma",
      date: "March 15, 2024",
      readTime: "4 min read",
      category: "Child Health Care",
      views: 890,
      likes: 45,
      comments: 12,
      imageUrl: "/BVG Imges/images/blog/img1.PNG"
    },
    {
      id: 2,
      title: "General Medicine Fellowship: Excellence in Comprehensive Healthcare",
      content: `<div style="color: ${govColors.text.secondary}; line-height: 1.8;">
                <p>The General Medicine Fellowship at BVSS provides comprehensive training in internal medicine, equipping healthcare professionals with the skills needed to diagnose and treat a wide range of medical conditions across all age groups.</p>
                <p>Our program emphasizes evidence-based medicine, clinical reasoning, and patient-centered care. Fellows receive extensive training in outpatient and inpatient settings, learning to manage complex medical cases and develop leadership skills.</p>
                <p>With access to our network of 50+ partner hospitals, fellows gain diverse clinical exposure and learn from experienced physicians, preparing them for successful careers in general medicine practice.</p>
                </div>`,
      excerpt: "Comprehensive general medicine fellowship program designed to create well-rounded healthcare professionals capable of managing diverse medical conditions...",
      author: "Dr. Rajesh Kumar",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "General Medicine",
      views: 1250,
      likes: 67,
      comments: 18,
      imageUrl: "/BVG Imges/images/blog/img2.JPG"
    },
    {
      id: 3,
      title: "Women's Health & Maternal Care: Specialized Fellowship Training",
      content: `<div style="color: ${govColors.text.secondary}; line-height: 1.8;">
                <p>Our Women's Health and Maternal Care Fellowship is dedicated to training healthcare professionals in the specialized field of women's health, covering all aspects from adolescence through menopause and beyond.</p>
                <p>The program includes comprehensive training in prenatal care, obstetrics, gynecology, family planning, and reproductive health. Fellows learn to manage high-risk pregnancies, perform gynecological procedures, and provide holistic women's healthcare services.</p>
                <p>With a focus on maternal mortality reduction and women's health advocacy, our graduates become leaders in improving healthcare outcomes for women in their communities.</p>
                </div>`,
      excerpt: "Specialized fellowship program focusing on women's health and maternal care, training healthcare professionals in comprehensive women's healthcare services...",
      author: "Dr. Sunita Patel",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Women's Health",
      views: 1100,
      likes: 72,
      comments: 15,
      imageUrl: "/BVG Imges/images/blog/img3.JPG"
    },
    {
      id: 4,
      title: "Ayurvedic Dermatology & Kharsutra Therapy: Traditional Medicine Excellence",
      content: `<div style="color: ${govColors.text.secondary}; line-height: 1.8;">
                <p>Our Ayurvedic Dermatology and Kharsutra Therapy Fellowship represents the perfect blend of traditional Ayurvedic wisdom and modern medical practices, offering specialized training in natural healing methods.</p>
                <p>The program covers Ayurvedic principles of skin care, herbal treatments for dermatological conditions, and the ancient Kharsutra technique for treating anorectal disorders. Fellows learn to prepare and use traditional medicines while understanding their scientific basis.</p>
                <p>This unique fellowship prepares healthcare professionals to offer alternative treatment options, bridging the gap between traditional and modern medicine for better patient outcomes.</p>
                </div>`,
      excerpt: "Unique fellowship program combining Ayurvedic dermatology and Kharsutra therapy, blending traditional wisdom with modern medical practices...",
      author: "Dr. Amit Joshi",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Ayurvedic Medicine",
      views: 950,
      likes: 58,
      comments: 20,
      imageUrl: "/BVG Imges/images/blog/img4.JPG"
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const toggleLike = () => setIsLiked(prev => !prev);
  const toggleBookmark = () => setIsBookmarked(prev => !prev);

  // Full post view
  if (selectedPost) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: govColors.background.primary }}>
        <style>{`
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

          .blog-image {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
          }

          @media (max-width: 768px) {
            .mobile-responsive-padding {
              padding: 1rem;
            }
            
            .mobile-responsive-text {
              font-size: 1rem;
            }
            
            .mobile-responsive-title {
              font-size: 1.5rem;
            }
          }
        `}</style>
        
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)} 
            className="mb-4 sm:mb-6 flex items-center px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 gov-button-secondary text-sm sm:text-base"
          >
            <FaChevronLeft className="mr-2" />
            Back to Blog
          </button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Image */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: govColors.primary.blue }}
              ></div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 mobile-responsive-padding">
              {/* Category Badge */}
              <div className="mb-4 sm:mb-6">
                <span 
                  className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                  style={{ 
                    backgroundColor: govColors.background.accent,
                    color: govColors.primary.blue
                  }}
                >
                  {selectedPost.category}
                </span>
              </div>

              {/* Title */}
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mobile-responsive-title"
                style={{ color: govColors.text.primary }}
              >
                {selectedPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm" style={{ color: govColors.text.secondary }}>
                <div className="flex items-center">
                  <FaUser className="mr-1 sm:mr-2" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1 sm:mr-2" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-1 sm:mr-2" />
                  {selectedPost.views} views
                </div>
                <div className="flex items-center">
                  <FaHeart className="mr-1 sm:mr-2" style={{ color: isLiked ? '#e74c3c' : 'inherit' }} />
                  {selectedPost.likes + (isLiked ? 1 : 0)} likes
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-1 sm:mr-2" />
                  {selectedPost.comments} comments
                </div>
                <div>{selectedPost.readTime}</div>
              </div>

              {/* Content */}
              <div 
                className="prose max-w-none mb-6 sm:mb-8 mobile-responsive-text"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-4 sm:pt-6 border-t-2" style={{ borderColor: govColors.border.light }}>
                <button
                  onClick={toggleLike}
                  className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    isLiked 
                      ? 'text-white' 
                      : 'gov-button-secondary'
                  }`}
                  style={isLiked ? { backgroundColor: '#e74c3c', borderColor: '#e74c3c' } : {}}
                >
                  <FaHeart className="mr-1 sm:mr-2" />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                
                <button
                  onClick={toggleBookmark}
                  className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    isBookmarked 
                      ? 'text-white' 
                      : 'gov-button-secondary'
                  }`}
                  style={isBookmarked ? { backgroundColor: '#f39c12', borderColor: '#f39c12' } : {}}
                >
                  <FaBookmark className="mr-1 sm:mr-2" />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                
                <button className="flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold gov-button text-sm sm:text-base">
                  <FaShare className="mr-1 sm:mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main blog listing view
  return (
    <div style={{ backgroundColor: govColors.background.primary }}>
      <style>{`
        .section-divider {
          height: 3px;
          background: linear-gradient(to right, ${govColors.primary.blue}, ${govColors.primary.orange}, ${govColors.primary.blue});
          margin: 2rem 0;
        }

        @media (min-width: 768px) {
          .section-divider {
            height: 4px;
            margin: 3rem 0;
          }
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

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .blog-image-hover {
          transition: transform 0.3s ease;
          overflow: hidden;
          border-radius: 8px;
        }

        .blog-image-hover:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 640px) {
          .mobile-blog-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .tablet-blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1025px) {
          .desktop-blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>

      {/* Header Section */}
      <div 
        className="text-white relative overflow-hidden"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <FaNewspaper 
                className="h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-0 sm:mr-4" 
                style={{ color: govColors.primary.orange }}
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                Fellowship
                <span style={{ color: govColors.primary.orange }}> Stories</span>
              </h1>
            </div>
            <div 
              className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 px-4">
              Celebrating excellence in healthcare education and the success stories 
              of our fellowship training programs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Blog Section - 4 Separate Blog Posts */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            className="grid mobile-blog-grid tablet-blog-grid desktop-blog-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden card-hover border-2"
                style={{ borderColor: govColors.border.light }}
                variants={fadeInUp}
              >
                {/* Blog Image */}
                <div className="blog-image-hover h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Category Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                      style={{ 
                        backgroundColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange,
                        color: govColors.primary.white
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h2 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 line-clamp-2"
                    style={{ color: govColors.text.primary }}
                  >
                    {post.title}
                  </h2>
                  
                  <p 
                    className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3"
                    style={{ color: govColors.text.secondary }}
                  >
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm" style={{ color: govColors.text.secondary }}>
                    <div className="flex items-center">
                      <FaUser className="mr-1" style={{ color: govColors.primary.blue }} />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" style={{ color: govColors.primary.orange }} />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaEye className="mr-1" style={{ color: govColors.primary.blue }} />
                      {post.views} views
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  {/* Stats and Action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: govColors.text.secondary }}>
                      <div className="flex items-center">
                        <FaHeart className="mr-1" style={{ color: '#e74c3c' }} />
                        {post.likes} likes
                      </div>
                      <div className="flex items-center">
                        <FaComment className="mr-1" style={{ color: govColors.primary.blue }} />
                        {post.comments} comments
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1" style={{ color: '#f39c12' }} />
                        Featured
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 gov-button text-sm sm:text-base"
                    >
                      Read More
                      <FaChevronLeft className="ml-1 sm:ml-2 rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fellowship Programs Highlight */}
      <div className="section-divider"></div>
      
      <section className="py-12 sm:py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Our Fellowship Programs
            </h2>
            <div 
              className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: govColors.text.secondary }}
            >
              Specialized training programs designed for healthcare professionals
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Child Health Care Management", icon: FaGraduationCap },
              { title: "General Medicine & Healthcare", icon: FaUserMd },
              { title: "Women & Maternal Health", icon: FaHeart },
              { title: "Ayurvedic Dermatology", icon: FaStar },
              { title: "Kharsutra Therapy", icon: FaCertificate }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-lg card-hover text-center border-t-4"
                style={{ borderTopColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                variants={fadeInUp}
              >
                <program.icon 
                  className="text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" 
                  style={{ color: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                />
                <h3 
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: govColors.text.primary }}
                >
                  {program.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-12 sm:py-16 text-white"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Join Our Fellowship Programs
            </h2>
            <div 
              className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95 px-4">
              Start your journey towards specialized healthcare expertise with our 
              comprehensive fellowship training programs.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 gov-button">
              Apply for Fellowship
            </button>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <div 
        className="py-12 sm:py-16"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <InquiryForm />
      </div>
    </div>
  );
};

export default Blog;
