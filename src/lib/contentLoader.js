import fs from 'fs';
import { join } from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

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

export async function getPosts({
    sortByDate = false, page = 1, limit = 10, tags
} = {}) {
    const files = fs.readdirSync(join(process.cwd(), 'content'));
    const posts =  await Promise.all(
        files.map(async file => {
        const { frontmatter } = await getPost(file);

        return {
            frontmatter,
            slug: file.replace('.mdx', '')
        }
    }));

    let filteredPosts = posts;

    // check tags 
    if (tags) {
        filteredPosts = filteredPosts.filter(post => 
                post.frontmatter.tags?.some(tag => tags.includes(tag))
        );
    }

    return filteredPosts;
}