import fs from "fs";
import path from "path";
import matter from "gray-matter";

type BlogMeta = {
  title: string;
  date: string;
  description: string;
  readTime: string;
};

const blogDir = path.join(process.cwd(), "data/blogs");

export function getAllBlogs(): (BlogMeta & { slug: string })[] {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      ...(data as BlogMeta),
    };
  });
}

export function getBlogBySlug(
  slug: string
): BlogMeta & { content: string } {
  const filePath = path.join(blogDir, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  return {
    content,
    ...(data as BlogMeta),
  };
}