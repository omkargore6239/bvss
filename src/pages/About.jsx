import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaAward, 
  FaBookOpen,
  FaHandsHelping,
  FaLeaf,
  FaGlobe,
  FaHistory,
  FaEye,
  FaBullseye,
  FaHeart,
  FaStar,
  FaUserTie,
  FaBuilding,
  FaCalendarAlt,
  FaBaby,
  FaHeartbeat,
  FaVenusMars,
  FaSpa
} from 'react-icons/fa';
import { MdSchool, MdScience, MdLocalHospital } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { Link } from 'react-router-dom';
import { govColors } from '../utils/colors';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      `}</style>

      {/* Header/Hero Section */}
      <div 
        className="text-white relative overflow-hidden"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About 
              <span style={{ color: govColors.primary.orange }}> BVSS</span>
            </h1>
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
              Advancing Healthcare Through Specialized Fellowship Programs Since 1998
            </p>
          </motion.div>
        </div>
      </div>

      {/* Institution Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: govColors.primary.blue }}
              >
                Bharat Vikas Shikshan Sanstha
              </h2>
              <div 
                className="w-24 h-1 mx-auto mb-8"
                style={{ backgroundColor: govColors.primary.orange }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp}>
                <img 
                  src="/BVG Imges/images/slider/banner-3.jpg" 
                  alt="BVSS Campus" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover border-4"
                  style={{ borderColor: govColors.primary.orange }}
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <div 
                  className="bg-white rounded-lg shadow-lg p-8 border-l-4"
                  style={{ borderLeftColor: govColors.primary.blue }}
                >
                  <p 
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: govColors.text.secondary }}
                  >
                    Bharat Vikas Shikshan Sanstha is a distinguished educational institution specializing in 
                    advanced fellowship programs for healthcare professionals. As the educational wing of BVG India Ltd, 
                    we focus on specialized training in healthcare management and clinical excellence.
                  </p>
                  <p 
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: govColors.text.secondary }}
                  >
                    Our institution offers five specialized fellowship programs designed to enhance the skills 
                    of practicing healthcare professionals in specific domains of medical practice and 
                    healthcare management.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg" style={{ backgroundColor: govColors.background.accent }}>
                      <h4 className="text-2xl font-bold" style={{ color: govColors.primary.blue }}>500+</h4>
                      <p className="text-sm" style={{ color: govColors.text.secondary }}>Fellowship Students</p>
                    </div>
                    <div className="text-center p-4 rounded-lg" style={{ backgroundColor: govColors.background.orange }}>
                      <h4 className="text-2xl font-bold" style={{ color: govColors.primary.orange }}>5</h4>
                      <p className="text-sm" style={{ color: govColors.text.secondary }}>Specialized Programs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 card-hover border-l-4"
                style={{ borderLeftColor: govColors.primary.blue }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <FaBullseye 
                    className="text-4xl mr-4" 
                    style={{ color: govColors.primary.blue }}
                  />
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: govColors.primary.blue }}
                  >
                    Our Mission
                  </h3>
                </div>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  To provide specialized fellowship training programs that enhance the professional 
                  competency of healthcare practitioners in child health, general medicine, women's health, 
                  dermatology, and traditional therapeutic procedures.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 card-hover border-l-4"
                style={{ borderLeftColor: govColors.primary.orange }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <FaEye 
                    className="text-4xl mr-4" 
                    style={{ color: govColors.primary.orange }}
                  />
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: govColors.primary.blue }}
                  >
                    Our Vision
                  </h3>
                </div>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  To become the premier institution for healthcare fellowship training, creating skilled 
                  specialists who integrate traditional wisdom with modern medical practices for 
                  comprehensive patient care.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Fellowship Programs Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
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
              className="text-lg max-w-3xl mx-auto"
              style={{ color: govColors.text.secondary }}
            >
              Specialized training programs designed for practicing healthcare professionals 
              seeking advanced expertise in specific medical domains.
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: FaBaby,
                title: "Fellowship in Child Health Care Management",
                description: "Comprehensive training in pediatric healthcare management, child development assessment, vaccination protocols, and specialized pediatric care procedures.",
                duration: "12 Months",
                eligibility: "MBBS/BAMS/BDS/BHMS",
                color: govColors.primary.blue
              },
              {
                icon: FaHeartbeat,
                title: "Fellowship in General Medicine & Health Care Management",
                description: "Advanced training in general medicine practices, healthcare administration, patient management systems, and clinical decision-making.",
                duration: "12 Months",
                eligibility: "MBBS/BAMS/BDS/BHMS",
                color: govColors.primary.orange
              },
              {
                icon: FaVenusMars,
                title: "Fellowship in Women & Maternal Health Care Management",
                description: "Specialized program covering women's health, maternal care, gynecological practices, family planning, and reproductive health management.",
                duration: "12 Months",
                eligibility: "MBBS/BAMS/BDS/BHMS",
                color: govColors.primary.blue
              },
              {
                icon: FaSpa,
                title: "Fellowship in Ayurvedic Dermatology",
                description: "In-depth study of Ayurvedic approaches to dermatological conditions, skin care therapies, and traditional treatment modalities.",
                duration: "12 Months",
                eligibility: "BAMS/MBBS",
                color: govColors.primary.orange
              },
              {
                icon: MdLocalHospital,
                title: "Fellowship in Kharsutra Therapy",
                description: "Specialized training in traditional Ayurvedic Kharsutra (medicated thread) therapy for ano-rectal disorders and minimally invasive procedures.",
                duration: "6 Months",
                eligibility: "BAMS/MS(Ayur)",
                color: govColors.primary.blue
              }
            ].map((program, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 card-hover border-t-4"
                style={{ borderTopColor: program.color }}
                variants={fadeInUp}
              >
                <program.icon 
                  className="text-4xl mb-4" 
                  style={{ color: program.color }}
                />
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: govColors.text.primary }}
                >
                  {program.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: govColors.text.secondary }}
                >
                  {program.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold" style={{ color: govColors.text.secondary }}>Duration:</span>
                    <span 
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: program.color === govColors.primary.blue ? govColors.background.accent : govColors.background.orange,
                        color: program.color
                      }}
                    >
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold" style={{ color: govColors.text.secondary }}>Eligibility:</span>
                    <span className="text-xs" style={{ color: govColors.text.primary }}>{program.eligibility}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Academic Excellence */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: govColors.primary.blue }}
              >
                Training Excellence
              </h2>
              <div 
                className="w-24 h-1 mx-auto mb-8"
                style={{ backgroundColor: govColors.primary.orange }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div 
                  className="bg-white rounded-lg shadow-lg p-8 border-l-4"
                  style={{ borderLeftColor: govColors.primary.orange }}
                >
                  <h3 
                    className="text-2xl font-bold mb-6"
                    style={{ color: govColors.primary.blue }}
                  >
                    Key Training Features
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Hands-on clinical training with real patients",
                      "Expert faculty with specialized experience",
                      "Case-based learning methodology",
                      "Research project opportunities",
                      "Certificate recognized nationwide",
                      "Continuing medical education credits"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaStar 
                          className="text-lg mr-3" 
                          style={{ color: govColors.primary.orange }}
                        />
                        <span style={{ color: govColors.text.secondary }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    className="text-center p-6 rounded-lg border-2 card-hover"
                    style={{ 
                      backgroundColor: govColors.primary.white,
                      borderColor: govColors.primary.blue
                    }}
                  >
                    <FaUserTie 
                      className="text-4xl mx-auto mb-3" 
                      style={{ color: govColors.primary.blue }}
                    />
                    <h4 className="text-xl font-bold mb-2" style={{ color: govColors.primary.blue }}>25+</h4>
                    <p className="text-sm" style={{ color: govColors.text.secondary }}>Expert Faculty</p>
                  </div>
                  
                  <div 
                    className="text-center p-6 rounded-lg border-2 card-hover"
                    style={{ 
                      backgroundColor: govColors.primary.white,
                      borderColor: govColors.primary.orange
                    }}
                  >
                    <FaBuilding 
                      className="text-4xl mx-auto mb-3" 
                      style={{ color: govColors.primary.orange }}
                    />
                    <h4 className="text-xl font-bold mb-2" style={{ color: govColors.primary.orange }}>50+</h4>
                    <p className="text-sm" style={{ color: govColors.text.secondary }}>Partner Hospitals</p>
                  </div>
                  
                  <div 
                    className="text-center p-6 rounded-lg border-2 card-hover"
                    style={{ 
                      backgroundColor: govColors.primary.white,
                      borderColor: govColors.primary.orange
                    }}
                  >
                    <FaBookOpen 
                      className="text-4xl mx-auto mb-3" 
                      style={{ color: govColors.primary.orange }}
                    />
                    <h4 className="text-xl font-bold mb-2" style={{ color: govColors.primary.orange }}>95%</h4>
                    <p className="text-sm" style={{ color: govColors.text.secondary }}>Completion Rate</p>
                  </div>
                  
                  <div 
                    className="text-center p-6 rounded-lg border-2 card-hover"
                    style={{ 
                      backgroundColor: govColors.primary.white,
                      borderColor: govColors.primary.blue
                    }}
                  >
                    <FaAward 
                      className="text-4xl mx-auto mb-3" 
                      style={{ color: govColors.primary.blue }}
                    />
                    <h4 className="text-xl font-bold mb-2" style={{ color: govColors.primary.blue }}>100%</h4>
                    <p className="text-sm" style={{ color: govColors.text.secondary }}>Career Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* History Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.background.accent }}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: govColors.primary.blue }}
              >
                Our Legacy
              </h2>
              <div 
                className="w-24 h-1 mx-auto mb-8"
                style={{ backgroundColor: govColors.primary.orange }}
              ></div>
            </div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4"
              style={{ borderLeftColor: govColors.primary.blue }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <FaHistory 
                  className="text-4xl mr-4" 
                  style={{ color: govColors.primary.orange }}
                />
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: govColors.primary.blue }}
                >
                  Since 1998
                </h3>
              </div>
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: govColors.text.secondary }}
              >
                Established in 1998, Bharat Vikas Shikshan Sanstha began with a vision to bridge the gap 
                between traditional healthcare education and specialized professional training. Initially 
                focusing on basic Ayurvedic education, we evolved to meet the growing demand for 
                specialized healthcare professionals.
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: govColors.text.secondary }}
              >
                Today, our fellowship programs have trained over 500 healthcare professionals who are now 
                practicing successfully across various specialties. Our alumni have established themselves 
                as experts in their respective fields, contributing significantly to healthcare advancement 
                in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="text-white py-16 md:py-20"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advance Your Medical Career
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-95">
              Ready to specialize in your field of interest? Join our fellowship programs 
              and take your healthcare career to the next level with industry-recognized training.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/courses">
                <button className="px-8 py-4 font-bold text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gov-button-secondary">
                  <FaBookOpen className="mr-2" />
                  View Programs
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 font-bold text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gov-button">
                  <FaCalendarAlt className="mr-2" />
                  Apply Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Inquiry Form Section */}
      <div 
        className="py-16 md:py-20"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default About;
