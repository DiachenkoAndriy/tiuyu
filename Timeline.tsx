import React from 'react';

export const Timeline: React.FC = () => {
  const events = [
    { year: '1066', title: 'Битва під Гастінгсом', desc: 'Вільгельм Завойовник стає королем' },
    { year: '1086', title: 'Книга Страшного суду', desc: 'Перший великий перепис населення' },
    { year: '1154', title: 'Генрі II Плантагенет', desc: 'Створення Анжуйської імперії' },
    { year: '1215', title: 'Велика хартія', desc: 'Джон Безземельний обмежує владу' },
    { year: '1265', title: 'Перший Парламент', desc: 'Сімон де Монфор скликає раду' },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
        <h3 className="text-center font-serif text-2xl font-bold text-slate-800 mb-10">Хронологія Подій</h3>
        <div className="relative">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 z-0"></div>
            
            {/* Vertical Line (Mobile) */}
            <div className="md:hidden absolute top-0 left-4 h-full w-1 bg-indigo-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {events.map((event, index) => (
                    <div key={index} className="relative flex md:flex-col items-center group">
                        {/* Dot */}
                        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-md z-10 mb-0 md:mb-4 mr-4 md:mr-0 group-hover:scale-110 transition duration-300">
                           {index + 1}
                        </div>
                        
                        {/* Content */}
                        <div className="text-left md:text-center pt-2 md:pt-0 pb-6 md:pb-0 border-b md:border-b-0 border-slate-50 w-full">
                            <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded mb-1">
                                {event.year}
                            </span>
                            <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight mb-1">{event.title}</h4>
                            <p className="text-xs text-slate-500 hidden md:block">{event.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};