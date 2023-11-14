import React from "react";
import Bsimg1 from "../../assets/images/business-icons/iii.png";
import Bsimg2 from "../../assets/images/business-icons/ew.png";
import Bsimg3 from "../../assets/images/business-icons/vbdf.png";
import Bsimg4 from "../../assets/images/business-icons/vyufu.png";
import Bsimg5 from "../../assets/images/business-icons/dgdfhg.png";
import Bsimg6 from "../../assets/images/business-icons/vc.png";
import Bsimg7 from "../../assets/images/business-icons/uvyyuv.png";
import Bsimg8 from "../../assets/images/business-icons/cfu.png";
import Bsimg9 from "../../assets/images/business-icons/oo.jpg";
import Bsimg10 from "../../assets/images/business-icons/oif.jpg";
import Bsimg11 from "../../assets/images/business-icons/oiugf.jpg";
import Bsimg12 from "../../assets/images/business-icons/oihg.jpg";
import BusinessServicesCard from "../../components/BusinessServicesCard";
import BusinessReviews from "../../components/BusinessReviews";
import ActiveAccordion from "../../components/Faq/ActiveAccordion";
import SimpleAccordion from "../../components/Faq/SimpleAccordion";
import PagesHeader from "../../components/PagesHeader";
import BG from "../../assets/images/IMG_2911.jpg";
import Logo from "../../assets/images/Supreme-Logo.png";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.png";
import BusinessServiceForm from "../../components/forms/BusinessServiceForm";

export default function BusinessServices() {
  const FaqContent1 = (
    <p className="text-content text-sm">
      We deliver all over East, North, South and some surrounding areas, get in
      touch with our friendly Sales team for a bespoke quote.
    </p>
  );
  const FaqContent2 = (
    <p className="text-content text-sm">
      Thank you for your interest in our services! We do offer corporate
      discounts for businesses and organizations that use our laundry,
      industrial workwear cleaning and dry cleaning services on a regular basis.
      Our corporate discount program is designed to help businesses save money
      on their laundry expenses while receiving high-quality services from our
      team. If you could provide more information about your company and the
      laundry services you require, we can discuss your specific needs and
      provide you with a customized quote that includes our corporate discount.
      We are committed to providing our customers with affordable and convenient
      laundry solutions, and we look forward to the opportunity to work with
      your business. Please feel free to contact us at any time to discuss
      further
    </p>
  );
  // const FaqContent3 = (
  //   <p className="text-content text-sm">
  //     We are VAT enrolled and routinely provide our business customers with VAT
  //     invoices. Please ensure you mention any invoicing requirements to our
  //     Sales team prior to sign up.
  //   </p>
  // );
  const FaqContent4 = (
    <p className="text-content text-sm">
      We are VAT enrolled and routinely provide our business customers with VAT
      invoices. Please ensure you mention any invoicing requirements to our
      Sales team prior to signup.
    </p>
  );
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Corporate Services"
        Heading={`Business Services`}
      />

      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-secondary pm text-3xl mb-4">
              Sustainable aftercare, tailored to your needs.
            </h1>
            <p className="text-primary h1 text-2xl text-center hl mb-8">
              Staff uniforms・ Industrial Workwear ・Guest laundry・ Employee
              benefits <br /> ・Household fabrics ・Fabric care consultations{" "}
              <br />
              ・Tablecloths ・Serviettes ・Tiffany Cushion Covers <br />
              ・Draping ・Conference Cloths ・Hotel Linen.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="#getaquote"
                className="text-secondary text-[1.3em] uppercase border rounded-md border-[rgba(0,0,0,0.3)] py-2 px-4 flex items-center more-button"
              >
                Get a quote
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-2xl text-3xl  text-secondary mb-4">
              For the most demanding industries.
            </h1>
            <div className="text-center flex justify-center items-center">
              <img src={Logo} className="w-[250px] text-center" alt="" />
            </div>
          </div>
          <div className="flex   flex-col md:flex-row">
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg1} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Online & Retail <br />
                  Fashion
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg2} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Fashion Rental
                  <br />& Second-hand
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg3} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Corporate <br />
                  Offices
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg4} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Lifestyle & <br />
                  Residential Concierge
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row">
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg5} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Personal <br /> Shoppers
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg6} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Premium <br />
                  Hospitality
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg7} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Protective Safety <br /> Workwear
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg8} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Household <br />
                  Management
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row">
            <div className="p-4 w-full md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg9} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Curtains <br /> Household
                </h2>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg10} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Table Cloths <br /> Hospitality
                </h2>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Bsimg11} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  Serviettes​
                  <br />
                  Hospitality
                </h2>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/4 flex flex-col text-center items-center">
              <div className="w-[130px] h-[130px] inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src={Logo} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-secondary text-xl title-font font-medium mb-3">
                  ​​Dry Cleaning <br /> ​Corporates
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl md:text-4xl  text-secondary mb-4">
              Why Supreme?
            </h1>
          </div>
          <div className="flex flex-wrap ">
            <BusinessServicesCard
              img={img1}
              title="Premium Quality"
              content="Our specialists treat each garment based on their expert knowledge of fabrics and designer brands and a thorough Quality Check is done for each item we process. We simply care more for your clothes
"
            />
            <BusinessServicesCard
              img={img2}
              title="Expert Customer Care
"
              content="Our experienced team is available to support you over the phone, e-mail and WhatsApp. 
              Our store Georgetown can be used as 
              Collection and Drop-off point. 
              "
            />
            <BusinessServicesCard
              img={img3}
              title="Reliable Tracking & Delivery"
              content="Our drivers collect and deliver to corporate and residential premises all over JHB every day of the week. Our turnaround can vary 
              from 3 days to a few hours depending on your needs
              "
            />
            <BusinessServicesCard
              img={img4}
              title="Truly Sustainable"
              content="Our operations are at the forefront of innovation in sustainable aftercare, to respect your team’s health and our environment. 
"
            />
          </div>
        </div>
      </section>
      <BusinessReviews />
      <section id="getaquote">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Contact us
              </h1>
            </div>
          </div>
          <div className="container mt-12 px-[12%] mx-auto">
            {/* Card */}
            <div className="flex flex-col border rounded-[50px] p-4 sm:p-6 lg:p-8 border-primary">
              <div className="text-center">
                <h2 className="mb-2 text-xl  text-primary ">
                  Get in touch with our expert Sales team for a quote
                </h2>
                <p className="text-content text-sm">
                  Complete the form below or email{" "}
                  <span className="text-primary">
                    supremelaundry7@gmail.com
                  </span>
                  &nbsp; and we will respond to your enquiry as soon as
                  possible.
                </p>
              </div>
              <BusinessServiceForm />
            </div>
            {/* End Card */}
          </div>
        </div>
      </section>
      <section className="pt-12 pb-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-[15%]">
          <div className="text-center mb-20">
            <h1 className="sm:text-2xl text-3xl  text-secondary mb-4 uppercase">
              Faq
            </h1>
          </div>
          <div className="flex flex-col hs-accordion-group">
            <ActiveAccordion
              title="WILL YOU COLLECT AND DELIVER TO MY PREMISES?	"
              content={FaqContent1}
            />
            <SimpleAccordion
              title="DO YOU OFFER A CORPORATE DISCOUNT?						"
              content={FaqContent2}
            />
            {/* <SimpleAccordion
              title="WHY IS CONVENTIONAL DRY CLEANING TOXIC?"
              content={FaqContent3}
            /> */}
            <SimpleAccordion
              title="WILL YOU PROVIDE A VAT INVOICE?"
              content={FaqContent4}
            />
          </div>
        </div>
      </section>
    </>
  );
}
