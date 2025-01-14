import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";

// eslint-disable-next-line react/prop-types
const SpecificMail = () => {
  const { id } = useParams();
  const [mail, setMail] = useState({});
  useEffect(() => {
    const getMailDetails = async (id) => {
      try {
        const response = await client.get(`/view_mails/${id}`);
        setMail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMailDetails(id);
  }, [id]);

  console.log(mail);

  return (
    <div className="container mt-5">
      <h4 className="text-center fw-bold ">Views Specific mail</h4>
      <div className="mt-5">
        <table className="table table-striped shadow-sm rounded-3">
          <thead className="text-center">
            <tr>
              <th className="fw-bold text-black fs-5">Id</th>
              <th className="fw-bold text-black fs-5">Email Address</th>
              <th className="fw-bold text-black fs-5">Status</th>
              <th className="fw-bold text-black fs-5">Failed Reason</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {mail?.data?.map((ml, idx) => (
              <tr key={idx}>
                <td>{ml.emailId}</td>
                <td>{ml.email_address}</td>
                <td>{ml.status}</td>
                <td>
                  {ml.failed_reason == null ? "Not failed" : ml.failed_reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecificMail;
