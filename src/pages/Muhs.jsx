import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFileAlt, FaCalendarAlt, FaSearch, FaFilter, FaChevronDown, FaChevronRight,
  FaExternalLinkAlt, FaExclamationTriangle, FaBookOpen,
  FaBalanceScale, FaGraduationCap, FaHospital, FaUserMd, FaCertificate, FaTag, FaTimes, FaFolderOpen, FaUser, FaRegClock,
} from 'react-icons/fa';
import InquiryForm from '../components/InquiryForm';
import { govColors } from '../utils/colors';

// ============== DATA DEFINITIONS ============== //
const guidelines = [
  {
    id: 1,
    title: "Fellowship Training Assessment and Evaluation Guidelines 2025",
    category: "Academic",
    date: "2025-03-15",
    type: "PDF",
    size: "2.3 MB",
    description: "Comprehensive guidelines for continuous assessment, internal evaluation, and examination procedures for all fellowship training programs.",
    tags: ["Assessment", "Evaluation", "Fellowship"],
    isNew: true,
    objectives: [
      "Ensure assessment standards are aligned with MUHS and NMC guidelines.",
      "Establish fair and transparent evaluation procedures."
    ],
    applicableTo: "All Fellowship Program Students and Faculty",
    author: "Academic Council",
    updatedOn: "2025-03-15"
  },
  {
    id: 2,
    title: "Clinical Training Standards for Fellowship Programs",
    category: "Clinical",
    date: "2025-02-28",
    type: "PDF",
    size: "4.1 MB",
    description: "Updated standards and protocols for clinical training in fellowship programs, including patient interaction guidelines and supervision requirements.",
    tags: ["Clinical", "Training", "Fellowship"],
    isNew: true,
    objectives: [
      "Define patient interaction protocols.",
      "Outline supervision standards."
    ],
    applicableTo: "All Clinical Faculty & Fellows",
    author: "Clinical Board",
    updatedOn: "2025-02-28"
  },
  {
    id: 3,
    title: "Fellowship Research and Publication Guidelines",
    category: "Research",
    date: "2025-01-20",
    type: "PDF",
    size: "1.8 MB",
    description: "Guidelines for research conduct, case studies, and publication standards for fellowship training programs in healthcare management.",
    tags: ["Research", "Publication", "Fellowship"],
    isNew: false,
    objectives: [
      "Maintain research ethics compliance.",
      "Promote scholarly publications."
    ],
    applicableTo: "Research Faculty & Postgraduates",
    author: "Research Council",
    updatedOn: "2025-01-20"
  },
  {
    id: 4,
    title: "Faculty Development Framework for Fellowship Programs",
    category: "Faculty",
    date: "2023-12-10",
    type: "PDF",
    size: "3.2 MB",
    description: "Framework for continuous professional development and training modules for faculty involved in fellowship training programs.",
    tags: ["Faculty", "Development", "Training"],
    isNew: false,
    applicableTo: "All Teaching Faculty",
    author: "Faculty Affairs",
    updatedOn: "2023-12-10"
  },
  {
    id: 5,
    title: "Infrastructure Standards for Fellowship Training Centers",
    category: "Infrastructure",
    date: "2023-11-15",
    type: "PDF",
    size: "5.4 MB",
    description: "Minimum infrastructure requirements, equipment specifications, and facility standards for fellowship training institutions.",
    tags: ["Infrastructure", "Equipment", "Standards"],
    isNew: false,
    applicableTo: "College Administrators",
    author: "Admin Board",
    updatedOn: "2023-11-15"
  },
  {
    id: 6,
    title: "Fellowship Student Support and Welfare Guidelines",
    category: "Student Affairs",
    date: "2023-10-25",
    type: "PDF",
    size: "2.7 MB",
    description: "Guidelines for fellowship student counseling, financial aid, grievance redressal, and support services across all programs.",
    tags: ["Student", "Welfare", "Support"],
    isNew: false,
    applicableTo: "Fellowship Students",
    author: "Student Welfare Cell",
    updatedOn: "2023-10-25"
  }
];

const circulars = [
  {
    id: 1,
    title: "Implementation of New Fellowship Curriculum - Academic Year 2025-26",
    circularNo: "BVSS/ACAD/2025/001",
    date: "2025-03-20",
    category: "Academic",
    priority: "High",
    description: "Detailed instructions for implementing the revised fellowship curriculum for Child Health Care Management, General Medicine, Women's Health, Ayurvedic Dermatology, and Kharsutra Therapy programs.",
    attachments: ["Fellowship_Curriculum_Structure.pdf", "Implementation_Timeline.pdf"],
    isUrgent: true,
    objectives: [
      "Ensure timely curriculum rollout.",
      "Adhere to updated teaching guidelines."
    ],
    applicableTo: "Academics Department & Program Directors",
    author: "BVSS Administration",
    updatedOn: "2025-03-20"
  },
  {
    id: 2,
    title: "Fellowship Training Schedule and Academic Calendar 2025",
    circularNo: "BVSS/ADMIN/2025/015",
    date: "2025-03-18",
    category: "Administrative",
    priority: "Medium",
    description: "Official announcement of fellowship training schedules, examination dates, and important academic milestones for all fellowship programs.",
    attachments: ["Fellowship_Calendar_2025.pdf"],
    isUrgent: false,
    applicableTo: "All Fellows & Faculty",
    author: "Admin Dept",
    updatedOn: "2025-03-18"
  },
  {
    id: 3,
    title: "COVID-19 Health and Safety Protocols for Fellowship Training",
    circularNo: "BVSS/HEALTH/2025/008",
    date: "2025-03-10",
    category: "Health & Safety",
    priority: "High",
    description: "Updated health and safety protocols for fellowship training activities, clinical rotations, and patient care training in view of current health guidelines.",
    attachments: ["Safety_Protocols_Fellowship.pdf", "Emergency_Contacts.pdf"],
    isUrgent: true,
    objectives: [
      "Minimize health risk during clinical activities.",
      "Ensure compliance with national safety advisories."
    ],
    applicableTo: "Health & Safety Dept, All Trainers & Trainees",
    author: "BVSS Health Board",
    updatedOn: "2025-03-10"
  },
  {
    id: 4,
    title: "Fellowship Program Fee Structure 2025-25",
    circularNo: "BVSS/FIN/2025/012",
    date: "2025-02-25",
    category: "Financial",
    priority: "High",
    description: "Notification regarding fee structure for fellowship programs, payment schedules, and scholarship provisions for eligible candidates.",
    attachments: ["Fellowship_Fee_Structure_2025.pdf", "Payment_Guidelines.pdf"],
    isUrgent: false,
    author: "Finance Dept",
    updatedOn: "2025-02-25"
  },
  {
    id: 5,
    title: "Fellowship Faculty Recruitment and Selection Guidelines",
    circularNo: "BVSS/HR/2025/006",
    date: "2025-02-15",
    category: "Human Resources",
    priority: "Medium",
    description: "Updated guidelines for fellowship faculty recruitment, selection criteria, interview processes, and appointment procedures for all departments.",
    attachments: ["Fellowship_Faculty_Guidelines.pdf"],
    isUrgent: false,
    author: "HR Dept",
    updatedOn: "2025-02-15"
  },
  {
    id: 6,
    title: "Digital Learning Platform for Fellowship Programs",
    circularNo: "BVSS/IT/2025/003",
    date: "2025-01-30",
    category: "Technology",
    priority: "Medium",
    description: "Instructions for accessing the digital learning platform and online resources specifically designed for fellowship training programs.",
    attachments: ["Digital_Platform_Guide.pdf", "Fellowship_E_Learning.pdf"],
    isUrgent: false,
    author: "IT Cell",
    updatedOn: "2025-01-30"
  }
];

const categories = {
  guidelines: ["All", "Academic", "Clinical", "Research", "Faculty", "Infrastructure", "Student Affairs"],
  circulars: ["All", "Academic", "Administrative", "Health & Safety", "Financial", "Human Resources", "Technology"]
};

// ============== COMPONENT ============== //
const Muhs = () => {
  const [activeTab, setActiveTab] = useState('guidelines');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { setSelectedCategory('All'); setSearchTerm(''); }, [activeTab]);

  // Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const filterItems = (items) =>
    items.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch = item.title.toLowerCase().includes(lowerSearch)
        || item.description.toLowerCase().includes(lowerSearch);
      return matchesCategory && matchesSearch;
    });

  const filteredGuidelines = filterItems(guidelines);
  const filteredCirculars = filterItems(circulars);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':   return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':    return 'bg-green-100 text-green-800 border-green-200';
      default:       return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // ----------- MODAL POPUP -------------
  function Modal({ item, onClose, type }) {
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }, []);
    if (!item) return null;
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto p-0"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.18)', border: `1px solid ${govColors.primary.orange}22` }}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b"
               style={{ borderColor: govColors.primary.orange, background: govColors.background.secondary }}>
            <div className="flex items-center space-x-2">
              <span className="text-xs px-2 py-1 rounded-lg font-bold uppercase tracking-wider"
                style={{
                  color: govColors.primary.white,
                  background: type === 'circular' ? govColors.primary.blue : govColors.primary.orange
                }}>
                <FaFileAlt className="inline mr-2" />{type === 'guideline' ? 'Guideline' : 'Circular'}
              </span>
              {type === 'circular' && (
                <span className={`text-xs px-2 py-1 rounded border font-bold ${getPriorityColor(item.priority)}`}>
                  {item.priority} Priority
                </span>
              )}
              {(item.isUrgent || item.isNew) && (
                <span className={`text-xs ml-2 font-medium ${item.isUrgent ? 'text-red-600' : 'text-green-700'} flex items-center`}>
                  {item.isUrgent ? <><FaExclamationTriangle className="inline mr-1" />Urgent</>
                    : <span className="bg-green-100 text-green-700 px-2 py-1 rounded">NEW</span>}
                </span>
              )}
            </div>
            <button
              className="text-gray-500 hover:text-red-500 text-xl outline-none bg-transparent"
              aria-label="Close"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-blue-900" style={{ lineHeight: 1.3 }}>
              {item.title}
            </h2>

            {/* Meta Info Block */}
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center flex-wrap text-xs sm:text-sm gap-y-1 gap-x-4 leading-tight">
              <span className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-1" /> {item.date}
              </span>
              {type === 'circular' && (
                <span className="flex items-center text-gray-700">
                  <FaFolderOpen className="mr-1" /> {item.circularNo}
                </span>
              )}
              <span className="flex items-center text-gray-700">
                <FaFolderOpen className="mr-1" /> Category: 
                <span className="ml-1 font-medium" style={{ color: govColors.primary.orange }}>{item.category}</span>
              </span>
              {item.size && (
                <span className="flex items-center text-gray-700">
                  <FaRegClock className="mr-1" /> {item.size}
                </span>
              )}
            </div>
            {/* Author/Contact/Applicable */}
            <div className="mb-3 flex flex-wrap gap-2 text-xs text-gray-500">
              {item.author && (
                <span className="flex items-center">
                  <FaUser className="mr-1" /> By: {item.author}
                </span>
              )}
              {item.updatedOn && (
                <span className="flex items-center">
                  <FaRegClock className="mr-1" /> Last Update: {item.updatedOn}
                </span>
              )}
              {item.applicableTo && (
                <span className="flex items-center italic">
                  <FaBalanceScale className="mr-1" /> For: {item.applicableTo}
                </span>
              )}
            </div>
            {/* Description Section */}
            <hr className="mb-4" />
            <div>
              <div className="text-sm sm:text-base text-gray-700 mb-4 whitespace-pre-line">
                {item.description}
              </div>
              {/* Objectives / Highlights */}
              {item.objectives && item.objectives.length > 0 && (
                <>
                  <div className="font-semibold text-sm mt-2 mb-1" style={{ color: govColors.primary.blue }}>
                    <FaBookOpen className="inline mr-2" />Key Objectives / Highlights
                  </div>
                  <ul className="mb-4 list-disc list-inside space-y-1 pl-2">
                    {item.objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded">
                      <FaTag className="mr-1 text-gray-400" /> {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Attachments */}
              {type === 'circular' && item.attachments && item.attachments.length > 0 && (
                <div className="mb-2">
                  <div className="text-base font-semibold mb-1 text-blue-900">Attachments:</div>
                  <ul className="list-disc ml-6 space-y-1">
                    {item.attachments.map((filename, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <FaFileAlt className="text-gray-600 mr-2" />
                        <span>{filename}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 mt-2">
                    <FaExclamationTriangle className="inline mr-1" />
                    To access attachments, please refer to your official communication or LMS portal.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="pb-6 pt-2 px-6">
            <button
              className="gov-button px-4 py-2 rounded-lg font-semibold text-sm w-full sm:w-48"
              type="button"
              onClick={onClose}
            >Close</button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ======================= PAGE BODY =======================
  return (
    <div style={{ backgroundColor: govColors.background.primary }}>
      <style>{`
        .section-divider {
          height: 4px;
          background: linear-gradient(to right, ${govColors.primary.blue}, ${govColors.primary.orange}, ${govColors.primary.blue});
          margin: 2rem 0;
        }
      `}</style>
      {/* HEADER SECTION */}
      <div className="text-white relative overflow-hidden" style={{ backgroundColor: govColors.primary.blue }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.8 }}>
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 mx-auto">
              <FaBalanceScale className="h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-0 sm:mr-4" style={{ color: govColors.primary.orange }} />
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
                Government
                <span style={{ color: govColors.primary.orange }}> Guidelines</span>
              </h1>
            </div>
            <div className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
            <p className="text-base sm:text-xl leading-relaxed opacity-95 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              Bharat Vikas Shikshan Sanstha - Official Guidelines and Circulars for Fellowship Training Programs
            </p>
            <div
              className="rounded-lg p-4 sm:p-6 mx-auto max-w-4xl border-2"
              style={{ backgroundColor: `${govColors.primary.white}10`, borderColor: govColors.primary.orange }}
            >
              <p className="opacity-90 text-sm sm:text-base leading-relaxed">
                Access the latest academic guidelines, administrative circulars, and regulatory documents 
                for fellowship training programs in Child Health Care Management, General Medicine, 
                Women's Health, Ayurvedic Dermatology, and Kharsutra Therapy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TABS */}
      <div className="shadow-sm border-b sticky top-0 z-20" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex space-x-4 sm:space-x-8">
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`py-3 sm:py-4 px-4 sm:px-6 border-b-2 font-semibold transition-colors ${activeTab === 'guidelines' ? 'border-orange-500 text-blue-900' : 'border-transparent text-gray-400 hover:text-blue-900'}`}
            >
              <div className="flex items-center">
                <FaBookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Guidelines</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('circulars')}
              className={`py-3 sm:py-4 px-4 sm:px-6 border-b-2 font-semibold transition-colors ${activeTab === 'circulars' ? 'border-orange-500 text-blue-900' : 'border-transparent text-gray-400 hover:text-blue-900'}`}
            >
              <div className="flex items-center">
                <FaFileAlt className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Circulars</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH/FILTER */}
      <div className="border-b" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5" style={{ color: govColors.text.secondary }} />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border-2 rounded-lg transition-all duration-300 form-input text-sm sm:text-base"
                style={{ borderColor: govColors.border.medium, color: govColors.text.primary }}
              />
            </div>
            {/* Category Filter */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <FaFilter className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: govColors.text.secondary }} />
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg transition-all duration-300 form-select flex-1 lg:flex-none text-sm sm:text-base"
                style={{ borderColor: govColors.border.medium, backgroundColor: govColors.primary.white, color: govColors.text.primary }}
              >
                {categories[activeTab].map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {activeTab === 'guidelines' && (
          <motion.div className="space-y-4 sm:space-y-6" initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: govColors.primary.blue }}>
                Fellowship Training Guidelines ({filteredGuidelines.length})
              </h2>
              <span className="text-xs sm:text-sm" style={{ color: govColors.text.secondary }}>
                Last updated: March 15, 2025
              </span>
            </div>
            {filteredGuidelines.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <FaBookOpen className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4" style={{ color: govColors.text.secondary }} />
                <p className="text-base sm:text-lg" style={{ color: govColors.text.secondary }}>
                  No guidelines found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6">
                {filteredGuidelines.map((guideline) => (
                  <motion.div
                    key={guideline.id}
                    className="bg-white rounded-lg shadow-md card-hover border-l-4 card-responsive"
                    style={{ borderLeftColor: govColors.primary.orange }}
                    variants={fadeInUp}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                        <div className="flex-1 card-content-mobile">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                            <h3 className="text-lg sm:text-xl font-semibold mr-0 sm:mr-3 mb-2 sm:mb-0" style={{ color: govColors.text.primary }}>
                              {guideline.title}
                            </h3>
                            {guideline.isNew && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium self-start sm:self-auto">
                                New
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center text-xs sm:text-sm gap-2 sm:gap-4 mb-3" style={{ color: govColors.text.secondary }}>
                            <div className="flex items-center">
                              <FaCalendarAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {guideline.date}
                            </div>
                            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: govColors.background.accent, color: govColors.primary.blue }}>
                              {guideline.category}
                            </span>
                            <span className="hidden sm:inline" style={{ color: govColors.text.secondary }}>•</span>
                            <span className="text-xs">{guideline.type} • {guideline.size}</span>
                          </div>
                          <p className="mb-4 leading-relaxed text-sm sm:text-base" style={{ color: govColors.text.secondary }}>
                            {guideline.description}
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {guideline.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 rounded text-xs"
                                style={{ backgroundColor: govColors.background.secondary, color: govColors.text.secondary }}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-4 flex flex-row lg:flex-col gap-2 card-actions-mobile">
                          {/* View (MODAL) button, no Download */}
                          <button
                            className="flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 gov-button-secondary responsive-btn flex-1 lg:flex-none"
                            onClick={() => setModalItem({ ...guideline, modalType: 'guideline' })}
                          >
                            <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">View</span>
                            <span className="sm:hidden">View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'circulars' && (
          <motion.div className="space-y-4 sm:space-y-6" initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: govColors.primary.blue }}>
                Official Circulars ({filteredCirculars.length})
              </h2>
              <span className="text-xs sm:text-sm" style={{ color: govColors.text.secondary }}>
                Last updated: March 20, 2025
              </span>
            </div>
            {filteredCirculars.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <FaFileAlt className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4" style={{ color: govColors.text.secondary }} />
                <p className="text-base sm:text-lg" style={{ color: govColors.text.secondary }}>
                  No circulars found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6">
                {filteredCirculars.map((circular) => (
                  <motion.div
                    key={circular.id}
                    className="bg-white rounded-lg shadow-md card-hover border-l-4 card-responsive"
                    style={{ borderLeftColor: govColors.primary.blue }}
                    variants={fadeInUp}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                        <div className="flex-1 card-content-mobile">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                            <h3 className="text-lg sm:text-xl font-semibold mr-0 sm:mr-3 mb-2 sm:mb-0" style={{ color: govColors.text.primary }}>
                              {circular.title}
                            </h3>
                            {circular.isUrgent && (
                              <div className="flex items-center bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium self-start sm:self-auto">
                                <FaExclamationTriangle className="h-3 w-3 mr-1" />
                                Urgent
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center text-xs sm:text-sm gap-2 sm:gap-4 mb-3" style={{ color: govColors.text.secondary }}>
                            <div className="flex items-center">
                              <FaCalendarAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {circular.date}
                            </div>
                            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: govColors.background.secondary, color: govColors.text.secondary }}>
                              {circular.circularNo}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs border ${getPriorityColor(circular.priority)}`}>
                              {circular.priority} Priority
                            </span>
                          </div>
                          <p className="mb-4 leading-relaxed text-sm sm:text-base" style={{ color: govColors.text.secondary }}>
                            {circular.description}
                          </p>
                          {circular.attachments && circular.attachments.length > 0 && (
                            <div className="mb-4">
                              <button
                                onClick={() => setExpandedItem(expandedItem === circular.id ? null : circular.id)}
                                className="flex items-center font-medium text-sm transition-colors duration-300"
                                style={{ color: govColors.primary.blue }}
                                onMouseEnter={e => e.target.style.color = govColors.primary.orange}
                                onMouseLeave={e => e.target.style.color = govColors.primary.blue}
                              >
                                {expandedItem === circular.id
                                  ? <FaChevronDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                  : <FaChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                }
                                Attachments ({circular.attachments.length})
                              </button>
                              {expandedItem === circular.id && (
                                <div className="mt-2 pl-3 sm:pl-5 space-y-2">
                                  {circular.attachments.map((attachment, idx) => (
                                    <div key={idx}
                                      className="flex items-center p-2 rounded border"
                                      style={{ backgroundColor: govColors.background.secondary, borderColor: govColors.border.light }}
                                    >
                                      <FaFileAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" style={{ color: govColors.text.secondary }} />
                                      <span className="text-xs sm:text-sm break-all" style={{ color: govColors.text.secondary }}>
                                        {attachment}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm"
                            style={{ backgroundColor: govColors.background.accent, color: govColors.primary.blue }}>
                            {circular.category}
                          </span>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-4 flex flex-row lg:flex-col gap-2 card-actions-mobile">
                          <button
                            className="flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 gov-button-secondary responsive-btn flex-1 lg:flex-none"
                            onClick={() => setModalItem({ ...circular, modalType: 'circular' })}
                          >
                            <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">View</span>
                            <span className="sm:hidden">View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalItem && (
          <Modal
            item={modalItem}
            type={modalItem.modalType}
            onClose={() => setModalItem(null)}
          />
        )}
      </AnimatePresence>

      {/* --- Important Info / Inquiry Form --- */}
      <div className="section-divider"></div>
      <section className="py-12 sm:py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: govColors.primary.blue }}>
              Important Information
            </h2>
            <div className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: govColors.primary.orange }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: "Fellowship Programs",
                description: "5 specialized fellowship programs in healthcare management",
                color: govColors.primary.blue
              },
              {
                icon: FaHospital,
                title: "Clinical Training",
                description: "50+ partner hospitals for practical training",
                color: govColors.primary.orange
              },
              {
                icon: FaUserMd,
                title: "Expert Faculty",
                description: "25+ experienced healthcare professionals",
                color: govColors.primary.blue
              },
              {
                icon: FaCertificate,
                title: "Government Recognized",
                description: "Certified fellowship programs with national recognition",
                color: govColors.primary.orange
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg card-hover border-t-4"
                style={{ borderTopColor: item.color }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <item.icon className="text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4" style={{ color: item.color }} />
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ color: govColors.text.primary }}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: govColors.text.secondary }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-12 sm:py-16" style={{ backgroundColor: govColors.background.primary }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Muhs;
