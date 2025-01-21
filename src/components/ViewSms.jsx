import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const ViewSms = () => {
  const [allSms, setAllSms] = useState([]);

  useEffect(() => {
    const getAllMails = async () => {
      try {
        const response = await client.get("/bulk_sms/sms_compose/");
        setAllSms(response.data.details);
      } catch (error) {
        console.error(error);
      }
    };
    getAllMails();
  }, []);

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
            {allSms?.map((sms, idx) => (
              <tr key={idx}>
                <td>{sms.id}</td>
                <td>{sms.body}</td>
                <td>
                  <Link to={`/view_sms/${sms.id}`}>
                    <button className="btn btn-info">View SMS</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewSms;
