'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

// Mock data for the questions
const questionsData = [
  {
    id: 1,
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    difficulty: 'Easy',
    category: 'JavaScript',
    completed: true,
  },
  {
    id: 2,
    question: 'Explain the concept of closures in JavaScript.',
    difficulty: 'Medium',
    category: 'JavaScript',
    completed: false,
  },
  {
    id: 3,
    question: 'What are the principles of Object-Oriented Programming?',
    difficulty: 'Medium',
    category: 'General',
    completed: true,
  },
  {
    id: 4,
    question: 'Describe the differences between REST and GraphQL.',
    difficulty: 'Hard',
    category: 'Web Development',
    completed: false,
  },
  {
    id: 5,
    question: 'What is the time complexity of quicksort?',
    difficulty: 'Hard',
    category: 'Algorithms',
    completed: false,
  },
];

export default function QuestionsPage() {
  const [difficulty, setDifficulty] = useState('all');
  const [category, setCategory] = useState('all');

  // Filter questions based on selected difficulty and category
  const filteredQuestions = questionsData.filter(
    (q) =>
      (difficulty === 'all' || q.difficulty === difficulty) &&
      (category === 'all' || q.category === category)
  );

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' href='/dashboard'>
          <Brain className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>AI Interview Prep</span>
        </Link>
        <nav className='ml-auto flex items-center gap-4 sm:gap-6'>
          <Button variant='ghost' asChild>
            <Link href='/practice'>Practice</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href='/leaderboard'>Leaderboard</Link>
          </Button>
        </nav>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Interview Questions</CardTitle>
            <CardDescription>
              Browse and practice interview questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex justify-between items-center mb-6'>
              <Select onValueChange={setDifficulty} defaultValue={difficulty}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select difficulty' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Difficulties</SelectItem>
                  <SelectItem value='Easy'>Easy</SelectItem>
                  <SelectItem value='Medium'>Medium</SelectItem>
                  <SelectItem value='Hard'>Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setCategory} defaultValue={category}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Categories</SelectItem>
                  <SelectItem value='JavaScript'>JavaScript</SelectItem>
                  <SelectItem value='General'>General</SelectItem>
                  <SelectItem value='Web Development'>
                    Web Development
                  </SelectItem>
                  <SelectItem value='Algorithms'>Algorithms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[50px]'>#</TableHead>
                  <TableHead className='w-[50px]'>Status</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className='text-right'>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question, index) => (
                  <TableRow key={question.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {question.completed ? (
                        <CheckCircle className='text-green-500' />
                      ) : (
                        <XCircle className='text-red-500' />
                      )}
                    </TableCell>
                    <TableCell className='font-medium'>
                      {question.question}
                    </TableCell>
                    <TableCell>{question.difficulty}</TableCell>
                    <TableCell>{question.category}</TableCell>
                    <TableCell className='text-right'>
                      <Button variant='outline' asChild>
                        <Link href={`/questions/${question.id}`}>Attempt</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
