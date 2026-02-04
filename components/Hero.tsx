import React from 'react';

import SystemHologram from './ui/SystemHologram';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-8 md:px-24 lg:px-32 border-b border-dashed border-border overflow-hidden">
      <div className="absolute top-0 left-12 h-full border-l border-dashed border-border hidden md:block"></div>

      {/* 3D Visual - Right Side */}
      {/* 3D Visual - Right Side */}
      <div
        className="absolute top-auto bottom-[-10vh] md:top-1/2 md:bottom-auto right-[-20vw] md:right-[-10%] lg:right-[-5%] md:-translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] z-0 opacity-25 md:opacity-80 pointer-events-none"
        style={{ maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)' }}
      >
        <SystemHologram />
      </div>

      <div className="z-10 pt-20 md:pt-0 max-w-4xl relative pointer-events-none">
        <div className="pointer-events-auto">
          <div className="font-mono text-secondary text-sm mb-4 tracking-wide">
            // SYSTEMS-FIRST ENGINEER
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight text-text leading-[1.1]">
            Building logic <br />
            <span className="text-secondary opacity-60">
              under the hood.
            </span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="font-sans text-lg md:text-xl text-text leading-relaxed font-light">
              I operate at the intersection of <strong className="font-medium">core systems thinking</strong> and <strong className="font-medium">modern full-stack engineering</strong>.
              Based in Kolkata, I build distributed architectures and scalable products, prioritizing memory and data flow over surface-level tooling.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-secondary uppercase">Core</span>
              <span className="font-sans text-sm font-medium">C/C++, Go, Python</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-secondary uppercase">Stack</span>
              <span className="font-sans text-sm font-medium">React, Node.js, SQL/NoSQL</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-secondary uppercase">Web3</span>
              <span className="font-sans text-sm font-medium">Blockchain, Decentralized Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;