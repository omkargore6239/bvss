import React, { useState } from 'react';

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
    <div className="bg-white py-10 px-6 md:px-16 lg:px-32 shadow-lg rounded-md max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admission Inquiry Form</h2>
      <p className="text-center text-gray-600 mb-8">
        Fill in your details and we’ll get back to you regarding admission information, eligibility, and course structure.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="1234567890"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Course Interested In <span className="text-red-500">*</span></label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">-- Select Course --</option>
              <option value="D.Pharm">D.Pharm</option>
              <option value="B.Pharm">B.Pharm</option>
              <option value="M.Pharm">M.Pharm</option>
              <option value="Ph.D">Ph.D</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Write your query here..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
