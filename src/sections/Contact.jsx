import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="relative glass p-12 md:p-20 rounded-[3rem] border-white/10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Get in <span className="text-accent italic">Touch</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed italic">
              I'm always open to discussing new opportunities, machine learning research, or end-to-end MLOps architectures. 
              Let's build something exceptional together.
            </p>

            <div className="space-y-6">
              <a href="mailto:ali.sh.creative@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Me</p>
                   <p className="text-lg font-medium">ali.sh.creative@gmail.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/seyed-ali-shahebrahimi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">LinkedIn</p>
                   <p className="text-lg font-medium">Seyed Ali Shahebrahimi</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-4 glass rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                   <p className="text-lg font-medium">Guildford, United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] border-white/5 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can I help you?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button className="w-full py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-4 active:scale-[0.98]">
              Send Message <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
