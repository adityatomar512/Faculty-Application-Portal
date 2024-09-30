//Login_Page.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Login_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateButtonClick = async () => {
    navigate("/Create_Account");
  }

  const handleResetPasswordClick = async () => {
    navigate("/Reset_Password");
  }
  

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      });
      //Store the reg_id in local storage
      localStorage.setItem("reg_id", response.data.reg_id);
      
      // Handle successful login here
      alert("Logged in Successfully");
      navigate("/Personal_Details"); 
    } catch (error) {
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="Login_Page">
      <br />
      <br />
      <h3 style={{ color: '#e10425', marginTop: '6rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif', fontSize: '1.5rem' }}>Application for Faculty Position</h3>
      <div className="container" style={{ borderRadius: '10rem', height: '7.5rem', marginTop: '-1rem', marginLeft: '12rem', marginRight: '12rem' }}>
        
          <div className="row" style={{ borderWidth: '0.2rem', borderStyle: 'solid', borderRadius: '1rem', boxShadow: '0rem 1rem 9rem 1rem #284d7a', backgroundColor: '#F7FFFF' }}>
            <div className="col-md-6" style={{ height: '25rem', borderRadius: '10px 0px 0px 10px' }}>
            <img src="https://i.postimg.cc/d37BZqr2/iitplogo.png" style={{ marginTop: '7.5%', marginLeft: '7.5%', height: '70%' }} />
            <p style={{ textAlign: 'center' }}></p>
            <h3 style={{ marginTop: '-20rem', marginLeft: '20rem', textAlign: 'center', fontSize: '1.5rem' }}><strong><u>LOGIN HERE</u></strong></h3><br />
            <span style={{ marginLeft: '24rem', fontSize: '1.25rem'}}>Email Address</span>
            <input
              type="text"
              className="input-text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <span style={{ marginLeft: '24rem', marginRight: '2.5rem', fontSize: '1.25rem'}}>Password</span>
            <input
              type="password"
              className="input-text"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div style={{ display: 'flex'}}>
            <button
              onClick={handleButtonClick}
              type="submit"
              className="universal-button"
              style={{ backgroundColor: '#4CAF50', marginLeft: '24rem' }}
            > Login </button>
            <button
              onClick={handleResetPasswordClick} // Added event handler for reset password button
              type="button"
              className="universal-button"
              style={{ backgroundColor: '#F44336', marginLeft: '10.5rem' }}
            > Reset Password </button>
            </div>
            {error && <div className="error" style={{marginLeft: '30rem'}}>{error}</div>}
            <p style={{ textAlign: 'center', color: 'green', fontSize: '1.3em', marginLeft: '20rem', marginTop:'2rem' }}><strong>NOT REGISTERED? </strong> 
            <button
              onClick={handleCreateButtonClick}
              type="submit"
              className="universal-button"
              style={{backgroundColor: '#337ab7'}}
            > SIGN UP </button>
            </p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Login_Page;


