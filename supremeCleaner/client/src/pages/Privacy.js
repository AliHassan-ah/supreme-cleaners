import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/privacy-policy_1800x.png";

export default function Privacy() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Customer Service"
        Heading={`Privacy Policy`}
      />
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <div className="md:w-1/2 px-5 md:px-0 md:left-[16%] relative py-12">
              <div>
                {/* <h1 className="text-secondary text-sm pb-3">INTRODUCTION</h1> */}
                <p className=" text-[#101010] text-lg">
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit or make a purchase
                  from The Sneaker Shack website. <br />
                  <br />
                  <span className="pb">PERSONAL INFORMATION WE COLLECT</span>
                  <br />
                  <br />
                  When you visit the SUPREME website, we automatically collect
                  certain information about your device, including information
                  about your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device. Additionally, as
                  you browse the website, we collect information about the
                  individual web pages or products that you view, what websites
                  or search terms that referred you to the website, and
                  information about how you interact with the website. We refer
                  to this automatically-collected information as "Device
                  Information." <br />
                  <br /> We collect Device Information using the following
                  technologies: <br />
                  <br /> Cookies: "Cookies" are data files that are placed on
                  your device or computer and often include an anonymous unique
                  identifier. For more information about cookies, and how to
                  disable cookies, visit http://www.allaboutcookies.org. <br />
                  <br /> Log files: "Log files" track actions occurring on the
                  website, and collect data including your IP address, browser
                  type, Internet service provider, referring/exit pages, and
                  date/time stamps. <br />
                  <br /> Web beacons, tags, and pixels: "Web beacons," "tags,"
                  and "pixels" are electronic files used to record information
                  about how you browse the website. <br />
                  <br /> Additionally when you make a purchase or attempt to
                  make a purchase through the website, we collect certain
                  information from you, including your name, billing address,
                  shipping address, payment information (including credit card
                  numbers), email address, and phone number. We refer to this
                  information as "Order Information." <br />
                  <br /> When we talk about Personal Information in this Privacy
                  Policy, we are talking both about Device Information and Order
                  Information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
