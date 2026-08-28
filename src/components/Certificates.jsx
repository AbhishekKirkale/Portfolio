import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaBuilding, FaDownload, FaSearchPlus } from 'react-icons/fa';

import yessCert from '../assets/certificates/yess_java_fullstack.png';
import awsCert from '../assets/certificates/aws_amazon_ec2.png';
import be10xCert from '../assets/certificates/be10x_ai_tools.png';
import codsoftCert from '../assets/certificates/codsoft_web_dev.png';
import aimCert from '../assets/certificates/aim_core_java.png';
import udemyPythonCert from '../assets/certificates/udemy_python_bootcamp.png';

const certificatesList = [
  {
    id: 'cert-yess',
    title: 'Java Fullstack Certification',
    issuer: 'Yess InfoTech',
    date: '30th March, 2025',
    credentialId: 'YESS-JAVA-FULLSTACK',
    image: yessCert,
    tags: ['Java', 'Full Stack Development', 'Web Applications'],
    color: 'from-blue-600/30 to-indigo-900/40',
    description: 'Certificate of Achievement for successfully completing the Java Fullstack course at Yess InfoTech.'
  },
  {
    id: 'cert-aws',
    title: 'Build with Amazon EC2',
    issuer: 'AWS Training & Certification',
    date: 'July 04, 2026',
    credentialId: 'AWS-EC2-COMPLETION',
    image: awsCert,
    tags: ['AWS', 'Amazon EC2', 'Cloud Infrastructure', 'DevOps'],
    color: 'from-cyan-600/30 to-blue-900/40',
    description: 'AWS Completion Certificate for mastering Amazon EC2 cloud computing and deployment fundamentals.'
  },
  {
    id: 'cert-udemy-python',
    title: 'The Complete Python Bootcamp',
    issuer: 'Udemy (Jose Portilla, Pierian Training)',
    date: 'June 18, 2024',
    credentialId: 'UC-322626aa-4e5c-4cea-920a-2a919a8ed385',
    image: udemyPythonCert,
    tags: ['Python', 'Data Structures', 'OOP', 'Scripting'],
    color: 'from-purple-600/30 to-pink-900/40',
    description: 'Complete Python Bootcamp from Zero to Hero covering core Python syntax, OOP, modules, and 22 hours of hands-on exercises.'
  },
  {
    id: 'cert-be10x',
    title: '1-Day AI Tools Workshop',
    issuer: 'be10x',
    date: '11th February, 2024',
    credentialId: 'BE10X-AI-WORKSHOP',
    image: be10xCert,
    tags: ['AI Tools', 'Artificial Intelligence', 'Productivity'],
    color: 'from-slate-600/30 to-purple-900/40',
    description: 'Certificate of Completion for participating in the 1-Day AI Tools Workshop conducted by be10x.'
  },
  {
    id: 'cert-codsoft',
    title: 'Web Development Virtual Internship',
    issuer: 'CodSoft',
    date: '17th October, 2023',
    credentialId: 'C.ID: a217937',
    image: codsoftCert,
    tags: ['Web Development', 'Virtual Internship', 'HTML/CSS/JS'],
    color: 'from-emerald-600/30 to-teal-900/40',
    description: 'Successfully completed 4 weeks of virtual internship program in Web Development with ISO 9001-2015 & MSME accreditation.'
  },
  {
    id: 'cert-aim',
    title: 'Certificate of Excellence in Core Java',
    issuer: 'Aim Computer Institute',
    date: '30th September, 2023',
    credentialId: 'AIM-CORE-JAVA',
    image: aimCert,
    tags: ['Core Java', 'OOP', 'Data Structures', 'Algorithms'],
    color: 'from-amber-600/30 to-orange-900/40',
    description: 'Certificate of Excellence for completing Core Java course including lectures, demonstrations, and practical exercises.'
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
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Certificates & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Verified certifications and training programs completed in Java, Web Development, Python, Cloud, and AI.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between glass-card-hover group"
            >
              <div>
                {/* Certificate Image Thumbnail Container */}
                <div 
                  className="h-52 w-full relative overflow-hidden cursor-pointer border-b border-slate-800/80 bg-slate-900"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Header Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono text-emerald-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1 shadow">
                      <FaCheckCircle className="text-emerald-400 text-[10px]" /> Verified
                    </span>
                    <span className="text-[11px] font-mono text-gray-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {cert.date}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="p-3 rounded-full bg-blue-600 text-white shadow-xl flex items-center space-x-1.5 text-xs font-semibold">
                      <FaSearchPlus />
                      <span>Click to View</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-sm text-gray-300 mb-3">
                    <FaBuilding className="text-amber-400 text-xs flex-shrink-0" />
                    <span className="font-semibold text-gray-200">{cert.issuer}</span>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                        #{tag}
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
                  <span>View Full Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-4xl w-full p-4 sm:p-6 rounded-2xl border border-slate-700 relative text-left my-8 max-h-[90vh] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <FaCertificate className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                    <span className="text-xs text-gray-400">{selectedCert.issuer} • {selectedCert.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Full Image Container */}
              <div className="overflow-auto rounded-xl bg-slate-950 border border-slate-800 p-2 flex justify-center items-center max-h-[60vh]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[58vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Footer Info & Actions */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400 font-mono">
                  <span>Credential Ref: <strong className="text-amber-300">{selectedCert.credentialId}</strong></span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <a
                    href={selectedCert.image}
                    download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.png`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                  >
                    <FaDownload />
                    <span>Download Image</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
