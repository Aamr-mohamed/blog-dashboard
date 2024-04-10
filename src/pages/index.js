import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-24">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Hey, we're Blog#4. See our thoughts, stories and ideas.
            </h1>
            <div className="flex items-center mb-8">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card
              href="/categories/travel"
              imageSrc="/images/travel.jpg"
              alt="Travel"
              title="Travel"
              description="Explore the world with us."
            />
            <Card
              href="/categories/travel"
              imageSrc="/images/travel.jpg"
              alt="Travel"
              title="Travel"
              description="Explore the world with us."
            />
            <Card
              href="/categories/travel"
              imageSrc="/images/travel.jpg"
              alt="Travel"
              title="Travel"
              description="Explore the world with us."
            />
            <Card
              href="/categories/travel"
              imageSrc="/images/travel.jpg"
              alt="Travel"
              title="Travel"
              description="Explore the world with us."
            />
            <Card
              href="/categories/travel"
              imageSrc="/images/travel.jpg"
              alt="Travel"
              title="Travel"
              description="Explore the world with us."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}