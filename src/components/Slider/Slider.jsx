import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

const Slider = ({ slideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filled, setFilled] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progresTimerRef = useRef(null);

  const handlePrevious = () => {
    setFilled(0);
    const newIndex =
      currentIndex == 0 ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleNext = useCallback(() => {
    setFilled(0);
    const newIndex =
      currentIndex == slideImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slideImages]);

  const handleHover = (hover) => {
    setIsHovered(hover);
  };

  useEffect(() => {
    if (progresTimerRef.current) {
      clearTimeout(progresTimerRef.current);
    }
    if(isHovered === false){
      if (filled === 100) {
        handleNext();
      } else {
        progresTimerRef.current = setTimeout(() => {
          setFilled((prev) => prev + 1);
        }, (1 * 800) / 10);
      }
    }
  },);

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={styles.slider}
    >
      <div className={styles.sliderImages}>
        {slideImages.map((slideImage, index) => (
          <img
            key={index}
            className={`${styles["slider-img"]} ${
              index === currentIndex ? styles["active"] : ""
            }`}
            src={slideImage.url}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className={styles["slider-slide"]}>
        <div className={styles["slider-slide-left"]}>
          <button onClick={handlePrevious}>
            <FaCaretSquareLeft className={styles['icon-btn']} size={45}/>
          </button>
          <div className={styles.content}>
            <h4>{slideImages[currentIndex].title}</h4>
            <p>{slideImages[currentIndex].description}</p>
          </div>
        </div>
        <div className={styles["slider-slide-right"]}>
          <button onClick={handleNext}>
          <FaCaretSquareRight className={styles['icon-btn']} size={45}/>
          </button>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#55828b",
            transition: "width 0.05s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
