import "./login.scss";
import apiRequest from "../../libs/apiRequest";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

      console.log(res.data);
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
