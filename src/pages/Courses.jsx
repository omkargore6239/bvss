import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch,
  FaFilter,
  FaBaby,
  FaHeartbeat,
  FaVenusMars,
  FaSpa,
  FaClock,
  FaUsers,
  FaRupeeSign,
  FaCalendarAlt,
  FaGraduationCap,
  FaBookOpen,
  FaAward,
  FaHandsHelping,
  FaStethoscope,
  FaUserMd,
  FaFileAlt
} from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { Link } from 'react-router-dom';
import { govColors } from '../utils/colors';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);

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

  // Fellowship programs data
  const fellowshipPrograms = [
    {
      id: 1,
      code: "FCH001",
      title: "Fellowship in Child Health Care Management",
      category: "pediatric",
      duration: "12 Months",
      seats: 20,
      description: "Comprehensive fellowship program focusing on pediatric healthcare management, child development assessment, vaccination protocols, and specialized pediatric care procedures.",
      eligibility: "MBBS/BAMS/BDS/BHMS",
      schedule: "Full-time Program with Clinical Rotations",
      icon: FaBaby,
      color: govColors.primary.blue,
      highlights: [
        "Pediatric Emergency Care",
        "Child Development Assessment", 
        "Vaccination Protocols",
        "Nutritional Management",
        "Growth Monitoring",
        "Pediatric Counseling"
      ],
      curriculum: [
        "Child Health & Development",
        "Pediatric Diseases Management",
        "Vaccination & Immunization",
        "Nutritional Assessment",
        "Emergency Pediatric Care",
        "Healthcare Management"
      ],
      careerProspects: [
        "Child Specialist",
        "Pediatric Consultant",
        "Healthcare Administrator",
        "Public Health Officer"
      ]
    },
    {
      id: 2,
      code: "FGM002",
      title: "Fellowship in General Medicine & Health Care Management",
      category: "general",
      duration: "12 Months",
      seats: 25,
      description: "Advanced training in general medicine practices, healthcare administration, patient management systems, and comprehensive clinical decision-making processes.",
      eligibility: "MBBS/BAMS/BDS/BHMS",
      schedule: "Full-time Program with Hospital Rotations",
      icon: FaHeartbeat,
      color: govColors.primary.orange,
      highlights: [
        "Clinical Decision Making",
        "Healthcare Administration",
        "Patient Management Systems",
        "Quality Assurance",
        "Medical Documentation",
        "Healthcare Ethics"
      ],
      curriculum: [
        "General Medicine Principles",
        "Healthcare Administration",
        "Patient Care Management",
        "Medical Ethics & Law",
        "Quality Improvement",
        "Healthcare Technology"
      ],
      careerProspects: [
        "General Practitioner",
        "Healthcare Manager",
        "Medical Officer",
        "Clinical Coordinator"
      ]
    },
    {
      id: 3,
      code: "FWM003",
      title: "Fellowship in Women & Maternal Health Care Management",
      category: "womens",
      duration: "12 Months",
      seats: 20,
      description: "Specialized program covering women's health, maternal care, gynecological practices, family planning, and comprehensive reproductive health management.",
      eligibility: "MBBS/BAMS/BDS/BHMS",
      schedule: "Full-time Program with Maternity Ward Rotations",
      icon: FaVenusMars,
      color: govColors.primary.blue,
      highlights: [
        "Prenatal & Postnatal Care",
        "Gynecological Disorders",
        "Family Planning",
        "Maternal Nutrition",
        "Women's Health Screening",
        "Reproductive Counseling"
      ],
      curriculum: [
        "Women's Health Management",
        "Maternal Care Protocols",
        "Gynecological Procedures",
        "Family Planning Methods",
        "Reproductive Health",
        "Women's Wellness Programs"
      ],
      careerProspects: [
        "Women's Health Specialist",
        "Maternal Health Officer",
        "Gynecology Consultant",
        "Family Planning Advisor"
      ]
    },
    {
      id: 4,
      code: "FAD004",
      title: "Fellowship in Ayurvedic Dermatology",
      category: "dermatology",
      duration: "12 Months",
      seats: 15,
      description: "In-depth study of Ayurvedic approaches to dermatological conditions, traditional skin care therapies, and integration with modern dermatological practices.",
      eligibility: "BAMS/MBBS",
      schedule: "Full-time Program with Dermatology Clinic Rotations",
      icon: FaSpa,
      color: govColors.primary.orange,
      highlights: [
        "Ayurvedic Skin Treatments",
        "Herbal Dermatology",
        "Cosmetic Procedures",
        "Skin Disorder Management",
        "Traditional Therapies",
        "Holistic Skin Care"
      ],
      curriculum: [
        "Ayurvedic Dermatology Principles",
        "Herbal Medicine for Skin",
        "Traditional Treatment Methods",
        "Cosmetic Dermatology",
        "Skin Disorders Management",
        "Research in Dermatology"
      ],
      careerProspects: [
        "Ayurvedic Dermatologist",
        "Skin Care Specialist",
        "Cosmetic Consultant",
        "Research Scholar"
      ]
    },
    {
      id: 5,
      code: "FKT005",
      title: "Fellowship in Kharsutra Therapy",
      category: "surgery",
      duration: "6 Months",
      seats: 10,
      description: "Specialized fellowship in traditional Ayurvedic Kharsutra (medicated thread) therapy for ano-rectal disorders and minimally invasive surgical procedures.",
      eligibility: "BAMS/MS(Ayurveda)",
      schedule: "Full-time Intensive Program with Surgical Training",
      icon: MdLocalHospital,
      color: govColors.primary.blue,
      highlights: [
        "Kharsutra Preparation",
        "Anorectal Surgery",
        "Minimally Invasive Techniques",
        "Traditional Surgical Methods",
        "Post-operative Care",
        "Patient Counseling"
      ],
      curriculum: [
        "Kharsutra Therapy Principles",
        "Surgical Techniques",
        "Anorectal Disorders",
        "Minimally Invasive Procedures",
        "Post-operative Management",
        "Research Methodology"
      ],
      careerProspects: [
        "Kharsutra Specialist",
        "Ayurvedic Surgeon",
        "Proctologist",
        "Research Practitioner"
      ]
    }
  ];

  // Updated categories with "All Fellowship Programs"
  const categories = [
    { id: 'all', name: 'All Fellowship Programs' },
    { id: 'pediatric', name: 'Child Health' },
    { id: 'general', name: 'General Medicine' },
    { id: 'womens', name: 'Women\'s Health' },
    { id: 'dermatology', name: 'Dermatology' },
    { id: 'surgery', name: 'Surgical' }
  ];

  // Filter programs based on category and search query - improved filtering
  const filteredPrograms = fellowshipPrograms.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = searchQuery === '' || 
                          program.title.toLowerCase().includes(searchLower) || 
                          program.code.toLowerCase().includes(searchLower) ||
                          program.description.toLowerCase().includes(searchLower) ||
                          program.highlights.some(highlight => highlight.toLowerCase().includes(searchLower)) ||
                          program.eligibility.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const openProgramModal = (program) => {
    setSelectedProgram(program);
  };

  const closeProgramModal = () => {
    setSelectedProgram(null);
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

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-responsive-padding {
            padding: 1rem;
          }
          
          .mobile-responsive-text {
            font-size: 1.5rem;
          }
          
          .mobile-responsive-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .tablet-responsive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Fellowship
              <span style={{ color: govColors.primary.orange }}> Programs</span>
            </h1>
            <div 
              className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 px-4">
              Advance your medical career with our specialized fellowship programs 
              designed for practicing healthcare professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <section 
        className="py-8 sm:py-12 md:py-16 border-b-2"
        style={{ 
          backgroundColor: govColors.primary.white,
          borderBottomColor: govColors.border.light
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Find Your Specialization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label 
                  className="block text-sm font-medium mb-3 text-center"
                  style={{ color: govColors.text.secondary }}
                >
                  <FaFilter className="inline mr-2" />
                  Filter by Category
                </label>
                <select 
                  className="w-full p-3 sm:p-4 border-2 rounded-lg focus:outline-none transition-all duration-300 text-center"
                  style={{ 
                    borderColor: govColors.border.medium,
                    color: govColors.text.primary
                  }}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = govColors.primary.blue;
                    e.target.style.boxShadow = `0 0 0 3px ${govColors.background.accent}`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = govColors.border.medium;
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label 
                  className="block text-sm font-medium mb-3 text-center"
                  style={{ color: govColors.text.secondary }}
                >
                  <FaSearch className="inline mr-2" />
                  Search Programs
                </label>
                <input
                  type="text"
                  placeholder="Search by title, code, or description..."
                  className="w-full p-3 sm:p-4 border-2 rounded-lg focus:outline-none transition-all duration-300 text-center"
                  style={{ 
                    borderColor: govColors.border.medium,
                    color: govColors.text.primary
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = govColors.primary.orange;
                    e.target.style.boxShadow = `0 0 0 3px ${govColors.background.orange}`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = govColors.border.medium;
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
              style={{ color: govColors.primary.blue }}
            >
              {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'} Available
            </h2>
            <div 
              className="w-20 sm:w-24 h-1 mx-auto"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
          </div>
          
          {filteredPrograms.length === 0 ? (
            <div 
              className="rounded-lg shadow-lg p-8 sm:p-12 text-center max-w-2xl mx-auto border-2"
              style={{ 
                backgroundColor: govColors.primary.white,
                borderColor: govColors.border.light
              }}
            >
              <p 
                className="text-lg sm:text-xl"
                style={{ color: govColors.text.secondary }}
              >
                No fellowship programs match your criteria. Please try a different search or filter.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid mobile-responsive-grid tablet-responsive-grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredPrograms.map(program => (
                <motion.div 
                  key={program.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden card-hover border-l-4"
                  style={{ borderLeftColor: program.color }}
                  variants={fadeInUp}
                >
                  <div 
                    className="py-3 sm:py-4 px-4 sm:px-6 text-white"
                    style={{ backgroundColor: program.color }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-base sm:text-lg">{program.code}</span>
                      <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-white/20">
                        {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <program.icon className="text-xl sm:text-2xl mr-2 sm:mr-3" />
                      <span className="text-xs sm:text-sm opacity-90">Fellowship Program</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 
                      className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center leading-tight"
                      style={{ color: govColors.text.primary }}
                    >
                      {program.title}
                    </h3>
                    <p 
                      className="mb-4 sm:mb-6 leading-relaxed text-center text-sm"
                      style={{ color: govColors.text.secondary }}
                    >
                      {program.description.substring(0, 120)}...
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 mr-2" style={{ color: program.color }} />
                          <span style={{ color: govColors.text.secondary }}>Seats:</span>
                        </span>
                        <span style={{ color: govColors.text.primary }} className="font-semibold">
                          {program.seats}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <FaGraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" style={{ color: program.color }} />
                          <span style={{ color: govColors.text.secondary }}>Eligibility:</span>
                        </span>
                        <span style={{ color: govColors.text.primary }} className="font-semibold text-xs">
                          {program.eligibility}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <button 
                        className="w-full py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                        style={{ 
                          backgroundColor: program.color,
                          color: govColors.primary.white
                        }}
                        onClick={() => openProgramModal(program)}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '0.9';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '1';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        View Details
                      </button>
                      <Link to="/contact">
                        <button 
                          className="w-full py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 border-2 text-sm sm:text-base"
                          style={{ 
                            backgroundColor: 'transparent',
                            color: program.color,
                            borderColor: program.color
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = program.color;
                            e.target.style.color = govColors.primary.white;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = program.color;
                          }}
                        >
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Program Information */}
      <section 
        className="py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: govColors.primary.blue }}
            >
              Program Information
            </h2>
            <div 
              className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.blue }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaClock 
                className="text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" 
                style={{ color: govColors.primary.blue }}
              />
              <h3 
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                style={{ color: govColors.text.primary }}
              >
                Program Duration
              </h3>
              <p 
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: govColors.text.secondary }}
              >
                Fellowship programs range from 6 to 12 months, providing intensive training 
                and hands-on experience in specialized healthcare domains.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.orange }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaStethoscope 
                className="text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" 
                style={{ color: govColors.primary.orange }}
              />
              <h3 
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                style={{ color: govColors.text.primary }}
              >
                Clinical Training
              </h3>
              <p 
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: govColors.text.secondary }}
              >
                All programs include extensive clinical rotations in our network of 50+ partner 
                hospitals, providing real-world patient care experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.blue }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaAward 
                className="text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" 
                style={{ color: govColors.primary.blue }}
              />
              <h3 
                className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                style={{ color: govColors.text.primary }}
              >
                Certification
              </h3>
              <p 
                className="leading-relaxed text-sm sm:text-base"
                style={{ color: govColors.text.secondary }}
              >
                Graduates receive nationally recognized fellowship certificates, enhancing 
                career prospects and professional credibility in their specialty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="text-white py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Specialize Your Medical Career?
            </h2>
            <div 
              className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed opacity-95 px-4">
              Join our prestigious fellowship programs and advance your expertise with 
              industry-recognized specialization training.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition-all duration-300 transform hover:scale-105 gov-button">
                  Apply for Fellowship
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Contact Admissions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Inquiry Form Section */}
      <div 
        className="py-12 sm:py-16 md:py-20"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <InquiryForm />
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="modal-overlay" onClick={closeProgramModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div 
              className="p-4 sm:p-6 text-white relative"
              style={{ backgroundColor: selectedProgram.color }}
            >
              <button 
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-2xl hover:opacity-75 transition-opacity duration-300"
                onClick={closeProgramModal}
              >
                ×
              </button>
              <div className="flex items-center mb-3 sm:mb-4">
                <selectedProgram.icon className="text-3xl sm:text-4xl mr-3 sm:mr-4" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">{selectedProgram.title}</h2>
                  <p className="opacity-90 text-sm sm:text-base">Code: {selectedProgram.code}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Program Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Duration:</span> {selectedProgram.duration}</p>
                    <p><span className="font-semibold">Seats Available:</span> {selectedProgram.seats}</p>
                    <p><span className="font-semibold">Eligibility:</span> {selectedProgram.eligibility}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Schedule</h4>
                  <p className="text-sm">{selectedProgram.schedule}</p>
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Program Description</h4>
                <p className="text-sm leading-relaxed" style={{ color: govColors.text.secondary }}>
                  {selectedProgram.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Key Highlights</h4>
                  <ul className="space-y-1 text-sm">
                    {selectedProgram.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: selectedProgram.color }}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Curriculum</h4>
                  <ul className="space-y-1 text-sm">
                    {selectedProgram.curriculum.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: selectedProgram.color }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <h4 className="font-bold mb-2" style={{ color: govColors.primary.blue }}>Career Prospects</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.careerProspects.map((career, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: selectedProgram.color === govColors.primary.blue ? govColors.background.accent : govColors.background.orange,
                        color: selectedProgram.color
                      }}
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="flex-1">
                  <button 
                    className="w-full py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300"
                    style={{ 
                      backgroundColor: selectedProgram.color,
                      color: govColors.primary.white
                    }}
                  >
                    Apply Now
                  </button>
                </Link>
                <button 
                  className="flex-1 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: selectedProgram.color,
                    borderColor: selectedProgram.color
                  }}
                  onClick={closeProgramModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
