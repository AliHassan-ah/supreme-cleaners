import React from "react";
import { Link } from "react-router-dom";

export default function Address() {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-md max-w-2xl mx-auto px-8 py-6 my-10 relative flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mr-12">
          <div className="text-center">
            <h1 className="text-xl font-semibold">Have we met?</h1>
            <p className="mt-4">Sign in here</p>
          </div>
          <form className="mt-8">
            <div className="mb-4">
              <label htmlFor="email" className="text-content text-sm block pm">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-content text-sm block pm"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <Link to="/forgot" className="text-blue-500">
                I forgot my password
              </Link>
            </div>
            <button
              type="submit"
              className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-center">
            <h1 className="text-xl font-semibold">New to Supreme Cleaners?</h1>
            <p className="mt-4">Nice to meet you</p>
          </div>
          <div className="mt-8">
            <p>
              We just need a few more things to complete your order (it's very
              quick).
            </p>
            <Link
              to="/signup"
              type="submit"
              className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
            >
              Next
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md max-w-2xl mx-auto px-8 py-6 my-10 relative flex">
        <div className="w-full">
          <h3 className="text-xl font-semibold">Your address</h3>
          <form className="grid grid-cols-2 gap-5 w-full">
            <div className="mb-4">
              <input
                type="text"
                id="addressLine1"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="Address line 1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="addressLine2"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="Address line 2"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="postalCode"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="Postcode"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="town"
                className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                placeholder="City"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md max-w-2xl mx-auto px-8 py-6 my-10 relative ">
      <h1 className="py-3">Delivery instructions</h1> 

      <div>
        <div className="bloc-preference">
          <div className="preference-wrapper">
            <span className="pb text-base">
              You don't have any instructions yet
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-end items-center p-4 ">
            <a href="" className="text-primary text-base mr-7">
              {" "}
              Edit
            </a>
            <a className="text-end bg-[#EB5757] bg-opacity-30 rounded-full w-8 h-8 text-sm flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </a>
          </div>
          <div className="p-4 ">
            <p className="pl">
              <span className="pm">Instruction:</span> Lorem ipsum dolor
              sit amet.
            </p>
            <p className="pl">
              <span className="pm">Preferred contact:</span> Housekeeper
            </p>
            <p className="pl">
              <span className="pm">Phone Number:</span> 21312312312
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-5 ">
          <div>
            <label className="text-content text-sm block pm textarea-label">
              instruction
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              formcontrolname="instruction"
              className=" w-full  border-1 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
              placeholder=""
              defaultValue={""}
            />
          </div>
          <div>
            <label className="text-content text-sm block pm textarea-label">
              Preferred contact
            </label>
            <select
              name="cars"
              id="cars"
              className=" w-full  border-1 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
            >
              <option value="concierge"> Concierge </option>
              <option value="housekeeper"> Housekeeper </option>
              <option value="neighbour"> Neighbour </option>
              <option value="n/a"> N/A </option>
            </select>
          </div>
          <div>
            <label className="text-content text-sm block pm textarea-label">
              Their phone number
            </label>
            <input
              type="text"
              className=" w-full  border-1 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
            />
          </div>
          <div className="flex flex-row justify-around  ">
            <button className="border border-[#EB5757] px-6 py-3 rounded-md">
              Cancel
            </button>
            <button className="border border-primary px-6 py-3 rounded-md">
              Confirm
            </button>
          </div>
        </form>
        <button className="bg-primary text-white pm py-2 px-7 rounded-md my-6">
          Add instructions
        </button>
      </div>
      </div>
    </div>
  );
}
