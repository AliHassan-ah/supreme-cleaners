import React from "react";
import hero from "../../assets/images/home-header.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="">
        <div className="  w-full mb-10 md:mb-0">
          <img
            className="object-cover object-center w-full h-[150px] md:h-[50vh]"
            alt="hero"
            src={hero}
          />
        </div>
        <div className="lg:flex-grow md:w-[35%] bg-white rounded-[10px] h-[340px]  p-[25px] md:absolute  md:top-[38%] md:left-[70%]  md:-translate-y-[50%] md:-translate-x-[50%]  flex flex-col md:text-left items-center text-center justify-center ">
          {/* start tabs  */}
          <div>
            <div className="">
              <nav
                className="flex justify-center space-x-2"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className=" hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[2px] border-transparent text-lg flex-col whitespace-nowrap text-secondary hover:text-primary active"
                  id="tabs-with-icons-item-1"
                  data-hs-tab="#tabs-with-icons-1"
                  aria-controls="tabs-with-icons-1"
                  role="tab"
                >
                  <svg
                    className="hs-tab-active:text-primary w-14 h-14 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  Home Delivery
                </button>
                <button
                  type="button"
                  className=" hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[2px] border-transparent text-lg whitespace-nowrap text-secondary hover:text-primary flex-col"
                  id="tabs-with-icons-item-2"
                  data-hs-tab="#tabs-with-icons-2"
                  aria-controls="tabs-with-icons-2"
                  role="tab"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="hs-tab-active:text-primary w-14 h-14 text-secondary "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>
                  Find a store
                </button>
              </nav>
            </div>
            <div className="mt-3 h-full w-full px-14">
              <div
                id="tabs-with-icons-1"
                role="tabpanel"
                aria-labelledby="tabs-with-icons-item-1"
              >
                <p className="text-secondary pb-6">
                  Find the slots that work for you and book a home pick up &
                  delivery:
                </p>
                <form>
                  <div className=" flex flex-col items-center gap-0 sm:flex-row ">
                    <div className="w-full">
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="py-3 px-4 block w-full border border-content rounded-r-md md:rounded-r-none  rounded-l-md focus:z-10 focus:border-content focus:ring-0 focus-visible:ring-0 focus-visible:ring-content  "
                        placeholder="Enter your Postcode"
                      />
                    </div>
                    <Link
                      className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-primary  border border-primary text-white font-bold rounded-l-md md:rounded-l-none rounded-r-md focus:outline-none focus:ring-0 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-white transition py-3 px-4 mt-4 md:mt-0 "
                      to="/booking-form"
                    >
                      Book
                    </Link>
                  </div>
                </form>
              </div>
              <div
                id="tabs-with-icons-2"
                className="hidden mx-auto "
                role="tabpanel"
                aria-labelledby="tabs-with-icons-item-2"
              >
                <p className="text-secondary pb-6">
                  Prefer to speak face-to-face with an expert? Find the nearest
                  Supreme Cleaners store:
                </p>
                <div className="mx-auto text-center">
                  <a
                    href="/"
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-primary  border border-primary text-white font-bold rounded-md  transition py-3 px-4"
                  >
                    Find A Store
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end tabs  */}
        </div>
      </section>
      <section className="bg-[#f9f9f9] text-center mt-8">
        <div className="container mx-auto flex p-12 mb-12  flex-col items-center">
          <div className="row">
            <div className=" text-center ">
              <h4 className="text-5xl mb-6 text-secondary">
                Revolutionising Clothing Aftercare.
              </h4>
              <div className="flex justify-center items-center">
                <a
                  href="/"
                  className="text-secondary text-[1.3em] uppercase border rounded-md border-[rgba(0,0,0,0.3)] py-2 px-4 flex items-center more-button"
                >
                  Learn More
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
          </div>
        </div>
      </section>
    </>
  );
}
