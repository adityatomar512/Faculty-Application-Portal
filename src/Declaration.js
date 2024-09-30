//Declaration.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Declaration = () => {
  const navigate = useNavigate();
  const [agreement, setAgreement] = useState(false);

  const handleAgreementChange = (e) => {
    setAgreement(e.target.checked);
  };

  const handleSubmit = () => {
    if (!agreement) {
      alert("Please agree to the declaration to navigate to the next page.");
      return;
    }
    navigate('/FinalPdf');
  };

  return (
    <div style={{ marginTop: "20%", marginLeft: "5%", marginRight: "5%", border: "2px solid black" }}>
      <h2 style={{ backgroundColor: "#e1f0d8", color: "#308000" }}>Final Declaration</h2>
      <p style={{ color: "red" }}>
        I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the
        advertisement and this application form. I further declare that all the entries along with the attachments uploaded
        in this form are true to the best of my knowledge and belief.
      </p>
      <label>
        <input type="checkbox" checked={agreement} onChange={handleAgreementChange} />
        I agree to the declaration
      </label>
      <br />
      <button onClick={handleSubmit}>See Final PDF</button>
    </div>
  );
};

export default Declaration;
