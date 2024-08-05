import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, Menu } from "lucide-react";

import Button from "../ui/button/Button";
import navigationConfig from "../../config/navigationConfig";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <Link to={"/"} className="navbar__logo">
        <Building2 size={30} />
        <span>offy</span>
      </Link>

      <ul className="navbar__links">
        {navigationConfig.mainNavLinks.map((link) => (
          <li
            key={link.path}
            className={`navbar__item ${
              location.pathname === link.path ? "navbar__item--active" : ""
            }`}
          >
            <Link to={link.path} className="navbar__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <Button
          variant="primary"
          onClick={() => navigate("/register")}
          size="medium"
        >
          Rent your space
        </Button>
        <Button onClick={() => navigate("/login")} size="medium">
          Sign In
        </Button>
      </div>

      <div className="navbar__toggle">
        <Menu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
