import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-white/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for Strategic Roles
          </motion.div>
          
          <h1 className="text-[clamp(2.5rem,11vw,9rem)] font-black mb-10 tracking-tighter leading-[0.85] py-2">
            Seyed Ali <br />
            <span className="gradient-text italic">Shahebrahimi</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Architecting the future with <span className="text-white">Machine Learning</span>. 
            Designing <span className="text-white">scalable AI systems</span> that bridge the gap 
            between raw data and intelligent action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] group"
            >
              Explore Portfolio 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden tall:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer group"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
