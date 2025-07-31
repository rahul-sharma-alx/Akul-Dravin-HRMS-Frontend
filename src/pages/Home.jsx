import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import WhyUs from "../components/WhyUs";
import HRMSLanding from "../components/HRMSLanding";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs/>
      <Features />
      <HRMSLanding/>
      <Pricing />
    </>
  );
}
