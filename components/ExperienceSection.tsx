import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full border-b border-border">
      <div className="flex flex-col md:flex-row">
        {/* Title Column */}
        <div className="w-full md:w-1/3 border-r border-border p-6 md:p-12">
          <h2 className="font-display text-2xl font-medium sticky top-24">[Trajectory]</h2>
        </div>

        {/* Content Column */}
        <div className="w-full md:w-2/3">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className={`group relative p-6 md:p-12 flex flex-col gap-4 overflow-hidden transition-colors duration-500 hover:bg-[#111] hover:text-[#e0e0e0] ${index !== EXPERIENCES.length - 1 ? 'border-b border-dashed border-border' : ''}`}
            >
              {/* Background Grid Pattern on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              ></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl font-medium text-text group-hover:text-white transition-colors duration-300">{exp.role}</h3>
                  <span className="font-mono text-sm text-secondary group-hover:text-gray-400 transition-colors duration-300">{exp.period}</span>
                </div>
                <div className="font-mono text-xs text-secondary group-hover:text-emerald-400 uppercase tracking-widest mb-2 transition-colors duration-300">
                  {exp.company}
                </div>
                <p className="font-sans text-base text-secondary/90 group-hover:text-gray-300 max-w-xl leading-relaxed transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;