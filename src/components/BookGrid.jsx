import React from "react";
import BookCard from "./BookCard";
import SkeletonGrid from "./SkeletonGrid";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

const BookGrid = ({ books, loading, error, query, hasMore, loadMore, retry, isSearching }) => {
  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  if (loading && books.length === 0) {
    return <SkeletonGrid count={24} />;
  }

  if (!loading && books.length === 0 && isSearching) {
    return <EmptyState query={query} />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
        {/* Append skeleton cards at end during load more */}
        {loading &&
          books.length > 0 &&
          [...Array(6)].map((_, i) => (
            <div key={`skel-${i}`} className="bg-surface-800 rounded-xl overflow-hidden border border-surface-700 animate-pulse">
              <div className="aspect-[2/3] bg-surface-700" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-surface-700 rounded w-full" />
                <div className="h-3 bg-surface-700 rounded w-2/3" />
              </div>
            </div>
          ))}
      </div>

      {/* Load more button */}
      {hasMore && !loading && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="bg-surface-700 hover:bg-surface-600 border border-surface-600 hover:border-brand-500 text-white text-sm font-body font-500 px-8 py-3 rounded-lg transition-all"
          >
            Load more books
          </button>
        </div>
      )}
    </div>
  );
};

export default BookGrid;