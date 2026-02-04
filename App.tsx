import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SystemsThinkingSection from './components/SystemsThinkingSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import ProjectsHeader from './components/ProjectsHeader';
import SectionDivider from './components/SectionDivider';
import CustomCursor from './components/ui/CustomCursor';
import ScrollReveal from './components/ui/ScrollReveal';
import SocialFlipButton from './components/ui/SocialFlipButton';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  // Smooth scroll behavior for internal links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-text selection:text-background w-full overflow-x-hidden">
      <CustomCursor />
      <NavBar />

      <main className="w-full max-w-[1600px] mx-auto border-x border-dashed border-border shadow-2xl bg-background">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        {/* Systems Thinking - The Core Identity */}
        <ScrollReveal>
          <SystemsThinkingSection />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectsHeader />
        </ScrollReveal>

        {/* Projects Grid */}
        <section id="projects" className="w-full bg-background">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </section>

        {/* Divider */}
        <ScrollReveal>
          <SectionDivider />
        </ScrollReveal>

        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>

      {/* Persistent Social Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-full px-4 pointer-events-auto">
        <SocialFlipButton />
      </div>
    </div>
  );
};

export default App;