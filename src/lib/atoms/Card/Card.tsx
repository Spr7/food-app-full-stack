import React from "react";
import "./Card.css";

export const HotelCard = (cardData: any) => {
  const cardContainerData = cardData?.cardData;
  return (
    <div className="hotel-card d-inline-block w-100 mt-3">
      <div className="m-3">
        <span>{cardContainerData?.category}</span>
        <p>{cardContainerData?.description}</p>
        <span>{cardContainerData?.distance}</span>
      </div>
    </div>
  );
};
