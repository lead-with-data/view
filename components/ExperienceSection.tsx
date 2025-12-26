
import React from 'react';
import { MoveUpRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: '1',
      company: 'PixelForge Studios',
      role: 'Lead the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
      period: 'Jan 2020 - Present',
    },
    {
      id: '2',
      company: 'TechFlow Solutions',
      role: 'Collaborated with cross-functional teams to deliver high-quality software solutions and optimized development workflows.',
      period: 'Jun 2017 - Dec 2019',
    },
  ];

  return (
    <div>
      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12">
        12 Years of <br />
        <span className="text-white/10">Experience</span>
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl font-black mb-2">{exp.company}</h3>
                <p className="text-gray-400 max-w-lg leading-relaxed">{exp.role}</p>
              </div>
              <div className="text-gray-600 group-hover:text-[#FF7D4D] transition-colors">
                <MoveUpRight size={24} />
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">{exp.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
