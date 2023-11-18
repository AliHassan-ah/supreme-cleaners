import React from "react";
import Img1 from "../../assets/images/homepage_icons.001_500x.png";
import Img2 from "../../assets/images/homepage_icons.002_500x.png";
import Img3 from "../../assets/images/homepage_icons.003_500x.png";

export default function HowItsWork() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col mb-6">
              <h5 className="w-full text-secondary text-4xl  text-center">
                How it works
              </h5>
            </div>
          </div>
          <div className="flex flex-wrap  ">
            <div className=" md:w-1/3 sm:mb-0 mb-6 text-center mx-auto p-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-[70%] mx-auto"
                  src={Img1}
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl text-secondary mb-4 ">
                  Easy online booking.
                </h2>
                <p className="text-base text-content mb-4">
                  Book your collection and delivery slots on-line and provide
                  specific instructions if needed.
                </p>
              </div>
            </div>
            <div className=" md:w-1/3 sm:mb-0 mb-6 text-center mx-auto p-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-[70%] mx-auto"
                  src={Img2}
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl text-secondary mb-4 ">
                  Eco-friendly Cleaning.
                </h2>
                <p className="text-base text-content mb-4">
                  We carefully inspect your items, clean them with eco-friendly
                  detergents and send your e-receipt.
                </p>
              </div>
            </div>
            <div className=" md:w-1/3 sm:mb-0 mb-6 text-center mx-auto p-6">
              <div className=" h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-[70%] mx-auto"
                  src={Img3}
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl text-secondary mb-4 ">
                  Free Pick up & Delivery.
                </h2>
                <p className="text-base text-content mb-4">
                  We offer a reliable collection & delivery to your door or
                  curb. Free delivery for orders over R575.00 in Suburban JHB
                  areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
