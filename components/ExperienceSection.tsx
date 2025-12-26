
import React from 'react';
import { MoveUpRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: '1',
      company: 'Stanford University',
      role: 'CiP Section Leader (Remote)',
      period: 'March 2025 – May 2025',
      description: [
        'Lead weekly section classes for undergraduate computer science students.',
        'Guide students through complex problem-solving activities and programming exercises.',
        'Grade assignments and projects with constructive feedback.',
        'Facilitate code reviews to improve students\' programming skills.',
        'Explain technical concepts clearly to students with diverse backgrounds.',
        'Develop leadership and mentorship abilities in an academic setting.',
        'Boosted my soft skills like Stakeholder Communication and critical thinking as making fast decisions in no time.'
      ]
    },
    {
      id: '2',
      company: 'LabLab / Devpost',
      role: 'Hackathons Participant (Remote, Worldwide)',
      period: 'June 2024 – Present',
      description: [
        'Worked in fast-paced, international teams, coordinating tasks and ensuring collaboration across diverse skill sets.',
        'Practiced clear and concise communication to align teammates quickly and avoid bottlenecks under tight deadlines.',
        'Delivered multiple projects within 24–72 hour sprints, balancing competing priorities and ensuring timely completion.',
        'Strengthened problem-solving resilience by adapting to shifting requirements and constraints in real time.',
        'Contributed to a culture of team synergy, accountability, and constructive feedback, enabling smoother execution under pressure.',
        'Gained experience in global collaboration, working with peers across time zones and cultural contexts.'
      ]
    },
  ];

  return (
    <div>
      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12">
        EXPERIENCE
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="group cursor-pointer border-b border-white/5 pb-12 last:border-0">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-1 text-white group-hover:text-[#FF5C00] transition-colors">{exp.company}</h3>
                <h4 className="text-xl font-bold text-neutral-400 mb-4">{exp.role}</h4>

                <ul className="space-y-2 list-disc list-outside pl-5 text-neutral-400 leading-relaxed text-sm md:text-base max-w-3xl marker:text-[#FF5C00]">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 text-neutral-500 font-medium whitespace-nowrap md:text-right">
                <span>{exp.period}</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF5C00] group-hover:border-[#FF5C00] transition-all">
                  <MoveUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
