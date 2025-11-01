import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const Router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center w-40 h-16 mt-5">
            <Link href="/">
              <Image
                src="/images/navislogodraft.png"
                alt="Navis Logo"
                className="object-contain cursor-pointer"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 mt-5">
            <Link
              href="/signin"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <button
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors cursor-pointer text-white"
              onClick={() => {
                Router.push('/signup');
              }}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mt-5 cursor-pointer">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors p-2 cursor-pointer"
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top duration-200 cursor-pointer">
            <Link
              href="/signin"
              className="block px-4 py-2.5 text-slate-300 hover:text-white transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>

            <button
              className="w-full px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors cursor-pointer text-white font-medium"
              onClick={() => {
                Router.push('/signup');
                setMobileMenuOpen(false);
              }}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
