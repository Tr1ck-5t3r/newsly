import ArticleCard from "./ArticleCard";
import { getPriority } from "../utils/priority.js";

const SkeletonCard = ({ isFeatured }) => (
  <div
    className={`${isFeatured ? "lg:col-span-6 md:col-span-2" : "lg:col-span-2 md:col-span-1"} flex flex-col bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden animate-pulse h-[400px]`}
  >
    <div className="h-48 bg-gray-200 dark:bg-zinc-700 w-full" />
    <div className="p-5 space-y-4">
      <div className="h-3 bg-gray-200 dark:bg-zinc-700 rounded w-1/4" />
      <div className="h-6 bg-gray-200 dark:bg-zinc-700 rounded w-full" />
      <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-5/6" />
      <div className="mt-auto h-8 bg-gray-200 dark:bg-zinc-700 rounded w-full" />
    </div>
  </div>
);

export default function ArticleGrid({ preferences, articles, loading }) {
  const ranked = articles
    ? [...articles]
        .map((a) => ({
          ...a,
          priority: getPriority(a, preferences),
        }))
        .sort((a, b) => b.priority - a.priority)
    : [];

  // Determine if we should show skeletons (either explicit loading or empty articles)
  const showSkeletons = loading || ranked.length === 0;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {showSkeletons ? (
          <>
            {/* One Featured Skeleton */}
            <SkeletonCard isFeatured={true} />
            {/* Five Standard Skeletons */}
            {[...Array(5)].map((_, i) => (
              <SkeletonCard key={i} isFeatured={false} />
            ))}
          </>
        ) : (
          ranked.map((a, i) => <ArticleCard key={a._id || i} article={a} />)
        )}
      </div>
    </div>
  );
}
