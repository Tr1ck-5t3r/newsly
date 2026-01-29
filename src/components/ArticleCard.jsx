export default function ArticleCard({ article }) {
  console.log("Rendering ArticleCard with article:", article);
  // Map priority to grid spans
  // Priority 3+ (Featured): full width (6 cols)
  // Priority 2 (Standard): half width (3 cols)
  // Priority 1/0 (Small): third width (2 cols)
  const spanClass =
    article.priority >= 3
      ? "lg:col-span-6 md:col-span-2"
      : article.priority === 2
        ? "lg:col-span-3 md:col-span-1"
        : "lg:col-span-2 md:col-span-1";

  return (
    <div
      className={`${spanClass} flex flex-col group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300`}
    >
      {/* Image Container */}
      {article.image && (
        <div className="overflow-hidden h-48">
          <img
            src={article.image == "missing" ? "/not-found.png" : article.image}
            alt={article.headline}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          {article.category && (
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              {article.category}
            </span>
          )}
          {article.priority >= 3 && (
            <span className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
              FEATURED
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {article.headline}
        </h2>

        {article.preview && (
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
            {article.preview}
          </p>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-700 mt-4">
          <span className="text-xs font-medium text-zinc-400">
            {article.date
              ? new Date(article.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Recently"}
          </span>
          <a
            href={article.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 text-sm font-bold hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
