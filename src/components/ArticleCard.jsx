export default function ArticleCard({ article }) {
  const size =
    article.priority >= 3
      ? "flex-[1_1_100%]"
      : article.priority === 2
        ? "flex-[1_1_48%]"
        : "flex-[1_1_30%]";

  return (
    <div
      className={`${size} bg-white rounded-lg border p-4 hover:shadow-md transition`}
    >
      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {article.title}
      </a>

      <div className="mt-2 text-sm text-gray-500">{article.source}</div>
    </div>
  );
}
