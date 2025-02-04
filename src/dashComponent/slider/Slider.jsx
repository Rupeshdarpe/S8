import { useState } from "react";
import PropTypes from "prop-types";
// import "./slider.scss";
import "./slidNew.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Left Arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="Large View" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="Right Arrow" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="Preview" onClick={() => setImageIndex(0)} />
      </div>
      <div className={`smallImages ${images.length > 4 ? "scrollable" : ""}`}>
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
