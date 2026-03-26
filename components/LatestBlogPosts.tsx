import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Blog = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
};

export default function LatestBlogPosts({
  blogs,
}: {
  blogs: Blog[];
}) {
  return (
    <section className="mt-24">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">
          Latest Blog Posts
        </h2>

        <Link
          href="/blog"
          className="text-sm text-gray-600 hover:text-black transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="
              group border border-gray-200 rounded-2xl p-8
              transition-all duration-300
              hover:border-black hover:shadow-lg hover:-translate-y-1
            "
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">
                {blog.title}
              </h3>

              <ArrowUpRight
                size={18}
                className="
                  opacity-0 translate-x-1
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                  text-gray-500
                "
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {blog.date} • {blog.readTime}
            </p>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}