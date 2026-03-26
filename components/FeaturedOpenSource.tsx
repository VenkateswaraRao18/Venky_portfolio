"use client";

import { useState } from "react";
import {
  Star,
  GitFork,
  ChevronDown,
  ArrowUpRight,
  Github,
} from "lucide-react";
import Link from "next/link";

const repos = [
  {
    name: "docuweave",
    stars: 100,
    forks: 50,
    url: "https://github.com/VenkateswaraRao18/docuweave",
    description:
      "DocuWeave is designed specifically for Retrieval-Augmented Generation (RAG) pipelines. Unlike simple PDF text extractors, it preserves layout structure, builds semantic hierarchy, and produces token-aware chunks optimized for embeddings.",
    tags: ["Python", "Pdf-Parsing", "RAG", "LLM", "Vector Search"],
  },
  {
    name: "Vachan- AI",
    stars: 2128,
    forks: 246,
    url: "https://github.com/yourusername/ai-engineering",
    description: "Designing, training, and evaluating a dialect-aware Telugu foundation model capable of understanding regional slang, conversational nuance, and code-mixed language.",
    tags: ["LLM's", "fine-tuning", "finetuning-llms", "inference"],
  },
  // {
  //   name: "Another Repo",
  //   stars: 1200,
  //   forks: 98,
  //   url: "https://github.com/yourusername/another-repo",
  //   description: "Example additional repository for toggle behavior.",
  //   tags: ["React", "TypeScript", "OpenAI"],
  // },
];

export default function FeaturedOpenSource() {
  const [showMore, setShowMore] = useState(false);

  const visibleRepos = showMore ? repos : repos.slice(0, 2);
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">
          Featured Open Source Work
        </h2>

        <div className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded-full">
          <Star size={14} className="text-yellow-500" />
          {(totalStars / 1000).toFixed(1)}k total stars
        </div>
      </div>

      {/* Repo Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {visibleRepos.map((repo, index) => (
          <div
            key={index}
            className="
              group
              border border-gray-200
              rounded-xl
              p-6
              transition-all duration-300
              hover:shadow-lg
              hover:border-black
              hover:-translate-y-1
            "
          >
            {/* Header Row */}
            <div className="flex justify-between items-start">
              {/* Left: Name + Arrow */}
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  {repo.name}
                </h3>

                <ArrowUpRight
                  size={16}
                  className="
                    opacity-0
                    -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-200
                    text-gray-400
                  "
                />
              </div>

              {/* Right: Stats + GitHub */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  {repo.stars}
                </div>

                <div className="flex items-center gap-1">
                  <GitFork size={14} />
                  {repo.forks}
                </div>

                {/* GitHub icon on hover */}
                <Link
                  href={repo.url}
                  target="_blank"
                  className="
                    opacity-0
                    translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300
                    p-2 rounded-md hover:bg-gray-100
                  "
                >
                  <Github size={16} />
                </Link>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {repo.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {repo.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Toggle */}
      {repos.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              text-sm text-gray-500 px-4 py-2 rounded-md
              hover:bg-gray-100 hover:text-black
              transition flex items-center gap-2
            "
          >
            {showMore ? "Show less repositories" : "Show more repositories"}

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