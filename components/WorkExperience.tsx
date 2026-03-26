"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  //   {
  //   company: "University of South Florida",
  //   role: "Research Assistant",
  //   date: "Feb 2026 – Present",
  //   type: "On Site",
  //   description:
  //     "Built ML pipelines processing 500K+ records. Improved retention by 17% and F1-score by 26%.",
  //   logo: "/logos/usf.jpg",
  //   highlight: true,
  // },
  {
    company: "Vegrade Innovations",
    role: "AI/ML Developer Intern",
    date: "Jan 2024 – Dec 2024",
    type: "On Site",
    description:
      "Built ML pipelines processing 500K+ records. Improved retention by 17% and F1-score by 26%.",
    logo: "/logos/vegrade.jpg",
    highlight: false,
  },
  {
    company: "App Genesis",
    role: "Junior ML Engineer Intern",
    date: "Aug 2022 – Dec 2023",
    type: "On Site",
    description:
      "Developed NLP models and reduced inference latency by 38%.",
    logo: "/logos/appgnesis.jpg",
    highlight: false,
  },
  {
    company: "APSSDC",
    role: "Data Science Intern",
    date: "2022",
    type: "On Site",
    description:
      "Worked on ML classification models and statistical analysis.",
    logo: "/logos/apssdc.jpg",
    highlight: false,
  },
];

export default function WorkExperience() {
  const [showMore, setShowMore] = useState(false);

  const visibleExperiences = showMore
    ? experiences
    : experiences.slice(0, 2);

  return (
    <div className="mt-10" id="work">
      <h2 className="text-xl font-semibold mb-12">
        Work Experience
      </h2>

      <div className="relative border-l border-gray-200 ml-8" style={{cursor:'pointer'}}>

        <AnimatePresence>
          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 ml-8 relative"
            >
              {/* Circle */}
              <div className="absolute -left-14 top-0 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Card */}
              <div
                className={`rounded-xl p-6 transition relative
                ${exp.highlight
                  ? "border-2 border-purple-400 shadow-md"
                  : "border border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {exp.role}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {exp.date}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-300 rounded-md">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      {experiences.length > 2 && (
      <div className="flex justify-center mt-8">
  <button
  style={{cursor:'pointer'}}
    onClick={() => setShowMore(!showMore)}
    className="group text-sm text-gray-500 px-4 py-2 rounded-md 
               hover:bg-gray-100 hover:text-black 
               transition duration-200 flex items-center justify-center gap-2"
  >
    <span className="leading-none">
      {showMore ? "Show less experiences" : "Show more experiences"}
    </span>

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