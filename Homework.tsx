import React from 'react';
import { Home, PenTool, ClipboardList } from 'lucide-react';
import { HomeworkOption } from '../types';

interface HomeworkProps {
  options: HomeworkOption[];
}

export const Homework: React.FC<HomeworkProps> = ({ options }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
      <div className="flex items-center justify-center mb-10">
        <Home className="h-8 w-8 text-indigo-400 mr-3" />
        <h2 className="text-3xl font-serif font-bold text-center">Домашнє Завдання</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {options.map((option, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/15 transition duration-300">
             <div className="flex items-center mb-4 text-indigo-300">
                {index === 0 ? <PenTool className="mr-3" /> : <ClipboardList className="mr-3" />}
                <h3 className="text-xl font-bold text-white">{option.title}</h3>
             </div>
             <p className="text-slate-300 mb-6 leading-relaxed">
               {option.description}
             </p>
             <ul className="space-y-3">
               {option.tasks.map((task, tIndex) => (
                 <li key={tIndex} className="flex items-start text-sm text-slate-300">
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></span>
                   {task}
                 </li>
               ))}
             </ul>
          </div>
        ))}
      </div>
    </div>
  );
};