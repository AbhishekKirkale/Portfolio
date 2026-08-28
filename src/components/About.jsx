import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBullseye, FaBookOpen, FaGlobe, FaUserCheck } from 'react-icons/fa';
import { professionalSkills, languagesSpoken } from '../data/skills';

const highlightCards = [
  {
    icon: FaGraduationCap,
    title: 'Academic Pursuits',
    description: 'MCA Student at Savitribai Phule Pune University (2025–2027) with a BCA degree from SMT. Meherbanu College (SGBAU).',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    icon: FaCode,
    title: 'Core Technical Focus',
    description: 'Proficient in Java, Full Stack Web Development (Node.js, Express, MongoDB, React), Python, and UI/UX Design principles.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400'
  },
  {
    icon: FaBullseye,
    title: 'Career Target',
    description: 'Eager to contribute as a Java Full Stack Developer, Web Developer, Frontend / Backend Developer, or Software Engineering Intern.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card */}
          <motion.div 
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800 relative space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FaBookOpen className="text-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Objective</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Motivated and detail-oriented <strong className="text-white">MCA student</strong> at <strong className="text-blue-400">Savitribai Phule Pune University</strong> with a strong foundation in Java, Full Stack Web Development, and UI/UX principles.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Proficient in <span className="text-purple-400 font-medium">Java, HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB</span> through practical academic and full-stack projects. Eager to apply technical and problem-solving skills in a dynamic environment while contributing as a <strong className="text-white">Java Full Stack Developer, Web Developer, Frontend Developer, Backend Developer, or Software Developer</strong>.
            </p>

            {/* Professional Skills Badges */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-2">
                <FaUserCheck className="text-blue-400" /> Professional Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-2">
                <FaGlobe className="text-purple-400" /> Languages Spoken
              </h4>
              <div className="flex flex-wrap gap-3">
                {languagesSpoken.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs font-mono text-gray-200 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
                  >
                    🌐 {lang}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-5 space-y-6">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`glass-card p-6 rounded-2xl border ${card.borderColor} bg-gradient-to-r ${card.color} glass-card-hover`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 ${card.iconColor}`}>
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1.5">{card.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
