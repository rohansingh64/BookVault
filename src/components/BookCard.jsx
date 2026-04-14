import React, { useState } from "react";
import { getCoverUrl } from "../utils/api";

const StarRating = ({ rating }) => {
  if (!rating) return null;
  const filled = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= filled ? "text-brand-500" : "text-surface-500"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

const BookCard = ({ book }) => {
  const [imgError, setImgError] = useState(false);
  const coverUrl = getCoverUrl(book.coverId, "M");

  return (
    <article className="group bg-surface-800 rounded-xl overflow-hidden border border-surface-700 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/30 animate-fade-in flex flex-col">
      {/* Cover Image */}
      <div className="relative aspect-[2/3] bg-surface-700 overflow-hidden flex-shrink-0">
        {coverUrl && !imgError ? (
          <img
            src={coverUrl}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-surface-700 to-surface-600">
            <svg
              className="w-12 h-12 text-surface-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-xs text-center text-surface-500 font-body line-clamp-3">
              {book.title}
            </span>
          </div>
        )}

        {/* Year badge */}
        {book.year && (
          <div className="absolute top-2 left-2 bg-surface-900/80 backdrop-blur-sm text-xs text-gray-300 px-2 py-0.5 rounded font-body">
            {book.year}
          </div>
        )}

        {/* Edition badge */}
        {book.editionCount && (
          <div className="absolute top-2 right-2 bg-brand-500/90 backdrop-blur-sm text-xs text-white px-2 py-0.5 rounded font-body">
            {book.editionCount} eds
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-body font-600 text-sm text-white leading-snug line-clamp-2 group-hover:text-brand-100 transition-colors">
          {book.title}
        </h3>

        <p className="text-xs text-gray-400 line-clamp-1 font-body">
          {book.authors}
        </p>

        {/* Rating */}
        <div className="mt-auto pt-2 border-t border-surface-700 flex items-center justify-between gap-2">
          {book.rating ? (
            <StarRating rating={book.rating} />
          ) : (
            <span className="text-xs text-surface-500">No rating</span>
          )}

          {book.ratingsCount > 0 && (
            <span className="text-xs text-surface-500">
              {book.ratingsCount.toLocaleString()} ratings
            </span>
          )}
        </div>

        {/* Subjects */}
        {book.subjects && book.subjects.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {book.subjects.slice(0, 2).map((subject, i) => (
              <span
                key={i}
                className="text-xs bg-surface-700 text-gray-400 px-2 py-0.5 rounded-full truncate max-w-[120px]"
              >
                {subject}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BookCard;