import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        <div className="w-24 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
        <img 
            src='..\assests\priyanka-kataria.jpg'
            alt="Priyanka Kataria" 
            className="rounded-full w-44 h-44 md:w-64 md:h-64 object-cover border-4 border-fuchsia-500/50 shadow-lg transition-all duration-300 hover:shadow-fuchsia-500/30 hover:scale-105"
        />
        <div className="text-lg md:text-xl text-slate-400 text-center md:text-left">
          <p className="mb-4">
            I’m a final-year B.Tech student at IIT Delhi in Energy Science & Engineering, with a strong passion for software development and building real-world digital solutions.
          </p>
          <p className="mb-4">
Along with my core academic background, I’ve built a strong foundation in full-stack development — from creating intuitive, user-friendly interfaces to designing scalable backend systems. I enjoy turning ideas into clean, efficient, and meaningful applications that make a real impact.          </p>
          <p>I’m always exploring new technologies, refining my skills, and taking on challenges that help me grow as a developer. My goal is to contribute to innovative projects where I can make a meaningful impact while continuing to learn every day.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;