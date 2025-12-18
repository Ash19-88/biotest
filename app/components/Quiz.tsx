'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/app/data/questions';
import QuestionCard from './QuestionCard';
import ScoreScreen from './ScoreScreen';
import ProgressBar from './ProgressBar';
import ScorePanel from './ScorePanel';
import { FaClock } from 'react-icons/fa';

interface QuizProps {
  questions: Question[];
  timePerQuestion?: number;
}

export default function Quiz({ questions, timePerQuestion = 3 }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Manejar respuesta
  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Iniciar temporizador
    setTimeLeft(timePerQuestion);
  };

  // Temporizador
  useEffect(() => {
    if (timeLeft === null || selectedAnswer === null) return;

    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Tiempo terminado, pasar a siguiente pregunta
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
          setTimeLeft(null);
        } else {
          setShowScore(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedAnswer, currentQuestion, questions.length]);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(null);
  };

  const skipToNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setTimeLeft(null);
    } else {
      setShowScore(true);
    }
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
      
      {selectedAnswer !== null && timeLeft !== null && (
        <div className="mb-6 p-4 rounded-xl border-2 border-blue-200 bg-blue-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaClock className="text-blue-600 text-xl" />
            <div>
              <p className="font-bold text-blue-800">
                Pasando en {timeLeft}s
              </p>
              <p className="text-sm text-blue-600">
                Lee la explicación antes de continuar
              </p>
            </div>
          </div>
          
          <button
            onClick={skipToNext}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Saltar
          </button>
        </div>
      )}
      
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