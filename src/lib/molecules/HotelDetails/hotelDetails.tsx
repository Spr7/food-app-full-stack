import React, { useCallback, useEffect, useState } from "react";
import { useSearchFormStore } from "../../modules/store";
import "./index.css";
import { SignupForm } from "../../atoms/SignUpForm/SignUpForm";

export const HotelDetails = () => {
  const setFormState = useSearchFormStore((state: any) => state.setFormState);
  const [data, setData] = useState("");

  return (
    <div className="pt-5">
      {/* <SignupForm /> */}
      Hotel Details Page .....!
    </div>
  );
};
