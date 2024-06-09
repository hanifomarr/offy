import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { singlePostData } from "../../dummy";
import "./slider.scss";

const Slider = () => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: "left" | "right") => {
    if (imageIndex === null) {
      return;
    }

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(singlePostData.images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === singlePostData.images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="arrow">
            <ArrowLeft
              size={30}
              color="white"
              onClick={() => changeSlide("left")}
            />
          </div>
          <div className="img-container">
            <img src={singlePostData.images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <ArrowRight
              size={30}
              color="white"
              onClick={() => changeSlide("right")}
            />
          </div>
          <X
            size={30}
            color="white"
            className="cancel"
            onClick={() => setImageIndex(null)}
          />
        </div>
      )}
      <div className="main-image">
        <img
          src={singlePostData.images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="sub-image">
        {singlePostData.images.slice(1).map((img, index) => (
          <img src={img} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
