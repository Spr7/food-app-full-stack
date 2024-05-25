import React from "react";
import SignInForm from "../../atoms/SIgnInForm/SignInForm";
import { SignUpForm } from "../../atoms/SignUpForm/SignUpForm";
import { useSearchFormStore } from "../../../utils/modules/store";

export const LogInForm = () => {
  //   const [formState, setFormState] = useState("SignUp");
  const formState = useSearchFormStore((state: any) => state.formState);

  return (
    <div className="hotel-details pt-5">
      <div>
        {formState?.formState === "SignUp" ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};
