import { useState } from "react";
import { useSearchFormStore } from "../../modules/store";
import {
  USER_DETAILS,
  LOGIN_USER_DETAILS_URL,
  USER_NOT_FOUND,
  FORM_STATE,
} from "../../../utils/constants/constants";
import { signInUser } from "../../../utils/loginUserUtils/login.utils";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const setFormState = useSearchFormStore((state: any) => state.setFormState);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormState = (e: any) => {
    setFormState([FORM_STATE], {
      [FORM_STATE]: {
        formState: "SignUp",
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    /**
     * post the data to the database if it's not present
     */
    try {
      const data = await signInUser(formData, LOGIN_USER_DETAILS_URL);
      console.log("****data", data);
      if (data) {
        setErrorMessage("");
        // setFormState([USER_DETAILS], {
        //   [USER_DETAILS]: {
        //     ...formData,
        //   },
        // });
        navigate("/home");
      }
    } catch (e: any) {
      setErrorMessage(USER_NOT_FOUND);
      console.log("***error", e);
    }
  };

  return (
    <div className="container login-form">
      <div className="row justify-content-center">
        <div className="col-md-6 form-details">
          <h2 className="py-3">SignIn Form</h2>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
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
                Login
              </button>
              <button
                type="button"
                onClick={handleFormState}
                className="btn btn-primary"
              >
                New User Please Sign Up...!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
