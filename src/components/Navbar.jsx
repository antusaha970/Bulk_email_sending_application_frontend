import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from "../context";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
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
              {!isLoggedIn && (
                <NavLink to={"/login"} className="nav-link" aria-current="page">
                  Login
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {!isLoggedIn && (
                <NavLink
                  to={"/register"}
                  className="nav-link"
                  aria-current="page"
                >
                  Register
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn && (
                <NavLink
                  to={"/set_config"}
                  className="nav-link"
                  aria-current="page"
                >
                  Set Config
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn && (
                <NavLink to={"/add_mails"} className="nav-link">
                  Add Mail
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn && (
                <NavLink to={"/send_mails"} className="nav-link">
                  Send mail
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn && (
                <NavLink className="nav-link" to={"/view_mails"}>
                  View mails
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn && (
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
