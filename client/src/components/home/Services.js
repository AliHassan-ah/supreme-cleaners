import React from "react";
import CserImg from "../../assets/images/Business_services_900x.png";
import ServicesGrid from "../ServicesGrid";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <section className="">
        <div className="container  mx-auto">
          <div className="flex flex-wrap ">
            <ServicesGrid />
          </div>
        </div>
      </section>
      <section className="my-12">
        <div className="container px-8  mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center border border-primary rounded-[50px] p-8">
            <div className="w-full md:w-1/2">
              <img src={CserImg} alt="" />
            </div>
            <div className="w-full md:w-1/2 md:pl-11">
              <h3 className="text-primary mb-2 text-xl">Are you a business?</h3>
              <p className="mb-6 text-[1.15em] text-content">
                Find out how SUPREME can help you streamline your brand
                operations and deliver the best store experience.
              </p>
              <Link
                to="/businessservices"
                className="py-2 px-4 text-white bg-primary text-base rounded-md"
              >
                Corporate Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
