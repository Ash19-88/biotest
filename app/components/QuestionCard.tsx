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
    const baseStyle = "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 flex items-center justify-between";
    
    if (selectedAnswer === null) {
      return {
        className: `${baseStyle} cursor-pointer hover:scale-[1.02]`,
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

  const getLetterStyle = (index: number) => {
    if (selectedAnswer === null) {
      return {
        background: 'var(--color-gray-200)',
        color: 'var(--color-gray-700)'
      };
    }
    
    if (index === question.correctAnswer) {
      return {
        background: 'var(--color-green-500)',
        color: 'white'
      };
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return {
        background: 'var(--color-red-500)',
        color: 'white'
      };
    }
    
    return {
      background: 'var(--color-gray-200)',
      color: 'var(--color-gray-500)'
    };
  };

  return (
    <div className="rounded-2xl p-6 md:p-8" style={{
      background: 'white',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <Badge type={question.category}>
          {question.category === 'respiratorio' ? 'Sistema Respiratorio' : 'Sistema Circulatorio'}
        </Badge>
        <div style={{
          fontSize: '0.875rem',
          color: 'var(--color-gray-500)'
        }}>
          Selecciona la respuesta correcta
        </div>
      </div>

      {/* Question */}
      <h2 style={{
        fontSize: '1.875rem',
        fontWeight: '700',
        color: 'var(--color-gray-800)',
        marginBottom: '2rem'
      }}>
        {question.question}
      </h2>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {question.options.map((option, index) => {
          const optionStyle = getOptionStyle(index);
          const letterStyle = getLetterStyle(index);
          
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: '700',
                  ...letterStyle
                }}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span style={{ fontSize: '1.125rem' }}>{option}</span>
              </div>
              
              {selectedAnswer !== null && (
                <>
                  {index === question.correctAnswer && (
                    <FaCheckCircle style={{ color: 'var(--color-green-500)', fontSize: '1.5rem' }} />
                  )}
                  {index === selectedAnswer && index !== question.correctAnswer && (
                    <FaTimesCircle style={{ color: 'var(--color-red-500)', fontSize: '1.5rem' }} />
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {selectedAnswer !== null && question.explanation && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'var(--color-blue-50)',
          border: '1px solid var(--color-blue-200)',
          borderRadius: '0.75rem'
        }}>
          <h4 style={{
            fontWeight: '700',
            color: 'var(--color-blue-800)',
            marginBottom: '0.5rem'
          }}>
            📚 Explicación
          </h4>
          <p style={{ color: 'var(--color-gray-700)' }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}