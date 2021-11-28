import * as yup from "yup";

export const reduxFormcSchema = yup.object().shape({
  name: yup.string().required("Enter Your Name"),
  email: yup
    .string()
    .email("Enter Correct Format Email")
    .required("Enter Email"),
  country: yup.object().required("Select Your Country"),
});
