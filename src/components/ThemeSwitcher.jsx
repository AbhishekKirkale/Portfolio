import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck } from 'react-icons/fa';

export const themes = [
  {
    id: 'dark-blue',
    name: 'Dark Blue',
    bgClass: 'bg-[#0b0f19]',
    colorAccent: 'from-blue-500 to-purple-500',
    dotColor: '#3b82f6'
  },
  {
    id: 'cyber-emerald',
    name: 'Cyber Emerald',
    bgClass: 'bg-[#041410]',
    colorAccent: 'from-emerald-500 to-cyan-500',
    dotColor: '#10b981'
  },
  {
    id: 'neon-purple',
    name: 'Neon Purple',
    bgClass: 'bg-[#12081d]',
    colorAccent: 'from-purple-500 to-pink-500',
    dotColor: '#8b5cf6'
  },
  {
    id: 'sunset-rose',
    name: 'Sunset Rose',
    bgClass: 'bg-[#1a0a0f]',
    colorAccent: 'from-rose-500 to-amber-500',
    dotColor: '#f43f5e'
  },
  {
    id: 'clean-light',
    name: 'Clean Light',
    bgClass: 'bg-slate-100',
    colorAccent: 'from-blue-600 to-indigo-600',
    dotColor: '#2563eb'
  }
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark-blue';
    }
    return 'dark-blue';
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-slate-800/90 dark:bg-slate-800/90 border border-slate-700 text-gray-200 hover:text-white hover:border-blue-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
        title="Change Overall Theme"
        aria-label="Change Overall Theme"
      >
        <FaPalette className="text-base text-blue-400" />
        <span className="hidden sm:inline-block text-xs font-semibold font-mono">Theme</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-56 glass-card rounded-2xl p-3 shadow-2xl border border-slate-700/80 z-50 overflow-hidden"
          >
            <div className="text-xs font-mono text-gray-400 px-3 py-1.5 uppercase tracking-wider mb-1 border-b border-slate-800">
              Select Theme
            </div>

            <div className="space-y-1 mt-1">
              {themes.map((theme) => {
                const isActive = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setCurrentTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-blue-500/20 text-white font-semibold border border-blue-500/40' 
                        : 'text-gray-300 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <span 
                        className="w-3.5 h-3.5 rounded-full inline-block border border-white/20 shadow-sm"
                        style={{ backgroundColor: theme.dotColor }}
                      />
                      <span>{theme.name}</span>
                    </div>

                    {isActive && <FaCheck className="text-blue-400 text-xs" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
