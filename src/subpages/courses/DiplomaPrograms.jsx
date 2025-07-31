import React, { useEffect } from 'react';

const DiplomaPrograms = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-24">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Diploma in Ayurvedic Sciences</h1>
          <p className="text-xl max-w-3xl mx-auto">Short-term professional programs to enhance your skills in specific Ayurvedic domains.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Course Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              These diplomas provide focused training on Ayurvedic therapies and practices. Ideal for practitioners, wellness consultants, and therapists seeking formal Ayurvedic credentials.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 1 to 2 Years</li>
              <li><strong>Eligibility:</strong> 10+2 / Practitioners / Therapists</li>
              <li><strong>Types:</strong> Diploma in Panchakarma, Naturopathy, Yoga Therapy</li>
              <li><strong>Mode:</strong> Full-time / Part-time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Popular Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Diploma in Panchakarma Therapy", "Diploma in Ayurvedic Nutrition", "Diploma in Yoga & Wellness", "Diploma in Herbal Sciences", "Diploma in Ayurvedic Cosmetology", "Diploma in Marma Therapy"].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-lg text-indigo-700 mb-2">{item}</h4>
                <p className="text-sm text-gray-600">Industry-relevant curriculum designed for practical application in wellness sectors.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Build Ayurvedic Expertise</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Gain valuable credentials and hands-on experience to thrive in the global wellness industry.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-6 rounded-lg transition duration-300">
            Apply Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default DiplomaPrograms;