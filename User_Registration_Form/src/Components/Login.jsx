/* eslint-disable */
import { useForm } from "react-hook-form";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Login = ({ ToggleForm, IsLoggedIn }) => {
    //part of react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () => toast("No data stored in the local storage");

  const onSubmit = (data) => {
    const storedDataString = localStorage.getItem('formData')   //retrieve the stored data from local storage
    if(storedDataString) {
      const storedData = JSON.parse(storedDataString)
      if (data.Email == storedData.Email && data.Password == storedData.Password) {
        IsLoggedIn();
      } else {
        alert('Enter valid credentials')
      }
    } else {
        {notify}
 <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    }
    
  }; 

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        

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
        

        <input type="submit" />
        <h4
          onClick={() => {
            ToggleForm();
          }}
        >
          Not a user? Sign Up
        </h4>
      </form>
    </>
  );
};

export default Login;
