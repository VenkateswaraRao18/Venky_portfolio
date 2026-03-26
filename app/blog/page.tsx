import { getAllBlogs } from "@/data/blogs";
import Link from "next/link";




export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-12">
        All Blog Posts
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog: any) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="border border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {blog.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {blog.date} • {blog.readTime}
            </p>

            <p className="mt-4 text-gray-600 text-sm">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}