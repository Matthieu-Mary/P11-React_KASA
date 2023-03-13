import { useState } from "react";
import Arrow from "../assets/icons/ArrowCarousel.svg";

type CarouselPropsType = {
  pictures: string[];
};

export const Carousel: React.FC<CarouselPropsType> = ({ pictures }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const handlePrevious = () => {
    if(imageNumber <= 0) {
      setImageNumber(pictures.length - 1)
    } else {
      setImageNumber(imageNumber - 1)
    }
  }

  const handleNext = () => {
    if(imageNumber >= pictures.length - 1) {
      setImageNumber(0)
    } else {
      setImageNumber(imageNumber + 1)
    }
  }

  return (
    <div className="carousel">
      <img onClick={handlePrevious} className="arrow-left" src={Arrow} alt="previous image" />
      <img className="picture" src={pictures[imageNumber]} alt="apartment picture" />
      <img onClick={handleNext} className="arrow-right" src={Arrow} alt="next image" />
    </div>
  );
};
