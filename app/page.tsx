import WelcomeScreen from './components/WelcomeScreen';
import { questions } from './data/questions';

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, var(--color-blue-50) 0%, var(--color-purple-50) 100%)'
    }}>
      <div className="max-w-6xl mx-auto">
        <WelcomeScreen totalQuestions={questions.length} />
      </div>
    </div>
  );
}