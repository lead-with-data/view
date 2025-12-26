
import React from 'react';
import { Figma, Code2, Cpu, Globe, Zap, Palette } from 'lucide-react';

export const ToolsGrid: React.FC = () => {
  const stack = [
    { name: 'Figma', category: 'Interface Design', icon: Figma },
    { name: 'React', category: 'Frontend Architecture', icon: Code2 },
    { name: 'Framer', category: 'Motion & Prototypes', icon: Zap },
    { name: 'Node.js', category: 'Backend Systems', icon: Cpu },
    { name: 'Webflow', category: 'Visual Development', icon: Globe },
    { name: 'Photoshop', category: 'Asset Generation', icon: Palette },
  ];

  return (
    <div>
      <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.85]">
        STACK <br />
        <span className="text-outline">SYSTEMS</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
        {stack.map((item, i) => (
          <div key={i} className="bg-[#050505] p-10 group hover:bg-neutral-900 transition-colors cursor-crosshair">
            <item.icon size={32} className="text-neutral-600 mb-6 group-hover:text-[#FF5C00] transition-colors" />
            <h4 className="text-xl font-bold mb-1">{item.name}</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
