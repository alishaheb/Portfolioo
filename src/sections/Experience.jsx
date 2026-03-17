import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Machine Learning Engineer (Software Developer)',
    company: 'Azaries',
    location: 'Guildford, UK',
    period: 'Aug 2024 – Aug 2025',
    bullets: [
      'Developed and executed Amazon SageMaker Pipelines across 20+ real-world datasets, including NHS service demand and customer churn.',
      'Built reusable end-to-end ML pipelines (PyTorch, scikit-learn, PySpark, PyG) for classification and regression, incorporating unit/integration tests and CI/CD.',
      'Implemented production-grade MLOps practices, including data validation, automated testing, and MLflow experiment tracking.',
      'Translated model outputs into actionable insights using feature importance, community analysis, link prediction, and SHAP/Permutation tests.',
      'Built KPI dashboards for stakeholders using Tableau and Plotly, consuming model outputs serialised in JSON.',
      'Fine-tuned Hugging Face Transformers to verbalise structured rules and model outputs, improving interpretability.',
      'Participated in sprint planning and reviews; used Jira/Trello for backlog management.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Boland Afarin Eram Co',
    location: 'Tehran, Iran',
    period: '2020 – 2023',
    bullets: [
      'Developed and maintained enterprise-level software solutions using C# and ASP.NET framework.',
      'Designed and optimized complex SQL database schemas, improving query performance by 40%.',
      'Integrated third-party APIs and services to extend application functionality.',
      'Collaborated with cross-functional teams to deliver projects within tight deadlines using Agile methodologies.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
        >
          Professional <span className="gradient-text italic">Journey</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          High-impact roles where I've engineered scalable AI solutions and transformed data into intelligence.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-10 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 bg-background rounded-full border-4 border-accent z-10 shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
            
            <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-3 text-accent text-lg font-bold italic">
                      <Briefcase size={20} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3 text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-3 py-2 px-5 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                      <Calendar size={14} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 py-2 px-5 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                      <MapPin size={14} className="text-accent-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 text-gray-400 leading-relaxed font-medium text-sm">
                      <span className="text-accent mt-1 text-lg">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
