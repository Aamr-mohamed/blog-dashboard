'use client';
// import '../../styles/globals.css';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useState, useEffect, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import parse from 'html-react-parser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function SinglePost({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const postId = router.query.id;
  const url = `https://api.slingacademy.com/v1/sample-data/blog-posts/${postId}`;

  console.log(postId)
  console.log(url)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPost(response.data.blog);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color={'gray'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (post) {
    return (<div>
      <Header />
      <div className="mx-auto max-w-5xl">
        <header className="mb-14">
        <div className="text-center mt-4">Published: {post.created_at}</div>
          <h1 className="mb-3 mt-0 text-center text-5xl font-bold leading-normal text-slate-900 py-2">
            {post.title}
          </h1>
          <div className="text-center">Last Updated: {post.updated_at}</div>
          <div className="-mx-7 mt-10 md:mx-0">
            <div class="my-3 text-center">
              <a
                href="#"
                class="m-0.5 inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700"
              >
                #{post.category}
              </a>
            </div>
            <img
              className="mx-auto w-full max-w-2xl "
              src={post.photo_url}
              width="960"
              height="500"
              alt="This is post picture"
            />
          </div>
        </header>
        <div className=" max-w-none text-slate-800 pb-2">
          {parse(post.content_html)}
        </div>
      </div>
      <Footer />
      </div>
    );
  } else {
    return <h1>404 Post Not Found</h1>;
  }
}

export default SinglePost;