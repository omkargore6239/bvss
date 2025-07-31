import React, { useEffect } from 'react';

const BAMS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bachelor of Ayurvedic Medicine and Surgery (BAMS)</h1>
          <p className="text-xl max-w-3xl mx-auto">Empowering students with deep knowledge of Ayurveda and integrative healthcare practices rooted in tradition and supported by modern science.</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Program Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The BAMS course blends traditional Ayurvedic science with modern medical knowledge. Students undergo comprehensive training in anatomy, physiology, pathology, diagnostic techniques, herbal medicine, and Panchakarma therapies.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Duration:</strong> 5.5 Years (including internship)</li>
              <li><strong>Eligibility:</strong> 10+2 with PCB (min 50%)</li>
              <li><strong>Affiliated To:</strong> MUHS, Nashik</li>
              <li><strong>Intake Capacity:</strong> 60 Students</li>
              <li><strong>Internship:</strong> 1-year compulsory clinical rotation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Curriculum Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Ayurvedic Fundamental Principles",
              "Human Anatomy & Physiology",
              "Dravyaguna (Medicinal Plants)",
              "Rasashastra & Bhaishajya Kalpana (Pharmacy)",
              "Surgery in Ayurveda (Shalya Tantra)",
              "Obstetrics & Gynecology (Prasuti Tantra)"
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-lg text-blue-700 mb-2">{item}</h4>
                <p className="text-sm text-gray-600">Included as part of the semester-wise syllabus covering both theory and practice.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Ayurvedic Journey Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Get in touch with our admission counselors or apply directly through the online application portal.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BAMS;
