import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Bulk mail sender
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/set_config"}
                className="nav-link"
                aria-current="page"
              >
                Set Config
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/add_mails"} className="nav-link">
                Add Mail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/send_mails"} className="nav-link">
                Send mail
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                View mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
