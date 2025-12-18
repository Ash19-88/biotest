'use client';

import { useState } from 'react';
import Quiz from '../components/Quiz';
import { questions } from '../data/questions';
import { FaLungs, FaHome, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function RespiratorioQuizPage() {
  const respiratorioQuestions = questions.filter(q => q.category === 'respiratorio');
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8" style={{
      background: 'linear-gradient(135deg, var(--color-green-50) 0%, var(--color-teal-50) 100%)'
    }}>
      <div className="max-w-3xl mx-auto">
        {/* Header Responsive */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaLungs className="text-xl sm:text-2xl md:text-3xl" style={{ color: 'var(--color-green-600)' }} />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: 'var(--color-green-800)' }}>
                  Sistema Respiratorio
                </h1>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaClock className="text-xs" />
                  <span>3 segundos por pregunta</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300"
                style={{
                  background: 'var(--color-green-100)',
                  color: 'var(--color-green-800)',
                  border: '1px solid var(--color-green-300)'
                }}
              >
                ℹ️ Info
              </button>
              
              <Link 
                href="/"
                className="px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'white',
                  border: '1px solid var(--color-gray-300)',
                  color: 'var(--color-gray-700)'
                }}
              >
                <FaHome className="text-xs" />
                Inicio
              </Link>
            </div>
          </div>

          {/* Info Box Responsive */}
          {showInfo && (
            <div className="p-3 sm:p-4 rounded-lg bg-white/90 border border-green-200 mb-4">
              <h3 className="font-bold text-green-800 mb-1 text-sm sm:text-base">📖 Instrucciones:</h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                <li>• Selecciona la respuesta correcta entre 4 opciones</li>
                <li>• Tienes 3 segundos para leer la explicación</li>
                <li>• Puedes saltar el temporizador si lo deseas</li>
                <li>• Al final verás tu puntuación total</li>
              </ul>
            </div>
          )}
        </div>

        {/* Quiz Component */}
        <Quiz questions={respiratorioQuestions} timePerQuestion={3} />
      </div>
    </div>
  );
}