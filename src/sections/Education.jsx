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
    <section className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent/10 rounded-2xl">
              <GraduationCap className="text-accent" size={32} />
            </div>
            <h2 className="text-3xl font-bold italic">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 relative"
              >
                <span className="text-sm font-bold text-accent mb-2 block">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-300 font-medium mb-3">{edu.school}, {edu.location}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications & Awards Column */}
        <div>
           <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-accent-secondary/10 rounded-2xl">
              <FileText className="text-accent-secondary" size={32} />
            </div>
            <h2 className="text-3xl font-bold italic">Publications</h2>
          </div>

          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 border-l-4 border-l-accent-secondary"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-bold rounded-lg uppercase tracking-wider">
                    Journal Paper
                  </span>
                  <Award size={20} className="text-accent-secondary opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{pub.title}</h3>
                <p className="text-accent-secondary font-medium mb-4 text-sm">{pub.venue}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{pub.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
