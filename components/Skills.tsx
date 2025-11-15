import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
        <div className="w-24 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
      </div>
      <div className="max-w-5xl mx-auto space-y-12 px-4">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-white text-center md:text-left mb-6">{category.title}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-3 bg-slate-800/60 border border-purple-800/30 rounded-lg py-2 px-4 group transition-all duration-300 hover:bg-slate-800 hover:border-fuchsia-500/50"
                >
                  <div className="w-6 h-6 text-fuchsia-400 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
