"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const fullText = "VENKY";
  const [text, setText] = useState("");
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);

        // Wait before hiding loader
        setTimeout(() => {
          setHide(true);
        }, 100);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900">
        {text}
        <span className="blinking-cursor">|</span>
      </h1>
    </div>
  );
}