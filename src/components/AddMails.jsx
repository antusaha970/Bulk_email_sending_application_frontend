import { useContext } from "react";
import { EmailAddressContext } from "../context";
import { useForm } from "react-hook-form";
import client from "../client";

const AddMails = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mail_address, setMail_address] = useContext(EmailAddressContext);

  const onSubmit = (data) => {
    setMail_address((prevState) => [...prevState, data["email"]]);
    reset();
  };
  const handleClearEmails = () => {
    setMail_address([]);
  };

  const handleExcelFileUpload = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data["file"][0]);
      const response = await client.post(
        "/email_address/email_address_list/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status == 200) {
        const data = response?.data?.data;
        setMail_address((prevState) => [...prevState, ...data]);
        alert("mail added successfully");
      }
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-primary"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control border-2"
              placeholder="Recipient's email address"
              aria-describedby="button-addon2"
              required
              {...register("email")}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
            <button
              onClick={handleClearEmails}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Clear
            </button>
          </div>
        </form>
        <form
          className="mx-auto shadow p-4 rounded bg-white w-75 border-top border-4 border-success my-3"
          onSubmit={handleSubmit(handleExcelFileUpload)}
        >
          <h4 className="text-center">Upload excel file</h4>
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control border-2"
              placeholder="Recipient's email address"
              aria-describedby="button-addon2"
              required
              {...register("file")}
            />
            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      <div className="my-5 mx-5">
        <table className="table table-striped ">
          <thead className="text-center">
            <tr>
              <th className="fw-bold text-black fs-5">Email Address</th>
            </tr>
          </thead>
          <tbody>
            {mail_address?.map((add, idx) => (
              <tr key={idx}>
                <td>{add}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddMails;
