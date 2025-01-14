import { useEffect, useState } from "react";
import client from "../client";

const ViewMails = () => {
  const [allMails, setAllMails] = useState([]);

  useEffect(() => {
    const getAllMails = async () => {
      try {
        const response = await client.get("/view_mails");
        setAllMails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllMails();
  }, []);

  console.log(allMails);

  return (
    <div className="container mt-5">
      <h5 className="text-center fw-bold">Views all compose mail</h5>
      <div className="mt-5">
        <table className="table table-striped shadow-sm rounded-3">
          <thead className="text-center">
            <tr>
              <th className="fw-bold text-black fs-5">Id</th>
              <th className="fw-bold text-black fs-5">Subject</th>
              <th className="fw-bold text-black fs-5">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allMails?.data?.map((mail, idx) => (
              <tr key={idx}>
                <td>{mail.id}</td>
                <td>{mail.subject}</td>
                <td>
                  <button className="btn btn-info">View mail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMails;
