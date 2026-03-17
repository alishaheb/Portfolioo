import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="relative glass p-12 md:p-24 rounded-[4rem] border-white/5 group">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              Let's <br />
              <span className="gradient-text italic">Collaborate</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-medium">
              Ready to engineer high-impact solutions? Reach out for MLOps architectures, 
              scalable AI research, or strategic engineering partnerships.
            </p>

            <div className="space-y-8">
              <a href="mailto:ali.sh.creative@gmail.com" className="flex items-center gap-6 group/link">
                <div className="p-5 glass rounded-[1.5rem] group-hover/link:scale-110 group-hover/link:bg-accent/10 transition-all duration-500 border-white/10">
                  <Mail size={32} className="text-accent" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-extrabold mb-1">Send an Email</p>
                   <p className="text-xl font-black text-white group-hover/link:text-accent transition-colors">ali.sh.creative@gmail.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/seyed-ali-shahebrahimi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/link">
                <div className="p-5 glass rounded-[1.5rem] group-hover/link:scale-110 group-hover/link:bg-accent-secondary/10 transition-all duration-500 border-white/10">
                  <Linkedin size={32} className="text-accent-secondary" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-extrabold mb-1">LinkedIn Network</p>
                   <p className="text-xl font-black text-white group-hover/link:text-accent-secondary transition-colors">Seyed Ali Shahebrahimi</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="p-5 glass rounded-[1.5rem] border-white/10">
                  <MapPin size={32} className="text-gray-400" />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-extrabold mb-1">Current Base</p>
                   <p className="text-xl font-black text-white">Guildford, United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-10 md:p-14 rounded-[3rem] border-white/10 space-y-8 relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute inset-0 bg-mesh-gradient opacity-5" />
            <div className="space-y-2 relative z-10">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Identity</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all placeholder:text-gray-600 font-bold"
                required
              />
            </div>
            <div className="space-y-2 relative z-10">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Digital Address</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all placeholder:text-gray-600 font-bold"
                required
              />
            </div>
            <div className="space-y-2 relative z-10">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Details</label>
              <textarea 
                rows="4" 
                placeholder="How can we grow together?" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all placeholder:text-gray-600 font-bold resize-none"
                required
              ></textarea>
            </div>
            <button className="w-full py-6 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-accent hover:text-white group relative z-10 overflow-hidden">
               <span className="relative z-10 flex items-center gap-3">
                 Dispatch Message <Send size={24} className="group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
