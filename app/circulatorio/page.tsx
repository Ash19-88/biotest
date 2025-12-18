import { questions } from '@/app/data/questions';
import Quiz from '../components/Quiz';


export default function CirculatorioQuizPage() {
  const circulatorioQuestions = questions.filter(q => q.category === 'circulatorio');
  
  return (
    <div className="min-h-screen p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, var(--color-red-50) 0%, var(--color-pink-50) 100%)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--color-red-800)' }}>
            Quiz: Sistema Circulatorio
          </h1>
          <p className="text-gray-600">
            {circulatorioQuestions.length} preguntas específicas
          </p>
        </div>
        <Quiz questions={circulatorioQuestions} />
      </div>
    </div>
  );
}