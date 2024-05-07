import { useState } from "react";

import { Building2, Menu } from "lucide-react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className="logo">
          <Building2 size={30} />
          <span>Whitespace Hub</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <Menu
          className="menu-icon"
          size={50}
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className={open ? "menu-list active" : "menu-list"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
