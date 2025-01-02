import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <h1>What Our Partner Says</h1>
        <p>Testimonials from our stakeholders</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={assets.Capture2} alt="Testimonial Image 1" />
            <div className="testimonial-col-content">
              <p>
                Ensik Global is a shrewd business woman with proven track of
                excellence and growth. She has been a great customer with a good
                credit record and growth
              </p>
              <h3>Mr Saheed</h3>
              <h4>Banker</h4>
              <div className="review">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </div>

          <div className="testimonial-col">
            <img src={assets.download} alt="Testimonial Image 2" />
            <div className="testimonial-col-content">
              <p>
                Ensik Global has been a great partner in my distributorship
                business. She has helped my business through credit sales and
                several awards for my loyalty
              </p>
              <h3>Alh Mustapha </h3>
              <h4>Trader</h4>
              <div className="review">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={assets.download} alt="Testimonial Image 1" />
            <div className="testimonial-col-content">
              <p>
                Mrs Eno has a great facility and good customer welfare package.{" "}
                {`I've`} known her personally for over 10years in business. I
                got my first motorcycle through her promo
              </p>
              <h3>Alh Alhassan </h3>
              <h4>Trader</h4>
              <div className="review">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
