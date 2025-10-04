"use client";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";  // ✅ correct path for your project
import { searchDatasets } from "../lib/api";

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastQuery, setLastQuery] = useState("");

  async function handleSearch(q) {
    try {
      setLoading(true);
      setError(null);
      setLastQuery(q);
      const data = await searchDatasets(q);
      setResults(data);
    } catch (e) {
      setError(e?.message || "Something went wrong.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-semibold">Search Datasets</h1>

      <SearchBar onSearch={handleSearch} loading={loading} className="mt-2" />

      <section className="min-h-40">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        {!error && !loading && results.length === 0 && lastQuery && (
          <p className="text-gray-600">No results found for “{lastQuery}”.</p>
        )}

        {!error && !lastQuery && (
          <p className="text-gray-500">
            Try something like: <em>“red traffic light with pedestrian”</em> or{" "}
            <em>“cyclist near parked cars”</em>.
          </p>
        )}

        {!error && results.length > 0 && (
          <>
            <p className="text-sm text-gray-500">
              Found {results.length} result{results.length > 1 ? "s" : ""} for “{lastQuery}”
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {results.map((r) => (
                <article key={r.id} className="border rounded-xl p-3 hover:shadow-sm transition bg-white">
                  {r.thumbnailUrl && (
                    <img
                      src={r.thumbnailUrl}
                      alt={r.title}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                  )}
                  <h3 className="font-medium">{r.title}</h3>
                  {r.snippet && (
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{r.snippet}</p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                    {r.dataset && <span>{r.dataset}</span>}
                    {typeof r.timestampSec === "number" && <span>{r.timestampSec}s</span>}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )};