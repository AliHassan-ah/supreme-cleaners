import React from "react";

export default function BusinessServicesCard(props) {
  return (
    <>
      <div className=" md:w-2/4  m-6 text-center mx-auto px-6 ">
        <div className=" h-64 overflow-hidden">
          <a href="#">
            <img
              alt="content"
              className="object-cover w-full object-center h-full  mx-auto hover:opacity-70"
              src={props.img}
            />
          </a>
        </div>
        <div className="bg-[#f9f9f9] ">
          <div className="p-12 flex flex-col">
            <a
              href="#/"
              className="h1 text-3xl text-secondary mb-4 hover:text-primary "
            >
              {props.title}
            </a>
            <p className="text-base text-content mb-4">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
