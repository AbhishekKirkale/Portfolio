import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Languages, frameworks, and tools I use to turn ideas into software applications.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {category.skills.length} Techs
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all group cursor-default"
                      >
                        <div className="p-2 rounded-lg bg-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="text-xl" style={{ color: skill.color }} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
