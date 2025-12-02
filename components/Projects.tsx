import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Section } from './ui/Section';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <Section className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-2 block">Portfolio</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Selected Works</h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm md:text-base">
           A curated selection of projects, ad-hoc analyses, and operational tasks that demonstrate my ability to transform data into actionable insights and deliver measurable business impact.
          </p>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <Section key={project.id} delay={idx * 100} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description with Tooltip */}
                <div className="relative group/desc mb-6">
                  <p 
                    className="text-slate-600 text-sm leading-relaxed line-clamp-3 cursor-help"
                    title={project.description}
                  >
                    {project.description}
                  </p>
                  
                  {/* Tooltip Popover */}
                  <div className="absolute bottom-[calc(100%+8px)] left-0 w-full opacity-0 invisible group-hover/desc:visible group-hover/desc:opacity-100 transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover/desc:translate-y-0">
                    <div className="bg-slate-800 text-slate-100 text-xs leading-relaxed p-4 rounded-xl shadow-2xl relative border border-slate-700">
                      {project.description}
                      {/* Arrow */}
                      <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-slate-800 border-b border-r border-slate-700 rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-semibold bg-slate-200 text-slate-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-700 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.type === 'github' && <Github size={14} />}
                      {link.type === 'external' && <ExternalLink size={14} />}
                      {link.type === 'doc' && <FileText size={14} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};