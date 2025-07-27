'use client';
import { useEffect, useState } from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Home from './components/home';

export default function LandingPage() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white min-h-screen">
      <Hero />
      {showNavbar && <Navbar />}
      <Home />
    </main>
  );
}
