import Slideshow from "../../components/Slideshow/slideShow";
import "./Service.css";

const Service = () => {
  return (
    <div className="service" id="service">
      <h1>Our Services</h1>
      <p>We Offer Logistics Services</p>
      <div className="service-content">
        <div className="content-left">
          <Slideshow />
        </div>
        <div className="content-right">
          <ul>
            <li>
              <h3>Delivery Truck</h3>
            </li>
            <p>Delivery truck for short distance delivery of goods</p>
            <li>
              <h3>Loading Truck</h3>
            </li>
            <p>
              Loading trucks for the movement of goods/products from companies
              to designated depot or warehouses{" "}
            </p>
            <li>
              <h3>Trailers</h3>
            </li>
            <p>
              Cargo trailers are available for hire in moving goods across the
              nations
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
