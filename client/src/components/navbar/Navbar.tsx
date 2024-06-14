import { useState } from "react";

import { Building2, Menu } from "lucide-react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { currentUser } = useAuth();
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <Building2 size={30} />
          <span>Whitespace Hub</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="list">List</Link>
        <Link to="/">Contacts</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {1 > 0 && <div className="notification">{1}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/">Sign In</Link>
            <Link to="/" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="menu-icon">
          <Menu size={50} onClick={() => setOpen((prev) => !prev)} />
          <div className={open ? "menu-list active" : "menu-list"}>
            <Link to="/">Home</Link>
            <Link to="list">List</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Sign In</Link>
            <Link to="/">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
