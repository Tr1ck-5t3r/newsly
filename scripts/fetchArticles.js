import Parser from "rss-parser";
import fs from "fs";

const parser = new Parser();

const FEEDS = [
  "https://techcrunch.com/feed/",
  "https://news.ycombinator.com/rss",
  "https://dev.to/feed",
];

const KEYWORDS = ["ai", "cloud", "security", "startup", "open source"];

async function run() {
  let articles = [];

  for (const url of FEEDS) {
    const feed = await parser.parseURL(url);

    feed.items.forEach((item) => {
      if (
        item.title &&
        KEYWORDS.some((k) => item.title.toLowerCase().includes(k))
      ) {
        articles.push({
          title: item.title,
          link: item.link,
          source: feed.title,
          published: item.pubDate || "",
        });
      }
    });
  }

  articles.sort((a, b) => new Date(b.published) - new Date(a.published));

  fs.writeFileSync("public/articles.json", JSON.stringify(articles, null, 2));

  console.log(`Saved ${articles.length} articles`);
}

run();
