import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <div className="flex justify-between items-start gap-6" id="home">

      {/* LEFT SIDE */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Venkateswara Rao Jannegorla
        </h1>

        <p className="mt-2 text-gray-600 text-sm sm:text-base">
         AI Researcher, Building Generative AI, LLM Applications, and Agentic Systems
        </p>

        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-24 h-24 sm:w-40 sm:h-40 flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

    </div>
  );
}