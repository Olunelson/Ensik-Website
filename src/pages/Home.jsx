/* eslint-disable no-unused-vars */

import Header from "../components/Header/Header";
import About from "./About_Us/About";
import Focus from "./Focus/Focus";
import Service from "./Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";
import "./Home.css";
import Contact from "../components/Contact_Us/Contact";
import HeaderSlider from "../components/HeaderSlide/HeaderSlide";
import Partners from "../components/Testimonial/Partners";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Focus />
      <Service />
      <Partners />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
