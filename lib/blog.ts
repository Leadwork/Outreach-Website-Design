import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type BlogFrontmatter = {
  title: string;
  date: string;
  updatedAt?: string;
  category: string;
  excerpt: string;
  author: string;
  coverImage?: string;
  tags?: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
  wordCount: number;
};

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    slug,
    title: data.title,
    date: data.date,
    updatedAt: data.updatedAt,
    category: data.category,
    excerpt: data.excerpt,
    author: data.author ?? 'MD. Al Amin',
    coverImage: data.coverImage,
    tags: data.tags ?? [],
    content,
    readingTime: stats.text,
    wordCount: Math.round(stats.words),
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}
