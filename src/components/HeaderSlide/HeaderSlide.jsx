import { useState } from "react";
import "./headerSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import { items } from "../../assets/assets";

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const itemLength = items.length - 1;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      {index === 0 && (
        <div className="header-content">
          <h1>Ensik Global Ventures</h1>
          <p>Distributor of All kinds of NBL products</p>

          <a
            href="https://api.whatsapp.com/send?phone=2348160533966&text=Hello%2C%20I'm%20contacting%20you%20from%20your%20website"
            className="hero-btn green-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with us
          </a>
        </div>
      )}
      <img src={item.src} alt={item.altText} className="d-block w-100" />
    </CarouselItem>
  ));

  return (
    <div className="header">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default HeaderSlider;
