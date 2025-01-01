/* eslint-disable no-unused-vars */
import "./Focus.css";
import { AlcoholList, CarbonateDrinks, wineList } from "../../assets/assets";

const Focus = () => {
  return (
    <>
      <div className="our-product" id="our-product">
        <h1>Our Products</h1>
        <p className="title">Non-Alchoholic Drinks</p>
        <div className="product-scroll">
          <div className="product-row">
            {CarbonateDrinks.map((item) => (
              <div key={item.id} className="rowlist">
                <img src={item.product_image} alt={item.name} />
                <div className="layer">
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="our-product" id="our-product">
        <p className="title">Wines</p>
        <div className="product-scroll">
          <div className="product-row">
            {wineList.map((item) => (
              <div key={item.id} className="rowlist">
                <img
                  src={item.product_image}
                  alt={item.name}
                  onMouseEnter={() => console.log("Hover", item.name)}
                />
                <div className="layer">
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Focus;
