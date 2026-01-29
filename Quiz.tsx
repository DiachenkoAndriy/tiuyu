import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Check, X, RefreshCw } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

export const Quiz: React.FC<QuizProps> = ({ questions, title = "Тести" }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const checkResults = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  const allAnswered = questions.length === Object.keys(answers).length;
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswerIndex ? 1 : 0), 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center">
          <span className="text-2xl mr-3">🧠</span>
          {title}
        </h3>
        {showResults && (
           <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-full text-sm">
             Результат: {score} / {questions.length}
           </span>
        )}
      </div>

      <div className="space-y-8">
        {questions.map((q, qIndex) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswerIndex;
          
          return (
            <div key={q.id} className={`p-4 rounded-xl ${showResults ? (isCorrect ? 'bg-green-50' : 'bg-red-50') : 'bg-slate-50'}`}>
              <p className="font-medium text-slate-800 mb-4">
                {qIndex + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((option, oIndex) => {
                  let buttonClass = "p-3 rounded-lg text-left text-sm transition border ";
                  
                  if (showResults) {
                     if (oIndex === q.correctAnswerIndex) {
                        buttonClass += "bg-green-200 border-green-300 text-green-900 font-medium";
                     } else if (userAnswer === oIndex) {
                        buttonClass += "bg-red-200 border-red-300 text-red-900";
                     } else {
                        buttonClass += "bg-white border-slate-200 text-slate-400 opacity-70";
                     }
                  } else {
                    if (userAnswer === oIndex) {
                        buttonClass += "bg-indigo-600 border-indigo-600 text-white shadow-md";
                    } else {
                        buttonClass += "bg-white border-slate-200 text-slate-600 hover:bg-indigo-50 hover:border-indigo-200";
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelect(q.id, oIndex)}
                      className={buttonClass}
                      disabled={showResults}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResults && oIndex === q.correctAnswerIndex && <Check size={16} className="text-green-700" />}
                        {showResults && userAnswer === oIndex && oIndex !== q.correctAnswerIndex && <X size={16} className="text-red-700" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
        {!showResults ? (
          <button
            onClick={checkResults}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-lg font-bold text-white transition ${
              allAnswered 
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg transform hover:-translate-y-0.5' 
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            Перевірити відповіді
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="flex items-center px-6 py-3 rounded-lg font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <RefreshCw size={20} className="mr-2" />
            Спробувати ще раз
          </button>
        )}
      </div>
    </div>
  );
};