import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const items = mainCarouselData.map((item) => (
  <img
    className="cursor-pointer w-full h-full object-cover"
    role="presentation"
    src={item.image}
    alt=""
  />
));

const MainCarousel = () => (
  <div className="relative px-4 lg:px-8 ">
    <AliceCarousel
      items={items}
      infinite
      autoPlay
      autoPlayInterval={3000}
      mouseTracking
      disableButtonsControls={true}
      animationDuration={1000}
    />
  </div>
);

export default MainCarousel;
