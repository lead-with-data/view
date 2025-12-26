
import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <div className="pb-32">
      <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-20 leading-[0.85]">
        INITIATE <br />
        <span className="text-outline">CONTACT</span>
      </h2>

      <form className="max-w-4xl space-y-12" action="mailto:ahmad.bsds@gmail.com" method="post" encType="text/plain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group">
            <input
              type="text"
              className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-[#FF5C00] transition-all text-xl font-medium peer"
              placeholder=" "
            />
            <label className="absolute top-4 left-0 text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em] transition-all peer-focus:-top-4 peer-focus:text-[#FF5C00] peer-[:not(:placeholder-shown)]:-top-4">
              Full Name
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-[#FF5C00] transition-all text-xl font-medium peer"
              placeholder=" "
            />
            <label className="absolute top-4 left-0 text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em] transition-all peer-focus:-top-4 peer-focus:text-[#FF5C00] peer-[:not(:placeholder-shown)]:-top-4">
              Email Address
            </label>
          </div>
        </div>

        <div className="relative group">
          <textarea
            rows={4}
            className="w-full bg-transparent border-b border-neutral-800 py-4 outline-none focus:border-[#FF5C00] transition-all text-xl font-medium peer resize-none"
            placeholder=" "
          ></textarea>
          <label className="absolute top-4 left-0 text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em] transition-all peer-focus:-top-4 peer-focus:text-[#FF5C00] peer-[:not(:placeholder-shown)]:-top-4">
            Project Brief
          </label>
        </div>

        <button className="flex items-center gap-4 text-3xl font-black uppercase tracking-tighter hover:text-[#FF5C00] transition-all group">
          Send Message
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-4 transition-transform">
            <Send size={24} />
          </div>
        </button>
      </form>

      <div className="mt-40 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between gap-8 text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em]">
        <p>© 2025 ALL RIGHTS RESERVED BY YOUR PORTFOLIO</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};
