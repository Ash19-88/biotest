'use client';

import { FaPlay, FaGraduationCap, FaHeartbeat, FaLungs, FaArrowRight } from 'react-icons/fa';
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
      color: "var(--color-green-600)",
      path: "/respiratorio"
    },
    {
      title: "Solo Circulatorio",
      description: "45 preguntas específicas", 
      color: "var(--color-red-600)",
      path: "/circulatorio"
    },
    {
      title: "Quiz Completo",
      description: "95 preguntas - Ambos sistemas",
      color: "var(--color-purple-600)",
      path: "/completo"
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12 pt-8">
        <div className="flex justify-center items-center gap-4 mb-6">
          <FaHeartbeat style={{ 
            fontSize: '3rem', 
            color: 'var(--color-red-500)',
            animation: 'pulse 2s infinite'
          }} />
          <FaLungs style={{ 
            fontSize: '3rem', 
            color: 'var(--color-green-500)' 
          }} />
          <FaGraduationCap style={{ 
            fontSize: '3rem', 
            color: 'var(--color-purple-500)' 
          }} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          Quiz de Biología
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sistemas Respiratorio y Circulatorio - Secundaria
        </p>
      </div>

      {/* Opciones de Quiz */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          Elige tu modalidad de estudio
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quizOptions.map((option, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: 'white',
                border: `3px solid ${option.color}`,
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
              }}
              onClick={() => router.push(option.path)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4" style={{ color: option.color }}>
                  {index === 0 ? <FaLungs /> : index === 1 ? <FaHeartbeat /> : <FaGraduationCap />}
                </div>
                
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ color: option.color }}
                >
                  {option.title}
                </h4>
                
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: option.color,
                    color: 'white'
                  }}
                >
                  Comenzar
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: `${totalQuestions}+`, label: 'Preguntas totales', color: 'var(--color-blue-600)' },
          { value: '44', label: 'Preguntas respiratorio', color: 'var(--color-green-600)' },
          { value: '45', label: 'Preguntas circulatorio', color: 'var(--color-red-600)' },
          { value: '3', label: 'Modalidades', color: 'var(--color-purple-600)' }
        ].map((stat, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl text-center"
            style={{
              background: 'white',
              border: '1px solid var(--color-gray-200)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div 
              className="text-2xl font-bold mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-gray-600)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Botón Principal */}
      <div className="text-center">
        <button
          onClick={() => router.push('/completo')}
          className="px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 mb-4"
          style={{
            background: 'linear-gradient(to right, var(--color-blue-500), var(--color-purple-600))',
            color: 'white',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <FaPlay />
            Comenzar Quiz Completo (95 preguntas)
          </div>
        </button>
        
        <p className="text-sm" style={{ color: 'var(--color-gray-500)' }}>
          Recomendado para simulación de examen final
        </p>
      </div>

      {/* Animation */}
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
        .card-shadow {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}