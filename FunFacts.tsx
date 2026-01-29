import React from 'react';
import { Lightbulb } from 'lucide-react';

interface FunFactsProps {
  facts: { title: string; content: string }[];
}

export const FunFacts: React.FC<FunFactsProps> = ({ facts }) => {
  return (
    <div className="mb-8">
       <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center px-2">
        <span className="text-2xl mr-3">🧐</span>
        3. Цікаві факти
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center mb-3 text-amber-600">
              <Lightbulb className="h-5 w-5 mr-2" />
              <h4 className="font-bold text-lg">{fact.title}</h4>
            </div>
            <p className="text-amber-900 text-sm leading-relaxed">
              {fact.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};