import * as React from "react";
import { Link } from "gatsby";
import { FaHandPointRight } from "react-icons/fa";

const IndexPage = () => {
  return (
    <div className="bg-red-100">
      <div className="flex justify-center items-center h-screen ">
        <p className="text-4xl font-bold ">
          Start countdown <br />
          <br />
          <Link
            className="text-white border-2 rounded-md bg-sky-500 p-2 "
            to="/counterpage"
          >
            Go to counter
          </Link>
        </p>
        <p className="text-4xl font-bold ">
          

          <Link
            className="text-white border-2 rounded-md bg-sky-500 p-2 "
            to="/posts"
          >
            Post
          </Link>
        </p>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
