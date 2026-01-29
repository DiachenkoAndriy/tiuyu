import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface KeyPointsProps {
  points: string[];
}

export const KeyPoints: React.FC<KeyPointsProps> = ({ points }) => {
  return (
    <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100 mb-8">
      <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center">
        <span className="text-2xl mr-3">📝</span>
        2. Головні тези
      </h3>
      <ul className="space-y-4">
        {points.map((point, index) => {
          const [title, description] = point.split(':');
          return (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
              <div className="text-emerald-900">
                {description ? (
                  <>
                    <span className="font-bold">{title}:</span>
                    <span>{description}</span>
                  </>
                ) : (
                  <span>{title}</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};