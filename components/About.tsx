"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full max-w-3xl mt-4 sm:mt-4" id="about">
      
      {/* Heading */}
      <h2 className="text-base sm:text-sm uppercase tracking-widest text-gray-900 font-bold">
        About
      </h2>

      {/* Short Intro */}
      <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-sm leading-relaxed">
         Building AI systems that solve real-world problems! Currently exploring Large Language Models, Generative AI, and Agentic AI systems, with hands-on experience developing machine learning models and intelligent automation pipelines. I enjoy experimenting with LLM fine-tuning, RAG pipelines, and scalable ML deployments. Passionate about learning new AI research and turning ideas into practical AI applications that create real impact.
      </p>

      {/* Button */}
      <div className="mt-6 sm:mt-8">
        <button
           style={{cursor:"pointer"}}
          onClick={() => setShowMore(!showMore)}
          className="
            text-sm 
            px-4 py-2 
            rounded-md 
            border border-gray-300 
            hover:bg-gray-100 
            transition 
            w-fit
          "
        >
          {showMore ? "Show Less" : "More About Me"}
        </button>
      </div>

      {/* Expanded Section */}
      <AnimatePresence initial={false}>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden mt-6 sm:mt-8"
          >
            <div className="space-y-6 sm:space-y-8">
<div>
  <h3 className="text-lg sm:text-base font-semibold text-black">
    Large Language Models & Generative AI
  </h3>
  <p className="mt-2 sm:mt-3 text-gray-700 text-base sm:text-sm leading-relaxed">
    I’m particularly interested in large language models and how they can be 
    enhanced through prompt engineering, retrieval-augmented generation (RAG), 
    and fine-tuning techniques. My focus is on building systems where models 
    can reason over data, retrieve relevant context, and generate reliable outputs.
  </p>
</div>

<div>
  <h3 className="text-lg sm:text-base font-semibold text-black">
    Agentic AI Systems
  </h3>
  <p className="mt-2 sm:mt-3 text-gray-700 text-base sm:text-sm leading-relaxed">
    Recently I’ve been exploring agentic AI architectures where language models 
    interact with tools, APIs, and external knowledge sources to complete tasks 
    autonomously. These systems combine reasoning, planning, and tool usage to 
    move beyond static AI models toward more dynamic problem-solving agents.
  </p>
</div>

<div>
  <h3 className="text-lg sm:text-base font-semibold text-black">
    From Research to Production
  </h3>
  <p className="mt-2 sm:mt-3 text-gray-700 text-base sm:text-sm leading-relaxed">
    I enjoy bridging the gap between AI research and real-world deployment. 
    My work involves building scalable machine learning pipelines, designing 
    inference APIs, and integrating AI models into applications that can 
    operate reliably at scale.
  </p>
</div>

<div>
  <h3 className="text-lg sm:text-base font-semibold text-black">
    What I’m Exploring Now
  </h3>
  <p className="mt-2 sm:mt-3 text-gray-700 text-base sm:text-sm leading-relaxed">
    Currently I’m experimenting with retrieval-augmented generation systems, 
    LLM fine-tuning approaches, agent-based workflows, and evaluation techniques 
    for generative AI models. I’m particularly interested in building AI systems 
    that combine learning, reasoning, and real-world interaction.
  </p>
</div>

<div>
  <h3 className="text-lg sm:text-base font-semibold text-black">
    Beyond Technology
  </h3>
  <p className="mt-2 sm:mt-3 text-gray-700 text-base sm:text-sm leading-relaxed">
    Outside of development, I enjoy exploring new AI research, building side 
    projects with emerging frameworks, and collaborating with other developers 
    who are passionate about the future of artificial intelligence.
  </p>
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}