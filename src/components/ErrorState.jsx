import React from "react";

const ErrorState = ({ message, onRetry }) => {
  const isShortQuery = message?.includes("422");

  if (isShortQuery) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-surface-700 flex items-center justify-center">
          <svg className="w-10 h-10 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-body font-500 text-white">Query too short</h3>
          <p className="text-sm text-gray-400">Please type at least 3 characters to search.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-24 gap-6 animate-fade-in">
      <div className="w-20 h-20 rounded-full bg-red-900/30 border border-red-700/50 flex items-center justify-center">
        <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-body font-500 text-white">Something went wrong</h3>
        <p className="text-sm text-gray-400 max-w-md">{message}</p>
      </div>
      {onRetry && (
        <button onClick={onRetry}
          className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-500 px-6 py-2.5 rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState;