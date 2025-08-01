import React, { useState } from 'react';
import { govColors } from '../utils/colors';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry Submitted:', formData);
    // Add backend submission logic here
  };

  return (
    <div 
      className="py-12 px-6 md:px-16 lg:px-32 shadow-lg rounded-lg max-w-5xl mx-auto mt-10"
      style={{ backgroundColor: govColors.primary.white }}
    >
      <style>{`
        .form-input:focus {
          border-color: ${govColors.primary.orange} !important;
          box-shadow: 0 0 0 3px ${govColors.background.orange} !important;
          outline: none !important;
        }

        .form-select:focus {
          border-color: ${govColors.primary.orange} !important;
          box-shadow: 0 0 0 3px ${govColors.background.orange} !important;
          outline: none !important;
        }

        .submit-button {
          background: ${govColors.primary.orange};
          color: ${govColors.primary.white};
          border: 2px solid ${govColors.primary.orange};
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: ${govColors.secondary.darkOrange};
          border-color: ${govColors.secondary.darkOrange};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .mobile-responsive-padding {
            padding: 1.5rem 1rem;
          }
          
          .mobile-responsive-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="text-center mb-8">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4 mobile-responsive-text"
          style={{ color: govColors.primary.blue }}
        >
          Fellowship Inquiry Form
        </h2>
        <div 
          className="w-24 h-1 mx-auto mb-6"
          style={{ backgroundColor: govColors.primary.orange }}
        ></div>
        <p 
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: govColors.text.secondary }}
        >
          Fill in your details and we'll get back to you regarding fellowship programs, 
          eligibility criteria, admission process, and course structure.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: govColors.text.primary }}
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-lg p-3 form-input transition-all duration-300"
              style={{ 
                borderColor: govColors.border.medium,
                color: govColors.text.primary
              }}
              placeholder="Dr. Rajesh Kumar Sharma"
            />
          </div>

          {/* Email */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: govColors.text.primary }}
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-lg p-3 form-input transition-all duration-300"
              style={{ 
                borderColor: govColors.border.medium,
                color: govColors.text.primary
              }}
              placeholder="dr.rajesh@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: govColors.text.primary }}
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-lg p-3 form-input transition-all duration-300"
              style={{ 
                borderColor: govColors.border.medium,
                color: govColors.text.primary
              }}
              placeholder="+91 9876543210"
            />
          </div>

          {/* Fellowship Course */}
          <div>
            <label 
              className="block font-semibold mb-2"
              style={{ color: govColors.text.primary }}
            >
              Fellowship Program Interested In <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border-2 rounded-lg p-3 form-select transition-all duration-300"
              style={{ 
                borderColor: govColors.border.medium,
                backgroundColor: govColors.primary.white,
                color: govColors.text.primary
              }}
            >
              <option value="">-- Select Fellowship Program --</option>
              <option value="Fellowship in Child Health Care Management">Fellowship in Child Health Care Management</option>
              <option value="Fellowship in General Medicine & Health Care Management">Fellowship in General Medicine & Health Care Management</option>
              <option value="Fellowship in Women & Maternal Health Care Management">Fellowship in Women & Maternal Health Care Management</option>
              <option value="Fellowship in Ayurvedic Dermatology">Fellowship in Ayurvedic Dermatology</option>
              <option value="Fellowship in Kharsutra Therapy">Fellowship in Kharsutra Therapy</option>
              <option value="Multiple Programs">Multiple Programs</option>
              <option value="Other/General Inquiry">Other/General Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label 
            className="block font-semibold mb-2"
            style={{ color: govColors.text.primary }}
          >
            Additional Message/Questions
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border-2 rounded-lg p-3 form-input transition-all duration-300"
            style={{ 
              borderColor: govColors.border.medium,
              color: govColors.text.primary
            }}
            placeholder="Please share any specific questions about the fellowship programs, eligibility criteria, admission process, fee structure, or any other queries you may have..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="submit-button font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300"
          >
            Submit Fellowship Inquiry
          </button>
        </div>

        {/* Additional Information */}
        <div 
          className="mt-8 p-6 rounded-lg border-2"
          style={{ 
            backgroundColor: govColors.background.accent,
            borderColor: govColors.primary.blue
          }}
        >
          <h3 
            className="text-lg font-bold mb-3"
            style={{ color: govColors.primary.blue }}
          >
            What Happens Next?
          </h3>
          <ul 
            className="text-sm space-y-2"
            style={{ color: govColors.text.secondary }}
          >
            <li>• Our admissions team will contact you within 24-48 hours</li>
            <li>• You'll receive detailed information about your selected fellowship program</li>
            <li>• We'll schedule a counseling session to discuss eligibility and admission process</li>
            <li>• Complete guidance on documentation and application procedures</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
