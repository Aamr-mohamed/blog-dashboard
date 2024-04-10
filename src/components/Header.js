import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md flex justify-between items-center px-4 py-4">
            <Link href="/" className="text-xl font-bold text-gray-800">Blog#4</Link>
            <nav className="flex space-x-4">
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/categories"
                            className="text-gray-600 hover:text-gray-800 font-medium">
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-600 hover:text-gray-800 font-medium">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-800 font-medium">
                            Contact
                        </Link>
                    </li>
                </ul>

                <ul class="flex md:hidden space-x-2">
                    <li><a href="/" class="text-gray-600 hover:text-gray-800 font-medium"></a></li>
                </ul>
                <ul class="flex md:hidden space-x-2">
                    <li>
                        <a href="/" class="text-gray-600 hover:text-gray-800 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
