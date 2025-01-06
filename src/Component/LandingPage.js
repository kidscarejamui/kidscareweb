import React from "react";
import ImageSlider from "./ImageSlider";
import AboutSection from "./AboutSection";
import Stats from "./Stats";
import Methodology from "./Methodology";
import OurProgram from "./OurProgram";
import CTA from "./CTA";
import AboutContact from "./AboutContact";

function LandingPage() {
  return (
    <>
      <ImageSlider />
      <AboutSection />
      <Stats />
      <OurProgram />
      <Methodology />
      <CTA />
      <AboutContact />
    </>
  );
}

export default LandingPage;
