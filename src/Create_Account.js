//Create_Account.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Create_Acc() {
  const [inputData, setInputData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    category: "",
    password: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false); // State to track password match error
  const navigate = useNavigate();

  const handleLoginClick = async () => {
      navigate('/Login_Page');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputData.password !== inputData.retypePassword) {
      setPasswordMatchError(true);
      return;
    }
    try {
      const createUserResponse = await axios.post(
        "http://localhost:3000/api/users/createUser",
        inputData
      );

      if (createUserResponse.status === 201) {
        alert("User Created Successfully!");
        navigate("/");
      } else {
        console.error(
          "Failed to create user:",
          createUserResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="Create_Acc">
      <br />
      <br />
      <h3 style={{ color: '#e10425', marginTop: '6rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif', fontSize: '1.5rem' }}>Application for Faculty Position</h3>
      <div className="container" style={{ width: '70rem', borderRadius: '10rem', height: '7.5rem', marginTop: '-1rem', marginLeft: '3rem', marginRight: '3rem' }}>
          <div className="row" style={{ height: '33.5rem', borderWidth: '0.2rem', borderStyle: 'solid', borderRadius: '1rem', boxShadow: '0rem 1rem 9rem 1rem #284d7a', backgroundColor: '#F7FFFF' }}>
            <div className="col-md-6" style={{ height: '25rem', borderRadius: '10px 0px 0px 10px' }}>
            <img src="https://i.postimg.cc/d37BZqr2/iitplogo.png" style={{ marginTop: '7.5%', marginLeft: '7.5%', height: '70%' }} />
            <p style={{ textAlign: 'center' }}></p>
            <p style={{ textAlign: 'center' }}></p>
            <h3 style={{ marginTop: '-22rem', marginLeft: '20rem', textAlign: 'center', fontSize: '1.5rem', color: 'green' }}>CREATE YOUR PROFILE</h3><br />
            </div>
            <div style={{marginTop: '-20rem'}}>
              <input
                type="text"
                name="f_name"
                className="input-text"
                placeholder="First name"
                onChange={(e) =>
                  setInputData({ ...inputData, f_name: e.target.value })
                }
                style={{marginLeft: '30rem'}}
              />
              <input
                type="text"
                name="l_name"
                className="input-text"
                placeholder="Last name"
                onChange={(e) =>
                  setInputData({ ...inputData, l_name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                className="input-text"
                placeholder="Your email"
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
                style={{marginLeft: '30rem'}}
              />
              <select
                name="category"
                className="input-text"
                onChange={(e) =>
                  setInputData({ ...inputData, category: e.target.value })
                }
                 style={{ width: '16.20rem' }}
              >
              <option value="">Select category</option>
              <option value="UR">UR</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="PWD">PWD</option>
              <option value="EWS">EWS</option>
              </select>
              <input
                type="password"
                name="password"
                className="input-text"
                placeholder="New password"
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
                style={{marginLeft: '30rem'}}
              />
              <input
                type="password"
                name="retypePassword"
                className="input-text"
                placeholder="Retype - new password"
                onChange={(e) => {
                  setInputData({ ...inputData, retypePassword: e.target.value });
                  setPasswordMatchError(false); // Reset password match error when retype password changes
                }}
              />
              <input
                type="text"
                name="captcha"
                className="input-text"
                placeholder="Enter Captcha"
                style={{marginLeft: '30rem'}}
              />
              <input
                type="text"
                name="captchaText"
                className="input-text"
                placeholder="Insert image text"
              />
            </div>
            {passwordMatchError && (
              <div style={{ color: 'red', fontSize: '1rem', marginLeft: '42rem', marginTop: '1rem' }}>
                Passwords do not match!
              </div>
            )}
            <div style={{color: 'red', fontSize: '1.25rem', fontWeight: 'bold', marginLeft: '30rem', marginTop: '1rem'}}>Note:</div>
            <div style={{color: 'blue', fontWeight: 'bold', marginLeft: '30rem', marginTop: '1rem'}}>
              1. Applicant should kindly check their email for activation link to access the portal.<br/>
              2. Please check SPAM folder also, in case activation link is not received in INBOX.<br />
              3. Applicant applying for more than one position/ department should use <span style={{color: 'red'}}>different email id</span> for each application.<br />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="universal-button"
              style={{ backgroundColor: '#337ab7', marginLeft: '30rem', marginTop: '1.5rem' }}
            > 
              Register
            </button>
            <div style={{color:'green', marginLeft: '55rem', marginTop: '-3.5rem'}}>
              If registered
              <button
                onClick={handleLoginClick}
                type="submit"
                className="universal-button"
                style={{ backgroundColor: '#4CAF50', marginLeft: '0.5rem', marginTop: '1.5rem' }}
              > 
                Login here
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Create_Acc;
