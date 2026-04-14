import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookGrid from "./components/BookGrid";
import Footer from "./components/Footer";
import useBooks from "./hooks/useBooks";

const App = () => {
  const {
    books,
    loading,
    error,
    query,
    setQuery,
    totalResults,
    hasMore,
    loadMore,
    retry,
    isSearching,
  } = useBooks();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar query={query} setQuery={setQuery} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Hero
          isSearching={isSearching}
          query={query}
          totalResults={totalResults}
          loading={loading}
        />

        <BookGrid
          books={books}
          loading={loading}
          error={error}
          query={query}
          hasMore={hasMore}
          loadMore={loadMore}
          retry={retry}
          isSearching={isSearching}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;