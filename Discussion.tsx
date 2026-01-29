import React from 'react';
import { MessageCircle } from 'lucide-react';

interface DiscussionProps {
  questions: { title: string; content: string }[];
}

export const Discussion: React.FC<DiscussionProps> = ({ questions }) => {
  return (
    <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 border border-indigo-100 mb-8">
      <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center">
        <span className="text-2xl mr-3">🗣</span>
        4. Питання для обговорення
      </h3>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
            <div className="flex items-start">
              <MessageCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-indigo-900 mb-1">{q.title}</h4>
                <p className="text-slate-600 italic">"{q.content}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};