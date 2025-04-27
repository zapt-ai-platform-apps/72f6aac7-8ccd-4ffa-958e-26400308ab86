import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Kontak Pikiran</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 hover:bg-indigo-500 cursor-pointer"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <Navigation />
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-700 pb-2">
            <Navigation mobile closeMenu={() => setIsMenuOpen(false)} />
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Kontak Pikiran - Aplikasi Subjective Communication</p>
          <p className="mt-1">
            <span>Gunakan teknik ini secara bertanggung jawab dengan mempertimbangkan aspek etika.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;