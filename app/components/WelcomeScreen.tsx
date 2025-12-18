'use client';

import { FaPlay, FaGraduationCap, FaHeartbeat, FaLungs } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface WelcomeScreenProps {
  totalQuestions: number;
}

export default function WelcomeScreen({ totalQuestions }: WelcomeScreenProps) {
  const router = useRouter();

  const quizOptions = [
    {
      title: "Solo Respiratorio",
      description: "44 preguntas específicas",
      icon: <FaLungs className="text-3xl md:text-4xl" />,
      color: "var(--color-green-600)",
      borderColor: "var(--color-green-300)",
      bgColor: "var(--color-green-50)",
      count: 44,
      path: "/respiratorio"
    },
    {
      title: "Solo Circulatorio", 
      description: "45 preguntas específicas",
      icon: <FaHeartbeat className="text-3xl md:text-4xl animate-pulse" />,
      color: "var(--color-red-600)",
      borderColor: "var(--color-red-300)",
      bgColor: "var(--color-red-50)",
      count: 45,
      path: "/circulatorio"
    },
    {
      title: "Quiz Completo",
      description: "95 preguntas - Ambos sistemas",
      icon: <FaGraduationCap className="text-3xl md:text-4xl" />,
      color: "var(--color-purple-600)",
      borderColor: "var(--color-purple-300)",
      bgColor: "var(--color-purple-50)",
      count: totalQuestions,
      path: "/completo"
    }
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* Header Responsive */}
      <div className="text-center mb-8 md:mb-12 pt-4 md:pt-8">
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
          <FaHeartbeat className="text-2xl sm:text-3xl md:text-4xl text-red-500 animate-pulse" />
          <FaLungs className="text-2xl sm:text-3xl md:text-4xl text-green-500" />
          <FaGraduationCap className="text-2xl sm:text-3xl md:text-4xl text-purple-500" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 gradient-text">
          Quiz de Biología
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto px-2">
          Sistemas Respiratorio y Circulatorio - Secundaria
        </p>
      </div>

      {/* Cards Grid Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
        {quizOptions.map((option, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:hover:shadow-2xl cursor-pointer"
            style={{
              background: option.bgColor,
              border: `2px solid ${option.borderColor}`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}
            onClick={() => router.push(option.path)}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-3 md:mb-4" style={{ color: option.color }}>
                {option.icon}
              </div>
              
              <h3 
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3"
                style={{ color: option.color }}
              >
                {option.title}
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 md:mb-6 grow">
                {option.description}
              </p>
              
              <button
                className="w-full py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(to right, ${option.borderColor}, ${option.color})`,
                  color: 'white'
                }}
              >
                <FaPlay className="text-xs sm:text-sm" />
                Comenzar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12">
        {[
          { value: `${totalQuestions}+`, label: 'Total', color: 'var(--color-blue-600)' },
          { value: '44', label: 'Respiratorio', color: 'var(--color-green-600)' },
          { value: '45', label: 'Circulatorio', color: 'var(--color-red-600)' },
          { value: '6', label: 'Integración', color: 'var(--color-purple-600)' }
        ].map((stat, index) => (
          <div 
            key={index}
            className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl text-center"
            style={{
              background: 'white',
              border: '1px solid var(--color-gray-200)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div 
              className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm" style={{ color: 'var(--color-gray-600)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .gradient-text {
          background: linear-gradient(to right, var(--color-blue-600), var(--color-purple-600));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}