'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
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
import apiClient from '@/lib/axios';

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
    similarity: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadQuestion();
  }, []);

  /** Load Question */
  const loadQuestion = async () => {
    setLoading(true);
    setError(null);
    setAnswer('');
    setFeedback(null);
    try {
      const response = await apiClient.get('/get_question');
      setQuestion({ ...response.data, id: response.data.question_number });
    } catch (err) {
      setError(`Failed to load question due to ${err}`);
    } finally {
      setLoading(false);
    }
  };

  /** Submit Answer */
  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await apiClient.post('/get_feedback', {
        question_number: question?.id,
        user_answer: answer,
        question: question?.question,
      });
      setFeedback(response.data);
    } catch (err) {
      setError(`Failed to submit answer due to ${err}`);
    } finally {
      setSubmitting(false);
    }
  };

  /** Quit to Dashboard */
  const handleQuit = () => {
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
              <ReactMarkdown>{feedback.feedback}</ReactMarkdown>
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
