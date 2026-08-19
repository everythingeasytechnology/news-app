import React from "react";
import SectionScreen from "@/src/screens/SectionScreen";
import { allArticles, Article } from "@/src/data/newsData";

const BOOKMARKED_IDS = [
  "break-1",
  "rec-3",
  "tech-2",
  "pol-2",
  "sport-1",
  "movie-1",
];

const bookmarkedArticles: Article[] = BOOKMARKED_IDS.map((id) =>
  allArticles.find((article) => article.id === id),
).filter((article): article is Article => article !== undefined);

export default function BookmarksScreen() {
  return <SectionScreen title="Bookmarks" articles={bookmarkedArticles} />;
}
