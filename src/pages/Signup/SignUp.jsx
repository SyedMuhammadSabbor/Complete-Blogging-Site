import React, { useState } from 'react';
import './SignUp.css';
import InputBox from '../../components/inputbox/InputBox';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup/Popup';
import useStoreContext from '../../context';

const signDetails = [
  { labelName: "First name", enter: "firstname" },
  { labelName: "Last name", enter: "lastname" },
  { labelName: "Email", enter: "email" },
  { labelName: "Password", enter: "password" },
];

const initialSignDetail = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const [signUpDetail, setSignUpDetail] = useState(initialSignDetail);
  const {showPopup , setShowPopup} = useStoreContext()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // Add any additional logic for handling sign up here
  };

  return (
    <>
      <div className="login-container">
        <div className="sign-up">
          <div className="heads">
            <span>Sign Up</span>
            <p>Enter your Details to Create Account.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {signDetails.map((item, index) => (
                <InputBox
                  key={index}
                  labelName={item.labelName}
                  enter={item.enter}
                  value={signUpDetail[item.enter]}
                  handleChange={handleChange}
                />
              ))}
              <button className="btn-login" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <Popup />}
    </>
  );
}
