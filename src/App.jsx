import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-dark">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <Banner />
        </section>
        <section id="team">
          <Banner2 />
        </section>
        <section id="contact">
          <Subscribe />
        </section>
        <Footer />
      </main>
      <SpeedInsights />
    </>
  );
};

export default App;
