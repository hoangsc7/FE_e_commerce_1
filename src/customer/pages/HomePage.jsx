import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "./../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div className="bg-white  ">
      <div className="w-full h-full  overflow-hidden">
        <MainCarousel />
      </div>

      <div className="  flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kutar"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womenn's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womenn's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
