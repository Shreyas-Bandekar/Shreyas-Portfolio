import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import StarBg from '../components/StarBg';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Toggle */}
        <ThemeToggle />

        {/* Background Effect */}
        <StarBg />

        {/* Navbar */}

        {/* Main */}

        {/* Footer */}
    </div>
  )
}
