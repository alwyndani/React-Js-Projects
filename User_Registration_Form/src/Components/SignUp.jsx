/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const SignUp = ({ ToggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data));
    ToggleForm();
  };
  console.log(errors);

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        {errors.Name && <p>This field is required</p>}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <p>Enter a valid email</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            min: 5,
            maxLength: 12,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
          })}
        />
        {errors.Password && (
          <p>
            Password should contain capital letters,small letters,numbers and
            special characters
          </p>
        )}

        <input type="submit" />
        <h4
          onClick={() => {
            ToggleForm();
          }}
        >
          Already a user? Log In
        </h4>
      </form>
    </>
  );
};

export default SignUp;
