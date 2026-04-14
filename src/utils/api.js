const BASE_URL = "https://openlibrary.org";
const COVERS_URL = "https://covers.openlibrary.org/b";

export const getCoverUrl = (coverId, size = "M") => {
  if (!coverId) return null;
  return `${COVERS_URL}/id/${coverId}-${size}.jpg`;
};

// Default homepage — searches popular subjects with full data
export const fetchTrendingBooks = async () => {
  const res = await fetch(
    `${BASE_URL}/search.json?q=subject:fiction&sort=rating&limit=40&fields=key,title,author_name,cover_i,first_publish_year,ratings_average,ratings_count,subject,edition_count`
  );
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return normalizeSearchResults(data.docs || []);
};

// Search books by query
export const searchBooks = async (query, page = 1) => {
  const encoded = encodeURIComponent(query.trim());
  const res = await fetch(
    `${BASE_URL}/search.json?q=${encoded}&page=${page}&limit=40&fields=key,title,author_name,cover_i,first_publish_year,ratings_average,ratings_count,subject,edition_count`
  );
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return {
    books: normalizeSearchResults(data.docs || []),
    total: data.numFound || 0,
    page,
  };
};

const normalizeSearchResults = (docs) =>
  docs.map((doc) => ({
    key: doc.key,
    title: doc.title || "Untitled",
    authors: doc.author_name
      ? doc.author_name.slice(0, 2).join(", ")
      : "Unknown Author",
    coverId: doc.cover_i || null,
    year: doc.first_publish_year || null,
    rating: doc.ratings_average ? +doc.ratings_average.toFixed(1) : null,
    ratingsCount: doc.ratings_count || 0,
    subjects: doc.subject ? doc.subject.slice(0, 3) : [],
    editionCount: doc.edition_count || null,
  }));