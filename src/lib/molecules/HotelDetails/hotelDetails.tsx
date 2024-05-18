import React, { useState } from "react";
import { useSearchFormStore } from "../../../utils/modules/store";
import "./index.css";
import { HotelCardContainer } from "../CardContainer/CardContainer";

export const HotelDetails = () => {
  const setFormState = useSearchFormStore((state: any) => state.setFormState);
  const [data, setData] = useState("");

  return (
    <div className="pt-5">
      <HotelCardContainer />
    </div>
  );
};
