import React from "react";
import PagesHeader from "../components/PagesHeader";
import BG from "../assets/images/contact-us_1800x.png";

export default function FAQ() {
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        SubHeading="Customer Service"
        Heading={`FAQ`}
      />

      <h1>This is Faq page</h1>
      <div>FAQ</div>
    </>
  );
}
