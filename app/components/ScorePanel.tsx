interface ScorePanelProps {
  currentScore: number;
  currentQuestion: number;
  totalQuestions: number;
}

export default function ScorePanel({
  currentScore,
  currentQuestion,
  totalQuestions
}: ScorePanelProps) {
  const accuracy = currentQuestion > 0 
    ? Math.round((currentScore / currentQuestion) * 100) 
    : 0;

  return (
    <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{currentScore}</div>
          <div className="text-sm text-gray-600">Aciertos</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">{currentQuestion}</div>
          <div className="text-sm text-gray-600">Pregunta</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{accuracy}%</div>
          <div className="text-sm text-gray-600">Precisión</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progreso total:</span>
          <span className="font-semibold">
            {Math.round((currentQuestion / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-500"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}