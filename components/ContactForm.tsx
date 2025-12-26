
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

      <div className="mt-40 pt-0 border-t-0 flex flex-col items-center justify-center relative h-32 overflow-hidden w-full">
        <div className="absolute inset-x-0 bottom-0 h-full w-[200%] flex pointer-events-none opacity-20">
          <div className="animate-wave-slow w-full h-full flex bg-repeat-x">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-[#FF5C00] fill-current">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" transform="rotate(180 600 60)"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" transform="rotate(180 600 60)"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" transform="rotate(180 600 60)"></path>
            </svg>
          </div>
          <div className="animate-wave-slow w-full h-full flex bg-repeat-x">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-[#FF5C00] fill-current">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" transform="rotate(180 600 60)"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" transform="rotate(180 600 60)"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" transform="rotate(180 600 60)"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
