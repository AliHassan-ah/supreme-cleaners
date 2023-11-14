import React from "react";

export default function PlaceAnOrder() {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="mb-6 text-xl">
                Ready to place an order? <br />
                Schedule a home pick up and delivery
              </h1>

              <form>
                <div className=" flex flex-col items-center gap-0 sm:flex-row w-full  ">
                  <div className="w-full">
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full md:w-[300px] border border-content rounded-r-md md:rounded-r-none  rounded-l-md focus:z-10 focus:border-content focus:ring-0 focus-visible:ring-0 focus-visible:ring-content  "
                      placeholder="Enter Full Passcode"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-primary  border border-primary text-white font-bold rounded-l-md md:rounded-l-none rounded-r-md focus:outline-none focus:ring-0 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-white transition py-3 px-4 mt-5 md:mt-0 "
                    href="/"
                  >
                    Book
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
