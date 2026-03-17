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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
            About <span className="gradient-text italic">Me</span>
          </h2>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-medium">
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
            <div className="flex flex-wrap gap-6 pt-6">
              <div className=" glass px-8 py-5 rounded-3xl flex flex-col gap-1 border-white/5 hover:border-accent/30 transition-all group">
                <span className="text-4xl font-black text-white group-hover:text-accent transition-colors">4+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Years Exp</span>
              </div>
              <div className=" glass px-8 py-5 rounded-3xl flex flex-col gap-1 border-white/5 hover:border-accent/30 transition-all group">
                <span className="text-4xl font-black text-white group-hover:text-accent transition-colors">AWS</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Certified</span>
              </div>
              <div className=" glass px-8 py-5 rounded-3xl flex flex-col gap-1 border-white/5 hover:border-accent/30 transition-all group">
                <span className="text-4xl font-black text-white group-hover:text-accent transition-colors">Surrey</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">MSc Graduate</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group lg:ml-12"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded-[3rem] opacity-0 blur-3xl group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative glass rounded-[3rem] p-12 border-white/10 aspect-square flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-mesh-gradient opacity-20 group-hover:opacity-40 transition-opacity" />
             <div className="text-center space-y-6 relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🇬🇧</div>
                <h3 className="text-3xl font-black tracking-tight">Based in Guildford, UK</h3>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xs mx-auto">
                  Architecting intelligent solutions at the heart of Surrey's tech ecosystem.
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
