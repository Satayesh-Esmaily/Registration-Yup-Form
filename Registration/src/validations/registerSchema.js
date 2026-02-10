import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("Full name is required")
    .min(4, "Minimum 4 characters"),

 lastName: yup
    .string()
    .required("Last name is required")
    .min(4, "Minimum 4 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/\d/, "Must contain at least one number"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
});
