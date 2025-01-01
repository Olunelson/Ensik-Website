import "./GetInTouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// eslint-disable-next-line no-unused-vars
import Swal from "sweetalert2";

const GetInTouch = () => {
  const [Values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });
  const handleChange = (e) => {
    setValues({ ...Values, [e.name]: [e.target.Values] });
  };

  // emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c6n7p38", "template_urhpj1a", form.current, {
        publicKey: "bS5V4r16-dEgem6uF",
      })
      .then(
        () => {
          // Create a popup element
          const popup = document.createElement("div");
          popup.classList.add("popup");
          popup.textContent = "Message Delivered Successfully!";

          // Add the popup to the DOM
          document.body.appendChild(popup);

          // Clear the form fields
          form.current.reset();

          // Remove the popup after 3 seconds
          setTimeout(() => {
            popup.remove();
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="container" id="getintouch">
        <div className="getintouch">
          <div className="getintouch_left">
            <h3>Get in Touch</h3>
            <p>
              If you’ve got questions or ideas you would like to share, send a
              message. <br /> For anything more specific, please use one of the
              addresses listed below
            </p>
            <div className="location">
              <div className="frame1">
                <div className="iconlink">
                  <h5>Ensik HQ</h5>
                  <p>No. 3 Airport Road Kano</p>

                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      size="2x"
                      color="#41a58d"
                      pulse
                      className="icon-map"
                    />
                    <a
                      href="https://maps.app.goo.gl/waKaTMCqdzwKQjCk8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find us on a Map
                    </a>
                  </p>
                </div>
                <div className="phone_details">
                  <h5>Commercial </h5>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="icon-map" />
                    +234 806 626 3066{" "}
                  </p>
                </div>
              </div>
              <div className="frame1">
                <div className="iconlink">
                  <h5>Ensik Kano Branch</h5>
                  <p>No 5 Yolawa Bello Road Kano</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      color="#41a58d"
                      pulse
                      className="icon-map"
                    />
                    <a
                      href="https://maps.app.goo.gl/3hgauZufvZ8j2g1a9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find us on a Map
                    </a>
                  </p>
                </div>
                <div className="phone_details">
                  <h5>Support </h5>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="icon-map" />
                    +234 811 001 9269{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="location_below">
              <div className="frame1">
                <div className="iconlink">
                  <h5>Ensik Kaduna Branch</h5>
                  <p>Ali Akilu Road Kaduna</p>

                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      size="2x"
                      color="#41a58d"
                      pulse
                      className="icon-map"
                    />
                    <a
                      href="https://maps.app.goo.gl/waKaTMCqdzwKQjCk8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find us on a Map
                    </a>
                  </p>
                </div>
                <div className="phone_details">
                  <h5>Commercial </h5>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="icon-map" />
                    +234 806 626 3066{" "}
                  </p>
                </div>
              </div>
              <div className="frame1">
                <div className="iconlink">
                  <h5>Uyo Branch</h5>
                  <p>205 idoro Road uyo Akwa-Ibom</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      color="#41a58d"
                      pulse
                      className="icon-map"
                    />
                    <a
                      href="https://maps.app.goo.gl/3hgauZufvZ8j2g1a9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find us on a Map
                    </a>
                  </p>
                </div>
                <div className="phone_details">
                  <h5>Support </h5>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="icon-map" />
                    +234 811 001 9269{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="getintouch_right">
            <h3> Interested in reaching out?</h3>
            <p>
              Please reach out to us if you’re interested in partnering with us
              or learning a little bit more about what we do
            </p>
            <div className="contact-form">
              <form ref={form} className="contact-holder" onSubmit={sendEmail}>
                <div className="multi-fields">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    name="user_email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="user_phone"
                    onChange={(e) => handleChange(e)}
                    required
                    style={{ width: "70%" }}
                  />

                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    onChange={(e) => handleChange(e)}
                    required
                  ></textarea>
                </div>
                <button type="submit" value="Send">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
