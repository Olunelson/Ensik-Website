import  { useEffect, useState, } from 'react';
import PropTypes from 'prop-types';
const Slider = ({ id, images, direction }) => {
  const [slides, setSlides] = useState(images); // Initialize slides with the provided images

  useEffect(() => {
    setSlides(images);
  }, [images]); // Update slides only when images change

  return (
    <div className="slider" id={id}>
      <div className={`slider-track ${direction === "right" ? "scrollRight" : "scrollLeft"}`}>
        {slides.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Slider;