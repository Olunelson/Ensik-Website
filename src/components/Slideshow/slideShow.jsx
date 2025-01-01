import React from "react";
import "./Slideshow.css";
import { sliderImage } from "../../assets/assets";
const delay = 2500;
const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const handleSlideChange = () => {
    if (!isHovering) {
      setIndex((prevIndex) =>
        prevIndex === sliderImage.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(handleSlideChange, delay);

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isHovering]);
  return (
    <>
      <div
        className="slideshow"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {sliderImage.map((backgroundColor, index) => {
            return (
              <div
                className="slide"
                key={index}
                style={{ backgroundImage: `url(${backgroundColor.slider})` }}
              ></div>
            );
          })}
        </div>
        <div className="slideshowDots">
          {sliderImage.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slideshow;
