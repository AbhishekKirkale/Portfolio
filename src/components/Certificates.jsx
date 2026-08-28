import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaBuilding } from 'react-icons/fa';

const certificatesList = [
  {
    id: 'cert-1',
    title: 'Java Programming Masterclass',
    issuer: 'Online Learning Platform / Udemy',
    date: '2024',
    credentialId: 'UC-JAVA-PLACEHOLDER-01',
    tags: ['Java', 'OOP', 'Data Structures'],
    color: 'from-amber-600/30 to-orange-900/40',
    description: 'Comprehensive course covering core Java concepts, object-oriented principles, exception handling, and collections framework.'
  },
  {
    id: 'cert-2',
    title: 'Web Development & React.js',
    issuer: 'Coursera / FreeCodeCamp',
    date: '2024',
    credentialId: 'WEB-REACT-PLACEHOLDER-02',
    tags: ['React.js', 'JavaScript', 'HTML/CSS'],
    color: 'from-blue-600/30 to-cyan-900/40',
    description: 'Hands-on web development specialization focusing on responsive web pages, React state management, components, and ES6+ standards.'
  },
  {
    id: 'cert-3',
    title: 'Python Programming Essentials',
    issuer: 'Python Institute / Infosys Springboard',
    date: '2023',
    credentialId: 'PY-ESS-PLACEHOLDER-03',
    tags: ['Python', 'Problem Solving', 'Scripts'],
    color: 'from-emerald-600/30 to-teal-900/40',
    description: 'Foundational certification covering Python syntax, data types, function design, and basic algorithm creation.'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-amber-400 font-mono text-sm tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Verified Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Certificates & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Certifications completed to continuously upgrade my technical competencies.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between glass-card-hover group"
            >
              <div>
                {/* Certificate Image Placeholder / Graphic Header */}
                <div className={`h-44 w-full bg-gradient-to-br ${cert.color} relative p-6 flex flex-col justify-between border-b border-slate-800/80`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                      <FaCheckCircle className="text-[10px]" /> Verified
                    </span>
                    <span className="text-xs font-mono text-gray-300">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-center my-auto z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg text-amber-400">
                      <FaCertificate className="text-3xl" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <FaBuilding className="text-amber-400 text-xs" />
                    <span className="font-medium text-gray-300">{cert.issuer}</span>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>View Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-lg w-full p-6 rounded-2xl border border-slate-700 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <FaCertificate className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                  <span className="text-xs text-gray-400">{selectedCert.issuer} • {selectedCert.date}</span>
                </div>
              </div>

              {/* Certificate Graphic Box */}
              <div className="my-4 p-8 rounded-xl bg-slate-900 border border-slate-800 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 pointer-events-none" />
                <FaCertificate className="text-5xl text-amber-400/40 mx-auto mb-2" />
                <span className="text-sm font-semibold text-white block">{selectedCert.title}</span>
                <span className="text-xs text-gray-400 block mt-1">Issued to: Abhishek Kirkale</span>
                <span className="text-[10px] font-mono text-amber-400/80 block mt-2">ID: {selectedCert.credentialId}</span>
              </div>

              <p className="text-sm text-gray-300 mb-6">
                {selectedCert.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    alert('Certificate file preview modal! Replace credential ID and image in Certificates.jsx when actual image is ready.');
                    setSelectedCert(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  Verify Online
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
