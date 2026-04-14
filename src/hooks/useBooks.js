import { useState, useEffect, useCallback, useRef } from "react";
import { fetchTrendingBooks, searchBooks } from "../utils/api";

const useBooks = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState("");
	const [totalResults, setTotalResults] = useState(0);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const debounceRef = useRef(null);

	const loadTrending = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await fetchTrendingBooks();
			setBooks(data);
			setTotalResults(data.length);
			setHasMore(false);
		} catch (err) {
			setError(
				err.message || "Failed to fetch trending books. Please try again.",
			);
		} finally {
			setLoading(false);
		}
	}, []);

	const loadSearch = useCallback(async (searchQuery, searchPage = 1) => {
		setLoading(true);
		setError(null);
		try {
			const result = await searchBooks(searchQuery, searchPage);
			if (searchPage === 1) {
				setBooks(result.books);
			} else {
				setBooks((prev) => [...prev, ...result.books]);
			}
			setTotalResults(result.total);
			setHasMore(
				result.books.length === 40 && result.total > searchPage * 40,
			);
		} catch (err) {
			setError(err.message || "Search failed. Please try again.");
		} finally {
			setLoading(false);
		}
	}, []);

	// Debounced search on query change
	useEffect(() => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		if (!query.trim()) {
			setPage(1);
			setHasMore(false);
			loadTrending();
			return;
		}

		// Don't search if query is less than 3 characters
		if (query.trim().length < 3) {
			setBooks([]);
			setTotalResults(0);
			setError(null);
			setLoading(false);
			return;
		}

		debounceRef.current = setTimeout(() => {
			setPage(1);
			loadSearch(query.trim(), 1);
		}, 500);

		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, [query, loadTrending, loadSearch]);

	const loadMore = useCallback(() => {
		const nextPage = page + 1;
		setPage(nextPage);
		loadSearch(query.trim(), nextPage);
	}, [page, query, loadSearch]);

	const retry = useCallback(() => {
		if (!query.trim()) {
			loadTrending();
		} else {
			loadSearch(query.trim(), 1);
		}
	}, [query, loadTrending, loadSearch]);

	return {
		books,
		loading,
		error,
		query,
		setQuery,
		totalResults,
		hasMore,
		loadMore,
		retry,
		isSearching: !!query.trim(),
	};
};

export default useBooks;
