import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
};