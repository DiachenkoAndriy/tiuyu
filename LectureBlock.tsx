import React from 'react';
import { ContentBlock } from '../types';

interface LectureBlockProps {
  block: ContentBlock;
}

export const LectureBlock: React.FC<LectureBlockProps> = ({ block }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
      <div className="bg-indigo-700 px-6 py-4">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center">
          <span className="bg-white/20 p-2 rounded-lg mr-3 text-2xl">📖</span>
          {block.title}
        </h2>
      </div>
      
      <div className="p-6 md:p-10 space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-b border-indigo-100 pb-2 mb-6">
          1. Велика лекція вчителя
        </h3>
        
        {block.lecture.paragraphs.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <p key={index} className="text-lg leading-relaxed text-slate-700">
                {item}
              </p>
            );
          } else if (item.type === 'header') {
             return (
              <h4 key={index} className="text-xl font-bold text-indigo-900 mt-6 mb-2">
                {item.text}
              </h4>
             );
          } else if (item.type === 'image') {
            return (
              <figure key={index} className="my-8 group">
                <div className="overflow-hidden rounded-xl shadow-md border border-slate-200">
                  <img 
                    src={item.src} 
                    alt={item.caption || "Historical illustration"} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                </div>
                {item.caption && (
                  <figcaption className="mt-3 text-center text-sm text-slate-500 italic">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};