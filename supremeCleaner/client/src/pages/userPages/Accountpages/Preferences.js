import { useState } from "react";
import { Switch } from "@headlessui/react";
import SideBar from "../../../components/SideBar";

export default function Preferences() {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);
  const [enabled5, setEnabled5] = useState(false);
  const [enabled6, setEnabled6] = useState(false);
  const [enabled7, setEnabled7] = useState(false);
  const [enabled8, setEnabled8] = useState(true);
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-3/12">
          <SideBar />
        </div>
        <div className="basis-full md:basis-9/12 p-3">
          <div className="bg-content  bg-opacity-10 ">
            <div className="mx-auto max-w-xl py-10 px-5">
              <h1 className="text-4xl">Preferences</h1>
              <p className="text-base pl text-content">
                Please complete your authorisations & preferences below to allow
                us to provide you with a seamless, customised service.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md max-w-xl mx-auto px-8 py-6 my-10 relative">
            <form className="box animation-fade-in ng-valid ng-dirty ng-touched">
              <h1 className="text-primary py-6">Preferences</h1>

              <h1 className="py-3">Finish instructions</h1>
              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Shirts premium finish</span>
                  <span
                    className={`${
                      enabled ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    Supplement: £1.30/ shirt I want all my shirts to be
                    hand-finished (premium) with a crease on the sleeves.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Shirts folded</span>
                  <span
                    className={`${
                      enabled2 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    Supplement: £1.20/ shirt I want all my shirts to be
                    delivered folded in a compostable shirt bag.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled2}
                    onChange={setEnabled2}
                    className={`${
                      enabled2
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled2 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Garments folded</span>
                  <span
                    className={`${
                      enabled3 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    Supplement: £1.00/ item I want all my items to be delivered
                    folded in a reusable bag.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled3}
                    onChange={setEnabled3}
                    className={`${
                      enabled3
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled3 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Debobbling</span>
                  <span
                    className={`${
                      enabled4 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    Supplement: £2 to £5/ item I want all my coats and jumpers
                    to be debobbled when required, without having to specify it
                    in special instructions.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled4}
                    onChange={setEnabled4}
                    className={`${
                      enabled4
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled4 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Minor repairs</span>
                  <span
                    className={`${
                      enabled5 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    I authorise Supreme Cleaners to proceed with minor repairs
                    up to £8 (such as fixing small tears, missing buttons or
                    moth holes) that are not mentioned in my instructions.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled5}
                    onChange={setEnabled5}
                    className={`${
                      enabled5
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled5 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>

              <h1 className="py-3">Cleaning authorisations</h1>

              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Cleaning partner</span>
                  <span
                    className={`${
                      enabled6 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    I authorise Supreme Cleaners to use a cleaning partner
                    whenever your experts assess that solvent-based cleaning
                    will be better suited to an individual garment (if no is
                    selected, we will send your item back to you unprocessed).
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled6}
                    onChange={setEnabled6}
                    className={`${
                      enabled6
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled6 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>No care labels</span>
                  <span
                    className={`${
                      enabled7 ? "w-4/5 text-base text-content" : "hidden"
                    }`}
                  >
                    I authorise Supreme Cleaners to clean items for which the
                    care label is missing without asking me every single time; I
                    understand the risk and assume full liability.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled7}
                    onChange={setEnabled7}
                    className={`${
                      enabled7
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled7 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
              </div>

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

              <h1 className="py-3">Communications</h1>
              <div className="flex justify-between py-4">
                <div className="flex-col flex ">
                  <span>Receive monthly newsletter</span>
                  <span className="w-4/5 text-base text-content">
                    I want to receive the monthly Supreme Cleaners Edit,
                    including eco-living tips, and exclusive partner offers.
                  </span>
                </div>
                <div className="my-auto">
                  <Switch
                    checked={enabled8}
                    onChange={setEnabled8}
                    className={`${
                      enabled8
                        ? "bg-content bg-opacity-20"
                        : "bg-content bg-opacity-10"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled8 ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-primary  transition`}
                    />
                  </Switch>
                </div>
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
