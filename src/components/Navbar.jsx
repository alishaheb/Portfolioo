import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-accent to-accent-secondary z-50 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      
      <div className={`absolute inset-0 -z-10 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 glass border-none !shadow-none backdrop-blur-xl bg-background/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter group"
        >
          Seyed <span className="text-accent italic group-hover:text-accent-secondary transition-colors duration-500">Ali</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-6 ml-6"
          >
            <a href="https://github.com/ali-sh-creative" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/seyed-ali-shahebrahimi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <Linkedin size={22} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 hover:text-white transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-none backdrop-blur-2xl bg-background/95 p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black tracking-tighter text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-8 pt-8 border-t border-white/5">
                <a href="https://github.com/ali-sh-creative" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/seyed-ali-shahebrahimi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
