"use client";

import { useState } from "react";

const skillsData = {
  "AI/ML/DL": [
    "PyTorch",
    "Transformers",
    "PEFT",
    "Diffusers",
    "Hugging Face",
    "LangChain",
  ],
  "Python Libs": [
    "Pandas",
    "NumPy",
    "Scipy",
    "NLTK",
    "BeautifulSoup",
    "OpenCV",
  ],
  Web: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind",
    "Flask",
  ],
  Cloud: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Cloudflare",
  ],
  "Big Data": [
    "Apache Spark",
    "Hadoop",
    "Kafka",
    "Databricks",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Supabase",
  ],
  Languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C/C++",
    "SQL",
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const categories = ["All Skills", ...Object.keys(skillsData)];

  const allSkills = Object.values(skillsData).flat();

  const displayedSkills =
    activeCategory === "All Skills"
      ? allSkills
      : skillsData[activeCategory as keyof typeof skillsData];

  return (
    <div className="mt-24">
      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-8">
        Skills
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => {
          const count =
            category === "All Skills"
              ? allSkills.length
              : skillsData[category as keyof typeof skillsData]?.length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition flex items-center gap-2 cursor-pointer
                ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
              <span className="text-xs opacity-70">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Container */}
      <div className="border border-gray-200 rounded-xl p-6">
        <div className="flex flex-wrap gap-3">
          {displayedSkills.map((skill, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500 mt-6 text-center">
          Showing {displayedSkills.length} total skills
        </div>
      </div>
    </div>
  );
}