import { useForm } from "react-hook-form";
import client from "../client";

const SetConfigForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await client.post("/configurations/", data);
      if (response.status == 201) {
        alert("Configurations added successfully");
        reset();
      } else {
        alert("bad request");
      }
    } catch (error) {
      console.error(error);
      alert("bad request");
    }
  };
  return (
    <div className="bg-light">
      <h2 className="text-center">Set you configurations</h2>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <form
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Mail Username*
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
              Mail Password*
            </label>
            <input
              type="text"
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

export default SetConfigForm;
