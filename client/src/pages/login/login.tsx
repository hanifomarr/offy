import { useState } from "react";
import { useNavigate } from "react-router-dom";

import apiRequest from "../../libs/apiRequest";
import { useAuth } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/");
    } catch (error) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default Login;
