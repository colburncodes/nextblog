import { notFound } from 'next/navigation';
import * as React from 'react';
import { getPost } from '@/lib/contentLoader';
import { formatDate } from '@/lib/dateFormatter';

  export async function generateMetadata({ params }, parent) {
    const {slug} = await params;
    try {
        const { frontmatter } = await getPost(slug);
        return frontmatter
    } catch(e) {
        notFound();
    }
  }

export default async function Page({ params }) {
    let post;
    const {slug} = await params;
    try {
        post = await getPost(slug);
    } catch(e) {
        notFound(); 
    }
    
    return (
        <article className='prose dark:prose-invert mb-2'>
            <>
                <h1 className='text-xl'>{post.frontmatter.title}</h1>
                <p>{formatDate(post.frontmatter.date)}</p>
                {post.content}
            </>
        </article>
    );
}
