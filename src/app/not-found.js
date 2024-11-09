import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>Return Home</a>
      </Link>
    </div>
  )
}