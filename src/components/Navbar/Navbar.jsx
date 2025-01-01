import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isIconHidden, setIsIconHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsIconHidden(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={assets.logo_image} alt="logo" className="logo" />
        </Link>
        <div
          className={`nav-links ${
            isNavOpen ? "nav-link-open" : "navbar-links-closed"
          }`}
          id="navLinks"
        >
          <ul className="navbar-menu">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={isNavOpen ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#about-us"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={isNavOpen ? "active" : ""}
            >
              About Us
            </a>
            <a
              href="#our-product"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={isNavOpen ? "active" : ""}
            >
              Our Services
            </a>
            <Link to="/gallery">Gallery</Link>
          </ul>
          <div className="showcase">
            <p
              className={`sidebar-toggle ${isIconHidden ? "hidden" : ""}`}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
            </p>
          </div>
        </div>
        <button className="contact-us">
          <Link to="/Contact">
            <img src={assets.telephone} alt="" />
            Contact us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
