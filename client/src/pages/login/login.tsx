import { Link } from "react-router-dom";

import Button from "../../components/ui/button/Button";

const Login = () => {
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__form__header">
          <h2>Welcome Back</h2>
          <p>Enter your email below to login to your account</p>
        </div>
        <form className="login__form__body">
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
          <Button variant="primary">Login</Button>
        </form>
        <div className="login__form__footer">
          <p>
            Don't have an account?
            <Link to={"/register"} className="link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="login__img-container"></div>
    </div>
  );
};

export default Login;
