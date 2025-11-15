import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';

const ExperienceCard: React.FC<{ item: Experience; index: number }> = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start relative mb-8">
      {/* Mobile timeline line */}
      <div className="md:hidden absolute top-0 left-4 w-0.5 h-full bg-slate-700"></div>

      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:flex justify-center items-center row-start-1 col-start-2">
        <div className="z-10 bg-slate-900 p-1 rounded-full">
            <div className="bg-fuchsia-500 h-4 w-4 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Timeline Dot (Mobile) */}
      <div className="md:hidden absolute top-1 left-4 -ml-2 z-10 bg-slate-900 p-1 rounded-full">
         <div className="bg-fuchsia-500 h-4 w-4 rounded-full animate-pulse"></div>
      </div>

      {/* Content Card */}
      <div className={`bg-slate-800/80 backdrop-blur-sm border border-purple-800/30 rounded-lg shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-fuchsia-500/20 md:row-start-1 ${
          isLeft ? 'md:col-start-1' : 'md:col-start-3'
        } ml-12 md:ml-0 relative`}
      >
        {/* Arrow for desktop */}
        <div className={`hidden md:block absolute top-6 h-4 w-4 bg-slate-800/80 border-t border-r border-purple-800/30 z-0 ${
            isLeft ? 'right-0 -mr-2 rotate-45' : 'left-0 -ml-2 -rotate-135'
        }`}></div>
        
        <p className="text-sm font-semibold text-fuchsia-400 mb-1">{item.duration}</p>
        <h3 className="mb-1 font-bold text-white text-2xl">{item.role}</h3>
        <p className="mb-3 text-lg font-medium leading-snug tracking-wide text-slate-400">{item.company}</p>
        <ul className="list-disc list-inside text-slate-400 text-base space-y-1.5">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
        <div className="w-24 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Desktop timeline line */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-700"></div>

        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;