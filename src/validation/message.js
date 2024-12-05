import * as Yup from "yup";

export const messageValidation = Yup.object({
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string().length(10, "Must be 10 digits").required("Required"),
  message: Yup.string().required("Required"),
});
