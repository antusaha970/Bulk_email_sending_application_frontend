import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">
        Send bulk message from our website using your configuration
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <Link to={"/add_mails"} className="btn btn-primary btn-lg">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Home;
