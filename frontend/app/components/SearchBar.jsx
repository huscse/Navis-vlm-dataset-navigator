"use client";
import React, { useState } from "react";

export default function SearchBar({
  onSearch,
  placeholder = "Search scenes, objects, or events…",
  defaultValue = "",
  loading = false,
  disabled = false,
  className = "",
}) {
  const [q, setQ] = useState(defaultValue);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = q.trim();
    if (trimmed.length === 0) return;
    onSearch(trimmed);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 w-full ${className}`}
      role="search"
      aria-label="Dataset search"
    >
      <div className="flex-1 relative">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-xl border border-gray-300 focus:border-gray-400 focus:outline-none px-4 py-2 pr-10 shadow-sm"
          placeholder={placeholder}
          aria-label="Search query"
          disabled={disabled || loading}
        />

        {/* clear button */}
        {q && !loading && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="absolute inset-y-0 right-2 my-auto text-gray-500 hover:text-gray-700"
            aria-label="Clear search"
            title="Clear"
          >
            ×
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled || loading}
        className="rounded-xl px-4 py-2 bg-black text-white disabled:opacity-60 hover:opacity-90 transition"
        aria-busy={loading}
      >
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}