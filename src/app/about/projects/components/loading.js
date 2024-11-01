export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <ul className="space-y-8">
            {Array(3).fill(0).map((_el, index) => (
                <li key={index}>
                    <div key={index} className="w-full h-24 animate-pulse bg-gray-300 mb-4"></div>
                </li>        
            ))}
        </ul>
    );
  }