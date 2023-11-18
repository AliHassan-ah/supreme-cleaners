import React from "react";
import { Link } from "react-router-dom";
import FooterImg from "../assets/images/Awards_website_footer.001_1200x.png";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-secondary">
        <div className="container mx-auto text-center flex justify-center items-center pt-12">
          <img src={FooterImg} className="w-[600px]" alt="" />
        </div>
        <div className="container px-5  md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap  md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-2/5 md:w-1/2 w-full px-4 ">
              {/* <h2 className=" text-primary tracking-widest text-sm mb-3">
                Join our newsletter
              </h2>
              <form>
                <div className=" flex flex-col items-center gap-0 sm:flex-row w-full md:w-9/12 ">
                  <div className="w-full">
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border border-content rounded-r-md md:rounded-r-none  rounded-l-md focus:z-10 focus:border-content focus:ring-0 focus-visible:ring-0 focus-visible:ring-content  "
                      placeholder="Enter your Passcode"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-primary  border border-primary text-white font-bold rounded-l-md md:rounded-l-none rounded-r-md focus:outline-none focus:ring-0 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-white transition py-3 px-4 mt-5 md:mt-0 text-"
                    href="/"
                  >
                    subscribe
                  </a>
                </div>
              </form> */}
              <div className="my-5 text-[#a3a3a3]">
                <h2 className=" text-primary tracking-widest text-sm mb-3">
                  Follow Us
                </h2>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a
                    href="https://www.facebook.com/profile.php?id=100083077725109&mibextid=LQQJ4d"
                    className="text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/supremeclean6/status/793122714055806976?s=48&t=-CmzNhGFoZOvAaYpUhiwMA"
                    className="ml-3 text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/supreme_clean_laundry?igshid=YmMyMTA2M2Y="
                    className="ml-3 text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="text-primary tracking-widest text-sm mb-3">
                Useful Links
              </h2>
              <nav className="list-none text-[#a3a3a3] mb-10">
                <li>
                  <Link
                    to="/prices"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/businessservices"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Business Services
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="text-primary tracking-widest text-sm mb-3">
                Quick Links
              </h2>
              <nav className="list-none text-[#a3a3a3] mb-10">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                {/* <li>
                  <Link to="/faq" className="text-gray-600 hover:text-gray-800">
                    FAQ
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Blog
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="text-primary tracking-widest text-sm mb-3">
                Customer Service
              </h2>
              <nav className="list-none text-[#a3a3a3] mb-10">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-conditions"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    T&Cs
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
            <p className="text-[#a3a3a3] text-sm text-center ">
              © Supreme Cleaners 2023
             {/* <a
                href="https://www.thebluestone.net/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                DESIGN BY THE BlueStone
             </a>*/}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
