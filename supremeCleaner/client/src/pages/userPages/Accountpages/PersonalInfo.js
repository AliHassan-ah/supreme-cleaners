import React from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-3/12 ">
          <SideBar />
        </div>
        <div className="basis-full md:basis-9/12 p-3">
          <div className="bg-content  bg-opacity-10">
            <div className="mx-auto max-w-xl py-10 px-5">
              <h1 className="text-4xl">Personal information </h1>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
            <h4 className="text-xl">Contact information</h4>

            <form className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label
                  htmlfor="FirstName"
                  className="text-content text-sm block pm"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlfor="LastName"
                  className="text-content text-sm block pm"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlfor="Phone"
                  className="text-content text-sm block pm"
                >
                  Mobile phone
                </label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  inputMode="numeric"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlfor="address1"
                  className="text-content text-sm block pm"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  placeholder="Address line 1"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="Address line 2"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
                <input
                  type="text"
                  id="town"
                  name="town"
                  placeholder="City"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlfor="postcode"
                  className="text-content text-sm block pm"
                >
                  Post code
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  aria-invalid="false"
                  aria-required="false"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlfor="EmailAddress"
                  className="text-content text-sm block pm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="EmailAddress"
                  name="EmailAddress"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                />
              </div>
              <div className="col-span-2 flex justify-between items-center">
                <Link
                  to="/change-password"
                  className="border border-content text-content pm py-2 px-7 rounded-md my-6"
                >
                  Change password
                </Link>
                <button
                  type="submit"
                  className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
            <h4 className="text-xl pb-4">Payment information</h4>
            <div className="card animation-fade-in">
              <form className="grid grid-cols-1 gap-3">
                <div className="field-wrapper custom-input-wrapper holder-name">
                  <label className="text-content text-sm block pm">
                    Card holder full name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  />
                </div>
                <div className="field-wrapper custom-input-wrapper card-number">
                  <label className="text-content text-sm block pm">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  />
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="text-content text-sm block pm">
                      Expiry date
                    </label>
                    <input
                      type="number"
                      inputMode="numeric"
                      name="month"
                      placeholder="MM"
                      className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                    />
                  </div>

                  <div>
                    <label>&nbsp;</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      name="year"
                      placeholder="YY"
                      id="year"
                      className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                    />
                  </div>

                  <div>
                    <label className="text-content text-sm block pm">CVV</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      name="cvc"
                      placeholder
                      id="cvc"
                      className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-lock text-content"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>

                  <span className="text-sm text-content">
                    Your card details will be securely encrypted and stored with
                    Stripe
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-xl pb pb-3">Delivery policy</p>
                  <p className="text-content pm">
                    Delivery is FREE for orders over £25. Typically, this is a
                    suit and three shirts, or a dress and a top. You will be
                    charged a delivery fee for orders under the £25 threshold.
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
