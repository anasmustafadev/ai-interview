'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Award,
  BarChart,
  Brain,
  CheckCircle,
  Trophy,
  User,
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  // This would typically come from an API or state management
  const userStats = {
    score: 750,
    rank: 42,
    totalSolved: 75,
    easySolved: 30,
    mediumSolved: 35,
    hardSolved: 10,
  };

  const leaderboard = [
    { name: 'Alice Smith', score: 980 },
    { name: 'Bob Johnson', score: 925 },
    { name: 'Charlie Brown', score: 890 },
    { name: 'David Lee', score: 860 },
    { name: 'Emma Davis', score: 835 },
  ];

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
          <Button variant='ghost' asChild>
            <Link href='/questions'>Questions</Link>
          </Button>
          <Button variant='ghost'>
            <User className='h-4 w-4 mr-2' />
            Profile
          </Button>
        </nav>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold mb-6'>Welcome back, User!</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Total Score</CardTitle>
              <Trophy className='w-4 h-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{userStats.score}</div>
              <p className='text-xs text-muted-foreground'>
                Rank: #{userStats.rank}
              </p>
              <Progress className='mt-2' value={userStats.score / 10} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Problems Solved
              </CardTitle>
              <CheckCircle className='w-4 h-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{userStats.totalSolved}</div>
              <div className='flex justify-between mt-2 text-sm'>
                <span>Easy: {userStats.easySolved}</span>
                <span>Medium: {userStats.mediumSolved}</span>
                <span>Hard: {userStats.hardSolved}</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Practice</CardTitle>
              <Brain className='w-4 h-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <Button className='w-full' asChild>
                <Link href='/practice'>Start Practice Session</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className='mt-8 grid gap-6 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
              <CardDescription>
                Your problem-solving progress by difficulty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Easy</span>
                    <span className='text-sm text-muted-foreground'>
                      {userStats.easySolved}/50
                    </span>
                  </div>
                  <Progress value={userStats.easySolved * 2} className='mt-2' />
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Medium</span>
                    <span className='text-sm text-muted-foreground'>
                      {userStats.mediumSolved}/50
                    </span>
                  </div>
                  <Progress
                    value={userStats.mediumSolved * 2}
                    className='mt-2'
                  />
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>Hard</span>
                    <span className='text-sm text-muted-foreground'>
                      {userStats.hardSolved}/50
                    </span>
                  </div>
                  <Progress value={userStats.hardSolved * 2} className='mt-2' />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>Top 5 performers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center space-x-2'>
                      <Award className='w-4 h-4 text-muted-foreground' />
                      <span>{user.name}</span>
                    </div>
                    <span className='font-medium'>{user.score}</span>
                  </div>
                ))}
              </div>
              <Button variant='outline' className='w-full mt-4' asChild>
                <Link href='/leaderboard'>View Full Leaderboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2023 AI Interview Prep. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
