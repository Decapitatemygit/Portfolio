import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScroll = (id: string) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-10 left-0 w-full z-[5000] p-6 md:px-20 flex justify-between items-center pointer-events-none">
      <Link to="/" className="font-display text-2xl font-black tracking-tighter pointer-events-auto hover:text-accent transition-colors">
        OV<span className="text-accent">.</span>
      </Link>
      
      <div className="flex gap-8 pointer-events-auto">
        <Link 
          to="/projects" 
          className="terminal-text text-[10px] hover:text-accent transition-colors"
        >
          PROJECTS
        </Link>
        <button 
          onClick={() => handleScroll('skills')}
          className="terminal-text text-[10px] hover:text-accent transition-colors"
        >
          SKILLS
        </button>
        <button 
          onClick={() => handleScroll('contact')}
          className="terminal-text text-[10px] hover:text-accent transition-colors"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}
