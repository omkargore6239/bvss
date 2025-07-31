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

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/muhs" element={<Muhs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add separate course routes here */}
          <Route path="/subpages/courses/bams" element={<BAMS />} />
          <Route path="/subpages/courses/PostGraduate" element={<PostGraduate />} />
          <Route path="/subpages/courses/DiplomaPrograms" element={<DiplomaPrograms />} />
          <Route path="/subpages/courses/CertificateCourses" element={<CertificateCourses />} />

          <Route path="/inquiry" element={<InquiryForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
