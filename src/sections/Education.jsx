import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, FileText } from 'lucide-react';

const education = [
  {
    degree: 'MSc Data Science',
    school: 'University of Surrey',
    location: 'Guildford, UK',
    period: '2023 – 2024',
    description: 'Specialization in Machine Learning and Big Data analytics. Focused on advanced AI architectures.'
  },
  {
    degree: 'BSc Computer Engineering',
    school: 'Islamic Azad University, Central Tehran Branch',
    location: 'Tehran, Iran',
    period: '2016 – 2020',
    description: 'Software Engineering fundamentals, algorithms, and systems design.'
  }
];

const publications = [
  {
    title: 'Learning Structure-Aware Hierarchical Graph Neural Networks',
    venue: 'IJCLR 2025 (International Joint Conference on Learning & Reasoning)',
    date: '2025',
    description: 'Research focused on improving GNN performance through structure-aware hierarchical modeling.'
  }
];

export default function Education() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Education Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="p-5 bg-accent/10 rounded-[1.5rem] border border-accent/20">
              <GraduationCap className="text-accent" size={36} />
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic">Education</h2>
          </motion.div>
          
          <div className="space-y-10">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass p-10 rounded-[2.5rem] border-white/5 relative group hover:border-accent/30 transition-all"
              >
                <div className="absolute inset-0 bg-mesh-gradient opacity-0 group-hover:opacity-10 transition-opacity rounded-[2.5rem]" />
                <div className="relative z-10">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-3 block">{edu.period}</span>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{edu.degree}</h3>
                  <p className="text-gray-300 font-bold mb-4 italic text-lg">{edu.school} • {edu.location}</p>
                  <p className="text-gray-400 leading-relaxed font-medium">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications & Awards Column */}
        <div>
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="p-5 bg-accent-secondary/10 rounded-[1.5rem] border border-accent-secondary/20">
              <FileText className="text-accent-secondary" size={36} />
            </div>
            <h2 className="text-5xl font-black tracking-tighter italic">Research</h2>
          </motion.div>

          <div className="space-y-10">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass p-10 rounded-[2.5rem] border-white/5 border-l-8 border-l-accent-secondary group hover:border-accent-secondary/30 transition-all"
              >
                <div className="absolute inset-0 bg-mesh-gradient opacity-0 group-hover:opacity-10 transition-opacity rounded-[2.5rem]" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="px-4 py-1.5 bg-accent-secondary/10 text-accent-secondary text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-accent-secondary/20 backdrop-blur-sm">
                      International Conference
                    </span>
                    <Award size={24} className="text-accent-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight tracking-tight">{pub.title}</h3>
                  <p className="text-accent-secondary font-bold mb-5 text-sm italic">{pub.venue}</p>
                  <p className="text-gray-400 leading-relaxed font-medium">{pub.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
