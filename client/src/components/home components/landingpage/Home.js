import React, { Fragment } from "react";
import Intro from "../home/Intro";
import About from "../about/About";
import Navbar from "../navbar/Navbar";
import Foodmenu from "../foodmenu/Foodmenu";
import Testimonial from "../testimonials/Testimonial";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <About />
      <Foodmenu />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;
