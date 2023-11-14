import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/contact-us_1800x.png";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Contact"
        Heading={`We are always happy \n to hear from you!`}
      />
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="basis-full md:basis-5/12 p-8 md:p-12 ">
              <div className="flex flex-col  p-4 sm:p-6 lg:p-8  bg-[#f9f9f9]">
                <div className="mb-8">
                  <h2 className="mb-2 text-sm  text-primary ">Email us</h2>
                  <p className="text-content text-sm">
                    Complete the form below and we will respond to your enquiry
                    as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
              {/* End Card */}
            </div>
            <div className="basis-full md:basis-7/12 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-6  bg-[#f9f9f9]">
                  <div className="mb-8">
                    <h2 className="mb-2 text-sm  text-primary ">
                      Contact Customer Care
                    </h2>
                    <p className="text-content text-sm">
                      Not 100% happy about your experience? Please contact our
                      customer care team:
                    </p>
                  </div>
                  <div>
                    <p className="text-content text-sm">
                      <span className="pb">WhatsApp</span>&nbsp; 0118256507
                      <br />
                      <span className="pb">Email</span>&nbsp;
                      supremeclean@telkomsa.net <br />
                      <span className="pb">Phone</span>&nbsp; 0118256507
                    </p>
                  </div>
                </div>
                {/* <div className="p-6 bg-[#f9f9f9]">
                  <div className="mb-8">
                    <h2 className="mb-2 text-sm  text-primary ">
                      Press enquiries
                    </h2>
                    <p className="text-content text-sm">
                      For any press, blog or PR enquiries, please drop us a line
                      or call us on:
                    </p>
                  </div>
                  <div>
                    <p className="text-content text-sm">
                      <span className="pb">Email</span>&nbsp; press@Supreme
                      Cleanersliving.co <br />
                      <span className="pb">Phone</span>&nbsp; 020 8004 2630
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
                <div className="p-6  bg-[#f9f9f9]">
                  <div className="mb-8">
                    <h2 className="mb-2 text-sm  text-primary ">
                      Join Supreme Cleaners
                    </h2>
                    <p className="text-content text-sm">
                      Want to play your part in Supreme Cleaner’s story? Have a
                      look at our vacancies: here or send us an application.
                    </p>
                  </div>
                  <div>
                    <p className="text-content text-sm">
                      <span className="pb">Email</span>&nbsp; talents@Supreme
                      Cleanersliving.co <br />
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-[#f9f9f9]">
                  <div className="mb-8">
                    <h2 className="mb-2 text-sm  text-primary ">
                      Stockist/Business enquiries
                    </h2>
                    <p className="text-content text-sm">
                      For all business enquiries, please drop us a line or call
                      us on:
                    </p>
                  </div>
                  <div>
                    <p className="text-content text-sm">
                      <span className="pb">Email</span>&nbsp; sales@Supreme
                      Cleanersliving.co <br />
                      <span className="pb">Phone</span>&nbsp; 020 8004 2630
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
