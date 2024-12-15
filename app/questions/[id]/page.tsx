'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

// Mock data for a single question
const questionData = {
  id: 1,
  question: "What is the difference between 'let' and 'const' in JavaScript?",
  difficulty: 'Easy',
  category: 'JavaScript',
  perfectAnswer:
    "In JavaScript, 'let' and 'const' are both used for variable declaration, but they have different scoping rules and behaviors. 'let' allows you to declare variables that are limited to the scope of a block statement or expression, and it can be reassigned. 'const', on the other hand, is used to declare variables whose values cannot be reassigned after initialization. However, for objects and arrays declared with 'const', their properties or elements can still be modified.",
  aiFeedback:
    "When answering this question, it's important to highlight the key differences: scope (block-scoped for both), reassignment (allowed for 'let', not for 'const'), and mutability of complex data types. Providing examples can help illustrate these concepts more clearly.",
};

export default function QuestionPage() {
  const params = useParams();
  const questionId = params.id;

  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPerfectAnswer, setShowPerfectAnswer] = useState(false);

  const handleSubmit = () => {
    // In a real application, you would send the answer to the backend for evaluation
    setSubmitted(true);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' href='/dashboard'>
          <Brain className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>AI Interview Prep</span>
        </Link>
        <nav className='ml-auto flex items-center gap-4 sm:gap-6'>
          <Button variant='ghost' asChild>
            <Link href='/questions'>Back to Questions</Link>
          </Button>
        </nav>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <Card className='max-w-3xl mx-auto'>
          <CardHeader>
            <CardTitle className='text-2xl'>Question #{questionId}</CardTitle>
            <CardDescription>{questionData.question}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2 mb-4'>
              <p>
                <strong>Difficulty:</strong> {questionData.difficulty}
              </p>
              <p>
                <strong>Category:</strong> {questionData.category}
              </p>
            </div>
            <Textarea
              placeholder='Type your answer here...'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={6}
              className='mb-4'
              disabled={submitted}
            />
            {!submitted && (
              <Button onClick={handleSubmit}>Submit Answer</Button>
            )}
            {submitted && (
              <div className='space-y-4'>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='text-green-500' />
                  <span>Answer submitted successfully!</span>
                </div>
                <Button
                  onClick={() => setShowPerfectAnswer(!showPerfectAnswer)}
                >
                  {showPerfectAnswer
                    ? 'Hide Perfect Answer'
                    : 'Show Perfect Answer'}
                </Button>
              </div>
            )}
          </CardContent>
          {submitted && showPerfectAnswer && (
            <CardFooter className='flex-col items-start'>
              <div className='space-y-4 w-full'>
                <div>
                  <h3 className='font-bold text-lg'>Perfect Answer:</h3>
                  <p>{questionData.perfectAnswer}</p>
                </div>
                <div>
                  <h3 className='font-bold text-lg'>AI Feedback:</h3>
                  <p>{questionData.aiFeedback}</p>
                </div>
              </div>
            </CardFooter>
          )}
        </Card>
      </main>
    </div>
  );
}
