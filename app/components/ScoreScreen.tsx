'use client';

import {  FaRedo } from 'react-icons/fa';
import Link from 'next/link';

interface ScoreScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
  title?: string;
}

export default function ScoreScreen({ 
  score, 
  total, 
  onRestart,
  title = "Quiz Completado"
}: ScoreScreenProps) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage >= 90) return "¡Excelente! 🎉 Dominas completamente el tema.";
    if (percentage >= 70) return "¡Muy bien! 👍 Tienes un buen conocimiento.";
    if (percentage >= 50) return "Bien, pero puedes mejorar. 📚";
    return "Necesitas repasar más. ¡Sigue estudiando! 💪";
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 text-center">
      {/* Title Responsive */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        Aquí están tus resultados
      </p>

      {/* Score Responsive */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        <span className="text-blue-600">{score}</span>
        <span className="text-gray-400">/</span>
        <span className="text-purple-600">{total}</span>
      </div>
      
      {/* Percentage Responsive */}
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-6 sm:mb-8">
        {percentage}% de aciertos
      </div>

      {/* Message Responsive */}
      <div className="mb-6 sm:mb-8">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          {getMessage()}
        </p>
        <div className={`inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm ${
          percentage >= 70 
            ? 'bg-linear-to-r from-green-400 to-blue-500 text-white'
            : 'bg-linear-to-r from-yellow-400 to-orange-500 text-white'
        }`}>
          {percentage >= 70 ? "¡APROBADO! 🎊" : "REPASA MÁS 📖"}
        </div>
      </div>

      {/* Actions Responsive */}
      <div className="space-y-3 sm:space-y-4">
        <button
          onClick={onRestart}
          className="w-full py-2.5 sm:py-3 px-4 text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(to right, var(--color-blue-500), var(--color-purple-600))',
            color: 'white'
          }}
        >
          <FaRedo className="text-xs sm:text-sm" />
          Jugar Nuevamente
        </button>

        <Link 
          href="/"
          className="block w-full py-2.5 sm:py-3 px-4 text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:opacity-90 items-center justify-center gap-2"
          style={{
            background: 'var(--color-gray-100)',
            color: 'var(--color-gray-800)',
            border: '1px solid var(--color-gray-300)'
          }}
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}