import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">About <span className="text-accent italic">Me</span></h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">Data Scientist & Machine Learning Engineer (MSc)</span> with 
              over 4 years of experience across the full software and machine learning lifecycle.
            </p>
            <p>
              My expertise lies in building end-to-end solutions, including <span className="text-white font-medium">scalable data pipelines</span>, 
              advanced model training, and seamless API integration using Flask and FastAPI.
            </p>
            <p>
              I have a proven track record of delivering <span className="text-white font-medium">production-ready ML pipelines</span> and 
              real-time KPI dashboards that significantly enhance model generalization and accelerate development velocity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass px-6 py-4 rounded-2xl flex flex-col gap-1 border-accent/20">
                <span className="text-3xl font-bold text-white">4+</span>
                <span className="text-xs uppercase tracking-widest text-accent">Years Exp</span>
              </div>
              <div className="glass px-6 py-4 rounded-2xl flex flex-col gap-1 border-accent/20">
                <span className="text-3xl font-bold text-white">AWS</span>
                <span className="text-xs uppercase tracking-widest text-accent">Certified</span>
              </div>
              <div className="glass px-6 py-4 rounded-2xl flex flex-col gap-1 border-accent/20">
                <span className="text-3xl font-bold text-white">Surrey</span>
                <span className="text-xs uppercase tracking-widest text-accent">MSc Graduate</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group lg:ml-12"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-secondary rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
          <div className="relative glass rounded-3xl p-8 border-white/10 aspect-square flex items-center justify-center overflow-hidden">
             <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🇬🇧</div>
                <h3 className="text-2xl font-bold">Based in Guildford, UK</h3>
                <p className="text-gray-400">Passionate about pushing the boundaries of AI and MLOps.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
