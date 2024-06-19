import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/authContext";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Navigate to={"/login"} />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequireAuth };
