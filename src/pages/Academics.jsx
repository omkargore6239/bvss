import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBookOpen, 
  FaUsers, 
  FaAward, 
  FaGlobe, 
  FaChevronRight, 
  FaStar,  
  FaBaby,
  FaHeartbeat,
  FaVenusMars,
  FaSpa,
  FaHospital,
  FaMicroscope,
  FaStethoscope
} from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { Link } from 'react-router-dom';
import { govColors } from '../utils/colors';

const Academics = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      transition: { staggerChildren: 0.1 },
    },
  };

  const stats = [
    { number: '5', label: 'Fellowship Programs', icon: FaBookOpen },
    { number: '25+', label: 'Expert Faculty', icon: FaUsers },
    { number: '95%', label: 'Completion Rate', icon: FaAward },
    { number: '50+', label: 'Partner Hospitals', icon: FaGlobe }
  ];

  const programs = {
    fellowship: [
      {
        title: 'Fellowship in Child Health Care Management',
        seats: '20',
        description: 'Comprehensive fellowship program focusing on pediatric healthcare management, child development, and specialized pediatric care protocols.',
        highlights: ['Pediatric Emergency Care', 'Child Development Assessment', 'Vaccination Protocols', 'Nutritional Management'],
        icon: FaBaby,
        color: govColors.primary.blue
      },
      {
        title: 'Fellowship in General Medicine & Healthcare Management',
        seats: '25',
        description: 'Advanced training in general medicine practices, healthcare administration, and comprehensive patient management systems.',
        highlights: ['Clinical Decision Making', 'Healthcare Administration', 'Patient Management', 'Quality Assurance'],
        icon: FaHeartbeat,
        color: govColors.primary.orange
      },
      {
        title: 'Fellowship in Women & Maternal Health Care Management',
        seats: '20',
        description: 'Specialized program in women\'s health, maternal care, gynecological practices, and reproductive health management.',
        highlights: ['Prenatal Care', 'Gynecological Disorders', 'Family Planning', 'Maternal Nutrition'],
        icon: FaVenusMars,
        color: govColors.primary.blue
      },
      {
        title: 'Fellowship in Ayurvedic Dermatology',
        seats: '15',
        description: 'In-depth study of Ayurvedic approaches to dermatological conditions, skin care, and therapeutic treatments.',
        highlights: ['Skin Disorder Management', 'Herbal Therapies', 'Cosmetic Dermatology', 'Ayurvedic Treatments'],
        icon: FaSpa,
        color: govColors.primary.orange
      },
      {
        title: 'Fellowship in Kharsutra Therapy',
        seats: '10',
        description: 'Specialized fellowship in traditional Ayurvedic Kharsutra (medicated thread) therapy for ano-rectal disorders.',
        highlights: ['Anorectal Surgery', 'Minimally Invasive Techniques', 'Traditional Methods', 'Post-operative Care'],
        icon: MdLocalHospital,
        color: govColors.primary.blue
      }
    ]
  };

  const departments = [
    {
      name: 'Child Health Care Management',
      specialty: 'Pediatric Healthcare',
      faculty: 5,
      research: 'Child Development, Pediatric Protocols',
      color: govColors.primary.blue,
      icon: FaBaby
    },
    {
      name: 'General Medicine & Healthcare',
      specialty: 'Internal Medicine & Administration',
      faculty: 6,
      research: 'Healthcare Quality, Patient Management',
      color: govColors.primary.orange,
      icon: FaHeartbeat
    },
    {
      name: 'Women & Maternal Health',
      specialty: 'Gynecology & Obstetrics',
      faculty: 4,
      research: 'Maternal Care, Women\'s Wellness',
      color: govColors.primary.blue,
      icon: FaVenusMars
    },
    {
      name: 'Ayurvedic Dermatology',
      specialty: 'Skin Care & Therapeutics',
      faculty: 4,
      research: 'Herbal Dermatology, Skin Treatments',
      color: govColors.primary.orange,
      icon: FaSpa
    },
    {
      name: 'Kharsutra Therapy',
      specialty: 'Surgical Procedures',
      faculty: 3,
      research: 'Traditional Surgery, Minimally Invasive',
      color: govColors.primary.blue,
      icon: MdLocalHospital
    }
  ];

  const facilities = [
    {
      title: 'Clinical Training Centers',
      description: 'Hands-on training facilities with modern equipment and expert supervision',
      icon: FaHospital,
      features: ['50+ Partner Hospitals', 'Real Patient Cases', 'Expert Mentorship'],
      color: govColors.primary.blue
    },
    {
      title: 'Research & Development',
      description: 'Advanced research facilities for medical innovation and clinical studies',
      icon: FaMicroscope,
      features: ['Modern Labs', 'Research Projects', 'Publication Support'],
      color: govColors.primary.orange
    },
    {
      title: 'Digital Learning Platform',
      description: 'Online resources, e-library, and digital case studies for comprehensive learning',
      icon: FaBookOpen,
      features: ['24/7 Access', 'Video Lectures', 'Interactive Content'],
      color: govColors.primary.blue
    },
    {
      title: 'Simulation Labs',
      description: 'Practice environments for skill development and procedural training',
      icon: FaStethoscope,
      features: ['Advanced Simulators', 'Skill Assessment', 'Safe Practice'],
      color: govColors.primary.orange
    }
  ];

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
        .program-card-blue {
          border-left-color: ${govColors.primary.blue};
        }
        .program-card-orange {
          border-left-color: ${govColors.primary.orange};
        }
        .program-header-blue {
          background-color: ${govColors.primary.blue};
        }
        .program-header-orange {
          background-color: ${govColors.primary.orange};
        }
        .program-button-blue {
          background-color: ${govColors.primary.blue};
          border-color: ${govColors.primary.blue};
        }
        .program-button-blue:hover {
          background-color: ${govColors.secondary.darkBlue};
          border-color: ${govColors.secondary.darkBlue};
        }
        .program-button-orange {
          background-color: ${govColors.primary.orange};
          border-color: ${govColors.primary.orange};
        }
        .program-button-orange:hover {
          background-color: ${govColors.secondary.darkOrange};
          border-color: ${govColors.secondary.darkOrange};
        }
        @media (max-width: 768px) {
          .mobile-responsive-padding {
            padding: 1rem;
          }
          .mobile-responsive-text {
            font-size: 1.5rem;
          }
          .mobile-responsive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .mobile-responsive-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section 
        className="relative text-white py-16 md:py-20 overflow-hidden"
        style={{ backgroundColor: govColors.primary.blue }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className={`container mx-auto px-4 sm:px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Academic
              <span style={{ color: govColors.primary.orange }}> Excellence</span>
            </h1>
            <div className="w-24 md:w-32 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed opacity-95 px-4">
              Advancing Healthcare Careers Through Specialized Fellowship Programs 
              and Professional Development Excellence
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link to="/courses">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gov-button-secondary">
                  Explore Programs
                </button>
              </Link>
              <a href="/brochure/BVSS-Academic-Brochure-2025.pdf" download>
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Download Brochure
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 md:py-16" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: index % 2 === 0 ? govColors.primary.blue : govColors.primary.orange }}
                  >
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2" style={{ color: govColors.primary.blue }}>
                    {stat.number}
                  </div>
                  <div className="font-medium text-sm md:text-base" style={{ color: govColors.text.secondary }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -- Removed Annexure Section here -- */}

      <div className="section-divider"></div>

      {/* FELLOWSHIP PROGRAMS SECTION */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: govColors.primary.blue }}>
              Fellowship Programs
            </h2>
            <div className="w-20 md:w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: govColors.text.secondary }}>
              Specialized training programs designed for practicing healthcare professionals 
              seeking advanced expertise in specific medical domains
            </p>
          </div>
          <motion.div 
            className="grid mobile-responsive-grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programs.fellowship.map((program, index) => (
              <motion.div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover border-l-4 ${
                  program.color === govColors.primary.blue ? 'program-card-blue' : 'program-card-orange'
                }`}
                variants={fadeInUp}
              >
                <div className={`p-4 md:p-6 text-white ${
                  program.color === govColors.primary.blue ? 'program-header-blue' : 'program-header-orange'
                }`}>
                  <div className="flex items-center mb-3 md:mb-4">
                    <program.icon className="text-2xl md:text-3xl mr-3" />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold leading-tight">{program.title}</h3>
                      <div className="flex items-center justify-between text-xs md:text-sm mt-2">
                        <div className="flex items-center">
                          <FaUsers className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {program.seats} Seats
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: govColors.text.secondary }}>
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm" style={{ color: govColors.text.primary }}>
                      Key Highlights:
                    </h4>
                    <div className="space-y-1">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <FaChevronRight className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: program.color }} />
                          <span style={{ color: govColors.text.secondary }}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact">
                    <button 
                      className={`w-full py-2 md:py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-2 text-white ${
                        program.color === govColors.primary.blue ? 'program-button-blue' : 'program-button-orange'
                      }`}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}>
                      Contact for Admission
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* FELLOWSHIP DEPARTMENTS SECTION */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: govColors.primary.blue }}>
              Fellowship Departments
            </h2>
            <div className="w-20 md:w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: govColors.text.secondary }}>
              Our specialized departments focused on delivering excellence in fellowship training programs
            </p>
          </div>
          <motion.div 
            className="grid mobile-responsive-grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {departments.map((dept, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 card-hover bg-white"
                variants={fadeInUp}
              >
                <div className="p-4 md:p-6 text-white" style={{ backgroundColor: dept.color }}>
                  <div className="flex items-center mb-3 md:mb-4">
                    <dept.icon className="text-2xl md:text-3xl mr-3" />
                    <div>
                      <h3 className="text-base md:text-lg font-bold">{dept.name}</h3>
                      <p className="text-xs md:text-sm opacity-90">{dept.specialty}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs md:text-sm">
                      <FaUsers className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      {dept.faculty} Faculty Members
                    </div>
                    <div className="flex items-center text-xs md:text-sm">
                      <FaMicroscope className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Research: {dept.research}
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6" style={{ backgroundColor: govColors.primary.white }}>
                  <Link to="/courses">
                    <button 
                      className="w-full py-2 rounded-lg font-medium text-sm transition-colors duration-300 border-2"
                      style={{ 
                        color: dept.color,
                        borderColor: dept.color,
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = dept.color;
                        e.target.style.color = govColors.primary.white;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = dept.color;
                      }}>
                      View Courses
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* TRAINING FACILITIES SECTION */}
      <section className="py-16 md:py-20" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: govColors.primary.blue }}>
              Training Facilities
            </h2>
            <div className="w-20 md:w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: govColors.text.secondary }}>
              State-of-the-art facilities designed to provide comprehensive practical training 
              for our fellowship programs
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border-t-4"
                style={{ borderTopColor: facility.color }}
                variants={fadeInUp}
              >
                <facility.icon className="text-4xl md:text-5xl mb-3 md:mb-4 mx-auto" style={{ color: facility.color }}/>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: govColors.text.primary }}>
                  {facility.title}
                </h3>
                <p className="mb-4 md:mb-6 text-sm leading-relaxed" style={{ color: govColors.text.secondary }}>
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center text-xs md:text-sm">
                      <FaStar className="w-3 h-3 md:w-4 md:h-4 mr-2" style={{ color: facility.color }}/>
                      <span style={{ color: govColors.text.secondary }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 text-white" style={{ backgroundColor: govColors.primary.blue }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Advance Your Medical Career?
            </h2>
            <div className="w-20 md:w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-95 px-4">
              Join our prestigious fellowship programs and become part of a legacy that shapes 
              the future of specialized healthcare practice.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gov-button">
                  Contact for Admission
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Campus Visit
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Contact Admissions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* InquiryForm */}
      <div className="py-12 md:py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <InquiryForm />
      </div>
    </div>
  );
};

export default Academics;
