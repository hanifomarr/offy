import { Link } from "react-router-dom";

import Button from "../../components/ui/button/Button";

const Register = () => {
  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form__header">
          <h2>Create Account</h2>
          <p>Fill in your details to create an account</p>
        </div>
        <form className="register__form__body">
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="inputGroup">
            <div className="flex items-center">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="inputGroup">
            <div className="flex items-center">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <Button variant="primary">Sign Up</Button>
        </form>
        <div className="register__form__footer">
          <p>
            Already have an account?
            <Link to={"/login"} className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="register__img-container"></div>
    </div>
  );
};

export default Register;
