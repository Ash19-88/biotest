'use client';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Badge from '../ui/Badge';
import { Question } from '@/app/data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswer
}: QuestionCardProps) {
  const getOptionStyle = (index: number) => {
    const baseStyle = "w-full p-3 sm:p-4 text-left rounded-lg sm:rounded-xl border-2 transition-all duration-300 flex items-center justify-between";
    
    if (selectedAnswer === null) {
      return {
        className: `${baseStyle} cursor-pointer hover:scale-[1.01] sm:hover:scale-[1.02]`,
        style: {
          background: 'white',
          borderColor: 'var(--color-gray-200)'
        },
        hoverStyle: {
          borderColor: 'var(--color-blue-400)',
          background: 'var(--color-blue-50)'
        }
      };
    }
    
    if (index === question.correctAnswer) {
      return {
        className: `${baseStyle}`,
        style: {
          background: 'var(--color-green-50)',
          borderColor: 'var(--color-green-500)'
        }
      };
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return {
        className: `${baseStyle}`,
        style: {
          background: 'var(--color-red-50)',
          borderColor: 'var(--color-red-500)'
        }
      };
    }
    
    return {
      className: `${baseStyle}`,
      style: {
        background: 'var(--color-gray-50)',
        borderColor: 'var(--color-gray-300)'
      }
    };
  };

  return (
    <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6" style={{
      background: 'white',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
    }}>
      {/* Header Responsive */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4 sm:mb-6">
        <Badge type={question.category} className="text-xs sm:text-sm">
          {question.category === 'respiratorio' ? 'Sistema Respiratorio' : 'Sistema Circulatorio'}
        </Badge>
        <div className="text-xs sm:text-sm text-gray-500">
          Selecciona la respuesta correcta
        </div>
      </div>

      {/* Question Responsive */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 leading-tight">
        {question.question}
      </h2>

      {/* Options Responsive */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {question.options.map((option, index) => {
          const optionStyle = getOptionStyle(index);
          
          return (
            <button
              key={index}
              onClick={() => selectedAnswer === null && onAnswer(index)}
              disabled={selectedAnswer !== null}
              className={optionStyle.className}
              style={optionStyle.style}
              onMouseEnter={(e) => {
                if (selectedAnswer === null && optionStyle.hoverStyle) {
                  Object.assign(e.currentTarget.style, optionStyle.hoverStyle);
                }
              }}
              onMouseLeave={(e) => {
                if (selectedAnswer === null && optionStyle.hoverStyle) {
                  Object.assign(e.currentTarget.style, optionStyle.style);
                }
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: '700',
                  background: selectedAnswer === null
                    ? 'var(--color-gray-200)'
                    : index === question.correctAnswer
                    ? 'var(--color-green-500)'
                    : index === selectedAnswer
                    ? 'var(--color-red-500)'
                    : 'var(--color-gray-200)',
                  color: selectedAnswer === null
                    ? 'var(--color-gray-700)'
                    : index === question.correctAnswer || index === selectedAnswer
                    ? 'white'
                    : 'var(--color-gray-500)'
                }}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-sm sm:text-base md:text-lg text-left wrap-break-word flex-1">
                  {option}
                </span>
              </div>
              
              {selectedAnswer !== null && (
                <>
                  {index === question.correctAnswer && (
                    <FaCheckCircle className="text-green-500 text-lg sm:text-xl md:text-2xl ml-2" />
                  )}
                  {index === selectedAnswer && index !== question.correctAnswer && (
                    <FaTimesCircle className="text-red-500 text-lg sm:text-xl md:text-2xl ml-2" />
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Responsive */}
      {selectedAnswer !== null && question.explanation && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl">
          <h4 className="font-bold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">
            📚 Explicación
          </h4>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}