import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Cloud, Layout, Boxes } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming & APIs',
    icon: <Code2 className="text-accent" />,
    skills: ['Python (Flask, FastAPI)', 'R', 'SQL', 'RESTful APIs', 'C', 'C#', 'ASP.NET', 'JavaScript', 'Java']
  },
  {
    title: 'ML & Data Science',
    icon: <BrainCircuit className="text-accent" />,
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'PySpark', 'Deep Learning (PyTorch, TensorFlow)', 'Graph Neural Networks (PyG)', 'Feature Engineering']
  },
  {
    title: 'MLOps & DevOps',
    icon: <Boxes className="text-accent" />,
    skills: ['Docker', 'Git', 'CI/CD (GitHub Actions)', 'Model Deployment & Monitoring', 'Agile (Scrum/Kanban)', 'Jira', 'Trello']
  },
  {
    title: 'Cloud Platforms',
    icon: <Cloud className="text-accent" />,
    skills: ['AWS (Lambda, EC2, S3, DynamoDB, SageMaker)', 'Microsoft Azure']
  },
  {
    title: 'Visualization & BI',
    icon: <Layout className="text-accent" />,
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Excel', 'KPI Dashboards', 'Data Storytelling']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Technical <span className="text-accent italic">Skills</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto italic">A comprehensive toolkit for full-stack data science and machine learning excellence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-accent/40 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
