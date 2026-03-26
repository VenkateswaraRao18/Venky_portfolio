"use client";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function StickySocials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.3; // approx hero section
      if (window.scrollY > heroHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed left-6 top-1/2 -translate-y-1/2 z-50
        hidden md:flex flex-col gap-4
        transition-all duration-300
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}
      `}
    >
      <SocialIcon href="mailto:mrjvenky18@gmail.com" icon={<Mail size={18} />} />
      <SocialIcon href="https://github.com/VenkateswaraRao18" icon={<Github size={18} />} />
      <SocialIcon href="https://linkedin.com/in/venkateswara-rao-jannegorla-876890241" icon={<Linkedin size={18} />} />
      <SocialIcon href="https://twitter.com/yourusername" icon={<Twitter size={18} />} />
      <SocialIcon href="https://drive.google.com/file/d/1T3SXHzOPvG3t3frFpF0Qx0Ggcmnm5P47/view?usp=sharing" icon={<FileText size={18} />} />
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10 
        flex items-center justify-center 
        rounded-full 
        border border-gray-200 
        bg-white 
        shadow-sm
        text-gray-600 
        hover:text-black 
        hover:shadow-md
        transition
      "
    >
      {icon}
    </a>
  );
}