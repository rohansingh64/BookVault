import React from "react";

const Hero = ({ isSearching, query, totalResults, loading }) => {
  if (isSearching) {
    return (
      <div className="py-8 border-b border-surface-700 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="font-display text-3xl tracking-wider text-white">
              SEARCH RESULTS
            </h2>
            {!loading && (
              <p className="text-sm text-gray-400 mt-1 font-body">
                {totalResults > 0
                  ? `Found ${totalResults.toLocaleString()} books for "${query}"`
                  : `No results for "${query}"`}
              </p>
            )}
          </div>
          {!loading && totalResults > 0 && (
            <span className="inline-flex items-center gap-2 text-xs text-brand-500 bg-brand-900/30 border border-brand-700/40 px-3 py-1.5 rounded-full font-body">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              Open Library API
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 mb-8 relative overflow-hidden">
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="absolute -top-6 left-0 right-0 text-center font-display text-[12rem] text-surface-800/60 leading-none select-none pointer-events-none hidden lg:block"
        style={{ letterSpacing: "0.1em" }}
      >
        BOOKS
      </div>

      <div className="relative text-center">
        <p className="text-brand-500 font-body text-sm font-500 tracking-widest uppercase mb-3">
          Powered by Rohan Singh
        </p>
        <h1 className="font-display text-5xl sm:text-7xl tracking-wider text-white mb-4">
          DISCOVER BOOKS
        </h1>
        <p className="text-gray-400 font-body max-w-xl mx-auto text-base">
          Browse thousands of books. Search by title, author, or subject.
          Data from the Open Library — a free, open catalog.
        </p>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500 font-body">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Millions of books
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free & open data
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Trending this week
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;