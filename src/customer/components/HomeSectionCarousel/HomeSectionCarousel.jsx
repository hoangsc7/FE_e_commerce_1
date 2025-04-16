import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
          touchTracking
          animationDuration={500}
          controlsStrategy="responsive"
        />

        {activeIndex < items.length - 5 && (
          <Button
            variant="contained"
            className="z-20"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-20"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
