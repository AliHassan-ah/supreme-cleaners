import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Supreme-Logo.png";

export default function Error404() {
  return (
    <>
      <section className="h-full">
        <div className="flex h-full">
          <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <header className="mb-auto flex justify-center z-50 w-full py-4">
              <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
                <Link
                  className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
                  to="/home"
                  aria-label="Brand"
                >
                  <img src={Logo} className="w-[50%] mx-auto" alt="site logo" />
                </Link>
              </nav>
            </header>
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
              <h1 className="block text-7xl font-bold text-primary sm:text-9xl">
                404
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Oops, something went wrong.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Sorry, we couldn't find your page.
              </p>
              <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <Link
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-secondary hover:text-[#000000] transition-all text-sm py-3 px-4 "
                  to="/home"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
