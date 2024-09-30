import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./App.css";

function Reset_Password() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/resetpassword", {
        email: email,
      });
      // Handle successful reset password here
      alert("Reset password link sent successfully");
    } catch (error) {
      setError("Failed to send reset password link. Please try again.");
    }
  };

  const handleLoginClick = async() => {
      navigate('/');
  }

  return (
    <div className="Reset_Password">
      <br />
      <br />
      <h3 style={{ color: '#e10425', marginTop: '6rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif', fontSize: '1.5rem' }}>Application for Faculty Position</h3>
      <div className="container" style={{ borderRadius: '10rem', height: '7.5rem', marginTop: '-1rem', marginLeft: '12rem', marginRight: '12rem' }}>
        <div className="row" style={{ borderWidth: '0.2rem', borderStyle: 'solid', borderRadius: '1rem', boxShadow: '0rem 1rem 9rem 1rem #284d7a', backgroundColor: '#F7FFFF' }}>
          <div className="col-md-6" style={{ height: '25rem', borderRadius: '10px 0px 0px 10px', position: 'relative' }}>
            <img src="https://i.postimg.cc/d37BZqr2/iitplogo.png" style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', height: '70%' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', textAlign: 'right' }}>
            <div style={{textAlign: 'center',marginleft: '34rem',marginTop: '-2rem' }}> 
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem',marginTop: '-2rem',marginLeft: '20rem',textAlignalign:'center'}}><strong><u>RESET PASSWORD</u></strong></h3>
              </div> 
              <form onSubmit={handleSubmit} className="form" role="form" style={{ textAlign: 'right' }}>
                <input type="hidden" name="ci_csrf_token" value="" />
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="Please Enter Your Registered Email"
                    value={email}
                    style={{ fontSize: '1rem', width: '20rem' }}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
              </form>
              {error && <div className="error" style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{error}</div>}
              {/* <div style={{ display: 'flex'}}>
              <div className="row">
                  <div className="col-md-3">
                    <button type="submit"  className=" universal-button" style={{ backgroundColor: 'red', marginLeft: '24rem' }}>Submit</button>
                   </div>
                 <div className="col-md-9">
                     
                      <button type="button" className="universal-button"  onClick={handleLoginClick}  style={{ backgroundColor: 'green', marginLeft: '24rem' }}>Login Area</button>
                    
                 </div>
                </div> */}
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="col-md-3">
        <button type="submit" className="universal-button" style={{ backgroundColor: 'red',marginLeft: '24rem' }}>Submit</button>
    </div>
    <div className="col-md-3">
        <button type="button" className="universal-button" onClick={handleLoginClick} style={{ backgroundColor: 'green',marginLeft: '5rem' }}>Login Area</button>
    </div>
</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Reset_Password;
