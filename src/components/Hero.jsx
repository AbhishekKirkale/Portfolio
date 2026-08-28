import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCodeBranch, FaTerminal } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium w-fit mb-6 shadow-sm">
              <HiOutlineSparkles className="text-blue-400 text-base" />
              <span>Available for Software Developer Internships</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="gradient-text">Abhishek Kirkale</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl text-blue-400 font-semibold mb-6 flex items-center gap-2">
              <span className="text-gray-400 font-normal">|</span> MCA Student & Aspiring Software Developer
            </h2>

            {/* Introduction Bio */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              I am a passionate Master of Computer Applications (MCA) student dedicated to building clean, high-performance web applications and robust software solutions. Driven by curiosity, I continuously learn modern programming paradigms, frontend frameworks, and backend technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <FaArrowRight className="ml-2 text-xs" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-gray-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1YVWFxJsCmom1s3Ao8W262-H8E2nRICog"
                download="Abhishek_Kirkale_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaDownload className="mr-2 text-xs" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Connect:</span>
              
              <a
                href="https://github.com/AbhishekKirkale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-gray-400 hover:text-white border border-slate-700/60 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://linkedin.com/in/abhishekkirkale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-gray-400 hover:text-blue-400 border border-slate-700/60 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:abhishekkirkale9@gmail.com"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-gray-400 hover:text-rose-400 border border-slate-700/60 transition-all hover:scale-110"
                aria-label="Email Abhishek"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

          </motion.div>

          {/* Right Column - Developer Visual Card */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Outer Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

              {/* Developer Code Window Mockup */}
              <div className="relative rounded-2xl glass-card p-6 shadow-2xl border border-slate-800">
                
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 font-mono space-x-1">
                    <FaTerminal className="text-blue-400" />
                    <span>developer.js</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    <FaCodeBranch />
                  </div>
                </div>

                {/* Simulated Code Body */}
                <div className="font-mono text-xs sm:text-sm text-left leading-relaxed space-y-2 text-gray-300 overflow-x-auto py-2">
                  <p className="text-purple-400"><span className="text-blue-400">const</span> developer = &#123;</p>
                  <p className="pl-4">
                    name: <span className="text-emerald-400">'Abhishek B. Kirkale'</span>,
                  </p>
                  <p className="pl-4">
                    education: <span className="text-emerald-400">'MCA @ Savitribai Phule Pune University'</span>,
                  </p>
                  <p className="pl-4">
                    targetRole: <span className="text-emerald-400">'Java Full Stack / Software Developer'</span>,
                  </p>
                  <p className="pl-4">
                    stack: [<span className="text-amber-300">'Java'</span>, <span className="text-amber-300">'Node.js'</span>, <span className="text-amber-300">'React.js'</span>, <span className="text-amber-300">'MongoDB'</span>],
                  </p>
                  <p className="pl-4">
                    openToWork: <span className="text-blue-300">true</span>,
                  </p>
                  <p className="pl-4 text-gray-400">// Always open to collaborating on new projects</p>
                  <p className="text-purple-400">&#125;;</p>

                  <div className="pt-3 border-t border-slate-800/60 mt-3">
                    <p className="text-blue-400 flex items-center">
                      <span className="text-green-400 mr-2">❯</span> 
                      <span>developer.buildFuture()</span>
                    </p>
                    <p className="text-emerald-400 font-sans text-xs mt-1 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                      ✓ Ready to build robust, scalable applications.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
