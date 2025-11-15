import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['A Full-Stack Developer', 'A Software Engineer', 'A Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, roles, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Hi, I'm <span className="text-fuchsia-400">Priyanka Kataria</span>
        </h1>
        <p className="text-3xl md:text-5xl text-slate-300 mb-8 h-14 md:h-16">
          <span className="type-cursor">{typedText}</span>
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          I specialize in building robust and user-friendly web applications, turning complex problems into elegant software solutions.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#projects"
            className="bg-fuchsia-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-fuchsia-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-fuchsia-600/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-slate-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-fuchsia-400 transition-colors transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;