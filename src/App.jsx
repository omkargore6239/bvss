// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Muhs from './pages/Muhs';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import InquiryForm from './components/InquiryForm';
// Import Courses from subpages
import BAMS from './subpages/courses/BAMS';
import PostGraduate from './subpages/courses/PostGraduate';
import DiplomaPrograms from './subpages/courses/DiplomaPrograms';
import CertificateCourses from './subpages/courses/CertificateCourses';
// Import Document page
import Document from './pages/Inspection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/muhs" element={<Muhs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/document" element={<Document />} />

          {/* Course subpages */}
          <Route path="/subpages/courses/bams" element={<BAMS />} />
          <Route path="/subpages/courses/PostGraduate" element={<PostGraduate />} />
          <Route path="/subpages/courses/DiplomaPrograms" element={<DiplomaPrograms />} />
          <Route path="/subpages/courses/CertificateCourses" element={<CertificateCourses />} />

          <Route path="/inquiry" element={<InquiryForm />} />
        </Routes>

        {/* Floating WhatsApp icon */}
        <a
          href="https://wa.me/919999999999" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
