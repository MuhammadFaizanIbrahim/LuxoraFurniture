import React from "react";
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import SofaConfigurator from "../sections/SofaConfigurator";
import AddOnsSection from "../sections/AddOnsSection";
import ChairShowcase from "../sections/ChairShowcase";

const Homepage = () => {
  return (
    <>
      <Hero />
      <ChairShowcase />
      <SofaConfigurator />
      <ServicesSection />
      <AddOnsSection />
    </>
  );
};

export default Homepage;
