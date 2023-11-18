import React from "react";
import SideBar from "../../components/SideBar";

export default function ChangePassword() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-3/12">
          <SideBar />
        </div>
        <div className="basis-full md:basis-9/12 p-3">
          <div className="bg-content  bg-opacity-10 ">
            <div className="mx-auto max-w-xl py-10 py-10 px-5">
              <h1 className="text-4xl">Change Password </h1>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
            <h4 className="text-xl text-primary">Change Password</h4>
            <form noValidate className="py-4 space-y-4">
              <div className="password-wrapper">
                <label className="text-content text-sm block pm">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                />
              </div>
              <div className="password-wrapper">
                <label className="text-content text-sm block pm">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                />
              </div>
              <div className="password-wrapper">
                <label className="text-content text-sm block pm">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white pm py-2 px-7 rounded-md my-6"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
