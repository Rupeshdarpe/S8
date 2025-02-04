import { useEffect, useState } from "react";
import "./newsUpdate.scss";

const News = () => {
  const slides = [
    {
      id: 1,
      imgSrc: "/News.png",
      link: "https://example.com/1",
    },
    {
      id: 2,
      imgSrc: "/about2.jpg",
      link: "https://example.com/2",
    },
    {
      id: 3,
      imgSrc: "https://example.com/image3.jpg",
      link: "https://example.com/3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container">
      <h2 className="heading">News and Updates</h2>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : "inactive"}`}
          >
            <img
              loading="lazy"
              src={slide.imgSrc}
              alt={`Slide ${slide.id}`}
              className="image"
            />
            <button
              className="exploreNowButton"
              onClick={() => (window.location.href = slide.link)}
            >
              Explore Now
            </button>
          </div>
        ))}
        <div className="buttonContainer">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`button ${
                index === currentSlide ? "active" : "inactiveButton"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
