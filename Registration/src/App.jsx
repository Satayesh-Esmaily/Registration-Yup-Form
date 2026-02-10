import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "./validations/registerSchema";
import FormInput from "./components/FormInput";
import FormCheckbox from "./components/FormCheckbox";
import FormButton from "./components/FormButton";
import FormSuccess from "./components/FormSuccess";

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
  reValidateMode: "onChange",
});

  const onSubmit = (data) => {
      const result = {
    fullName: data.fullName,
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
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl 
                bg-white dark:bg-black
                shadow-lg dark:shadow-none
                border border-gray-200 dark:border-gray-800">

      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
       Register
      </h2>


      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
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
          showError={touchedFields.terms || isValid === false}
        />


        <FormButton
          text="Register"
          disabled={!isValid}
       />

      </form>

      <FormSuccess show={success} />
    </div>
  );
}
