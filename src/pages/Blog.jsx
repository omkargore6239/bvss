import React, { useState } from 'react';
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
  FaChartLine, // Replace FaTrendingUp with FaChartLine
  FaGraduationCap,
  FaNewspaper,
  FaUserMd,
  FaCertificate
} from 'react-icons/fa';
import { govColors } from '../utils/colors';
import InquiryForm from '../components/InquiryForm';

const Blog = () => {
  // Updated blog data with your images
  const staticPost = {
    id: 1,
    title: "Excellence in Fellowship Training Programs",
    content: `<div style="color: ${govColors.text.secondary}; line-height: 1.8;">
              <p>Discover the excellence and dedication that defines our fellowship training programs at Bharat Vikas Shikshan Sanstha. Our comprehensive approach to healthcare education combines traditional knowledge with modern medical practices.</p>
              <p>Our fellowship programs in Child Health Care Management, General Medicine, Women's Health, Ayurvedic Dermatology, and Kharsutra Therapy are designed to create skilled healthcare professionals ready to serve the community.</p>
              <p>Through hands-on training in our partner hospitals and expert guidance from experienced faculty, our fellows gain practical experience that prepares them for successful careers in specialized healthcare management.</p>
              </div>`,
    excerpt: "Discover the excellence and dedication that defines our fellowship training programs at Bharat Vikas Shikshan Sanstha...",
    author: "BVSS Admin",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Fellowship Training",
    views: 1250,
    likes: 89,
    comments: 24,
    imageUrls: [
      "/BVG Imges/images/blog/img1.PNG",
      "/BVG Imges/images/blog/img2.JPG", 
      "/BVG Imges/images/blog/img3.JPG",
      "/BVG Imges/images/blog/img4.JPG"
    ]
  };

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
        staggerChildren: 0.1,
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
        `}</style>
        
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)} 
            className="mb-6 flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 gov-button-secondary"
          >
            <FaChevronLeft className="mr-2" />
            Back to Blog
          </button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={staticPost.imageUrls[0]} 
                alt="Fellowship Training" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: govColors.primary.blue }}
              ></div>
            </div>
            
            <div className="p-8">
              {/* Category Badge */}
              <div className="mb-6">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ 
                    backgroundColor: govColors.background.accent,
                    color: govColors.primary.blue
                  }}
                >
                  {staticPost.category}
                </span>
              </div>

              {/* Title */}
              <h1 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: govColors.text.primary }}
              >
                {staticPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm" style={{ color: govColors.text.secondary }}>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  {staticPost.author}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {staticPost.date}
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-2" />
                  {staticPost.views} views
                </div>
                <div className="flex items-center">
                  <FaHeart className="mr-2" style={{ color: isLiked ? '#e74c3c' : 'inherit' }} />
                  {staticPost.likes + (isLiked ? 1 : 0)} likes
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-2" />
                  {staticPost.comments} comments
                </div>
                <div>{staticPost.readTime}</div>
              </div>

              {/* Content */}
              <div 
                className="prose max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: staticPost.content }} 
              />

              {/* Additional Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {staticPost.imageUrls.slice(1).map((url, idx) => (
                  <img 
                    key={idx + 1} 
                    src={url} 
                    alt={`Fellowship Training ${idx + 2}`} 
                    className="w-full h-64 object-cover blog-image"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t-2" style={{ borderColor: govColors.border.light }}>
                <button
                  onClick={toggleLike}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isLiked 
                      ? 'text-white' 
                      : 'gov-button-secondary'
                  }`}
                  style={isLiked ? { backgroundColor: '#e74c3c', borderColor: '#e74c3c' } : {}}
                >
                  <FaHeart className="mr-2" />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                
                <button
                  onClick={toggleBookmark}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isBookmarked 
                      ? 'text-white' 
                      : 'gov-button-secondary'
                  }`}
                  style={isBookmarked ? { backgroundColor: '#f39c12', borderColor: '#f39c12' } : {}}
                >
                  <FaBookmark className="mr-2" />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                
                <button className="flex items-center px-6 py-3 rounded-lg font-semibold gov-button">
                  <FaShare className="mr-2" />
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

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .blog-image-grid {
          transition: transform 0.3s ease;
        }

        .blog-image-grid:hover {
          transform: scale(1.02);
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
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FaNewspaper 
                className="h-12 w-12 mr-4" 
                style={{ color: govColors.primary.orange }}
              />
              <h1 className="text-4xl md:text-5xl font-bold">
                Fellowship
                <span style={{ color: govColors.primary.orange }}> Stories</span>
              </h1>
            </div>
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Celebrating excellence in healthcare education and the success stories 
              of our fellowship training programs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Blog Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden card-hover border-2"
            style={{ borderColor: govColors.border.light }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            {/* Category Badge */}
            <div className="p-6 pb-0">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{ 
                  backgroundColor: govColors.primary.blue,
                  color: govColors.primary.white
                }}
              >
                {staticPost.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: govColors.text.primary }}
              >
                {staticPost.title}
              </h2>
              
              <p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: govColors.text.secondary }}
              >
                {staticPost.excerpt}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm" style={{ color: govColors.text.secondary }}>
                <div className="flex items-center">
                  <FaUser className="mr-2" style={{ color: govColors.primary.blue }} />
                  {staticPost.author}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" style={{ color: govColors.primary.orange }} />
                  {staticPost.date}
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-2" style={{ color: govColors.primary.blue }} />
                  {staticPost.views} views
                </div>
                <div>{staticPost.readTime}</div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-6 mb-6">
              {staticPost.imageUrls.map((url, idx) => (
                <div key={idx} className="blog-image-grid">
                  <img 
                    src={url} 
                    alt={`Fellowship Training ${idx + 1}`} 
                    className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>

            {/* Stats and Action */}
            <div className="p-6 pt-0 flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-6 text-sm mb-4 md:mb-0" style={{ color: govColors.text.secondary }}>
                <div className="flex items-center">
                  <FaHeart className="mr-2" style={{ color: '#e74c3c' }} />
                  {staticPost.likes} likes
                </div>
                <div className="flex items-center">
                  <FaComment className="mr-2" style={{ color: govColors.primary.blue }} />
                  {staticPost.comments} comments
                </div>
                <div className="flex items-center">
                  <FaStar className="mr-2" style={{ color: '#f39c12' }} />
                  Featured Story
                </div>
              </div>
              
              <button
                onClick={() => setSelectedPost(staticPost)}
                className="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 gov-button"
              >
                Read Full Story
                <FaChevronLeft className="ml-2 rotate-180" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fellowship Programs Highlight */}
      <div className="section-divider"></div>
      
      <section className="py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Our Fellowship Programs
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: govColors.text.secondary }}
            >
              Specialized training programs designed for healthcare professionals
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                className="bg-white rounded-lg p-6 shadow-lg card-hover text-center border-t-4"
                style={{ borderTopColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                variants={fadeInUp}
              >
                <program.icon 
                  className="text-4xl mx-auto mb-4" 
                  style={{ color: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                />
                <h3 
                  className="text-lg font-semibold"
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
        className="py-16 text-white"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Fellowship Programs
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Start your journey towards specialized healthcare expertise with our 
              comprehensive fellowship training programs.
            </p>
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 gov-button">
              Apply for Fellowship
            </button>
          </motion.div>
        </div>
      </section>

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

export default Blog;
