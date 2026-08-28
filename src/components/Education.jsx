import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward, FaBookReader } from 'react-icons/fa';

const educationTimeline = [
  {
    degree: 'Master of Computer Applications (MCA)',
    status: 'Currently Pursuing',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    college: 'Your College / Institution Name (Update in Education.jsx)',
    university: 'Affiliated University Name (Update in Education.jsx)',
    period: '2024 - 2026 (Expected)',
    score: 'Current CGPA / Percentage Placeholder',
    highlights: [
      'Focusing on Advanced Java, Web Development, Object-Oriented Software Design, and Data Structures.',
      'Actively engaging in software development assignments and technical project builds.',
      'Participating in developer workshops and technology learning initiatives.'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Completed',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    college: 'SMT. Meherbanu College Of Science and Commerce',
    university: 'Akola, Maharashtra',
    period: '2021 - 2024',
    score: 'Completed Degree',
    highlights: [
      'Graduated with Bachelor of Computer Applications (BCA).',
      'Studied core computer application topics including C/C++, Java, Web Development, Database Management Systems (DBMS), and Software Engineering.',
      'Developed practical software projects and gained strong logical foundation.'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Education & <span className="gradient-text">Qualifications</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              My academic journey and computer application studies.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800" />

          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-0 sm:pl-20"
            >
              {/* Timeline Icon Node */}
              <div className="hidden sm:flex absolute left-4 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-500 items-center justify-center text-blue-400 z-10 shadow-lg shadow-blue-500/20">
                <FaGraduationCap className="text-sm" />
              </div>

              {/* Education Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-2 ${item.badgeColor}`}>
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800 w-fit">
                    <FaCalendarAlt className="text-blue-400 text-xs" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3 text-gray-300 text-sm">
                    <FaUniversity className="text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400 text-xs block font-mono">COLLEGE / UNIVERSITY</span>
                      <span className="font-medium text-white">{item.college}</span>
                      <span className="text-xs text-gray-400 block">{item.university}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-gray-300 text-sm">
                    <FaAward className="text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400 text-xs block font-mono">ACADEMIC SCORE</span>
                      <span className="font-semibold text-amber-300">{item.score}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">Key Highlights:</span>
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2 text-sm text-gray-300">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
