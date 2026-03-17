import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white bg-background text-foreground relative">
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <footer className="py-12 px-6 border-t border-card-border text-center text-gray-500 text-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Seyed Ali Shahebrahimi. Built with passion for ML & Data Science.</p>
        </div>
      </footer>
    </div>
  );
}
