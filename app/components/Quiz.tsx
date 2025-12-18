// app/components/quiz/Quiz.tsx - MODIFICADO
'use client';

import { useState } from 'react';
import { Question } from '@/app/data/questions';
import QuestionCard from './QuestionCard';
import ScoreScreen from './ScoreScreen';
import ProgressBar from './ProgressBar';
import ScorePanel from './ScorePanel';

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (showScore) {
    return (
      <div className="flex items-center justify-center min-h-150">
        <ScoreScreen 
          score={score} 
          total={questions.length} 
          onRestart={restartQuiz} 
        />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div>
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      
      <QuestionCard
        question={currentQ}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      <ScorePanel 
        currentScore={score}
        currentQuestion={currentQuestion + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
}