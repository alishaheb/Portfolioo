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
    <section id="projects" className="section-padding bg-black/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Featured <span className="text-accent italic">Projects</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto italic">Selected works showcasing my expertise in ML, MLOps, and Data Science.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary rounded-[2rem] opacity-0 group-hover:opacity-20 blur transition-opacity" />
            <div className="relative glass p-8 rounded-[2rem] border-white/5 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-gray-300 border border-white/5">
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
