import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook, FaShoppingBag, FaImage, FaCode } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const getProjectIcon = (iconName) => {
  switch (iconName) {
    case 'book-open':
      return <FaBook className="text-4xl text-blue-400" />;
    case 'shopping-bag':
      return <FaShoppingBag className="text-4xl text-purple-400" />;
    case 'image':
      return <FaImage className="text-4xl text-emerald-400" />;
    default:
      return <FaCode className="text-4xl text-blue-400" />;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Featured Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              My Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              A collection of software development projects demonstrating my practical coding skills.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between glass-card-hover group"
            >
              <div>
                {/* Project Header Banner Placeholder */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.imageBg} relative p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}>
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono text-white/80 bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-blue-300 bg-blue-500/20 px-2.5 py-0.5 rounded border border-blue-500/30">
                      Project 0{index + 1}
                    </span>
                  </div>

                  {/* Icon Visual */}
                  <div className="flex items-center justify-center my-auto z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-xl">
                      {getProjectIcon(project.iconName)}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-slate-300 bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-gray-200 hover:text-white border border-slate-700 text-xs font-semibold transition-all hover:scale-[1.02]"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-semibold transition-all hover:scale-[1.02] shadow-sm shadow-blue-500/20"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
