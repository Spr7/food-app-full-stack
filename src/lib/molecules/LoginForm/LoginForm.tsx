import React, { useState } from "react";
import SignInForm from "../../atoms/SIgnInForm/SignInForm";
import SignupForm from "../../atoms/SignUpForm/SignUpForm";
import { useSearchFormStore } from "../../modules/store";

export const LogInForm = () => {
  //   const [formState, setFormState] = useState("SignUp");
  const formState = useSearchFormStore((state: any) => state.formState);
  console.log("******formState", formState);
  return (
    <div className="hotel-details pt-5">
      {formState?.formState === "SignUp" ? <SignupForm /> : <SignInForm />}
    </div>
  );
};
