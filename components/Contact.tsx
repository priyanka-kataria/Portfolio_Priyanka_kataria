import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
        <div className="w-24 h-1 bg-fuchsia-500 mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto text-slate-400 my-8 text-lg md:text-xl">
          I'm currently open to new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:priyanka.kataria@example.com" 
          className="inline-block bg-fuchsia-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-fuchsia-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-fuchsia-600/30"
        >
          Say Hello
        </a>

        <div className="mt-16">
            <p className="text-slate-400 mb-4">Or connect with me on social media:</p>
            <div className="flex justify-center space-x-6">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-fuchsia-400 transition-colors transform hover:scale-110">
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;