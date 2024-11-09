import Navigation from "./nav";
import Link from "next/link";


export default function Header() {
    return (
        <header className="flex justify-between md:items-center mt-5">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href='/' className="text-xl">whocolburn</Link>
                </div>
                <Navigation />
            </div>
            <div className="md:pr-1">
                Dark Toggle
            </div>
        </header>
    );
}