import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("pankaj12kas@gmail.com");
  const [password, setPassword] = useState("Karan1234@");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7777/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 REQUIRED for cookies
        body: JSON.stringify({ email, password }),
      });

      console.log("login page geting", res);

      const data = await res.json();
      console.log("getuser dats", data);

      if (res.status === 200) {
        alert("login successful");
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <NavLink to="/signup">Go to Signup || Creat a Account</NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
