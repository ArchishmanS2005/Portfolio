import React from 'react';
import BinaryTimeDisplay from './ui/BinaryTimeDisplay';
import { SOCIALS } from '../constants';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex justify-between items-center h-14 px-6 md:px-12">
        <div className="font-mono text-xs md:text-sm font-medium tracking-tighter text-secondary">
          ARCHISHMAN_SARKAR
        </div>

        <div className="flex gap-6 md:gap-8">
          <BinaryTimeDisplay />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;