import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { ArrowRight, Brain, Target, Users, Check } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <Brain className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>AI Interview Prep</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#features'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#pricing'
          >
            Pricing
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#about'
          >
            About
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Ace Your Next Interview with AI
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Prepare smarter, not harder. Our AI-powered platform provides
                  personalized interview practice and feedback.
                </p>
              </div>
              <div className='space-x-4'>
                <Button asChild>
                  <Link href='/signup'>Get Started</Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='/demo'>Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Key Features
            </h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Practice</CardTitle>
                  <Target className='w-8 h-8 mb-2' />
                </CardHeader>
                <CardContent>
                  <p>
                    Engage in realistic interview simulations with our advanced
                    AI technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Feedback</CardTitle>
                  <Users className='w-8 h-8 mb-2' />
                </CardHeader>
                <CardContent>
                  <p>
                    Receive detailed, constructive feedback to improve your
                    interview skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Industry-Specific Questions</CardTitle>
                  <Brain className='w-8 h-8 mb-2' />
                </CardHeader>
                <CardContent>
                  <p>
                    Practice with questions tailored to your industry and job
                    role.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id='pricing' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Choose Your Plan
            </h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    For individuals just starting out
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-4xl font-bold'>$0</p>
                  <p className='text-sm text-gray-500'>per month</p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />5
                      practice interviews per month
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Basic AI feedback
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Access to common interview questions
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full' asChild>
                    <Link href='/signup'>Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For serious job seekers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-4xl font-bold'>$10</p>
                  <p className='text-sm text-gray-500'>per month</p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Unlimited practice interviews
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Advanced AI feedback and coaching
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Industry-specific question sets
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Performance analytics
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full' asChild>
                    <Link href='/signup-pro'>Upgrade to Pro</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For companies and teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-4xl font-bold'>$100</p>
                  <p className='text-sm text-gray-500'>per month</p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      All Pro features
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Custom question sets
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Team management dashboard
                    </li>
                    <li className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-green-500' />
                      Dedicated support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className='w-full' asChild>
                    <Link href='/contact-sales'>Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id='about'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              About AI Interview Prep
            </h2>
            <div className='grid gap-6 items-center'>
              <div className='flex flex-col justify-center space-y-4'>
                <p className='text-xl text-gray-500 dark:text-gray-400'>
                  AI Interview Prep was founded with a simple mission: to
                  revolutionize the way people prepare for job interviews. Our
                  team of AI experts and industry professionals have developed a
                  cutting-edge platform that provides personalized, AI-powered
                  interview practice and feedback.
                </p>
                <p className='text-xl text-gray-500 dark:text-gray-400'>
                  We believe that everyone deserves the opportunity to showcase
                  their best selves in interviews. Our platform adapts to your
                  skill level, industry, and specific job roles, ensuring that
                  you&apos;re always practicing with the most relevant and
                  challenging questions.
                </p>
                <p className='text-xl text-gray-500 dark:text-gray-400'>
                  Join thousands of successful job seekers who have used AI
                  Interview Prep to land their dream jobs. Whether you&apos;re a
                  recent graduate, a career changer, or a seasoned professional,
                  we&apos;re here to help you ace your next interview.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='cta' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to Ace Your Interview?
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Join thousands of job seekers who have improved their
                  interview skills with our AI-powered platform.
                </p>
              </div>
              <Button asChild>
                <Link href='/signup'>
                  Start Practicing Now <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </section>
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
