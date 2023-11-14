import React from "react";

export default function SimpleAccordion(props) {
  return (
    <>
      <div
        className="hs-accordion "
        id="hs-basic-with-title-and-arrow-stretched-heading-two"
      >
        <button
          className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-secondary py-6 transition border-b border-[#efefef] title"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
        >
          {props.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={18}
            height={18}
            className="hs-accordion-active:hidden block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width={18}
            height={18}
            stroke="currentColor"
            className="hs-accordion-active:block hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-two"
          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 pt-5"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          {props.content}
        </div>
      </div>
    </>
  );
}
