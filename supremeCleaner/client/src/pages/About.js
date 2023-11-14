import React from "react";
import About1 from "../assets/images/about-img.jpg";
import About2 from "../assets/images/IMG_2909.jpg";
import BG from "../assets/images/IMG_2910.png";
import PagesHeader from "../components/PagesHeader";

export default function About() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Our Commitment"
        Heading={`We're revolutionising \n clothing aftercare`}
      />

      <section>
        <div className="container mx-auto">
          <div className="md:w-1/2 px-5 md:px-0 md:left-[16%] relative py-12">
            <p className="mb-6 text-content text-lg">
              SUPREME was founded in 1973. SUPREME wanted to build a business
              that mattered, and to help improving people’s health and the
              environment by “cleaning up” an industry that was toxic and rather
              set in its old-fashioned ways.
            </p>
            <img src={About1} alt="" />
            <p className="py-12 text-content text-lg">
              What more quintessentially toxic than the dry-cleaning industry?
              <br />
              <br />
              For months SUPREME wondered what it would look like without the
              toxic smells and chemicals, until he discovered a tried and tested
              technology. This technology was slowly gaining popularity in other
              countries, but was lacking the investment and commitment to make
              things change in the SA.
            </p>
            <h1 className="pm leading-[3.5rem] py-4 px-12 mb-10 text-3xl ">
              With a father George Lioundris (Laundries) who worked as a
              launderer, his friends convinced him that ‘clean’ was not only in
              his name…but also in his genes.
            </h1>
            <p className="pb-12 text-content text-lg">
              Chris and Jenny Lioundris (Siblings) in the year 2000 had found
              his fight, and has been working countless hours since then to
              bring this technology to the SA. 
            </p>
            <p className="pb-12 text-content text-lg">
              SUPREME opened its doors in 219 VICTORIA STREET , GEORGETOWN .
              Delivering a healthier, better quality and alternative to dry
              cleaning, with results that speak for themselves – cleaner,
              softer, “greener” clothes. 
            </p>
            <img src={About2} className="pb-12" alt="" />
            <p className="pb-12 text-content text-lg">
              SUPREME’S commitment to{" "}
              <span className="text-primary pb">eco-friendly</span>, natural
              cleaning and homes did not end with dry cleaning. Carefully
              curated SUPREME Home, a carefully selected range of products from
              the most environmentally friendly and natural brands in the SA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
