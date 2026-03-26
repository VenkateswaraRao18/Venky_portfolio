"use client";

const education = [
  {
    university: "University Of South Florida",
    degree: "Master's in  Artificial Intelligence and Business Analytics",
    duration: "2025-2026",
  },
];

export default function Education() {
  return (
    <div className="mt-24">
      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-8">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">
                {edu.university}
              </h3>

              <span className="text-sm text-gray-500">
                {edu.duration}
              </span>
            </div>

            {/* Degree */}
            <p className="mt-3 text-sm text-gray-600">
              {edu.degree}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}