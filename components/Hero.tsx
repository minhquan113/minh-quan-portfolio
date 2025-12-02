import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { HERO_STATS } from '../constants';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <Section className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                Available for work
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                From Data to <span className="text-brand-700 italic">Insight</span>. From Insight to <span className="text-brand-700 italic">Growth</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Hi, I'm <strong className="text-slate-900">Minh Quan</strong> - A Final Year College student specializing in 
                International Business. I build data pipelines, design insightful dashboards, and help businesses optimize performance through analytics. Through hands-on experience in data analysis, workflow automation, and performance monitoring, I have collaborated with cross-functional teams to optimize processes and support strategic planning. I leverage both domain knowledge and analytics tools to drive measurable business impact. I aim to apply these analytical skills in a dynamic environment where data, technology, and business insights come together to improve performance and support smarter decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-700 hover:bg-brand-800 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-700/20 hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a href="https://github.com/minhquan113" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors">
                <Github size={20} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-brand-600 mb-2">
                    <stat.icon size={24} />
                  </div>
                  <div className="font-bold text-2xl text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* Visual Content - Avatar */}
          <Section delay={200} className="relative flex justify-center lg:justify-end">
             {/* Container ensuring nice centering and spacing */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Background Blobs */}
              <div className="absolute top-4 right-4 w-full h-full bg-brand-100 rounded-[2.5rem] -z-10 transform rotate-6 transition-transform hover:rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-blue-100/80 rounded-full blur-2xl -z-10" />

              {/* Main Image */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white relative z-10 bg-slate-200">
                <img 
                  src="https://i.ibb.co/LXnKBf5N/quanavatar.jpg" 
                  alt="Minh Quan Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3 z-20 animate-bounce-slow">
                <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white">
                  <span className="font-bold">MQ</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Business Intelligence Analyst/Business Developer</div>
                  <div className="font-bold text-slate-800 text-sm">Open to work</div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
};
