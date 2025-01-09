import { useForm } from "react-hook-form";
import client from "../client";
import { EmailAddressContext } from "../context";
import { useContext } from "react";

const SendMail = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mail_address, setMail_address] = useContext(EmailAddressContext);
  const onSubmit = async (data) => {
    data["email_addresses"] = mail_address;
    data["configuration"] = 25;
    const formData = new FormData();
    formData.append("subject", data["subject"]);
    formData.append("body", data["body"]);
    for (const email_address of mail_address) {
      formData.append("email_addresses", email_address);
    }
    formData.append("configuration", data["configuration"]);
    // Properly append attachments
    if (data["attachments"] && data["attachments"].length > 0) {
      for (let i = 0; i < data["attachments"].length; i++) {
        formData.append("attachments", data["attachments"][i]);
      }
    }
    try {
      const response = await client.post("send_mail/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status == 201) {
        alert("Email sending process successfully started.");
        reset();
        setMail_address([]);
      } else {
        alert("Bad request");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject*
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter the subject"
            required
            {...register("subject")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body*
          </label>
          <textarea
            className="form-control"
            id="body"
            rows={4}
            placeholder="Enter your message"
            required
            {...register("body")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attachments" className="form-label">
            Attachments (Optional)
          </label>
          <input
            type="file"
            className="form-control"
            id="attachments"
            {...register("attachments")}
            multiple
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SendMail;
