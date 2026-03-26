import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import FeaturedOpenSource from "@/components/FeaturedOpenSource";
import AcademicPublications from "@/components/AcademicPublications";
import AchievementsNews from "@/components/AchievementsNews";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import Skills from "@/components/Skills";
import ResearchProjects from "@/components/ResearchProjects";
import Education from "@/components/Education";

// import { getAllBlogs } from "@/data/blog";
import { getAllBlogs } from "@/data/blogs";
export default function Home() {
  const blogs = getAllBlogs().slice(0, 2); // show latest 2

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-20">
        <Hero />
        <About />
        <WorkExperience />
        <FeaturedOpenSource />
        <AcademicPublications />
        <AchievementsNews />

        {/* PASS BLOGS AS PROP */}
        <LatestBlogPosts blogs={blogs} />

        <Skills />
        <ResearchProjects />
        <Education />
      </section>
    </main>
  );
}