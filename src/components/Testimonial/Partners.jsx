import { partnerList } from "../../assets/assets";
import "./Partners.css";
const Partners = () => {
  return (
    <div className="partners">
      <h1>Our Partners</h1>
      {partnerList.map((item) => {
        return <img key={item.id} src={item.image} className="partner-image" />;
      })}
    </div>
  );
};

export default Partners;
