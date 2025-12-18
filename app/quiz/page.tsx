import Quiz from "../components/Quiz";


export default function QuizPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Quiz questions={[]} />
      </div>
    </div>
  );
}