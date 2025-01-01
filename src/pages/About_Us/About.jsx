import { assets } from "../../assets/assets";
import "./About.css";

const About = () => {
  return (
    <>
      <hr />
      <div className="about-us" id="about-us">
        <h4>We bridge the Gap between anchors and consumers.</h4>
        <p className="about-header">
          {" "}
          Excellence in <strong>Procurement</strong> and{" "}
          <strong>Distribution</strong> of<strong>Quality</strong> NBL Products.
        </p>
        <div className="about-content">
          <div className="content-left">
            <img src={assets.mission} alt="" />
            <h3>Our Mission</h3>
            <p>
              Our mission is to bridge the gap between our anchors (NBL Plc) and
              the Northern Market through the distribution of quality products.
            </p>
          </div>
          <div className="content-left">
            <img src={assets.vision} alt="" />
            <h3>Our Vision</h3>
            <p>
              To be the Number One (1) Distributor of NBL products in Nigeria
              and a trusted partner by our vendors
            </p>
          </div>
          <div className="content-left">
            <img src={assets.values} alt="" />
            <h3>Our Core Values</h3>
            <p>
              Our core values includes value creation through partnership with
              our anchors, youth empowerment, employment and giving back
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
