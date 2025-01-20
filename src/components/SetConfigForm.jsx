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
      reset();
    }
  };
  return (
    <div className="bg-light mb-5">
      <h2 className="text-center">Set you configurations</h2>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <form
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter the name"
              required
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="provider" className="form-label">
              provider *
            </label>
            <select {...register("provider")} id="provider" required>
              <option value="gmail">gmail</option>
              <option value="personal">personal</option>
              <option value="ses" selected>
                ses
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              host *
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter the host"
              required
              {...register("host")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="port" className="form-label">
              port
            </label>
            <input
              type="number"
              className="form-control"
              id="port"
              placeholder="Enter the port"
              {...register("post")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter the username"
              {...register("username")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter the password"
              {...register("password")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="use_tls" className="form-label">
              use_tls
            </label>
            <input
              type="checkbox"
              {...register("use_tls")}
              defaultChecked
              id="use_tls"
              className="ms-3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              use_ssl
            </label>
            <input
              type="checkbox"
              {...register("use_ssl")}
              id="use_ssl"
              className="ms-3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aws_access_key_id" className="form-label">
              aws_access_key_id *
            </label>
            <input
              type="text"
              className="form-control"
              id="aws_access_key_id"
              placeholder="Enter the aws_access_key_id"
              required
              {...register("aws_access_key_id")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aws_secret_access_key" className="form-label">
              aws_secret_access_key *
            </label>
            <input
              type="text"
              className="form-control"
              id="aws_secret_access_key"
              placeholder="Enter the aws_secret_access_key"
              required
              {...register("aws_secret_access_key")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aws_region" className="form-label">
              aws_region
            </label>
            <input
              type="text"
              className="form-control"
              id="aws_region"
              placeholder="Enter the aws_region"
              {...register("aws_region")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ses_configuration_set" className="form-label">
              ses_configuration_set
            </label>
            <input
              type="text"
              className="form-control"
              id="ses_configuration_set"
              placeholder="Enter the ses_configuration_set"
              {...register("ses_configuration_set")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="iam_role_arn" className="form-label">
              iam_role_arn
            </label>
            <input
              type="text"
              className="form-control"
              id="iam_role_arn"
              placeholder="Enter the iam_role_arn"
              {...register("iam_role_arn")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="enable_tracking" className="form-label">
              enable_tracking
            </label>
            <input
              type="checkbox"
              {...register("enable_tracking")}
              id="enable_tracking"
              className="ms-3"
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
