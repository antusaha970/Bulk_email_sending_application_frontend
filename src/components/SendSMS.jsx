import { useContext, useEffect, useState } from "react";
import client from "../client";
import { useForm } from "react-hook-form";
import { PhoneNumberContext } from "../context";

const SendSMS = () => {
  const { register, handleSubmit, reset } = useForm();
  const [configs, setConfigs] = useState([]);
  const [phoneNumbers] = useContext(PhoneNumberContext);
  useEffect(() => {
    const getAllConfigurations = async () => {
      try {
        const response = await client.get("/bulk_sms/sms_config/");
        setConfigs(response.data.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong!!");
      }
    };
    getAllConfigurations();
  }, []);

  const onSubmit = async (data) => {
    data["config_id"] = parseInt(data["config_id"]);
    data["recipients"] = phoneNumbers;
    try {
      const response = await client.post("/bulk_sms/sms_compose/", data);
      if (response.status == 202) {
        alert("Processing started successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!!");
    }
  };

  return (
    <div className="bg-light">
      <h2 className="text-center">Set your SMS Compose</h2>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <form
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
          id="configForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body*
            </label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              placeholder="Write your SMS"
              required
              rows={5}
              {...register("body")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="config" className="form-label">
              Select configuration
            </label>
            <select
              className="form-select"
              aria-label="select configurations"
              id="config"
              {...register("config_id")}
              required
            >
              <option selected value="none">
                select configs
              </option>
              {configs?.map((config, idx) => (
                <option value={config.id} key={idx}>
                  {config.username}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendSMS;
