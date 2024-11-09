import Link from 'next/link';
import { getPost } from '@/lib/contentLoader';
import { formatDate } from '@/lib/dateFormatter';
import fs from 'fs';
import { join } from 'path';

export default async function Page() {
    const files = fs.readdirSync(join(process.cwd(), 'content'));

    const posts = await Promise.all(
        files.map(async file => {
        const { frontmatter } = await getPost(file);

        return {
            frontmatter,
            slug: file.replace('.mdx', '')
        }
    }));

    return(
        <>
         <h1 className="mb-8 text-xl font-semibold">My Portfolio</h1>
      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">Stay up to date with most recent posts</div>
        <hr className="mb-8" />
        <div>
        {posts
            .sort((a, b) => {
            if (
                new Date(a.frontmatter.date) > new Date(b.frontmatter.date)
            ) {
                return -1
            }
            return 1
            })
            .map((post) => (
            <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.frontmatter.date)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.frontmatter.title}
                </p>
                </div>
            </Link>
            ))}
        </div>
        </>
    )
}