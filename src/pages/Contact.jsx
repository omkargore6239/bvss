import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGraduationCap,
  FaUserMd,
  FaHospital,
  FaCertificate,
  FaQuestionCircle,
  FaUsers
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import InquiryForm from '../components/InquiryForm';
import { govColors } from '../utils/colors';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
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

        .form-input {
          border: 2px solid ${govColors.border.medium};
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: ${govColors.primary.blue};
          box-shadow: 0 0 0 3px ${govColors.background.accent};
          outline: none;
        }

        .social-icon {
          color: ${govColors.primary.white};
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: ${govColors.primary.orange};
          transform: scale(1.1);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact
              <span style={{ color: govColors.primary.orange }}> Us</span>
            </h1>
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              Connect with Bharat Vikas Shikshan Sanstha for fellowship training programs, 
              admissions guidance, and healthcare education support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.blue }}
              variants={fadeInUp}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: govColors.background.accent }}
              >
                <FaPhone 
                  className="h-8 w-8" 
                  style={{ color: govColors.primary.blue }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: govColors.primary.blue }}
              >
                Phone
              </h3>
              <div className="space-y-2">
                <p style={{ color: govColors.text.secondary }}>
                  Main Office: <span className="font-semibold">(+91) 9876543210</span>
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Admissions: <span className="font-semibold">(+91) 9517538520</span>
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Fellowship Info: <span className="font-semibold">(+91) 7539514560</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.orange }}
              variants={fadeInUp}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: govColors.background.orange }}
              >
                <FaEnvelope 
                  className="h-8 w-8" 
                  style={{ color: govColors.primary.orange }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: govColors.primary.blue }}
              >
                Email
              </h3>
              <div className="space-y-2">
                <p style={{ color: govColors.text.secondary }}>
                  General: <span className="font-semibold">bvss.edu@gmail.com</span>
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Fellowship: <span className="font-semibold">fellowship@bvss.edu.in</span>
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Admissions: <span className="font-semibold">admissions@bvss.edu.in</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 text-center card-hover border-t-4"
              style={{ borderTopColor: govColors.primary.blue }}
              variants={fadeInUp}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: govColors.background.accent }}
              >
                <FaMapMarkerAlt 
                  className="h-8 w-8" 
                  style={{ color: govColors.primary.blue }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: govColors.primary.blue }}
              >
                Address
              </h3>
              <div className="space-y-1">
                <p style={{ color: govColors.text.secondary }}>
                  <strong>Bharat Vikas Shikshan Sanstha</strong>
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Chinchwad, Pune 411019
                </p>
                <p style={{ color: govColors.text.secondary }}>
                  Maharashtra, India
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Our Location
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-12"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 overflow-hidden">
              <div className="relative w-full" style={{ height: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.820462856699!2d73.7996323149097!3d18.60050798737389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bef3c7c3d99f%3A0x7321c7375336d7e8!2sBharat%20Vikas%20Shikshan%20Sanstha!5e0!3m2!1sen!2sin!4v1633024278767!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/place/Bharat+Vikas+Shikshan+Sanstha/@18.6005079,73.7996323,17z/data=!4m5!3m4!1s0x3bc2bef3c7c3d99f:0x7321c7375336d7e8!8m2!3d18.6005079!4d73.801821"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg font-semibold transition duration-300 gov-button"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Send Us a Message
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-12"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-10 border-2" style={{ borderColor: govColors.border.light }}>
              {formSubmitted ? (
                <div 
                  className="border-2 px-6 py-4 rounded-lg mb-6 text-center"
                  style={{ 
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724'
                  }}
                  role="alert"
                >
                  <p className="font-bold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible regarding your fellowship inquiry.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block font-medium mb-3"
                      style={{ color: govColors.text.primary }}
                    >
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg form-input"
                      style={{ color: govColors.text.primary }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block font-medium mb-3"
                      style={{ color: govColors.text.primary }}
                    >
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg form-input"
                      style={{ color: govColors.text.primary }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block font-medium mb-3"
                      style={{ color: govColors.text.primary }}
                    >
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg form-input"
                      style={{ color: govColors.text.primary }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block font-medium mb-3"
                      style={{ color: govColors.text.primary }}
                    >
                      Subject
                    </label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg form-input"
                      style={{ color: govColors.text.primary }}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Fellowship Programs">Fellowship Programs</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Child Health Fellowship">Child Health Fellowship</option>
                      <option value="General Medicine Fellowship">General Medicine Fellowship</option>
                      <option value="Women's Health Fellowship">Women's Health Fellowship</option>
                      <option value="Ayurvedic Dermatology">Ayurvedic Dermatology</option>
                      <option value="Kharsutra Therapy">Kharsutra Therapy</option>
                      <option value="Campus Visit">Campus Visit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label 
                      htmlFor="message" 
                      className="block font-medium mb-3"
                      style={{ color: govColors.text.primary }}
                    >
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6" 
                      className="w-full px-4 py-3 rounded-lg form-input"
                      style={{ color: govColors.text.primary }}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2 text-center">
                    <button 
                      type="submit" 
                      className="px-10 py-4 rounded-lg font-bold text-lg transition duration-300 gov-button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Office Hours Section */}
      <section className="py-16" style={{ backgroundColor: govColors.background.secondary }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Office Hours
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-12"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead style={{ backgroundColor: govColors.primary.blue }}>
                  <tr>
                    <th className="py-4 px-6 text-left text-white font-semibold">Department</th>
                    <th className="py-4 px-6 text-left text-white font-semibold">Weekdays</th>
                    <th className="py-4 px-6 text-left text-white font-semibold">Weekend</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ color: govColors.text.secondary }}>
                  <tr>
                    <td className="py-4 px-6 font-medium" style={{ color: govColors.text.primary }}>Main Office</td>
                    <td className="py-4 px-6">8:00 AM - 5:00 PM</td>
                    <td className="py-4 px-6">Closed</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium" style={{ color: govColors.text.primary }}>Fellowship Admissions</td>
                    <td className="py-4 px-6">9:00 AM - 6:00 PM</td>
                    <td className="py-4 px-6">10:00 AM - 2:00 PM (Sat)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium" style={{ color: govColors.text.primary }}>Fellowship Coordination</td>
                    <td className="py-4 px-6">8:30 AM - 4:30 PM</td>
                    <td className="py-4 px-6">Closed</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium" style={{ color: govColors.text.primary }}>Digital Library</td>
                    <td className="py-4 px-6">7:00 AM - 11:00 PM</td>
                    <td className="py-4 px-6">9:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium" style={{ color: govColors.text.primary }}>Student Services</td>
                    <td className="py-4 px-6">8:00 AM - 5:00 PM</td>
                    <td className="py-4 px-6">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p 
              className="text-center mt-6 max-w-2xl mx-auto"
              style={{ color: govColors.text.secondary }}
            >
              Holiday schedules may vary. Please check our announcements for special hours during fellowship program sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: govColors.primary.white }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: govColors.primary.blue }}
            >
              Frequently Asked Questions
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-16"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mb-6 border-l-4"
                style={{ borderLeftColor: govColors.primary.blue }}
                variants={fadeInUp}
              >
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: govColors.primary.blue }}
                >
                  How do I apply for fellowship programs?
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Fellowship applications are available online and can be submitted through our admissions portal. 
                  Visit our Courses page for detailed information about each fellowship program, eligibility criteria, 
                  and application deadlines. You can also contact our admissions office for personalized guidance.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mb-6 border-l-4"
                style={{ borderLeftColor: govColors.primary.orange }}
                variants={fadeInUp}
              >
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: govColors.primary.blue }}
                >
                  What are the fellowship program fees?
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Fellowship program fees vary by specialization. Most 12-month programs are ₹1,50,000 and 
                  6-month programs are ₹1,00,000. Payment plans and scholarship opportunities are available 
                  for eligible candidates. Contact our fellowship coordination office for detailed fee structure.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 border-l-4"
                style={{ borderLeftColor: govColors.primary.blue }}
                variants={fadeInUp}
              >
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: govColors.primary.blue }}
                >
                  How do I schedule a campus visit?
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: govColors.text.secondary }}
                >
                  Campus visits are available Monday through Friday at 10:00 AM and 2:00 PM, and 
                  select Saturdays at 11:00 AM. You can schedule a visit by calling our admissions office 
                  or using our contact form above. We recommend scheduling in advance to ensure availability.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16" style={{ backgroundColor: govColors.background.accent }}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: FaGraduationCap, number: '5', label: 'Fellowship Programs', color: govColors.primary.blue },
              { icon: FaUserMd, number: '25+', label: 'Expert Faculty', color: govColors.primary.orange },
              { icon: FaHospital, number: '50+', label: 'Partner Hospitals', color: govColors.primary.blue },
              { icon: FaCertificate, number: '500+', label: 'Graduates', color: govColors.primary.orange }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <stat.icon 
                  className="text-4xl mx-auto mb-4" 
                  style={{ color: stat.color }}
                />
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: govColors.primary.blue }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: govColors.text.secondary }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="text-white py-16"
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
              Connect With Us
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: govColors.primary.orange }}
            ></div>
            <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-95">
              Follow us on social media for fellowship program updates, healthcare education news, and campus events.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="social-icon p-2">
                <FaFacebook className="w-8 h-8" />
              </a>
              <a href="#" className="social-icon p-2">
                <FaTwitter className="w-8 h-8" />
              </a>
              <a href="#" className="social-icon p-2">
                <FaInstagram className="w-8 h-8" />
              </a>
              <a href="#" className="social-icon p-2">
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <div 
        className="py-16"
        style={{ backgroundColor: govColors.background.secondary }}
      >
        <InquiryForm />
      </div>
    </div>
  );
};

export default ContactUs;
