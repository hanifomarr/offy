import { useState } from "react";

import { Building2, Menu } from "lucide-react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <Link to="/">Sign In</Link>
        <Link to="/" className="register">
          Sign Up
        </Link>
        <Menu
          className="menu-icon"
          size={50}
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className={open ? "menu-list active" : "menu-list"}>
          <Link to="/">Home</Link>
          <Link to="list">List</Link>
          <Link to="/">Contacts</Link>
          <Link to="/">Sign In</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
