import React from 'react';

const ProjectsHeader: React.FC = () => {
  return (
    <div className="w-full border-b border-border py-10 px-6 md:px-12 bg-background z-20 sticky top-14">
      <div className="flex items-center gap-4">
         <div className="w-2 h-2 bg-secondary rounded-full"></div>
         <span className="font-mono text-xs text-secondary tracking-widest">[ENGINEERING_LOGS]</span>
         <div className="h-[1px] flex-grow bg-border/50"></div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
