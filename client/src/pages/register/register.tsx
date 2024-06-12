import "./register.scss";

const Register = () => {
  const handleRegister = () => {};
  return (
    <div className="register">
      <div className="form-container">
        <h1>Create an account</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default Register;
