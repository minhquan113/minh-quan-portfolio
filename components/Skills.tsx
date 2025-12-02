import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <Section className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Core Competencies/Professional Skillset</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
           “A hybrid skillset combining data analytics, business intelligence, and commercial strategy to drive data-informed decision-making and business growth.”
          </p>
        </Section>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <Section key={skillGroup.category} delay={idx * 100} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-brand-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};