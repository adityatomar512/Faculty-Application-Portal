//Educational_Qualifications.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EducationalQualificationsForm = () => {
    const name = localStorage.getItem("name");
    const app_number=localStorage.getItem("app_number");
    console.log(app_number);
    
    const navigate = useNavigate();
    /*-----------------------------------------------*/
    const [phdData, setPhdData] = useState({
        university: "",
        dept: "",
        supervisor: "",
        year: "",
        date_defence: "",
        date_award: "",
        title: "",
    });

    const handlePhdInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === "year" ? parseInt(value, 10) || "" : value;
        setPhdData({ ...phdData, [name]: parsedValue });
    };

    const handlePhdSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/edqualifications/addPhdDetails", phdData);
            localStorage.setItem("phd_id", response.data.phd_id);
            alert("PHD Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting PhD form:", error);
        }
    };
    /*-------------------------------------------*/
    const [pgData, setPgData] = useState({
        degree: "",
        university: "",
        branch: "",
        year_join: "",
        year_complete: "",
        duration: "",
        cgpa: "",
        division: "",
    });

    const handlePgInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = ["year_join", "year_complete", "duration", "cgpa", "division"].includes(name) ? parseInt(value, 10) || "" : value;
        setPgData({ ...pgData, [name]: parsedValue });
    };

    const handlePgSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/edqualifications/addPgDetails", pgData);
            localStorage.setItem("pg_id", response.data.pg_id);
            alert("PG Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting PG form:", error);
        }
    };
    /*----------------------------------------------------*/
    const [ugData, setUgData] = useState({
        degree: "",
        university: "",
        branch: "",
        year_join: "",
        year_complete: "",
        duration: "",
        cgpa: "",
        division: "",
    });

    const handleUgInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = ["year_join", "year_complete", "duration", "cgpa", "division"].includes(name) ? parseInt(value, 10) || "" : value;
        setUgData({ ...ugData, [name]: parsedValue });
    };

    const handleUgSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/edqualifications/addUgDetails", ugData);
            localStorage.setItem("ug_id", response.data.ug_id);
            alert("UG Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting UG form:", error);
        }
    };
    /*----------------------------------------------------*/
    const [schoolData, setSchoolData] = useState({
        schoolDetails: [
            {
                std: "",
                school: "",
                year: "",
                cgpa: "",
                division: "",
            }
        ]
    });

    const handleSchoolInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...schoolData.schoolDetails];
        updatedData[index][name] = value;
        setSchoolData({ ...schoolData, schoolDetails: updatedData });
    };

    const handleAddMore1 = () => {
        setSchoolData({
            ...schoolData,
            schoolDetails: [
                ...schoolData.schoolDetails,
                {
                    std: '',
                    school: '',
                    year: '',
                    cgpa: '',
                    division: ''
                }
            ]
        });
    };
    const handleSchoolSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < schoolData.schoolDetails.length; i++) {
                const row = schoolData.schoolDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/edqualifications/addSchoolDetails", row);
                console.log(response.data);
            }
            alert("School Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting school details:", error);
        }
    };
    
    /*--------------------------------------------------------------------------------------------*/
    const [additionalData, setAdditionalData] = useState({
        additionalDetails: [
            {
                degree: "",
                university: "",
                branch: "",
                year_join: "",
                year_complete: "",
                duration: "",
                cgpa: "",
                division: "",
                app_number: app_number,
            }
        ]
    });

    const handleAdditionalInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData1 = [...additionalData.additionalDetails];
        updatedData1[index][name] = value;
        setAdditionalData({ ...additionalData, additionalDetails: updatedData1 });
    };

    const handleAddMore2 = () => {
        setAdditionalData({
            ...additionalData,
            additionalDetails: [
                ...additionalData.additionalDetails,
                {
                    degree: "",
                    university: "",
                    branch: "",
                    year_join: "",
                    year_complete: "",
                    duration: "",
                    cgpa: "",
                    division: "",
                    app_number: app_number,
                }
            ]
        });
    };

    const handleAdditionalSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in additionalDetails array
            for (let i = 0; i < additionalData.additionalDetails.length; i++) {
                const row = additionalData.additionalDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/edqualifications/addAdditionalQualifications", row);
                console.log(response.data);
            }
            alert("Additional Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting additional qualifications details:", error);
        }
    };
    /*--------------------------------------------------------------------------------------------------*/
    const phdId = parseInt(localStorage.getItem("phd_id"), 10);
    const pgId = parseInt(localStorage.getItem("pg_id"), 10);
    const ugId = parseInt(localStorage.getItem("ug_id"), 10);
    console.log(phdId);
    console.log(pgId);
    console.log(ugId);
    const [qualificationsData, setQualificationsData] = useState({
        app_number: app_number,
        phd_id: phdId,
        pg_id: pgId,
        ug_id: ugId,
    });

    const handleQualificationsSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/edqualifications/createEducationalQualifications", qualificationsData );
            console.log(response)
            alert("Final Data Entered Successfully");
            navigate('/Employment');
        } catch (error) {
            console.error("Error submitting educational qualifications form:", error);
        }
    };

    /*---------------------------------------------------------------------------------------------------*/
    const handleLogout = async (e) => {
        localStorage.clear();
        navigate('/Login_Page');
    }
    return (
        <div className="Educational_Qualifications" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Educational Qualifications</h2>
            <h4 style={{marginLeft:'48%'}}> Welcome {name}!!</h4>  <button style={{backgroundColor:'#ddedf7', marginLeft:'94%', backgroundColor: '#6fb85b', color: 'white'}} onClick={handleLogout}> Logout </button>
            {/* PHD Details Form */}
            <form onSubmit={handlePhdSubmit} id="PhdForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Details of PhD</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="university">University/Institute: </label>
                            <input type="text" id="university" name="university" onChange={handlePhdInputChange} value={phdData.university} required /><br /><br />

                            <label htmlFor="dept">Department: </label>
                            <input type="text" id="dept" name="dept" onChange={handlePhdInputChange} value={phdData.dept} required /><br /><br />

                            <label htmlFor="supervisor">Name of PhD Supervisor: </label>
                            <input type="text" id="supervisor" name="supervisor" onChange={handlePhdInputChange} value={phdData.supervisor} required /><br /><br />

                            <label htmlFor="year">Year of Joining: </label>
                            <input type="text" id="year" name="year" onChange={handlePhdInputChange} value={phdData.year} required /><br /><br />
                        </div>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="date_defence">Date of Successful Thesis Defence: </label>
                            <input type="date" id="date_defence" name="date_defence" onChange={handlePhdInputChange} value={phdData.date_defence} required /><br /><br />

                            <label htmlFor="date_award">Date of Award: </label>
                            <input type="date" id="date_award" name="date_award" onChange={handlePhdInputChange} value={phdData.date_award} required /><br /><br />

                            <label htmlFor="title">Title of PhD Thesis: </label>
                            <input type="text" id="title" name="title" onChange={handlePhdInputChange} value={phdData.title} required /><br /><br />
                        </div>
                    </div>
                    <button type="button" onClick={handlePhdSubmit}>Save PhD Data</button>
                </fieldset>
            </form>
            {/* PG details form */}
            <form onSubmit={handlePgSubmit} id="PgForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - M. Tech./ M.E./ PG Details</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                        <label htmlFor="degree">Degree/Certificate: </label>
                        <input type="text" id="degree" name="degree" onChange={handlePgInputChange} value={pgData.degree} required /><br /><br />

                        <label htmlFor="university">University/Institute: </label>
                        <input type="text" id="university" name="university" onChange={handlePgInputChange} value={pgData.university} required /><br /><br />

                        <label htmlFor="branch">Branch/Stream: </label>
                        <input type="text" id="branch" name="branch" onChange={handlePgInputChange} value={pgData.branch} required /><br /><br />

                        <label htmlFor="year_join">Year of Joining: </label>
                        <input type="text" id="year_join" name="year_join" onChange={handlePgInputChange} value={pgData.year_join} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                        <label htmlFor="year_complete">Year of Completion: </label>
                        <input type="text" id="year_complete" name="year_complete" onChange={handlePgInputChange} value={pgData.year_complete} required /><br /><br />

                        <label htmlFor="duration">Duration (in years): </label>
                        <input type="text" id="duration" name="duration" onChange={handlePgInputChange} value={pgData.duration} required /><br /><br />

                        <label htmlFor="cgpa">Percentage/ CGPA: </label>
                        <input type="text" id="cgpa" name="cgpa" onChange={handlePgInputChange} value={pgData.cgpa} required /><br /><br />

                        <label htmlFor="division">Division/Class: </label>
                        <input type="text" id="division" name="division" onChange={handlePgInputChange} value={pgData.division} required /><br /><br />
                        </div>
                    </div>
                    <button type="button" onClick={handlePgSubmit}>Save </button>
                </fieldset>
            </form>
            {/* UG details form */}
            <form onSubmit={handleUgSubmit} id="UgForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - B. Tech./ B.E./ UG Details</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                        <label htmlFor="degree">Degree/Certificate: </label>
                        <input type="text" id="degree" name="degree" onChange={handleUgInputChange} value={ugData.degree} required /><br /><br />

                        <label htmlFor="university">University/Institute: </label>
                        <input type="text" id="university" name="university" onChange={handleUgInputChange} value={ugData.university} required /><br /><br />

                        <label htmlFor="branch">Branch/Stream: </label>
                        <input type="text" id="branch" name="branch" onChange={handleUgInputChange} value={ugData.branch} required /><br /><br />

                        <label htmlFor="year_join">Year of Joining: </label>
                        <input type="text" id="year_join" name="year_join" onChange={handleUgInputChange} value={ugData.year_join} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                        <label htmlFor="year_complete">Year of Completion: </label>
                        <input type="text" id="year_complete" name="year_complete" onChange={handleUgInputChange} value={ugData.year_complete} required /><br /><br />

                        <label htmlFor="duration">Duration (in years): </label>
                        <input type="text" id="duration" name="duration" onChange={handleUgInputChange} value={ugData.duration} required /><br /><br />

                        <label htmlFor="cgpa">Percentage/ CGPA: </label>
                        <input type="text" id="cgpa" name="cgpa" onChange={handleUgInputChange} value={ugData.cgpa} required /><br /><br />

                        <label htmlFor="division">Division/Class: </label>
                        <input type="text" id="division" name="division" onChange={handleUgInputChange} value={ugData.division} required /><br /><br />
                        </div>
                    </div>
                    <button type="button" onClick={handleUgSubmit}>Save </button>
                </fieldset>
            </form>
            {/* School Details */}
            <form onSubmit={handleSchoolSubmit} id="SchoolForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - School *</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>10th/12th/HSC/Diploma</th>
                            <th>School</th>
                            <th>Year of Passing</th>
                            <th>Percentage/ Grade</th>
                            <th>Division/Class</th>
                        </tr>
                    </thead>
                    <tbody>
                    {schoolData.schoolDetails.map((row, index) => (
                        <tr key={index}>
                            <td><input type="text" name="std" onChange={(e) => handleSchoolInputChange(e, index)} value={row.std} required /></td>
                            <td><input type="text" name="school" onChange={(e) => handleSchoolInputChange(e, index)} value={row.school} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handleSchoolInputChange(e, index)} value={row.year} required /></td>
                            <td><input type="text" name="cgpa" onChange={(e) => handleSchoolInputChange(e, index)} value={row.cgpa} required /></td>
                            <td><input type="text" name="division" onChange={(e) => handleSchoolInputChange(e, index)} value={row.division} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore1}>Add More</button>
                    <button type="button" onClick={handleSchoolSubmit}> Save </button>
                </fieldset>
            </form>
            {/* Additional Qualifications Details */}
            <form onSubmit={handleAdditionalSubmit} id="AdditionalForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Additional Qualifications </legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>University</th>
                            <th>Branch</th>
                            <th>Year of Joining</th>
                            <th>Year of Completion</th>
                            <th>Duration</th>
                            <th>CGPA</th>
                            <th>Division</th>
                        </tr>
                    </thead>
                    <tbody>
                    {additionalData.additionalDetails.map((row, index) => (
                        <tr key={index}>
                            <td><input type="text" style={{width:'100%'}} name="degree" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.degree} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="university" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.university} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="branch" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.branch} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="year_join" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.year_join} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="year_complete" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.year_complete} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="duration" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.duration} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="cgpa" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.cgpa} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="division" onChange={(e) => handleAdditionalInputChange(e, index)} value={row.division} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore2}>Add More</button>
                <button type="button" onClick={handleAdditionalSubmit}> Save </button>
                </fieldset>
            </form>
            <button type="button" onClick={handleQualificationsSubmit}> Next </button>
        </div>
    );
}

export default EducationalQualificationsForm;