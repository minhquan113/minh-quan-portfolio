import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Section } from './ui/Section';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Section>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Warning: Highly motivated candidate detected!!!</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in Business Development and Business Intelligence. 
            It would be my honor to have a chance to work for you!
          </p>

          <a 
            href="mailto:minhquan5304@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 hover:-translate-y-1"
          >
            <Mail size={20} />
            minhquan5304@gmail.com
          </a>

          <div className="mt-16 pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Minh Quan. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              
              </a>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
};