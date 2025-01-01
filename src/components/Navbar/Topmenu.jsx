import "./Topmenu.css";
import { Link } from "react-router-dom";
import { assets, navItems } from "../../assets/assets";
import { useEffect, useRef, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topmenu = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const scrollLockRef = useRef(null);

  const handleSidebarClick = (event) => {
    // Check if the clicked element is not the toggle button itself
    if (
      event.target !==
      scrollLockRef.current.querySelector(".sidebar-toggle-logo")
    ) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1065) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Add event listener only once
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src={assets.new_logo}
            alt="logo"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </Link>
        {mobile && (
          <>
            <ul className="nav-items">
              {navItems.map((item) => (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              <button className="contact-us">
                <Link to="/Contact">
                  <img src={assets.telephone} alt="" />
                  Contact us
                </Link>
              </button>
            </ul>
          </>
        )}

        {!mobile && (
          <div className="sidebar-toggle" ref={scrollLockRef}>
            {sidebar ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div
        className={`sidebar-container ${sidebar ? "active" : ""}`}
        onClick={handleSidebarClick}
      >
        <div className={`sidebar-overlay ${sidebar ? "active" : ""}`}></div>
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <ul className="sidebar-items">
            {navItems.map((item) => (
              <li key={item.id} className={item.sName}>
                <Link to={item.path} onClick={() => setSidebar(false)}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Topmenu;
