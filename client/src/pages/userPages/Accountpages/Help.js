import React from "react";
import SideBar from "../../../components/SideBar";

export default function Help() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-3/12">
          <SideBar />
        </div>
        <div className="basis-full md:basis-9/12 p-3">
          <div className="bg-content  bg-opacity-10 ">
            <div className="mx-auto max-w-xl py-10 px-5">
              <h1 className="text-4xl">
                We are always happy to hear from you!
              </h1>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
            <form className="email-us">
              <header className="py-4">
                <h1 className="">Email us</h1>
                <span className="text-content text-base">
                  Not 100% happy about your experience? Any suggestions to help
                  us improve?
                </span>
              </header>
              <div className="grid grid-cols-2 gap-4">
                <div className="field-wrapper custom-input-wrapper">
                  <label
                    htmlFor="name"
                    className="text-content text-sm block pm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                  />
                </div>
                <div className="field-wrapper custom-input-wrapper">
                  <label
                    htmlFor="email"
                    className="text-content text-sm block pm"
                  >
                    Email
                  </label>
                  <input type="text" id="email" className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content" />
                </div>
                <div className="field-wrapper custom-input-wrapper">
                  <label
                    htmlFor="phone"
                    className="text-content text-sm block pm"
                  >
                    Phone number
                  </label>
                  <input type="tel" id="phone" className="w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content" />
                </div>
                <div className="col-span-2">
                  <label className="text-content text-sm block pm textarea-label">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    maxLength={1000}
                    formcontrolname="message"
                    className=" w-full border-b border-0 border-content outline-none  text-sm focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-b focus:border-b-content"
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <button type="submit" className="bg-primary text-white pm py-2 px-7 rounded-md my-6">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
