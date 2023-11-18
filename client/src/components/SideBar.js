import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="px-10 bg-white shadow-sm md:h-screen">
      <div className="py-10 md:py-20 flex flex-col gap-2">
        <h1 className="text-2xl">Welcome Ali</h1>
        <p className="text-secondary text-lg">What can we do for you today?</p>
        <br />
        <Link
          to="/booking-form"
          className="bg-primary py-5 px-11 flex items-center justify-center gap-8 text-white rounded-md uppercase font-semibold  hover:bg-blue-600 focus:outline-none  transition-all text-sm  "
        >
          New Booking
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
      </div>
      <ul className="flex flex-col gap-3 pb-10 ">
        <li>
          <Link
            to="/account"
            className="text-secondary hover:text-primary  text-base pb "
          >
            {" "}
            Your Orders
          </Link>
        </li>
        <li>
          <Link
            to="/recurring"
            className="text-secondary hover:text-primary  text-base pb "
          >
            Recurring booking
          </Link>
        </li>
        <li>
          <Link
            to="/personal-info"
            className="text-secondary hover:text-primary  text-base pb "
          >
            Personal information
          </Link>
        </li>
        <li>
          <Link
            to="/preferences"
            className="text-secondary hover:text-primary  text-base pb "
          >
            Preferences
          </Link>
        </li>
        <li>
          <Link
            to="/help-feedback"
            className="text-secondary hover:text-primary  text-base pb "
          >
            Help & feedback
          </Link>
        </li>
      </ul>
    </div>
  );
}
