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
    <section id="experience" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Work <span className="text-accent italic">Experience</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto italic">A timeline of my professional journey in software engineering and machine learning.</p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />
            
            <div className="glass p-8 rounded-3xl border-white/5 hover:border-accent/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-accent font-medium">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
