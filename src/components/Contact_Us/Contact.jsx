import "./Contact.css";
import Counter from "../Counter/Counter";
import CompanyCounter from "../Counter/CompanyCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faBuilding,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import BranchCounter from "../Counter/BranchCounter";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="icon-container">
          <FontAwesomeIcon icon={faBriefcase} size="lg" className="icon" />
          <div className="details">
            <h3 className="count">
              <CompanyCounter />
            </h3>
            <h3>Partner Companies</h3>
          </div>
          <hr />
          <FontAwesomeIcon icon={faUserTie} size="lg" className="icon" />
          <div className="details">
            <h3 className="count">
              <Counter />
            </h3>
            <h3>Qualified Staff</h3>
          </div>
          <hr />
          <FontAwesomeIcon icon={faBuilding} size="lg" className="icon" />
          <div className="details">
            <h3 className="count">
              <BranchCounter />
            </h3>
            <h3>Branches</h3>
          </div>
          <hr />
          <FontAwesomeIcon icon={faTruck} size="lg" className="icon" />
          <div className="details">
            <div>
              <h3 className="count">No 1</h3>
            </div>
            <br />
            <div>
              <h3>Leading Distributor</h3>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default Contact;
