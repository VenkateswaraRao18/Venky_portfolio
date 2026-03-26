// import { getBlogBySlug } from "@/data/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/data/blogs";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = getBlogBySlug(slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        {blog.date} • {blog.readTime}
      </p>

      <article className="prose prose-lg mt-10 max-w-none">
        <MDXRemote source={blog.content} />
      </article>
    </div>
  );
}