import { useContext } from "react";
import { EmailAddressContext } from "../context";
import { useForm } from "react-hook-form";

const AddMails = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mail_address, setMail_address] = useContext(EmailAddressContext);

  const onSubmit = (data) => {
    setMail_address((prevState) => [...prevState, data["email"]]);
    reset();
  };
  console.log(mail_address);
  const handleClearEmails = () => {
    setMail_address([]);
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
