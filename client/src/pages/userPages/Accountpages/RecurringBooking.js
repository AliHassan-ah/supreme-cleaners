import React from "react";
import SideBar from "../../../components/SideBar";

export default function RecurringBooking() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-3/12">
          <SideBar />
        </div>
        <div className="basis-full md:basis-9/12 p-3">
          <div className="bg-content  bg-opacity-10 ">
            <div className="mx-auto max-w-xl py-10 px-5">
              <h1 className="text-4xl">Recurring Booking </h1>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-5 py-6 my-10 relative">
            <form className="">
              <div className="py-4">
                <h2 className="pb-3">Benefits</h2>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>

                  <span className="text-base pl text-content">
                    No delivery fee
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-base pl text-content">
                    No need to book each week
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-base pl text-content">
                    Get priority for your preferred slot(s)
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-base pl text-content">
                    Collect &amp; drop-off on the same visit
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className="text-base pl text-content">
                    No commitment: cancel or pause anytime
                  </span>
                </div>
              </div>
              <div className="">
                <h2 className="pb-4">Choose your recurrence</h2>

                <label
                  className="flex items-center gap-3 pb-3"
                  htmlFor="mat-radio-2-input"
                >
                  <div className="mat-radio-container">
                    <div className="mat-radio-outer-circle" />
                    <div className="mat-radio-inner-circle" />
                    <input
                      type="radio"
                      className="text-primary ring-primary focus:ring-primary"
                      id="mat-radio-2-input"
                      tabIndex={0}
                      name="mat-radio-group-0"
                      defaultValue={1}
                    />
                    <div className="mat-ripple mat-radio-ripple mat-focus-indicator">
                      <div className="mat-ripple-element mat-radio-persistent-ripple" />
                    </div>
                  </div>
                  <div className="text-base text-content pl">Once a week</div>
                </label>

                <label
                  className="flex items-center gap-3 pb-3"
                  htmlFor="mat-radio-3-input"
                >
                  <div className="mat-radio-container">
                    <div className="mat-radio-outer-circle" />
                    <div className="mat-radio-inner-circle" />
                    <input
                      type="radio"
                      className="text-primary ring-primary focus:ring-primary"
                      id="mat-radio-3-input"
                      tabIndex={0}
                      name="mat-radio-group-0"
                      defaultValue={2}
                    />
                    <div className="mat-ripple mat-radio-ripple mat-focus-indicator">
                      <div className="mat-ripple-element mat-radio-persistent-ripple" />
                    </div>
                  </div>
                  <div className="text-base text-content pl">Twice a week</div>
                </label>
              </div>
              <div className="fields-wrapper day">
                <h2 className="pb-3">Pickup &amp; delivery days</h2>
                <span className="text-content text-base">
                  We will come to your chosen address each week on the day &amp;
                  time selected to pick up your items to clean and deliver your
                  cleaned items from the week before at the same time.
                </span>
                <ul className="flex flex-row gap-5 py-6">
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>M</span>
                    </a>
                  </li>
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>T</span>
                    </a>
                  </li>
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>W</span>
                    </a>
                  </li>
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>T</span>
                    </a>
                  </li>
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>F</span>
                    </a>
                  </li>
                  <li className="bg-content bg-opacity-20 w-10 h-10 flex justify-center items-center rounded-full hover:bg-primary cursor-pointer">
                    <a className="text-lg pm text-content  hover:text-white">
                      <span>S</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="fields-wrapper slots animation-fade-in slots-block">
                <div>
                  <h2 className="pb-3">Pickup &amp; delivery slot</h2>
                  <div className="inline-flex flex-row items-center gap-7 ">
                    <span className="text-base text-content pm">
                      Select a slot
                    </span>
                    <select
                      name="time"
                      id="time"
                      className="outline-none ring-0 focus:ring-0 focus:outline-none focus:shadow-none focus:border-content border"
                    >
                      <option value="12-2_pm">12-2 pm</option>
                      <option value="4-5_pm">4-5 pm</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-primary text-white pm py-2 px-7 rounded-md my-6" >
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
