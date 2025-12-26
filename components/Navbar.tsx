
import React, { useState } from 'react';
import { Home, FolderClosed, Briefcase, Box, MessageSquare, Mail, Award, Trophy, Languages as LanguageIcon, GraduationCap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderClosed, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'tools', icon: Box, label: 'Tools' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'achievements', icon: Trophy, label: 'Extra' },
    { id: 'languages', icon: LanguageIcon, label: 'Languages' },
    // { id: 'thoughts', icon: MessageSquare, label: 'Thoughts' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-8 right-8 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden flex flex-col justify-center items-center p-8"
          >
            <nav className="flex flex-col gap-6 w-full max-w-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-2xl font-bold p-4 rounded-2xl transition-all ${isActive
                        ? 'bg-white text-black'
                        : 'text-neutral-500 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <item.icon size={24} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 lg:sticky lg:top-8 lg:translate-x-0 z-50 w-fit mx-auto">
        <nav className="glass rounded-full p-2 flex items-center gap-1.5 shadow-2xl shadow-black/40 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative p-3 rounded-full transition-all duration-500 group overflow-hidden ${isActive ? 'text-black' : 'text-neutral-500 hover:text-white'
                  }`}
                title={item.label}
              >
                {/* Background Glow for Active State */}
                {isActive && (
                  <div className="absolute inset-0 bg-white transition-all duration-500" />
                )}

                {/* Subtle Hover Ring */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/10 transition-all duration-300" />
                )}

                <item.icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="relative z-10 transition-transform duration-300 group-active:scale-90"
                />

                {/* Indicator Dot for Active */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF5C00] rounded-full z-20 shadow-[0_0_8px_#FF5C00]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};
