import React, { useEffect } from 'react';

const PostGraduate = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-24">
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Postgraduate Ayurvedic Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">Advanced training and specialization in Ayurveda to shape the next generation of Ayurvedic physicians, researchers, and educators.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-green-800 mb-4">Program Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our PG programs offer advanced education in specific branches of Ayurveda. Scholars receive deep theoretical and clinical exposure, contributing to innovation and evidence-based Ayurveda.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Program Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 3 Years</li>
              <li><strong>Specializations:</strong> Kayachikitsa, Panchakarma, Shalya Tantra, and more</li>
              <li><strong>Eligibility:</strong> BAMS or equivalent</li>
              <li><strong>Affiliated To:</strong> MUHS, Nashik</li>
              <li><strong>Research Thesis:</strong> Mandatory</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Specializations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["MD - Kayachikitsa", "MD - Panchakarma", "MD - Dravyaguna", "MD - Rachana Sharir", "MD - Rasashastra", "MS - Shalya Tantra"].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-lg text-green-700 mb-2">{item}</h4>
                <p className="text-sm text-gray-600">Structured curriculum with advanced clinical training and research opportunities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Advance Your Ayurvedic Career</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Join our esteemed PG programs and become a leader in Ayurvedic healthcare, teaching, or research.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-lg transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostGraduate;