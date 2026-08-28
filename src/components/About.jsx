import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBullseye, FaBookOpen } from 'react-icons/fa';

const highlightCards = [
  {
    icon: FaGraduationCap,
    title: 'Academic Focus',
    description: 'Pursuing Master of Computer Applications (MCA), focusing on core software engineering principles and computer science fundamentals.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    icon: FaCode,
    title: 'Technical Interests',
    description: 'Passionate about object-oriented programming in Java, modern frontend development with React, and python applications.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400'
  },
  {
    icon: FaBullseye,
    title: 'Career Aspirations',
    description: 'Actively seeking software developer internships and entry-level software engineering roles to contribute and grow.',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Narrative Card */}
          <motion.div 
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FaBookOpen className="text-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Continuous Learner & Developer</h3>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                Hello! I am <strong className="text-white">Abhishek Kirkale</strong>, currently pursuing my Master of Computer Applications (MCA). My journey in computer science is driven by a deep fascination with how software powers modern digital experiences.
              </p>
              <p>
                My primary technical focus lies in <span className="text-blue-400 font-medium">Java programming</span> and <span className="text-purple-400 font-medium">Web Development</span> using React.js, JavaScript, HTML, and CSS. I enjoy solving algorithmic challenges, creating user-friendly web layouts, and crafting clean, maintainable code.
              </p>
              <p>
                As a dedicated student, I believe in practical hands-on building. I regularly work on personal projects to strengthen my understanding of core software development concepts, version control with Git, and database fundamentals.
              </p>
              <p>
                I am actively preparing for software development opportunities where I can apply my foundation, collaborate with experienced engineering teams, and grow into a versatile software developer.
              </p>
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
