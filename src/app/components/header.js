'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 pl-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Optimum Hockey Academy"
              width={100}
              height={50}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 ">
            <Link className='hover:text-red-700' href="/about">About</Link>
            <Link className='hover:text-red-700' href="/calendar">Calendar</Link>
            <Link className='hover:text-red-700' href="/program">Program</Link>
            <Link className='hover:text-red-700' href="/alumni">Alumni</Link>
            <Link className='hover:text-red-700' href="/FAQ">FAQ</Link>
            <Button variant="default" className="bg-[#BA0A0A] hover:bg-red-700 text-white rounded-full hover:shadow-lg">
              Contact Us
            </Button>
          </div>

          <button
            className="md:hidden text-zinc-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/calendar" onClick={() => setIsOpen(false)}>Calendar</Link>
              <Link href="/program" onClick={() => setIsOpen(false)}>Program</Link>
              <Link href="/alumni" onClick={() => setIsOpen(false)}>Alumni</Link>
              <Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
              <div className="pt-2 px-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  )
}
