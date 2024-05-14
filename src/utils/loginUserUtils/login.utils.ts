import axios from "axios";

export const getUserDetails = async (
  setFormState?: any,
  userDetails?: any,
  email?: string,
  url?: string
) => {
  return axios
    .get(`${url}${email}`)
    .then((res) => {
      setFormState([userDetails], {
        [userDetails]: {
          email: res.data.mailId,
          userName: res.data.userName,
          password: res.data.password,
        },
      });
    })
    .catch((e) => console.log("Error while getting session:", e));
};

export const signUpUser = async (formData?: any, url?: string) => {
  // If email is not present, post the user data
  return axios.post(`${url}`, {
    mailId: formData.email,
    userName: formData.username,
    password: formData.password,
  });
};

export const signInUser = async (formData?: any, url?: string) => {
  // If email is not present, post the user data
  return axios.post(`${url}`, {
    mailId: formData.email,
    password: formData.password,
  });
};
