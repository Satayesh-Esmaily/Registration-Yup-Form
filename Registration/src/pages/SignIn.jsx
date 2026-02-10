import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInSchema } from "../validations/signInSchema";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormSuccess from "../components/FormSuccess";
import AuthFooter from "../components/AuthFooter";
import AuthLayout from "../layout/AuthLayout";
import AuthHeader from "../components/AuthHeader";

export default function SignIn() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
    setSuccess(true);
    reset();
  };

  return (
    <AuthLayout>
      <AuthHeader title="Sign In" />

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <FormButton text="Sign In" disabled={!isValid} />
      </form>

      <FormSuccess show={success} message="Sign In Successful!" />


      <AuthFooter page="signin" />
    </AuthLayout>
  );
}
