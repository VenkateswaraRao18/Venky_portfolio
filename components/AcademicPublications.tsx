"use client";

import { useState } from "react";
import { ChevronDown, Bookmark, Globe, FileText } from "lucide-react";

const publications = [
  {
    title: "Phishing Detection: A Predictive Model For Cyber Security",
    venue: "IEEE",
    year: "2023",
    status: "Published",
    conference: "IEEE",
    description:
      "A predictive model designed to identify and prevent phishing attacks using machine learning techniques for enhanced cybersecurity.",
    tags: ["Cybersecurity", "Phishing Detection", "Machine Learning"],
  },
  {
    title: "Secure Document Storage System Using Web 3",
    venue: "Scopus Indexed",
    year: "2024",
    status: "Published",
    conference: "Scopus",
    description:
      "A blockchain-based document storage system leveraging Web3 technologies to ensure secure, decentralized, and tamper-proof data management.",
    tags: ["Web3", "Blockchain", "Security", "Document Storage"],
  },
  {
    title: "Automated Certificate Generation and Distribution Using Flask",
    venue: "IJIRT",
    year: "2024",
    status: "Completed",
    conference: "IJIRT",
    description:
      "A web-based system built with Flask to automate certificate creation and distribution, improving efficiency and reducing manual effort.",
    tags: ["Flask", "Automation", "Web Development"],
  },
];
export default function AcademicPublications() {
  const [showMore, setShowMore] = useState(false);

  const visiblePubs = showMore ? publications : publications.slice(0, 2);

  return (
    <div className="mt-24">
      {/* Section Header */}
      <h2 className="text-xl font-semibold">
        Academic Publications
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-8">
        Research papers and academic contributions
      </p>

      <div className="space-y-6">
        {visiblePubs.map((pub, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            {/* Header Row */}
            <div className="flex justify-between items-start gap-6">
              <div>
                <h3 className="text-lg font-semibold leading-snug">
                  {pub.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {pub.venue} • {pub.year} •{" "}
                  <span className="text-gray-900 font-medium">
                    {pub.status}
                  </span>
                </p>
              </div>

              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                {pub.conference}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {pub.description}
            </p>

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icons */}
              <div className="flex gap-4 text-gray-500">
                <Bookmark size={16} />
                <Globe size={16} />
                <FileText size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {publications.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-gray-500 px-4 py-2 rounded-md 
                       hover:bg-gray-100 hover:text-black 
                       transition flex items-center gap-2"
          >
            {showMore
              ? "Show less publications"
              : "Show more publications"}

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