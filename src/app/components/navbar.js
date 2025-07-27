'use client';
import { useState } from 'react';
import { Allura, Dancing_Script } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-[95%] h-20 fixed top-4 left-1/2 -translate-x-1/2 bg-[#BFCBCE] z-50  rounded-full shadow-lg border-3 px-6 flex items-center justify-between text-blue-900">
        {/* Logo */}
        <div className={`${allura.className} text-5xl`}>PJ</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-3xl font-medium">
          <li><a href="#about" className="hover:text-[#CCD5AE]">About</a></li>
          <li><a href="#projects" className="hover:text-[#CCD5AE]">Projects</a></li>
          <li><a href="#skills" className="hover:text-[#CCD5AE]">Skills</a></li>
          <li><a href="#contact" className="hover:text-[#CCD5AE]">Contact</a></li>
          <li><a href="#certifications" className="hover:text-[#CCD5AE]">Certifications</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden fixed top-[88px] left-1/2 -translate-x-1/2 w-[90%] bg-[#BFCBCE] rounded-xl py-4 px-6 space-y-4 text-center shadow-lg text-blue-900 text-lg font-medium z-40">
          <li><a href="#about" className="block hover:text-[#CCD5AE]">About</a></li>
          <li><a href="#projects" className="block hover:text-[#CCD5AE]">Projects</a></li>
          <li><a href="#skills" className="block hover:text-[#CCD5AE]">Skills</a></li>
          <li><a href="#contact" className="block hover:text-[#CCD5AE]">Contact</a></li>
          <li><a href="#certifications" className="block hover:text-[#CCD5AE]">Certifications</a></li>
        </ul>
      )}
    </>
  );
}
