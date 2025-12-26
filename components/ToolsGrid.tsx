
import React from 'react';
import { BrainCircuit, Bot, PieChart, BarChart3, Code2, Users, Palette } from 'lucide-react';

export const ToolsGrid: React.FC = () => {
  const stack = [
    { name: 'Generative AI', category: 'LangChain, LangGraph, Prompt Engineering (Renal Sense)', icon: BrainCircuit },
    { name: 'Machine Learning', category: 'PyTorch, Scikit-learn, Deep Learning (Toy GPT)', icon: Bot },
    { name: 'Statistics', category: 'Descriptive and Inferential Statistics (Academic)', icon: PieChart },
    { name: 'Visualization', category: 'Tableau, Power BI, Looker, Excel, KPIs, Data Storytelling (Olist Analytics)', icon: BarChart3 },
    { name: 'Languages', category: 'Python, SQL, R, HTML/CSS (Used)', icon: Code2 },
    { name: 'Soft Skills', category: 'Collaboration & Communication, Analytical & Critical Thinking, Problem-Solving, Adaptability', icon: Users },
    { name: 'Design', category: 'Figma, Canva', icon: Palette },
  ];

  return (
    <div>
      <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.85]">
        STACK <br />
        <span className="text-outline">SKILLS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
        {stack.map((item, i) => (
          <div key={i} className="bg-[#050505] p-10 group hover:bg-neutral-900 transition-colors cursor-crosshair">
            <item.icon size={32} className="text-neutral-600 mb-6 group-hover:text-[#FF5C00] transition-colors" />
            <h4 className="text-xl font-bold mb-3">{item.name}</h4>
            <p className="text-sm text-neutral-400 leading-relaxed">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
