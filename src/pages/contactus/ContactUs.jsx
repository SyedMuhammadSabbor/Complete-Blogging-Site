import React, { useState } from 'react';
import './ContactUs.css';
import InputBox from '../../components/inputbox/InputBox';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup/Popup';
import useStoreContext from '../../context';

const signDetails = [
  { labelName: "Name", enter: "name" },
  { labelName: "Email", enter: "email" },
  { labelName: "Contact", enter: "contact" },
  { labelName: "How can we help", enter: "help" }
];

const initialSignDetail = {
  email: "",
  help: "",
  name: "",
  contact: "",
  message: ""
};

export default function ContactUs() {
  const navigate = useNavigate();
  const [signUpDetail, setSignUpDetail] = useState(initialSignDetail);
  const { showPopup, setShowPopup } = useStoreContext();

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
            <span>Contact Us</span>
            <p>Enter your details so we can assist you.</p>
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
              <label>Message:</label>
              <textarea
                name="message"
                value={signUpDetail.message}
                onChange={handleChange}
              />
              <button className="btn-login" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <Popup />}
    </>
  );
}
