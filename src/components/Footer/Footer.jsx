import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={assets.new_logo} alt="" />
          </Link>

          <p>
            At Ensik Global, we offer the best quality at best price.
            <br />
            Your Drinks, delivered with precision
          </p>
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icon-youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icon-insta"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <p>Useful Links</p>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <a
              href="#about-us"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About Us
            </a>
            <a
              href="#service"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Our Offerings
            </a>
            <a
              href="#getintouch"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </a>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234 806 626 3066</li>
            <li>+234 811 001 9269</li>
            <li>contact@ensikglobal.com</li>
            <li>Address: No 3 Airport Road Kano </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 <span>&copy;</span> Ensikglobal.com - All right Reserved
      </p>
    </div>
  );
};

export default Footer;
