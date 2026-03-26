"use client";

import Link from "next/link";
import { Github, Eye } from "lucide-react";

const projects = [

  {
    title: "Vachan AI",
    description:
      "Dialect-aware Telugu foundation model designed to understand regional slang and conversational nuance.",
    tags: ["PyTorch", "Transformers", "LoRA", "Distributed Training"],
    github: "https://github.com/yourusername/vachan-ai",
    live: "",
    isActive: true,
  },
  {
    title: "docuweave",
    description:
      "DocuWeave is a Python PDF parser for RAG that preserves layout and creates semantic, token-aware chunks for LLM embeddings..",
    tags: ["Python", "Pdf-Parsing", "RAG", "LLM", "Vector Search"],
    github: "https://github.com/venkateswararao18/docuweave",
    isActive: false,
  },
  {
    title: "Financial Report RAG System",
    description:
      "An enterprise-grade Retrieval-Augmented Generation system built to analyze financial reports & answer analytical business questions using hybrid retrieval and LLM's.",
    tags: ["spaCy", "RAG", "Sentence-Transformers", "FAISS"],
    github: "https://github.com/VenkateswaraRao18/financial-rag-system",
    live: "",
  },
  {
    title: "AI Data Analysis Agent",
    description:
      "An intelligent data analysis agent powered by LLaMA and Gemini AI that processes CSV datasets, performs automated exploratory data analysis, generates insights, visualizations, and produces a comprehensive final report document with minimal user input.",
    tags: [
      "LLaMA",
      "Gemini AI",
      "Python",
      "Pandas",
      "Data Analysis",
      "Automation",
      "LLMs"
    ],
    github: "https://github.com/yourusername/ai-data-analysis-agent",
  },
{
    title: "LLM-Aware Fine-Tuning Framework",
    description:
      "A framework for efficient fine-tuning of large language models with awareness of model behavior, optimizing performance using techniques like parameter-efficient fine-tuning (PEFT), instruction tuning, and evaluation-driven iteration.",
    tags: [
      "LLMs",
      "Fine-Tuning",
      "PEFT",
      "Transformers",
      "PyTorch",
      "Model Optimization"
    ],
    github: "https://github.com/yourusername/llm-aware-finetuning",
  },
  {
    title: "VARAG",
    description:
      "Vision-Augmented Retrieval and Generation integrating textual and visual information, improving contextual precision by 60%.",
    tags: ["LLaVA", "Visual RAG", "Llama-index", "Qdrant"],
    github: "https://github.com/yourusername/varag",
  }
];

export default function ResearchProjects() {
  return (
    <div className="mt-24" id="projects">
      <h2 className="text-2xl font-semibold mb-10">
        Research Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              border border-gray-200
              rounded-2xl
              p-6
              transition-all duration-300
              hover:border-black
              hover:shadow-lg
              hover:-translate-y-1
            "
          >
            {/* Title + Status + Icons */}
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  {/* Ongoing Indicator */}
                  {project.isActive && (
                    <div className="flex items-center gap-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        Ongoing
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Icons */}
              <div
                className="
                  flex gap-3
                  opacity-0 translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                "
              >
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <Github size={18} />
                  </Link>
                )}

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="p-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <Eye size={18} />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
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
    </div>
  );
}