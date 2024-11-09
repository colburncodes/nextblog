import createMDX from '@next/mdx';
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure page extensions to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig);
