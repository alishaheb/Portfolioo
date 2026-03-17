import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Seyed Ali Shahebrahimi. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
