import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-6 border border-accent/20">
            Available for freelance & full-time
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            Seyed Ali <span className="gradient-text">Shahebrahimi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Machine Learning Engineer & Data Scientist specializing in <span className="text-white">MLOps</span>, 
            <span className="text-white"> scalable pipelines</span>, and end-to-end intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-gray-500 hover:text-white transition-colors"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
