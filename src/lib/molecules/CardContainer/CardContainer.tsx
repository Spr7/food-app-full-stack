import React, { useState } from "react";
import { HotelCardData } from "../../../utils/constants/hotelCard";
import { HotelCard } from "../../atoms/Card/Card";
import "./CardContainer.css";
export const HotelCardContainer = () => {
  const [categoryState, setCategoryState] = useState<string[]>(["all"]);

  const handleCategoryClick = (nav: string) => {
    if (
      nav === "all" &&
      categoryState.length === 1 &&
      categoryState.includes("all")
    ) {
      return;
    }
    if (nav === "all" || categoryState.includes("all")) {
      setCategoryState([nav]);
    } else {
      if (categoryState.includes(nav)) {
        categoryState.length !== 1
          ? setCategoryState(
              categoryState.filter((item: string) => item !== nav)
            )
          : setCategoryState(["all"]);
      } else {
        setCategoryState([...categoryState, nav]);
      }
    }
  };
  console.log("********cat", categoryState);

  return (
    <div className="hotel-card-container m-auto">
      <div className="d-flex justify-content-center category-main">
        <label htmlFor={"all"} className="category-all">
          <button
            className="category-el mx-1"
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
        </label>
        {HotelCardData?.categories.map((data) => (
          <label htmlFor={data}>
            <button
              className="category-el mx-1"
              onClick={() => handleCategoryClick(data)}
            >
              {data}
            </button>
          </label>
        ))}
      </div>
      <div className="hotel-card-main m-auto">
        {categoryState.includes("all")
          ? HotelCardData?.cards.map((data) => <HotelCard cardData={data} />)
          : HotelCardData?.cards
              .filter((data) => categoryState.includes(data?.category))
              .map((data) => <HotelCard cardData={data} />)}
      </div>
    </div>
  );
};
