import React from "react";
import Hero from "./Header";
import HowItsWork from "./HowItsWork";
import Services from "./Services";
import CustomerReviews from "../CustomerReviews";
import ServiceAndNews from "./ServiceAndNews";
import AsSeenIn from "./AsSeenIn";
import Blogs from "./Blogs";
import OurMission from "./OurMission";

export default function index() {
  return (
    <>
      <Hero />
      <HowItsWork />
      <Services />
      <CustomerReviews />
      <ServiceAndNews />
      <AsSeenIn />
      <Blogs />
      <OurMission />
    </>
  );
}
