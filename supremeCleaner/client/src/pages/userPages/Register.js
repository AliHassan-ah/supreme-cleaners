import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [Con_password, SetCon_password] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, address);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        {
          email,
          password,
          Con_password,
          // role,
        }
      );
      console.log(res);
      if (res.data.success) {
        //toast.success(res.data.message);
        navigate("/login");
      } else {
        // toast.error(res.data.message);
        console.log(res.data.message);
      }
    } catch (err) {
      console.error(err);
      //toast.error("Something went wrong");
    }
  };

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-secondary">Sign Up</h1>
            <p className="mt-2 text-sm text-secondary">
              You Have Already Account. &nbsp;
              <Link
                className="text-primary pb decoration-2 hover:underline font-medium"
                to="/login"
              >
                Login Here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}

            <form onSubmit={HandleSubmit}>
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
                      value={email}
                      onChange={(e) => SetEmail(e.target.value)}
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
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-secondary"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => SetPassword(e.target.value)}
                      className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b"
                      required
                      aria-describedby="password-error"
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
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-secondary"
                    >
                      Confirm Passwords
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      value={Con_password}
                      onChange={(e) => SetCon_password(e.target.value)}
                      className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b"
                      required
                      aria-describedby="password-error"
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
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </main>
  );
}
