import React from "react";
import { Link } from "react-router-dom";

export default function ServiceAndNews() {
  return (
    <>
      <section className="mb-12">
        <div className="container  mx-auto">
          <div className="flex flex-wrap ">
            <div className="p-12 md:w-1/2 flex flex-col items-start  ">
              <div className="f-div-1 h-[645px] px-[10%] py-[10%]">
                <h2 className="text-3xl text-secondary mb-4">
                  Good for you,<br></br>
                  Good for the planet.
                </h2>
                <p className="text-base text-content mb-4">
                  At Supreme Cleaners, we use an expert non-toxic alternative to
                  dry cleaning - our process is kinder to your health, your
                  clothes, and our planet.
                </p>
                <div className="flex justify-start items-center">
                  <Link
                    to="/process"
                    className="text-secondary text-[13px] uppercase border rounded-md border-[rgba(0,0,0,0.3)] py-2 px-4 flex items-center more-button"
                  >
                    Find out more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="p-12 md:w-1/2 flex flex-col items-start  ">
              <div className="f-div-2 h-[645px] px-[10%] py-[10%]">
                <h2 className="text-3xl text-secondary mb-4">
                  Pioneering<br></br>
                  sustainability
                </h2>
                <p className="text-base text-content mb-4">
                  From packaging to energy suppliers and waste management,
                  sustainability is embedded at each step of our process.
                </p>
                <div className="flex justify-start items-center">
                  <a
                    href="#/"
                    className="text-secondary text-[13px] uppercase border rounded-md border-[rgba(0,0,0,0.3)] py-2 px-4 flex items-center more-button"
                  >
                    Find out more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
