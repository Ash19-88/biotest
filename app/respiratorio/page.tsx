import { questions } from '@/app/data/questions';
import Quiz from '../components/Quiz';

export default function RespiratorioQuizPage() {
  const respiratorioQuestions = questions.filter(q => q.category === 'respiratorio');
  
  return (
    <div className="min-h-screen p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, var(--color-green-50) 0%, var(--color-teal-50) 100%)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--color-green-800)' }}>
            Quiz: Sistema Respiratorio
          </h1>
          <p className="text-gray-600">
            {respiratorioQuestions.length} preguntas específicas
          </p>
        </div>
        <Quiz questions={respiratorioQuestions} />
      </div>
    </div>
  );
}