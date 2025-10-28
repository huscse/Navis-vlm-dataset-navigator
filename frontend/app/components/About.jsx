'use client';
import React from 'react';
import Link from 'next/link';
import Team from './Team';
import CardStack from './CardStack';

const About = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#111827_0%,#000000_45%,#1F2937_95%)] text-white">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/land">
          <button className="group relative inline-flex items-center gap-1 px-5 py-2.5 overflow-hidden rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-slate-900/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-slate-600/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-slate-600/20 group-hover:to-gray-800/20 transition-all duration-500"></div>
            <svg
              className="relative w-5 h-5 transform group-hover:-translate-x-1.5 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="relative font-semibold text-sm tracking-wide">
              BACK
            </span>
          </button>
        </Link>
      </div>

      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About the Project
            </h2>
          </div>

          {/* Card Stack Component */}
          <CardStack />

          {/* Team Section */}
          <div className="mt-17">
            <Team />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
