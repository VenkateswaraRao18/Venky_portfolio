"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const news = [
  {
    title: "Omniparse Hits 6500 Stars on GitHub",
    date: "April 2025",
    description:
      "Omniparse, our open-source document parsing library, has reached 6500 stars on GitHub, making it one of the most popular libraries for document processing.",
    tags: ["Open Source", "GitHub", "Milestone"],
    linkLabel: "View Repository",
  },
  {
    title: "Awarded LLaMA Impact Grant by Meta AI",
    date: "April 2025",
    description:
      "Cognitivelab was selected as one of the recipients of Meta's LLaMA Impact Grant for our work on extending large language models to under-resourced Indic languages.",
    tags: ["Award", "Grant", "Meta AI"],
    linkLabel: "Announcement",
  },
  {
    title: "Example Additional Achievement",
    date: "March 2025",
    description:
      "Example extra news item for toggle behavior demonstration.",
    tags: ["Research", "Recognition"],
    linkLabel: "Read Article",
  },
];

export default function AchievementsNews() {
  const [showMore, setShowMore] = useState(false);

  const visibleNews = showMore ? news : news.slice(0, 2);

  return (
    <div className="mt-24">
      {/* Section Header */}
      <h2 className="text-xl font-semibold">
        Achievements & News
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-8">
        Latest updates, recognitions, and highlights
      </p>

      <div className="space-y-6">
        {visibleNews.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            {/* Header Row */}
            <div className="flex justify-between items-start gap-6">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                {item.date}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-black cursor-pointer transition">
                <ExternalLink size={14} />
                {item.linkLabel}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle */}
      {news.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-gray-500 px-4 py-2 rounded-md 
                       hover:bg-gray-100 hover:text-black 
                       transition flex items-center gap-2"
          >
            {showMore
              ? "Show less updates"
              : "Show more updates"}

            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}