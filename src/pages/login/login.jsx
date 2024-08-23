import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savedUsers } from "./savedUsers";
import { secret } from "../../utils/jwt.config";
import jwt from "jwt-encode";
import useStoreContext from "../../context";
import { setCookie } from "../../utils/setCookie";
import InputBox from "../../components/inputbox/InputBox";

const inputDetails = [
  {
    labelName: "Email",
    enter: "email",
  },
  {
    labelName: "Password",
    enter: "password",
  },
];
export default function Login() {
  const navigate = useNavigate();
  const initialDetails = {
    email: "",
    password: "",
  };
  const { setUser, setAccessToken } = useStoreContext();
  const [loginDetails, setLoginDetails] = useState(initialDetails);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchUser = savedUsers.find(
      (user) =>
        user.saveEmail === loginDetails.email &&
        user.savedPassword === loginDetails.password
    );
    if (matchUser) {
      const accessToken = jwt(matchUser, secret);
      setUser(matchUser);
      setAccessToken(accessToken);
      setCookie("accessToken", accessToken, 10000);
      setTimeout(() => {
        navigate("/");
      }, 0);
    } else {
      setError("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
        <div className="log">
        <div className="login-content" style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {inputDetails.map((item, index) => (
              <InputBox
                key={index}
                labelName={item.labelName}
                enter={item.enter}
                value={loginDetails[item.enter]}
                handleChange={handleChange}
              />
            ))}
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
          <div className="create">
          <a href="/signup">Create an account</a>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
    </>
 
  );
}
