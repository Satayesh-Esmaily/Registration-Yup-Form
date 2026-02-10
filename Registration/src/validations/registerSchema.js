import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/\d/, "Must contain at least one number"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
});
