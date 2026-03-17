import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: 'LLM NER/Text Classification',
    category: 'Natural Language Processing',
    description: 'Developed a Named Entity Recognition and text classification system using Large Language Models to extract insights from unstructured data.',
    tags: ['Python', 'HuggingFace', 'Transformers', 'PyTorch'],
    icon: <Globe className="text-accent" />,
    link: 'https://github.com/ali-sh-creative'
  },
  {
    title: 'Unified ML Pipeline',
    category: 'MLOps',
    description: 'Designed an end-to-end unified machine learning pipeline incorporating data cleaning, model training, and production monitoring.',
    tags: ['MLflow', 'Docker', 'AWS SageMaker', 'GitHub Actions'],
    icon: <Cpu className="text-accent" />,
    link: 'https://github.com/ali-sh-creative'
  },
  {
    title: 'AWS Stock Analysis Platform',
    category: 'Data Engineering',
    description: 'Scalable stock market analysis platform built on AWS, processing real-time data for trend prediction and visualization.',
    tags: ['AWS Lambda', 'DynamoDB', 'S3', 'Plotly'],
    icon: <Database className="text-accent" />,
    link: 'https://github.com/ali-sh-creative'
  },
  {
    title: 'YOLOv8 Fog Detection',
    category: 'Computer Vision',
    description: 'MSc Dissertation project focused on real-time fog detection using YOLOv8 architectures, improving safety in autonomous environments.',
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'Deep Learning'],
    icon: <Cpu className="text-accent" />,
    link: 'https://github.com/ali-sh-creative'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
        >
          Featured <span className="gradient-text italic">Projects</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          A showcase of engineering excellence in ML, MLOps, and scalable data systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="relative glass p-10 rounded-[2.5rem] border-white/10 flex flex-col h-full overflow-hidden">
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 bg-accent/10 rounded-2xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                  {project.icon}
                </div>
                <div className="flex gap-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 block">{project.category}</span>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{project.title}</h3>
              <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-medium">{project.description}</p>
              
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-xl text-xs font-bold text-gray-300 border border-white/5 backdrop-blur-sm group-hover:border-accent/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
