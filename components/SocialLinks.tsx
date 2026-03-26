import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="mt-6 flex gap-3">
      <a  href="mailto:mrjvenky18@gmail.com" className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition">
        <Mail size={18} />
      </a>
      <a href="https://github.com/VenkateswaraRao18" target="_blank" className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition">
        <Github size={18} />
      </a>
      <a href="https://www.linkedin.com/in/venkateswara-rao-jannegorla-876890241 " target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition">
        <Linkedin size={18} />
      </a>
      <a href="#" className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition">
        <Twitter size={18} />
      </a>
      {/* D:\venky\projects\porfolio\venky-portfolio\resume.pdf */}
      <a href="https://drive.google.com/file/d/1T3SXHzOPvG3t3frFpF0Qx0Ggcmnm5P47/view?usp=sharing" target="_blank" className="p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition">
        <FileText size={18} />
      </a>
    </div>
  );
}