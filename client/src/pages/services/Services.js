import React from "react";
import PagesHeader from "../../components/PagesHeader";
import BG from "../../assets/images/services.png";
import ServicesGrid from "../../components/ServicesGrid";

export default function Services() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Services"
        Heading={`How can we help?`}
      />

      <section className="py-12">
        <div className="container  mx-auto">
          <div className="flex flex-wrap -m-4">
            <ServicesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
