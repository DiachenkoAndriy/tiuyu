import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { LectureBlock } from './components/LectureBlock';
import { KeyPoints } from './components/KeyPoints';
import { FunFacts } from './components/FunFacts';
import { Quiz } from './components/Quiz';
import { Discussion } from './components/Discussion';
import { Homework } from './components/Homework';
import { Timeline } from './components/Timeline';
import { LESSON_TITLE, BLOCK_1, BLOCK_2, HOMEWORK_OPTIONS } from './constants';
import { ArrowDown } from 'lucide-react';

const App: React.FC = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header onNavigate={scrollToSection} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div id="hero" className="relative bg-white pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599056377758-4808a7e70337?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
             <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold mb-4 tracking-wide uppercase">Всесвітня Історія • 7 Клас</span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-6 leading-tight">
              {LESSON_TITLE}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Від нормандського завоювання до народження Парламенту. Дослідіть ключові події, що сформували Британію.
            </p>
            <button 
              onClick={() => scrollToSection('block-1')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Розпочати Урок <ArrowDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <Section id="block-1">
          <LectureBlock block={BLOCK_1} />
          <KeyPoints points={BLOCK_1.keyPoints} />
          <FunFacts facts={BLOCK_1.funFacts} />
          <Timeline />
          <Quiz questions={BLOCK_1.quiz} title="Тести до Блоку 1" />
        </Section>

        <Section id="block-2" className="bg-slate-100/50">
          <LectureBlock block={BLOCK_2} />
          <KeyPoints points={BLOCK_2.keyPoints} />
          <FunFacts facts={BLOCK_2.funFacts} />
          {BLOCK_2.discussionQuestions && (
             <Discussion questions={BLOCK_2.discussionQuestions} />
          )}
          <Quiz questions={BLOCK_2.quiz} title="Тести до Блоку 2" />
        </Section>

        <Section id="homework">
          <Homework options={HOMEWORK_OPTIONS} />
        </Section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="mb-2">Всесвітня Історія. 7 Клас.</p>
          <p className="text-sm opacity-60">© 2024 Всі матеріали адаптовано з підручника.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;