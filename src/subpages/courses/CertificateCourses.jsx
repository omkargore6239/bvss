import React, { useEffect } from 'react';

const CertificateCourses = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-24">
      <section className="bg-gradient-to-r from-amber-900 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificate Courses in Ayurveda</h1>
          <p className="text-xl max-w-3xl mx-auto">Short-term, intensive programs designed to introduce Ayurvedic principles and practices.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-yellow-800 mb-4">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              These courses offer hands-on learning in Ayurvedic wellness therapies, basic diagnostic techniques, nutrition, and herbal care. Perfect for beginners and enthusiasts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">Program Info</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 3 to 6 Months</li>
              <li><strong>Eligibility:</strong> Open to all (minimum 10th pass)</li>
              <li><strong>Focus:</strong> Practical Ayurvedic knowledge</li>
              <li><strong>Certificate:</strong> Recognized institution-issued</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">Courses Offered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Basic Ayurvedic Principles", "Ayurvedic Diet & Lifestyle", "Introduction to Panchakarma", "Herbal Beauty Therapies", "Foundations of Yoga", "First Aid with Ayurveda"].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-lg text-yellow-700 mb-2">{item}</h4>
                <p className="text-sm text-gray-600">Each course offers focused insight and application-based skills in Ayurveda.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey in Ayurveda</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Whether you're starting out or expanding your wellness toolkit, our certificate programs are your gateway to Ayurveda.</p>
          <button className="bg-white text-amber-900 font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-yellow-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default CertificateCourses;
