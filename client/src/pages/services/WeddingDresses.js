import React from "react";
import PagesHeader from "../../components/PagesHeader";
import BG from "../../assets/images/services-bg/garment-cleaning_c665337d.jpg";
import CustomerReviews from "../../components/CustomerReviews";
// import PlaceAnOrder from "../../components/PlaceAnOrder";
import Bimg from "../../assets/images/services-bg/bootom-img.jpg";
import { Link } from "react-router-dom";

export default function WeddingDresses() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Services"
        Heading={`Wedding Dresses`}
      />
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex px-[10%]">
            <div>
              <h1 className="text-xl md:text-3xl text-secondary mb-12 ">
                We are wedding dress experts. Our specialist tailors are here to
                make your dress fit to perfection. After the Big day we also
                clean and restore your dress so you can store and preserve it,
                or simply sell it.
              </h1>
              <h1 className="text-secondary text-xl mb-4">
                Wedding Dresses Cleaning
              </h1>
              <p className="text-content text-sm mb-4">
                After the big day, we are also here to clean and restore your
                wedding dress so it can be stored and preserved, or sold - just
                remember that the earliest you bring it to us, the more chances
                we have to remove all of the stains and get the dress back to
                you as good as new! Had lots of fun and worried your dress might
                be a big job? You can let us know about your specific
                requirements for a custom quote. Simply visit one of our store
                to speak to a Store Consultant, or contact our Customer Care
                team on <span className="pb">0118256507/0825525930</span>. You
                can also email your details by clicking the button below:
              </p>
              <div className="flex mb-4">
                <Link
                  to="/contact"
                  className="text-white text-[0.9em] uppercase border rounded-md  py-2 px-4 flex items-center more-button bg-primary"
                >
                  Request a cleaning quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <h1 className="text-secondary text-xl mb-4">
                Groom and Groomsmen's Suits
              </h1>
              <p className="text-content text-sm mb-4">
                For the groom and groomsmen, we also offer cleaning services..
              </p>
              <div className="flex mb-4">
                <Link
                  to="/contact"
                  className="text-white text-[0.9em] uppercase border rounded-md  py-2 px-4 flex items-center more-button bg-primary"
                >
                  Request a cleaning quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <h1 className="text-secondary text-xl mb-4">
                You are a wedding dress or retailer and want a quote?
              </h1>
              <p className="text-content text-sm mb-4">
                Are you a Wedding Dress retailer, with a high number of dresses
                to clean? We have extensive experience with a number of
                boutiques, and can accommodate your customers. Click below to
                discuss your needs with a member of our team:
              </p>
              <div className="flex mb-4">
                <Link
                  to="/contact"
                  className="text-white text-[0.9em] uppercase border rounded-md  py-2 px-4 flex items-center more-button bg-primary"
                >
                  Book a call out.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <img src={Bimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <CustomerReviews />
      {/* <PlaceAnOrder /> */}
    </>
  );
}
