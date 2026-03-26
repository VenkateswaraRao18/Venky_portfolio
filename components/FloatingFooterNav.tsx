"use client";
import React from "react";
import Link from "next/link";
import {
  Home,
  FileText,
  Briefcase,
  BookOpen,
  Code,
  GraduationCap,
} from "lucide-react";

export default function FloatingFooterNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full px-6 md:px-0">
  <div
    className="
      mx-auto
      flex items-center
      bg-white border border-gray-200
      rounded-full shadow-lg
      px-6 md:px-10
      py-3
      max-w-md md:max-w-fit
      justify-between md:justify-center
      gap-4 md:gap-8
    "
  >
        <NavItem href="#home" icon={<Home />} label="Home" />
        <NavItem href="#about" icon={<FileText />} label="About" />
        <NavItem href="#work" icon={<Briefcase />} label="Work" />
        <NavItem href="#blog" icon={<BookOpen />} label="Blog" />
        <NavItem href="#projects" icon={<Code />} label="Projects" />
        <NavItem href="#education" icon={<GraduationCap />} label="Education" />
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactElement;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        flex flex-col md:flex-row
        items-center
        justify-center
        text-gray-600 hover:text-black
        transition
      "
    >
      {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
  size: 20,
})}

      <span className="hidden md:inline ml-2 text-sm">
        {label}
      </span>
    </Link>
  );
}