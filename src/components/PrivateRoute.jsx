import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function PrivateRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default PrivateRoute;
