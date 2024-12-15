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
import { Brain, Trophy } from 'lucide-react';
import Link from 'next/link';

// Mock data for the leaderboard
const leaderboardData = [
  { id: 1, name: 'Alice Smith', score: 980, questionsAnswered: 150 },
  { id: 2, name: 'Bob Johnson', score: 925, questionsAnswered: 140 },
  { id: 3, name: 'Charlie Brown', score: 890, questionsAnswered: 135 },
  { id: 4, name: 'David Lee', score: 860, questionsAnswered: 130 },
  { id: 5, name: 'Emma Davis', score: 835, questionsAnswered: 125 },
  // ... add more mock data as needed
];

export default function LeaderboardPage() {
  const [timeRange, setTimeRange] = useState('daily');

  // In a real application, you would fetch the leaderboard data based on the selected time range
  const filteredLeaderboard = leaderboardData;

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
            <Link href='/questions'>Questions</Link>
          </Button>
        </nav>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Leaderboard</CardTitle>
            <CardDescription>
              See how you stack up against other users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex justify-between items-center mb-6'>
              <div className='flex items-center'>
                <Trophy className='w-6 h-6 mr-2 text-yellow-500' />
                <h2 className='text-xl font-semibold'>Top Performers</h2>
              </div>
              <Select onValueChange={setTimeRange} defaultValue={timeRange}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select time range' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='daily'>Daily</SelectItem>
                  <SelectItem value='monthly'>Monthly</SelectItem>
                  <SelectItem value='yearly'>Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead className='text-right'>
                    Questions Answered
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeaderboard.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell className='font-medium'>{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.score}</TableCell>
                    <TableCell className='text-right'>
                      {user.questionsAnswered}
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
