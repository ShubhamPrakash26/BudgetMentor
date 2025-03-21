"use client"; 

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
const header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex item-center justify-between'>
        <Link href='/'>
          <Image 
            src={"/logo.png"}
            alt="BudgetMentor Logo" height={60} width={200} className='h-12 w-auto object-contain'
          />
        </Link>
        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"} className='flex items-center gap-2'>
              <Button>
                <PenBox size={18} />
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "2.5rem",
                  height: "2.5rem",
                },
              },
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}

export default header;
