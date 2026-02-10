import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../validations/registerSchema";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import FormButton from "../components/FormButton";
import FormSuccess from "../components/FormSuccess";
import AuthFooter from "../components/AuthFooter";
import AuthLayout from "../layout/AuthLayout";
import AuthHeader from "../components/AuthHeader";

export default function RegisterForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
      const result = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    terms: data.terms,
  };
    console.log(result);
    setSuccess(true);
    reset();
  };
  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Register
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName?.message}
        />

        <FormInput
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName?.message}
        />


        <FormInput
          label="Email"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <FormCheckbox
          label="I accept the Terms & Conditions"
          name="terms"
          register={register}
          error={errors.terms?.message}
          showError={touchedFields.terms}
        />

        <FormButton text="Register" disabled={!isValid} />
      </form>

      <FormSuccess show={success} message="Registration Successful!" />


      <AuthFooter page="register" />
    </AuthLayout>
  );
}
