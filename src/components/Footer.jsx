import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowUp } from 'react-icons/fa';
import { contactDetails } from './Contact';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-center">
          
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 mb-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white">
                <FaCode className="text-lg" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Abhishek Kirkale<span className="text-blue-500">.</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm max-w-sm">
              MCA Student & Aspiring Software Developer dedicated to building efficient, modern, and user-centric applications.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="hover:text-blue-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Icons */}
          <div className="md:col-span-3 flex justify-center md:justify-end items-center space-x-3">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white border border-slate-800 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-blue-400 border border-slate-800 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>

            <a
              href={`mailto:${contactDetails.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-rose-400 border border-slate-800 transition-all hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-all hover:scale-110 cursor-pointer ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Abhishek Kirkale. All rights reserved.</p>
          <p className="font-mono text-[11px] text-gray-400">
            Crafted with React.js, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
