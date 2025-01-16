import { useForm } from "react-hook-form";
import client from "../client";

const SetConfigFormSMS = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await client.post("/bulk_sms/sms_config/", data);
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="account_sid" className="form-label">
            Account SID*
          </label>
          <input
            type="text"
            className="form-control"
            id="account_sid"
            name="account_sid"
            placeholder="Enter twilio Account Sid"
            required
            {...register("account_sid")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="auth_token" className="form-label">
            Auth Token*
          </label>
          <input
            type="text"
            className="form-control"
            id="auth_token"
            name="auth_token"
            placeholder="Enter twilio Auth Token"
            required
            {...register("auth_token")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sender_number" className="form-label">
            Sender Number*
          </label>
          <input
            type="text"
            className="form-control"
            id="sender_number"
            name="sender_number"
            placeholder="Enter Sender Number "
            required
            {...register("sender_number")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username*
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter Username"
            required
            {...register("username")}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetConfigFormSMS;
