import React from "react";

const SkeletonCard = () => (
  <div className="bg-surface-800 rounded-xl overflow-hidden border border-surface-700 flex flex-col">
    {/* Cover skeleton */}
    <div className="aspect-[2/3] shimmer" />

    {/* Body skeleton */}
    <div className="p-4 flex flex-col gap-3">
      {/* Title */}
      <div className="space-y-2">
        <div className="h-3.5 shimmer rounded w-full" />
        <div className="h-3.5 shimmer rounded w-3/4" />
      </div>

      {/* Author */}
      <div className="h-3 shimmer rounded w-1/2" />

      {/* Rating row */}
      <div className="pt-2 border-t border-surface-700 flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-3 h-3 shimmer rounded" />
        ))}
      </div>

      {/* Tags */}
      <div className="flex gap-1">
        <div className="h-5 shimmer rounded-full w-16" />
        <div className="h-5 shimmer rounded-full w-20" />
      </div>
    </div>
  </div>
);

const SkeletonGrid = ({ count = 20 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export { SkeletonCard, SkeletonGrid };
export default SkeletonGrid;