import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import client from "../client";
import { useContext } from "react";
import { LoginContext } from "../context";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [, setIsLoggedIn] = useContext(LoginContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await client.post("account/login/", data);
      alert("Login successful");
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="bg-light">
      <h2 className="text-center">Login</h2>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
        >
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Username*
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter the subject"
              required
              {...register("username")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              id="subject"
              placeholder="Enter the subject"
              required
              {...register("password")}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
