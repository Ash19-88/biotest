import { questions } from '@/app/data/questions';
import Quiz from '../components/Quiz';

export default function CompletoQuizPage() {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, var(--color-blue-50) 0%, var(--color-purple-50) 100%)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text">
            Quiz Completo: Ambos Sistemas
          </h1>
          <p className="text-gray-600">
            {questions.length} preguntas - Respiratorio + Circulatorio + Integración
          </p>
        </div>
        <Quiz questions={questions} />
      </div>
    </div>
  );
}