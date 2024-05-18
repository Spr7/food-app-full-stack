import { useState } from "react";
import { useSearchFormStore } from "../../../utils/modules/store";
import {
  ADD_USER_DETAILS_URL,
  MAILID_EXISTS,
  FORM_STATE,
} from "../../../utils/constants/constants";
import { signUpUser } from "../../../utils/loginUserUtils/login.utils";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const setFormState = useSearchFormStore((state: any) => state.setFormState);
  // const userDetails = useSearchFormStore((state: any) => state.userDetails);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    /**
     * post the data to the database if it's not present
     */
    try {
      const data = await signUpUser(formData, ADD_USER_DETAILS_URL);
      if (data) {
        setErrorMessage("");
        navigate("/home");
      }
    } catch (e: any) {
      setErrorMessage(MAILID_EXISTS);
      console.log("***error", e);
    }
  };

  const handleFormState = (e: any) => {
    setFormState([FORM_STATE], {
      [FORM_STATE]: {
        formState: "SignIn",
      },
    });
  };

  return (
    <div className="container login-form">
      <div className="row justify-content-center">
        <div className="col-md-6 form-details">
          <h2 className="py-3">Signup Form</h2>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between pb-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <button
                type="button"
                onClick={handleFormState}
                className="btn btn-primary"
              >
                Please Sign In...!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
