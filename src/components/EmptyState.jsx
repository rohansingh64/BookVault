import React from "react";

const EmptyState = ({ query }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-6 animate-fade-in">
    <div className="w-20 h-20 rounded-full bg-surface-700 flex items-center justify-center">
      <svg
        className="w-10 h-10 text-surface-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <div className="text-center space-y-2">
      <h3 className="text-lg font-body font-500 text-white">No results found</h3>
      <p className="text-sm text-gray-400">
        No books matched <span className="text-brand-500 font-500">"{query}"</span>. Try a different search term.
      </p>
    </div>
  </div>
);

export default EmptyState;