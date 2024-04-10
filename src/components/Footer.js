import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Link href="/" id="footer-home-link" className="hover:text-gray-400">
                        Blog#4
                    </Link>
                </div>
                
                <div className="text-gray-500 text-sm mt-4 md:mt-0">
                    &copy; 2024 Blog#4. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
