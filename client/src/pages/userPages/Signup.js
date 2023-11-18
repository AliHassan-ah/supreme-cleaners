import React from "react";
import Tshirt from "../../assets/images/tshirt-stained.svg";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <section className="h-screen">
      <div className="flex h-full flex-col md:flex-row px-5">
        <div className="basis-full md:basis-6/12 flex justify-center items-start">
          <img src={Tshirt} className="h-[80%]" alt="" />
        </div>
        <div className="basis-full md:basis-6/12">
          <div className="max-w-lg my-auto h-full flex justify-center  flex-col">
            <h1 className="text-4xl">Welcome</h1>
            <p className="text-content text-base">
              We need to check if you are in our delivery area before showing
              you our available time slots. Please enter your postcode below.
            </p>
            <br />
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
                  Check Now
                </Link>
              </div>
            </form>
            <p className="pl text-content">
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
