import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward, FaSchool } from 'react-icons/fa';

const educationTimeline = [
  {
    degree: 'Master of Computer Applications (MCA)',
    status: 'Currently Pursuing',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    college: 'Savitribai Phule Pune University',
    university: 'Pune, Maharashtra',
    period: '2025 - 2027',
    score: 'Pursuing Degree',
    highlights: [
      'Specializing in Java Full Stack Web Development, Cloud Computing, and Software Engineering.',
      'Proficient in Node.js, Express.js, MongoDB, React.js, Python, and Java through academic and project work.',
      'Focusing on Object-Oriented System Design, Database Systems, and UI/UX Principles.'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Completed',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    college: 'SMT. Meherbanu College of Science and Commerce',
    university: 'Sant Gadge Baba Amravati University (SGBAU), Akola',
    period: '2021 - 2024',
    score: '60.29%',
    highlights: [
      'Graduated with Bachelor of Computer Applications (BCA).',
      'Studied core computer fundamentals, Database Management Systems (DBMS), C/C++, Java, and Web Development.',
      'Developed practical software and database management projects.'
    ]
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    status: 'Completed',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    college: 'B. N. College of Arts and Science',
    university: 'Maharashtra State Board',
    period: '2021',
    score: '72.00%',
    highlights: [
      'Completed Higher Secondary Certificate in Science Stream.',
      'Built analytical logic in Physics, Chemistry, and Mathematics.'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    status: 'Completed',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    college: 'S. L. Shinde Vidyalaya',
    university: 'Maharashtra State Board',
    period: '2019',
    score: '61.60%',
    highlights: [
      'Completed Secondary School Certificate with strong foundational studies.'
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
              Academic Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Education & <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              My complete academic trajectory from school education to Master of Computer Applications (MCA).
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-slate-800" />

          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
                      <span className="text-gray-400 text-xs block font-mono">INSTITUTION / BOARD</span>
                      <span className="font-medium text-white">{item.college}</span>
                      <span className="text-xs text-gray-400 block">{item.university}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-gray-300 text-sm">
                    <FaAward className="text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400 text-xs block font-mono">MARKS / PERCENTAGE</span>
                      <span className="font-semibold text-amber-300">{item.score}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">Highlights:</span>
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
