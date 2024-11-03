import Card from "@/app/components/card";

export default async function ProjectList() {

    const response = await fetch('http://localhost:3001/repos', { cache: 'no-store' });
    const posts = await response.json();
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                    <li className="mb-4" key={post.id}>
                        <Card className="font-mono h-full">
                            <div className="flex justify-between items-center mb-4">
                                <div className="font-semibold">{post.title}</div>
                                <div>🌟{post.stargazers_count}</div>                                
                            </div>
                            <div>{post.description}</div>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );

}