
import React from 'react';
import { BrainCircuit, Bot, PieChart, BarChart3, Code2, Users, Palette, Cloud, Terminal } from 'lucide-react';

export const ToolsGrid: React.FC = () => {
  const stack = [
    { name: 'Design', category: 'Figma, Canva, Adobe Illustrator, Affinity (Designed)', icon: Palette },
    { name: 'Statistics', category: 'Descriptive and Inferential Statistics (Academic)', icon: PieChart },
    { name: 'Visualization', category: 'Tableau, Power BI, Looker, Excel, KPIs, Data Storytelling (Olist Analytics)', icon: BarChart3 },
    { name: 'Machine Learning', category: 'PyTorch, Scikit-learn, Deep Learning (Toy GPT)', icon: Bot },
    { name: 'Generative AI', category: 'LangChain, LangGraph, Prompt Engineering (Renal Sense)', icon: BrainCircuit },
    { name: 'Cloud & Data', category: 'AWS, Snowflake, Google Cloud, Databases, Data Warehousing, Databricks (Familiar)', icon: Cloud },
    { name: 'Tools', category: 'Git/GitHub, Docker, Jupyter Notebook, VS Code, PyCharm, Google Colab, Vercel (Used)', icon: Terminal },
    { name: 'Languages', category: 'Python, SQL, R, HTML/CSS (Used)', icon: Code2 },
    { name: 'Soft Skills', category: 'Collaboration & Communication, Analytical & Critical Thinking, Problem-Solving, Adaptability (Possess)', icon: Users },
  ];

  return (
    <div>
      <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.85]">
        STACK & <br />
        <span className="text-outline">SKILLS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
        {stack.map((item, i) => {
          const match = item.category.match(/(.*)\s+\(([^)]+)\)$/);
          const text = match ? match[1] : item.category;
          const tag = match ? match[2] : null;

          return (
            <div
              key={i}
              className="bg-[#050505] p-10 group hover:bg-neutral-900 transition-colors cursor-crosshair flex flex-col items-start"
            >
              <item.icon size={32} className="text-neutral-600 mb-6 group-hover:text-[#FF5C00] transition-colors" />
              <h4 className="text-xl font-bold mb-3">{item.name}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">{text}</p>

              {tag && (
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500 group-hover:text-[#FF5C00] group-hover:border-[#FF5C00] transition-all">
                  {tag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
