//Referee.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RefereeForm = () => {
    const app_number = localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        formDetails: [
            {
                app_number: app_number,
                name: "",
                position: "",
                association: "",
                organisation: "",
                email: "",
                contact: "",
                phdCert: null,
                pgDoc: null,
                ugDoc: null,
                hsc12Doc: null,
                hsc10Doc: null,
                payslipDoc: null,
                nocDoc: null,
                postPhdExpDoc: null,
                signature: null, 
                otherDoc: null
            }
        ]
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...formData.formDetails]
        updatedData[index][name] = value;
        setFormData({ ...formData, formDetails: updatedData });
    };

    const handleFileChange = (e, index, fileType) => {
        const { files } = e.target;
        const updatedData = [...formData.formDetails];
        updatedData[index][fileType] = files[0];
        setFormData({ ...formData, formDetails: updatedData });
    };

    const handleAddMore = () => {
        setFormData({
            ...formData,
            formDetails: [
                ...formData.formDetails,
                {
                    app_number: app_number,
                    name: "",
                    position: "",
                    association: "",
                    organisation: "",
                    email: "",
                    contact: "",
                    phdCert: null,
                    pgDoc: null,
                    ugDoc: null,
                    hsc12Doc: null,
                    hsc10Doc: null,
                    payslipDoc: null,
                    nocDoc: null,
                    postPhdExpDoc: null,
                    signature: null,
                    otherDoc: null
                }
            ]
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            for (let i = 0; i < formData.formDetails.length; i++) {
                const row = formData.formDetails[i];
    
                // Send the formDataToSend object to the backend API
                const response = await axios.post("http://localhost:3000/api/other/addReferees", row);
                console.log(response.data);
            }
            alert("Information Entered Successfully");
            navigate('/Declaration');
        } catch (error) {
            console.error("Error submitting referee details:", error);
        }
    };
    
    const handleLogout = async () => {
        localStorage.clear();
        navigate('/Login_Page');
    }

    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Apply For Faculty Position</h2>
            <h4 style={{marginLeft:'48%'}}> Welcome {name}!!</h4>  <button style={{backgroundColor:'#ddedf7', marginLeft:'94%'}} onClick={handleLogout}> Logout </button>

            <form onSubmit={handleSubmit} id="RefereeForm">
            <fieldset>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Upload The Following Documents*</legend>
                    {formData.formDetails.map((row, index) => (
                        <div key={index} style={{ marginBottom: '1rem' }}>
                             <div style={{ border: '2px solid black' }}>
                             <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD PHD CERTIFICATE</h3>
                                <p style={{color:'#43862a'}}> PHD Certificate</p>
                                <div>
                                    
                                    <input type="file" accept=".pdf" name="phdCert" onChange={(e) => handleFileChange(e, index, 'phdCert')} required />
                                    {row.phdCert && <a href={URL.createObjectURL(row.phdCert)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                          
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD PG CERTIFICATE</h3>
                                
                                <p style={{color:'#43862a'}}>PG Documents</p>
                                <div>
                                    <input type="file" accept=".pdf" name="pgDoc" onChange={(e) => handleFileChange(e, index, 'pgDoc')} required />
                                    {row.pgDoc && <a href={URL.createObjectURL(row.pgDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD UG CERTIFICATE</h3>
                                <p style={{color:'#43862a'}}>UG Documents</p>
                                <div>
                                    <input type="file" accept=".pdf" name="ugDoc" onChange={(e) => handleFileChange(e, index, 'ugDoc')} required />
                                    {row.ugDoc && <a href={URL.createObjectURL(row.ugDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD 12th/HSC/Diploma Documents</h3>
                                <p style={{color:'#43862a'}}>12th/HSC/Diploma Documents</p>
                                <div>
                                    <input type="file" accept=".pdf" name="hsc12Doc" onChange={(e) => handleFileChange(e, index, 'hsc12Doc')} required />
                                    {row.hsc12Doc && <a href={URL.createObjectURL(row.hsc12Doc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD 10th/SSC Documents</h3>
                                <p style={{color:'#43862a'}}>10th/SSC Documents</p>
                                <div>
                                    <input type="file" accept=".pdf" name="hsc10Doc" onChange={(e) => handleFileChange(e, index, 'hsc10Doc')} required />
                                    {row.hsc10Doc && <a href={URL.createObjectURL(row.hsc10Doc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD PAY SLIP</h3>
                                <p style={{color:'#43862a'}}>Pay Slip</p>
                                <div>
                                    <input type="file" accept=".pdf" name="payslipDoc" onChange={(e) => handleFileChange(e, index, 'payslipDoc')} required />
                                    {row.payslipDoc && <a href={URL.createObjectURL(row.payslipDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD NOC Documents</h3>
                                <p style={{color:'#43862a'}}>Undertaking-in case, NOC is not available at the time of application but will be provided at the time of interview</p>
                                <div>
                                    <input type="file" accept=".pdf" name="nocDoc" onChange={(e) => handleFileChange(e, index, 'nocDoc')} required />
                                    {row.nocDoc && <a href={URL.createObjectURL(row.nocDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD POST PHD CERTIFICATE</h3>
                                <p style={{color:'#43862a'}}>Post phd Experience Certificate/All Experience Certificates/ Last Pay slip</p>
                                <div>
                                    <input type="file" accept=".pdf" name="postPhdExpDoc" onChange={(e) => handleFileChange(e, index, 'postPhdExpDoc')} required />
                                    {row.postPhdExpDoc && <a href={URL.createObjectURL(row.postPhdExpDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                              {/* Add signature upload block */}
                              <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD Signature</h3>
                                <p style={{color:'#43862a'}}>Upload your Signature in JPG only</p>
                                <div>
                                    <input type="file" accept=".jpg" name="signature" onChange={(e) => handleFileChange(e, index, 'signature')} required />
                                    {row.signature && <a href={URL.createObjectURL(row.signature)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                            {/* End of signature upload block */}

                            <div style={{ border: '2px solid black' }}> 
                            <h3 style={{color: '#42708f', backgroundColor:'#ddedf7'}}> UPLOAD ANY OTHER DOCUMENT</h3>
                                <p style={{color:'#43862a'}}>Upload any other relevant document in a single PDF (For example award certificate, experience certificate etc) . If there are multiple documents, combine all the documents in a single PDF less than 1MB.</p>
                                <div>
                                    <input type="file" accept=".pdf" name="otherDoc" onChange={(e) => handleFileChange(e, index, 'otherDoc')} required />
                                    {row.otherDoc && <a href={URL.createObjectURL(row.otherDoc)} target="_blank" rel="noreferrer">View Uploaded File</a>}
                                </div>
                            </div>
                        </div>
                        
                        
                    ))}
                    
                </fieldset>
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Referees *</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Association with Referee</th>
                                <th>Organization/Institution</th>
                                <th>e-mail</th>
                                <th>Contact No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.formDetails.map((row, index) => (
                                <tr key={index}>
                                    <td><input type="text" style={{width:'100%'}} name="name" onChange={(e) => handleInputChange(e, index)} value={row.name} required /></td>
                                    <td><input type="text" style={{width:'100%'}} name="position" onChange={(e) => handleInputChange(e, index)} value={row.position} required /></td>
                                    <td><input type="text" style={{width:'100%'}} name="association" onChange={(e) => handleInputChange(e, index)} value={row.association} required /></td>
                                    <td><input type="text" style={{width:'100%'}} name="organisation" onChange={(e) => handleInputChange(e, index)} value={row.organisation} required /></td>
                                    <td><input type="text" style={{width:'100%'}} name="email" onChange={(e) => handleInputChange(e, index)} value={row.email} required /></td>
                                    <td><input type="text" style={{width:'100%'}} name="contact" onChange={(e) => handleInputChange(e, index)} value={row.contact} required /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleAddMore}>Add More</button>
                    <button type="button" style={{backgroundColor:'#ddedf7' , fontWeight:'bold', marginLeft:'94%'}} onClick={handleSubmit}>Save </button>
                </fieldset>
            </form>
        </div>
    );
}

export default RefereeForm;
