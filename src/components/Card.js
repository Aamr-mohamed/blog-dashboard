import Link from 'next/link';

export default function Card({ href, imageSrc, alt, title, description }) {
    return (
        <Link href={href} passHref>
            <div className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer">
                <img
                    src={imageSrc}
                    alt={alt}
                    className="group-hover:scale-105 rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col space-y-2">
                    <h3 className="text-gray-900 text-lg font-bold truncate overflow-ellipsis">{title}</h3>
                    <p className="text-gray-600 line-clamp-3">{description}</p>
                </div>
            </div>
        </Link>
    );
}
