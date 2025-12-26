
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'Aura Network',
      type: 'Case Study',
      tags: ['Branding', 'Web3'],
      image: 'https://images.unsplash.com/photo-1614850523296-e8c0d9936bb8?auto=format&fit=crop&q=80&w=800',
      color: '#FF5C00'
    },
    {
      id: '2',
      title: 'Echo Labs',
      type: 'Visual Identity',
      tags: ['UI Design', 'App'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      color: '#00D1FF'
    },
    {
      id: '3',
      title: 'Nova SaaS',
      type: 'Product Design',
      tags: ['B2B', 'React'],
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
      color: '#C9FF4D'
    }
  ];

  return (
    <div>
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
          SELECTED <br />
          <span className="text-outline">WORKS</span>
        </h2>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-neutral-800 pb-2">
          View Archive (24)
        </a>
      </div>

      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.id} className="group relative overflow-hidden rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-white/10">
            <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500">{tag}</span>
                ))}
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                {p.title}
              </h3>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.3em]">{p.type}</p>
            </div>

            <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all self-center md:self-auto">
              <ArrowUpRight size={28} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
