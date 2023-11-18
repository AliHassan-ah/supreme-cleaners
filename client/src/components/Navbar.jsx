import { Link } from "react-router-dom";
import Logo from "../assets/images/Supreme-Logo.png";
import { useCart } from "../context/cartContext";

export default function Navbar() {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();
  return (
    <>
      <section className="bg-white sticky top-0 z-[99]">
        <div className="container mx-auto ">
          <div className="flex flex-row">
            <div className="basis-3/12 md:basis-2/12 my-auto ml-4 md:ml-0">
              <div className="hidden md:flex ">
                <Link to="/home">
                  <img src={Logo} className="w-[60%] py-2" alt="Site Logo" />
                </Link>
              </div>
              <button
                type="button"
                className=" inline-flex justify-center items-center gap-2 rounded-md border border-none  text-content focus:outline-none focus:ring-none transition-all md:hidden "
                data-hs-overlay="#hs-overlay-example"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="basis-7/12  my-auto ">
              <div className=" md:hidden flex mx-auto items-center justify-center">
                <Link to="/home">
                  <img src={Logo} className="h-16 py-2" alt="Site Logo" />
                </Link>
              </div>
              <div className="hidden md:block">
                <ul className="list-disc space-x-6">
                  <li className="inline-block ">
                    <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                      <Link
                        to="/services"
                        type="button"
                        className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                      >
                        Services
                      </Link>
                      <div className=" hs-dropdown-menu transition-[opacity,margin]  duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-[#f9f9f9] sm:shadow-md  p-2  sm:dark:border  border-none before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                        <div className="container mx-auto">
                          <div className="sm:grid sm:grid-cols-4 py-10">
                            <div className="flex flex-col ">
                              <h1 className="text-primary hl text-sm mb-4">
                                What we do
                              </h1>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/service/dry-cleaning"
                              >
                                Dry Cleaning
                              </Link>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/service/laundry-wash-and-fold"
                              >
                                Laundry Wash & Fold
                              </Link>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/service/shirt-service"
                              >
                                Shirt Service
                              </Link>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/service/home-and-bedding"
                              >
                                Home & Bedding
                              </Link>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/wedding-dresses"
                              >
                                Wedding Dresses
                              </Link>
                            </div>
                            <div className="flex flex-col">
                              <h1 className="text-primary hl text-sm mb-4">
                                How it works
                              </h1>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/process"
                              >
                                Award-Winning Process
                              </Link>
                              <Link
                                className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                                to="/booking"
                              >
                                Booking Online
                              </Link>
                            </div>
                            <div className="flex flex-col"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* mega menu end */}
                  </li>
                  <li className="inline-block">
                    <Link
                      className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                      to="/prices"
                    >
                      Prices
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link
                      className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                      to="/BusinessServices"
                    >
                      Business Services
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link
                      className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link
                      className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-3/12 my-auto">
              <div className="flex flex-row items-center justify-end">
                <Link
                  to="/booking"
                  className="py-2 px-5  justify-center items-center  rounded-md uppercase font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none  transition-all text-sm hidden md:inline-flex "
                >
                  Book Now
                </Link>
                {/* <Link to="/" className="mx-3 text-content ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Link> */}
                <Link className="mx-3 text-content inline-flex" to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Link>
                <Link
                  className="mx-3 text-content relative inline-flex flex-shrink-0 justify-center items-center  font-medium    align-middle   transition-all text-sm"
                  to="/cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-primary text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="hs-overlay-example"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full  z-[999] bg-white border-r  border-[#efefef]  "
        tabIndex="-1"
      >
        <div className="flex justify-between items-center py-3 px-4 border-b border-[#efefef]">
          <Link to="/home">
            <img
              src={Logo}
              className="h-16"
              data-hs-overlay="#hs-overlay-example"
              alt="Site Logo"
            />
          </Link>
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#hs-overlay-example"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="w-3.5 h-3.5"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ul className="list-disc  flex flex-col">
            <li className="inline-block">
              {/* <Link
                className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                to="/services"
                data-hs-overlay="#hs-overlay-example"
              >
                Services
              </Link> */}
              <div className="">
                <Link
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="py-4 px-4 inline-flex items-center gap-2 text-sm pm whitespace-nowrap text-secondary  hover:text-[#101010] "
                  to="/services"
                  data-hs-overlay="#hs-overlay-example"
                >
                  Services
                </Link>
                <div className="pl-8 flex flex-col">
                  <h1 className="text-primary hl text-sm mb-4">What we do</h1>
                  <Link
                    className="py-2 px-0  items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/service/dry-cleaning"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Dry Cleaning
                  </Link>
                  <Link
                    className="py-2 px-0 items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/service/laundry-wash-and-fold"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Laundry Wash & Fold
                  </Link>
                  <Link
                    className="py-2 px-0  items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/service/shirt-service"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Shirt Service
                  </Link>
                  <Link
                    className="py-2 px-0  items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/service/home-and-bedding"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Home & Bedding
                  </Link>
                  <Link
                    className="py-2 px-0  items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/wedding-dresses"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Wedding Dresses
                  </Link>

                  <br />
                  <h1 className="text-primary hl text-sm mb-4">How it works</h1>
                  <Link
                    className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/process"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Award-Winning Process
                  </Link>
                  <Link
                    className="py-2 px-0 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010]"
                    to="/booking"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    Booking Online
                  </Link>
                </div>
              </div>
            </li>
            <li className="inline-block">
              <Link
                className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010] pm"
                to="/prices"
                data-hs-overlay="#hs-overlay-example"
              >
                Prices
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010] pm"
                to="/BusinessServices"
                data-hs-overlay="#hs-overlay-example"
              >
                Business Services
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010] pm"
                to="/blog"
                data-hs-overlay="#hs-overlay-example"
              >
                Blog
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className="py-4 px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-secondary  hover:text-[#101010] pm"
                to="/about"
                data-hs-overlay="#hs-overlay-example"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center mx-auto">
            <Link
              className="py-3 w-full px-4 inline-flex items-center gap-2 text-sm whitespace-nowrap text-white  rounded-md bg-primary font-bold text-center justify-center pb"
              to="/"
              data-hs-overlay="#hs-overlay-example"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
