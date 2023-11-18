import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <>
      <div className=" md:w-1/3  m-6  mx-auto px-6 ">
        <div className=" h-64 overflow-hidden">
          <Link to={`/blog/${props.link}`}>
            <img
              className="object-cover object-center h-full w-full  mx-auto hover:opacity-70"
              src={props.img}
              alt={props.title}
            />
          </Link>
        </div>
        <div className="bg-[#f9f9f9] ">
          <div className="p-6 flex flex-col">
            <h1 className="h1 text-sm  mb-4 h text-primary ">Our Blog</h1>
            <Link
              to={`/blog/${props.link}`}
              className="h1 text-3xl text-secondary mb-4 hover:text-primary "
            >
              {props.title}
            </Link>

            <p className="text-base text-content mb-4">{props.excerpt}</p>

            <Link
              to={`/blog/${props.link}`}
              className="text-secondary underline font-bold hover:text-primary h1  py-2 mb-12 text-sm flex flex-row rounded-l-md "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
