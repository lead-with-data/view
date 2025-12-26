
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const designProjects = [
    {
      id: '1',
      title: 'Aura Network',
      type: 'Case Study',
      tags: ['Branding', 'Web3'],
      image: 'https://images.unsplash.com/photo-1614850523296-e8c0d9936bb8?auto=format&fit=crop&q=80&w=800',
      images: [
        'https://images.unsplash.com/photo-1614850523296-e8c0d9936bb8?auto=format&fit=crop&q=80&w=800', // Main
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', // Abstract Dark
        'https://images.unsplash.com/photo-1634128221889-b2a60322c363?auto=format&fit=crop&q=80&w=800', // 3D Shapes
        'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?auto=format&fit=crop&q=80&w=800', // Minimalist
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'  // Tech
      ],
      figmaLink: 'https://www.figma.com', // Placeholder
      description: 'A complete brand identity and web design case study for a Web3 infrastructure project.'
    }
  ];

  const infoProjects = [
    {
      id: '2',
      title: 'Echo Labs',
      type: 'Visual Identity',
      tags: ['UI Design', 'App'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      images: [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', // Tech Hub
        'https://images.unsplash.com/photo-1596778402284-8398c7b09521?auto=format&fit=crop&q=80&w=800', // App Interface
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800', // Dashboard Dark
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Analytics Graph
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'  // Data Screen
      ],
      figmaLink: 'https://www.figma.com', // Placeholder
      description: 'Visual identity system and user interface design for a next-generation tech startup.'
    }
  ];

  const dataProjects = [
    {
      id: '2a',
      title: 'Olist Retail & E-commerce',
      type: 'Growth Analytics',
      tags: ['Python', 'SQL', 'Power BI'],
      image: 'https://private-user-images.githubusercontent.com/128074557/490479257-9a2ee109-1e2c-4649-b385-593d5839861a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY3NTk1MzgsIm5iZiI6MTc2Njc1OTIzOCwicGF0aCI6Ii8xMjgwNzQ1NTcvNDkwNDc5MjU3LTlhMmVlMTA5LTFlMmMtNDY0OS1iMzg1LTU5M2Q1ODM5ODYxYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIyNlQxNDI3MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZDhiOTdlODBmYzMwMzU2MTlmZDE3OWM2ODNlNTU3NmEyZGU0NGZmZWE0YTY1NWU5Mzg1Y2RjMzkyNjA3NmQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mG4xp08bt8pMjqrn7sfMS9bq-uOiKwqY20l34CYkk4I',
      link: 'https://github.com/ahmad-bsds/OlistAnalytics'
    },
    {
      id: '2b',
      title: 'Marketing Analytics Dashboard',
      type: 'BI & Visualization',
      tags: ['Excel', 'Segmentation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/MarketingAnalyticsExcel'
    },
    {
      id: '2c',
      title: 'Customers Segmentation',
      type: 'Unsupervised Learning',
      tags: ['Python', 'Clustering', 'RFM'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/CustomerSegmentation'
    },
    {
      id: '2d',
      title: 'ToyGPT',
      type: 'Deep Learning',
      tags: ['PyTorch', 'Transformer', 'LLM'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/toygpt'
    }
  ];

  const ProjectSection = ({ title, outlinedTitle, projects, isSticky = false, onProjectClick }: { title: string, outlinedTitle?: string, projects: any[], isSticky?: boolean, onProjectClick?: (p: any) => void }) => (
    <div className="mb-32">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
          {title} {outlinedTitle && <br />}
          {outlinedTitle && <span className="text-outline">{outlinedTitle}</span>}
        </h2>
      </div>

      <div className="space-y-6">
        {projects.map((p, index) => {
          const isClickable = !!onProjectClick;
          const Component = isClickable ? 'div' : 'a';
          const props = isClickable
            ? { onClick: () => onProjectClick(p) }
            : { href: p.link || '#', target: p.link ? "_blank" : undefined, rel: p.link ? "noopener noreferrer" : undefined };

          return (
            <Component
              key={p.id}
              {...props}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-white/10 ${isSticky ? 'sticky' : ''} block`}
              style={{
                top: isSticky ? `${index * 4 + 8}rem` : undefined,
                zIndex: index
              }}
            >
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {p.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                  {p.title}
                </h3>
                <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.3em]">{p.type}</p>
              </div>

              <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all self-center md:self-auto">
                <ArrowUpRight size={28} />
              </div>
            </Component>
          );
        })}
      </div>
    </div >
  );

  return (
    <div>
      <ProjectSection
        title="DESIGN"
        outlinedTitle="WORKS"
        projects={designProjects}
        onProjectClick={setSelectedProject}
      />
      <ProjectSection
        title="INFORMATION DESIGN"
        outlinedTitle="WORK"
        projects={infoProjects}
        onProjectClick={setSelectedProject}
      />
      <ProjectSection
        title="DATA SCIENCE"
        outlinedTitle="& ANALYTICS"
        projects={dataProjects}
        isSticky={true}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
