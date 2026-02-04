import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, GitBranch, Database, Cpu, Network, Box, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Select icon based on project category to give visual context
  const getIcon = () => {
    const category = project.category.toLowerCase();
    if (category.includes('distributed')) return <Network size={28} strokeWidth={1.5} />;
    if (category.includes('iot')) return <Cpu size={28} strokeWidth={1.5} />;
    if (category.includes('core')) return <Database size={28} strokeWidth={1.5} />;
    if (category.includes('cloud') || category.includes('infrastructure')) return <Cloud size={28} strokeWidth={1.5} />;
    return <Box size={28} strokeWidth={1.5} />;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full border-b border-border py-16 md:py-24 px-6 md:px-12 overflow-hidden hover:bg-[#111] hover:text-[#e0e0e0] transition-colors duration-500"
    >

      {/* Background Grid Pattern on Hover - Adds depth */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      {/* Vertical Dashed Line - Becomes solid on hover */}
      <div className="absolute left-12 top-0 h-full border-l border-dashed border-border hidden md:block group-hover:border-white/10 transition-colors duration-500"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full justify-between items-start md:pl-10">

        {/* Project Identity */}
        <div className="flex flex-col gap-6 mb-10 md:mb-0 md:w-5/12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-secondary group-hover:text-emerald-400 transition-colors duration-300">
              {project.number}
            </span>
            <div className="h-px w-8 bg-border group-hover:bg-emerald-500/50 transition-colors duration-500"></div>
            <span className="font-mono text-xs text-secondary group-hover:text-white/40 transition-colors uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-4xl md:text-5xl font-medium text-text group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          {/* Tech Stack Chips - Staggered reveal effect */}
          <div className="flex flex-wrap gap-2 mt-2 transform group-hover:translate-y-1 transition-transform duration-500 delay-75">
            {project.tech.map((t, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-wider border border-border/50 rounded-full px-3 py-1 text-secondary group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Visual Placeholder (Only visible on MD screens+) */}
        {/* This represents a 'Node' or 'System Component' becoming active */}
        <div className="hidden md:flex md:w-3/12 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
          <div className="relative w-28 h-28 border border-white/10 rounded-full flex items-center justify-center text-white/20 group-hover:text-emerald-400 transition-colors duration-500 bg-[#1a1a1a]">
            {/* Rotating Ring */}
            <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            {/* Inner Ring */}
            <div className="absolute inset-3 border border-white/5 rounded-full"></div>
            {/* Icon */}
            <div className="transform transition-transform duration-500 group-hover:scale-110">
              {getIcon()}
            </div>
          </div>
        </div>

        {/* Description & Action */}
        <div className="md:w-4/12 flex flex-col justify-between gap-8 md:pl-8">
          <p className="font-sans text-base text-secondary group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
            {project.description}
          </p>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group/btn cursor-pointer self-start"
            >
              <div className="w-12 h-12 rounded-full border border-border group-hover:border-emerald-500 flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-emerald-500 group-hover:text-black shadow-none group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover/btn:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-text group-hover:text-white transition-colors delay-75 font-medium">
                  Analyze System
                </span>
                <span className="font-sans text-[10px] text-secondary group-hover:text-white/50 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Architecture
                </span>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-4 group/btn cursor-pointer self-start">
              <div className="w-12 h-12 rounded-full border border-border group-hover:border-emerald-500 flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-emerald-500 group-hover:text-black shadow-none group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover/btn:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-text group-hover:text-white transition-colors delay-75 font-medium">
                  Analyze System
                </span>
                <span className="font-sans text-[10px] text-secondary group-hover:text-white/50 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Architecture
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;