import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Navigation() {
    const links = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/about/projects", label: "projects" },
        { href: "/blog", label: "blog" },
    ];
    return(
        <nav className="font-mono">
            <ul className="flex md:space-x-4 flex-col md:flex-row">
            {links.map((link) => (
                <li key={link.href}>
                    <Link className={styles.link} href={link.href}>{link.label}</Link>
                </li>
            ))}
            </ul>
        </nav>

    )
}