import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";

const SpecificSms = () => {
  const { id } = useParams();
  const [sms, setSms] = useState([]);
  useEffect(() => {
    const getMailDetails = async (id) => {
      try {
        const response = await client.get(`/bulk_sms/sms_compose/${id}/`);
        setSms(response?.data?.data?.recipient_history);
      } catch (error) {
        console.error(error);
      }
    };
    getMailDetails(id);
  }, [id]);

  console.log(sms);

  return (
    <div className="container mt-5">
      <h4 className="text-center fw-bold ">Views Specific mail</h4>
      <div className="mt-5">
        <table className="table table-striped shadow-sm rounded-3">
          <thead className="text-center">
            <tr>
              <th className="fw-bold text-black fs-5">Number</th>
              <th className="fw-bold text-black fs-5">Status</th>
              <th className="fw-bold text-black fs-5">Failed Reason</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {sms?.map((sm, idx) => (
              <tr key={idx}>
                <td>{sm?.number}</td>
                <td>{sm?.status}</td>
                <td>{sm?.failed_reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecificSms;
