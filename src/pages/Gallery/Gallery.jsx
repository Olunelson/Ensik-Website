import { useState, useRef } from "react";
import "./Gallery.css";
import { galleryList } from "../../assets/assets";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    if (imageRef.current) {
      imageRef.current.style.display = "block";
    }
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
    if (imageRef.current) {
      imageRef.current.style.display = "none";
    }
  };

  return (
    <>
      <section className="gallery-header">
        <h6>GALLERY</h6>
        <div className="headingtab">
          <h1 className="tab1">Our</h1>
          <h1 className="tab2"> Gallery</h1>
        </div>
      </section>

      <section className="others">
        {galleryList.map((item) => (
          <img
            key={item.id}
            src={item.image}
            onClick={() => handleImageClick(item.image)}
          />
        ))}
      </section>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick} ref={imageRef}>
          <img src={selectedImage} alt="Enlarged Image" />
        </div>
      )}
    </>
  );
};

export default Gallery;
