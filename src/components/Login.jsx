import { useState } from "react";

const Login = ({ setAlert }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (email.trim() === "test@test.com" && password.trim() === "123123") {
      setAlert({ error: false, msg: "Login successful", color: "success" });
      return;
    }
    setAlert({
      error: true,
      msg: "Credentials are not valid",
      color: "danger",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-2"
      />
      <button
        type="submit"
        disabled={!email.trim() || !password.trim()}
        className="btn btn-dark"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
