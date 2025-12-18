'use client';

import { FaTrophy, FaRedo, FaShareAlt } from 'react-icons/fa';
import Button from '../ui/Button';
import Link from 'next/link';

interface ScoreScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export default function ScoreScreen({ score, total, onRestart }: ScoreScreenProps) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage >= 90) return "¡Excelente! 🎉 Eres un experto en biología.";
    if (percentage >= 70) return "¡Muy bien! 👍 Tienes un buen conocimiento.";
    if (percentage >= 50) return "Bien, pero puedes mejorar. 📚";
    return "Necesitas repasar más. ¡Sigue estudiando! 💪";
  };

  const shareScore = () => {
    const text = `¡Acabo de completar el quiz de Sistemas del Cuerpo Humano con ${score}/${total} puntos! 🩺🧠`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mi puntuación en el Quiz de Biología',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('¡Puntuación copiada al portapapeles! 🎯');
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
      {/* Trophy Icon */}
      <div className="inline-flex p-4 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
        <FaTrophy className="text-white text-5xl" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Completado</h1>
      <p className="text-gray-600 mb-8">Aquí están tus resultados</p>

      {/* Score Circle */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-800">
              {score}<span className="text-2xl text-gray-400">/{total}</span>
            </div>
            <div className="text-xl font-semibold text-gray-600">{percentage}%</div>
          </div>
        </div>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="url(#gradient)"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${(percentage / 100) * 552.92} 552.92`}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Message */}
      <div className="mb-8">
        <p className="text-xl font-semibold text-gray-800 mb-4">{getMessage()}</p>
        <div className={`inline-block px-6 py-2 rounded-full font-bold ${
          percentage >= 70 
            ? 'bg-linear-to-r from-green-400 to-blue-500 text-white'
            : 'bg-linear-to-r from-yellow-400 to-orange-500 text-white'
        }`}>
          {percentage >= 70 ? "¡APROBADO! 🎊" : "REPASA MÁS 📖"}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <Button onClick={onRestart} variant="primary" fullWidth>
          <div className="flex items-center justify-center gap-2">
            <FaRedo />
            Jugar Nuevamente
          </div>
        </Button>

        <Button onClick={shareScore} variant="success" fullWidth>
          <div className="flex items-center justify-center gap-2">
            <FaShareAlt />
            Compartir Resultado
          </div>
        </Button>

        <Link href="/" className="block">
          <Button variant="secondary" fullWidth>
            Volver al Inicio
          </Button>
        </Link>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-2">💡 Consejo para Estudiar</h3>
        <p className="text-sm text-gray-700">
          Revisa las flashcards y practica con los escenarios. ¡La constancia es clave para aprender!
        </p>
      </div>
    </div>
  );
}