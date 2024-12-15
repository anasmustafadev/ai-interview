'use client';

import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  // Simulating user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='container mx-auto px-4 py-4'>
      <nav className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center space-x-4'>
          <Image src='/ai-logo.png' alt='logo' width={283} height={80}></Image>
        </div>

        {/* Navigation Links */}
        <div className='flex items-center space-x-4'>
          <Button variant='link' className='text-lg'>
            Prepare
          </Button>
          <Button variant='link' className='text-lg'>
            Leaderboard
          </Button>
          <Button variant='link' className='text-lg'>
            About
          </Button>
        </div>

        {/* Login or Avatar */}
        <div className='flex items-center space-x-4'>
          {isLoggedIn ? (
            <Avatar>
              <AvatarImage src='/path-to-avatar.jpg' alt='User Avatar' />
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>
          ) : (
            <Button
              onClick={() => setIsLoggedIn(true)}
              variant='default'
              className='text-lg'
            >
              Login
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}
