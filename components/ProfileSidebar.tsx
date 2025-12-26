
import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProfileSidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-[3rem] p-8 text-black flex flex-col items-center shadow-2xl relative overflow-hidden h-full min-h-[700px]">
      {/* Dynamic Status Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-50 px-4 py-1.5 rounded-full">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">Available for Work</span>
      </div>

      <div className="relative w-full aspect-[4/5] mt-8 mb-8 group">
        <div className="absolute inset-0 bg-neutral-100 rounded-[2rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* Abstract shape overlay */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF5C00] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="text-center w-full">
        <h1 className="text-4xl font-extrabold mb-1 tracking-tight leading-none">YOUR NAME</h1>
        <p className="text-neutral-400 font-semibold text-sm mb-6 uppercase tracking-widest">Design Engineer</p>
        
        <div className="w-full h-[1px] bg-neutral-100 mb-6"></div>

        <p className="text-neutral-500 text-[15px] leading-relaxed mb-8 px-4 font-medium">
          Crafting high-performance digital experiences that bridge the gap between aesthetics and function.
        </p>
      </div>

      <div className="w-full space-y-3 mb-8">
        <button className="w-full bg-black text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-bold hover:bg-[#FF5C00] transition-all group">
          Hire Me
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button className="w-full border border-neutral-200 text-black rounded-2xl py-4 font-bold hover:bg-neutral-50 transition-all">
          Download CV
        </button>
      </div>

      <div className="flex gap-2 mt-auto">
        {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:text-[#FF5C00] hover:bg-neutral-100 transition-all">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};
