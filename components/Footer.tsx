import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-text text-background relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left relative z-10">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="font-mono text-xs md:text-sm opacity-60 tracking-widest">CONTACT</div>
          <a href="mailto:archishmansarkar94@gmail.com" className="font-display text-2xl md:text-5xl hover:underline decoration-1 underline-offset-4 break-all md:break-normal">
            archishmansarkar94<br className="md:hidden" />@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
          <div className="font-mono text-xs opacity-50 uppercase tracking-widest">
            Location
          </div>
          <div className="font-sans text-lg">
            Kolkata, India
          </div>
          <div className="font-mono text-xs opacity-50 mt-4 md:mt-8">
            © 2025 ARCHISHMAN SARKAR.
          </div>
        </div>
      </div>



      {/* Decorative large text */}
      <div className="absolute -bottom-4 -left-4 font-display text-[15vw] leading-none opacity-5 pointer-events-none select-none">
        SYSTEMS
      </div>
    </footer>
  );
};

export default Footer;