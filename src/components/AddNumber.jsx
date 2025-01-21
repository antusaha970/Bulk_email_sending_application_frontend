import { useContext } from "react";
import { PhoneNumberContext } from "../context";
import { useForm } from "react-hook-form";
import client from "../client";

const AddNumber = () => {
  const [phone_number, setPhone_number] = useContext(PhoneNumberContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setPhone_number((prevState) => [...prevState, data["number"]]);
    reset();
  };
  const handleClearNumber = () => {
    setPhone_number([]);
  };

  const handleExcelFileUpload = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data["file"][0]);
      const response = await client.post(
        "/bulk_sms/recipient_numbers_list/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status == 200) {
        const data = response?.data?.data;
        setPhone_number((prevState) => [...prevState, ...data]);
        alert("number added successfully");
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
              type="number"
              className="form-control border-2"
              placeholder="Recipient's number"
              aria-describedby="button-addon2"
              required
              {...register("number")}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
            <button
              onClick={handleClearNumber}
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
              <th className="fw-bold text-black fs-5">Phone numbers</th>
            </tr>
          </thead>
          <tbody>
            {phone_number?.map((num, idx) => (
              <tr key={idx}>
                <td>{num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddNumber;
