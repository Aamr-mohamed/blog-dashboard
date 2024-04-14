import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";
import { useState } from "react";

export default function Home({ blogs }) {
  console.log(blogs);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function formattedDate(date) {
    const newDate = new Date(date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return newDate.toLocaleDateString("en-US", options).toUpperCase();
  }

  function filterBlogs(category) {
    if (category === "All") {
      return blogs;
    } else {
      return blogs.filter((blog) => blog.category === category);
    }
  }

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
          <div className="container mx-auto px-4">
            <div className="flex justify-center text-sm font-medium text-center text-gray-500 mb-5">
              <ul className="flex flex-wrap -mb-px">
                {["All", "programming", "gaming", "love", "math"].map(
                  (category) => (
                    <li
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`me-2 inline-block p-4 cursor-pointer ${
                        selectedCategory === category
                          ? "text-red-600 border-b-2 border-red-600"
                          : "hover:text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {category}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {blogs ? (
              filterBlogs(selectedCategory).length > 0 ? (
                filterBlogs(selectedCategory).map((blog, index) => (
                  <Card
                    key={index}
                    href={`/blog/${blog.id}`}
                    imageSrc={blog.photo_url}
                    alt="Travel"
                    title={blog.title}
                    description={blog.description}
                    category={blog.category}
                    created_at={formattedDate(blog.created_at)}
                  />
                ))
              ) : (
                <div>No blogs found for selected category.</div>
              )
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const params = { offset: 1, limit: 20 };
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=1&limit=20",
      { params },
    );
    const blogs = response.data.blogs;

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

