import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-800">
      <div className="container mx-auto py-8 px-6 text-center text-slate-400">
        {/* <div className="flex justify-center space-x-6 mb-4">
            {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-400 hover:text-fuchsia-400 transition-colors transform hover:scale-110">
                    {link.icon}
                </a>
            ))}
        </div> */}
        <p>&copy; {new Date().getFullYear()} Priyanka Kataria. All rights reserved.</p>
        <p className="text-sm mt-1">Designed & Built by Priyanka Kataria</p>
      </div>
    </footer>
  );
};

export default Footer;