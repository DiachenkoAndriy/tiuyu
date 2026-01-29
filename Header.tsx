import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('hero')}>
            <BookOpen className="h-8 w-8 text-indigo-700 mr-2" />
            <span className="font-serif font-bold text-xl text-slate-800">Історія 7 Клас</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('block-1')} className="text-slate-600 hover:text-indigo-700 font-medium transition">Блок 1: Завоювання</button>
            <button onClick={() => handleNavClick('block-2')} className="text-slate-600 hover:text-indigo-700 font-medium transition">Блок 2: Парламент</button>
            <button onClick={() => handleNavClick('homework')} className="px-4 py-2 rounded-full bg-indigo-700 text-white hover:bg-indigo-800 font-medium transition">Домашнє завдання</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <button onClick={() => handleNavClick('block-1')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Блок 1: Завоювання</button>
            <button onClick={() => handleNavClick('block-2')} className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Блок 2: Парламент</button>
            <button onClick={() => handleNavClick('homework')} className="block w-full text-left px-3 py-3 text-base font-medium text-indigo-700 bg-indigo-50 rounded-md">Домашнє завдання</button>
          </div>
        </div>
      )}
    </header>
  );
};