'use client';

import { useState, useEffect } from 'react';
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

// Mock API call
const fetchQuestion = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        question:
          "What is the difference between 'let' and 'const' in JavaScript?",
        difficulty: 'Medium',
      });
    }, 1500);
  });
};

// Mock API call for submitting answer
const submitAnswer = (answer: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        correct: Math.random() > 0.5, // Randomly determine if the answer is correct
        feedback:
          "Your answer demonstrates a good understanding of 'let' and 'const'. However, you could improve by mentioning that 'const' doesn't make the value immutable for objects and arrays, only the binding is immutable.",
      });
    }, 1500);
  });
};

export default function PracticePage() {
  const [question, setQuestion] = useState<{
    id: number;
    question: string;
    difficulty: string;
  } | null>(null);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    feedback: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadQuestion();
  }, []);

  const loadQuestion = async () => {
    setLoading(true);
    setError(null);
    try {
      const questionData = (await fetchQuestion()) as {
        id: number;
        question: string;
        difficulty: string;
      };
      setQuestion(questionData);
    } catch (err) {
      setError('Failed to load question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const result = (await submitAnswer(answer)) as {
        correct: boolean;
        feedback: string;
      };
      setFeedback(result);
    } catch (err) {
      setError('Failed to submit answer. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuit = () => {
    // In a real application, you might want to save progress or update stats here
    window.location.href = '/dashboard';
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' href='/dashboard'>
          <Brain className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>AI Interview Prep</span>
        </Link>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <Card className='max-w-2xl mx-auto'>
          <CardHeader>
            <CardTitle>Practice Question</CardTitle>
            <CardDescription>
              Answer the question below to the best of your ability.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className='space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-3/4' />
              </div>
            ) : error ? (
              <Alert variant='destructive'>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : question ? (
              <div className='space-y-4'>
                <div>
                  <h3 className='font-medium'>Question:</h3>
                  <p>{question.question}</p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Difficulty: {question.difficulty}
                  </p>
                </div>
                <Textarea
                  placeholder='Type your answer here...'
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={6}
                />
              </div>
            ) : null}
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline' onClick={handleQuit}>
              Quit
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading || submitting || !answer}
            >
              {submitting ? 'Submitting...' : 'Submit Answer'}
            </Button>
          </CardFooter>
        </Card>
        {feedback && (
          <Card className='max-w-2xl mx-auto mt-6'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                {feedback.correct ? (
                  <>
                    <CheckCircle className='text-green-500 mr-2' /> Correct
                    Answer
                  </>
                ) : (
                  <>
                    <XCircle className='text-red-500 mr-2' /> Incorrect Answer
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feedback.feedback}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={loadQuestion}>Next Question</Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
}
