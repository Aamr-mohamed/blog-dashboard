import axios from "axios";
import parse from "html-react-parser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SinglePost({ postData }) {
  function formattedDate(date) {
    const newDate = new Date(date);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return newDate.toLocaleDateString("en-US", options).toUpperCase();
  }

  if (postData) {
    return (
      <div>
        <Header />
        <div className="mx-auto max-w-5xl mb-7">
          <header className="mb-14">
            <div className="text-center mt-4">
              Published: {formattedDate(postData.created_at)}
            </div>
            <h1 className="mb-3 mt-0 text-center text-5xl font-bold leading-normal text-slate-900 py-2">
              {postData.title}
            </h1>
            <div className="text-center">
              Last Updated: {formattedDate(postData.updated_at)}
            </div>
            <div className="-mx-7 mt-10 md:mx-0">
              <div class="my-3 text-center">
                <a
                  href="#"
                  class="m-0.5 inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  #{postData.category}
                </a>
              </div>
              <img
                className="mx-auto w-full max-w-2xl "
                src={postData.photo_url}
                width="960"
                height="500"
                alt="This is post picture"
              />
            </div>
          </header>
          <div className=" max-w-none text-slate-800 pb-2">
            {parse(postData.content_html)}
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <h1>404 Post Not Found</h1>;
  }
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await axios.get(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`,
  );
  const postData = res.data.blog;

  return {
    props: {
      postData,
    },
  };
}

export default SinglePost;

