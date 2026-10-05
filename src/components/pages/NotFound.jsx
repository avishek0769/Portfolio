import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SEO from '../common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404: Page Not Found — Avishek Adhikary"
        description="The page you are looking for does not exist or has been moved."
        noindex={true}
      />
      <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-black text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <span>Error 404</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
          Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-600/25"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
      </main>
    </>
  );
}
