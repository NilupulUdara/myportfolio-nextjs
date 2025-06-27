'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-blue-400 transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}