export default function AboutLayout({ children }) {
    return (
        <div>
            <h1>About Layout</h1>
            <div>{children}</div>
            <div className="mt-8">
                <h2 className="mb-4 text-xl">You might also like</h2>
            </div>
            <ul className="mb-4">
                <li>
                    First blog post
                </li>
                <li>
                    Second blog post
                </li>
            </ul>
        </div>
    )
}