import * as Yup from "yup";

export const volunteerValidation = Yup.object().shape({
  firstName: Yup.string().max(100, "Max 100 chars").required("Required"),
  lastName: Yup.string().max(100, "Max 100 chars").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be 10 digits")
    .required("Required"),
  city: Yup.string().max(100, "Max 100 chars").required("Required"),
  state: Yup.string().required("Required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid")
    .required("Required"),
  skills: Yup.string().max(50, "Max 50 chars").required("Required"),
  availability: Yup.string()
    .oneOf(["Full-time", "Part-time", "Contract"], "Invalid")
    .required("Required"),
  experience: Yup.string().max(50, "Max 50 chars").required("Required"),
});
