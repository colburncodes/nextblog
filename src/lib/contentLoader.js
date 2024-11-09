import fs from 'fs';
import { join } from 'path';
import { compileMDX } from 'next-mdx-remote/rsc'

export function loadPost(slug) {
    const file = slug.endsWith('.mdx') ? slug : `${slug}.mdx`;
    return fs.readFileSync(join(process.cwd(), 'content', file));
}

export async function getPost(slug) {
    const source = loadPost(slug);
    return await compileMDX({
        source,
        options: {
            parseFrontmatter: true
        }
    });
}