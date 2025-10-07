import React from 'react';
import SearchBar from './SearchBar';

export default function HeroSection({ onSearch, loading }) {
  return (
    <header className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        VLM-Driven{' '}
        <span className="text-slate-300 font-extrabold">Open Dataset</span>{' '}
        <br />
        Navigator
      </h1>

      <p className="mt-8 mb-19 text-slate-300 text-base sm:text-xl md:text-2xl">
        Search driving datasets with natural language
      </p>

      <div className="mt-8">
        <SearchBar
          onSearch={onSearch}
          placeholder="Search scenes, objects, or events…"
          loading={loading}
          className="max-w-3xl mx-auto"
        />
      </div>
    </header>
  );
}
