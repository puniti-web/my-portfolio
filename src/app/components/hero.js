'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['a Developer', 'a Speaker', 'an Innovator', 'a Learner', 'a Techie'];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowName(true), 500);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 overflow-hidden text-center bg-[#84A7BA]"
>
 
  {/* <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${6 + Math.random() * 5}s`,
        }}
      />
    ))}
  </div> */}

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center top-4 gap-8">
    <p className="text-2xl sm:text-3xl">Welcome to my portfolio!</p>

    {/* Animated Heading */}
    <div className="relative h-24">
      <AnimatePresence mode="wait">
        {!showName ? (
          <motion.h1
            key={currentWordIndex}
            className="text-5xl sm:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            I'm  <span className="text-blue-900">{words[currentWordIndex]}</span>
          </motion.h1>
        ) : (
          <motion.h1
            key="name"
            className="text-5xl sm:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-blue-900">Puniti Jodhwani</span>
          </motion.h1>
        )}
      </AnimatePresence>
    </div>

    {/* Description */}
    <p className="text-xl sm:text-2xl max-w-screen">
       Turning tech into experiences. Building with code, leading with clarity.
       <br></br>
        A passionate Web Developer & GenAI enthusiast crafting modern, responsive, and accessible web experiences.     
    </p>
   


    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <a
        href="#contact"
        className="bg-[#BFCBCE] hover:bg-[#BAE4F0] text-blue-900 text-lg sm:text-xl px-6 py-3 rounded-full font-semibold transition shadow"
      >
        Let's Connect
      </a>
      <a
        href="/images/resume.pdf"
        download
        className="bg-[#BFCBCE] hover:bg-[#BAE4F0] text-blue-900 text-lg sm:text-xl px-6 py-3 rounded-full font-semibold transition shadow"
      >
        Download Resume
      </a>
    </div>
  </div>

  {/* Swipe Up Arrow */}
  <a
    href="#about"
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white hover:text-blue-200 transition"
  >
    <svg
      className="w-8 h-8 sm:w-10 sm:h-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</section>

    </>
  );
}
