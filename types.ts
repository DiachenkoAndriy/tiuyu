export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ContentBlock {
  id: string;
  title: string;
  lecture: {
    paragraphs: (string | { type: 'image'; src: string; caption?: string } | { type: 'header'; text: string })[];
  };
  keyPoints: string[];
  funFacts: { title: string; content: string }[];
  discussionQuestions?: { title: string; content: string }[];
  quiz: QuizQuestion[];
}

export interface HomeworkOption {
  title: string;
  description: string;
  tasks: string[];
}