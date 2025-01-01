import "./Background.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <div className="background">
      <div className="left-coln">
        <img src="/building.jpeg" alt="" />
      </div>
      <div className="right-coln">
        <h3 className="right-coln-heading" style={{ color: "#41a58d" }}>
          ABOUT OUR COMPANY
        </h3>
        <p>
          <i>“An experience with us always proves overwhelming!”</i>
        </p>
        <p>
          Ensik Global Ventures was incorporated in February 2011. However,
          operation fully started in 2013. We are a seasoned and leading
          distributor/wholesaler with a staff strength of over 50 employees
          across four different states.
        </p>
        <p>
          We distribute and wholesale for different multinationals and
          indigenous manufacturing/importing companies where we serve as
          mega/super/major distributors for most of the established ones.
        </p>
        <p>
          Our fleet of trucks provides reliable interstate transportation
          services for goods, moving them from factories to depots
        </p>
        <p>The confidence our customers have in us lies in the following:</p>
        <div className="activities">
          <div className="circular-box">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
          <p>Open 7days a week </p>
          <p>9am - 6pm</p>
        </div>
        <div className="activities">
          <div className="circular-box">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
          <p>Standard Warehousing facility</p>
        </div>
        <div className="activities">
          <div className="circular-box">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
          <p>Door-step Delivery service</p>
        </div>
        <div className="activities">
          <div className="circular-box">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
          <p>Quality Product</p>
        </div>
        <div className="activities">
          <div className="circular-box">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
          <p>Loyalty Rewards</p>
        </div>

        <button>
          <Link to="/Contact" className="contact-us">
            Learn more{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Background;
