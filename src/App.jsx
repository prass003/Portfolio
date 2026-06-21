import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Initialize AOS library if available
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className={`${isDark ? 'bg-darker text-white' : 'bg-white text-gray-900'}`}>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />

          {/* Achievements Section */}
          <Achievements />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
