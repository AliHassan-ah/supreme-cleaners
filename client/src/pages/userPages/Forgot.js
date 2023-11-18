import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/forgetpassword",
        {
          email,
        }
      );
      console.log(response.data);

      if (response.data.success) {
        // navigate("/account");
        //toast.success(response.data.message);
        console.log(response.data.message);
      } else {
        //toast.error(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
      //toast.error("User Does not Exist");
    }
  };

  return (
    <>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-secondary">
                Reset Password
              </h1>
              <p className="mt-2 text-sm text-secondary">
                Don't have an account yet? &nbsp;
                <Link
                  className="text-primary pb decoration-2 hover:underline font-medium "
                  to="/register"
                >
                  Sign up here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-secondary"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b"
                        required
                      />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
