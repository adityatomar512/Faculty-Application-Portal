//Supervision.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SupervisionForm = () => {
    const app_number = localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
    /*----------------------PHD SUPERVISIONS DATA--------------------------------------------------*/
    const [phdData, setPHDData] = useState({
        phdDetails: [
            {
                app_number: app_number,
                name: "",
                title: "",
                role: "",
                status: "",
                year: "",
            }
        ]
    });
    const handlePHDInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedPHDData = [...phdData.phdDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedPHDData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedPHDData[index][name] = value;
        }
        setPHDData({ ...phdData, phdDetails: updatedPHDData });
    };    
    const handleAddMore1 = () => {
        setPHDData({
            ...phdData,
            phdDetails: [
                ...phdData.phdDetails,
                {
                    app_number: app_number,
                    name: "",
                    title: "",
                    role: "",
                    status: "",
                    year: "",
                }
            ]
        });
    };
    const handlePHDSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < phdData.phdDetails.length; i++) {
                const row = phdData.phdDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addPhdSupervsions", row);
                console.log(response.data);
            }
            alert("PHD Supervisions Entered Successfully");
        } catch (error) {
            console.error("Error submitting Phd Supervision details:", error);
        }
    };
    /*-------------------------------------MASTER SUPERVISIONS DATA---------------------------------*/
    const [masterData, setMasterData] = useState({
        masterDetails: [
            {
                app_number: app_number,
                name: "",
                title: "",
                role: "",
                status: "",
                year: "",
            }
        ]
    });
    const handleMasterInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedMasterData = [...masterData.masterDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedMasterData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedMasterData[index][name] = value;
        }
        setMasterData({ ...masterData, masterDetails: updatedMasterData });
    };
    
    const handleAddMore2 = () => {
        setMasterData({
            ...masterData,
            masterDetails: [
                ...masterData.masterDetails,
                {
                    app_number: app_number,
                    name: "",
                    title: "",
                    role: "",
                    status: "",
                    year: "",
                }
            ]
        });
    };
    const handleMasterSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < masterData.masterDetails.length; i++) {
                const row = masterData.masterDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addMasterSupervisions", row);
                console.log(response.data);
            }
            alert("Master Supervisions Entered Successfully");
        } catch (error) {
            console.error("Error submitting master supervisions details:", error);
        }
    };
    /*---------------------------------------BACHELOR SUPERVISION DATA----------------------------------*/
    const [bachData, setBachData] = useState({
        bachDetails: [
            {
                app_number: app_number,
                name: "",
                title: "",
                role: "",
                status: "",
                year: "",
            }
        ]
    });
    const handleBachInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedBachData = [...bachData.bachDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedBachData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedBachData[index][name] = value;
        }
        setBachData({ ...bachData, bachDetails: updatedBachData });
    };
    
    const handleAddMore3 = () => {
        setBachData({
            ...bachData,
            bachDetails: [
                ...bachData.bachDetails,
                {
                    app_number: app_number,
                    name: "",
                    title: "",
                    role: "",
                    status: "",
                    year: "",
                }
            ]
        });
    };
    const handleBachSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < bachData.bachDetails.length; i++) {
                const row = bachData.bachDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addBachelorSupervisions", row);
                console.log(response.data);
            }
            alert("Bachelor Supervisions Entered Successfully");
            navigate('/Contribution');
        } catch (error) {
            console.error("Error submitting Bachelor supervisions details:", error);
        }
    };
    /*----------------------------------------------------------------------------------------------*/
    const handleLogout = async (e) => {
        localStorage.clear();
        navigate('/Login_Page');
    }
    return (
        <div className="Personal_Details" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Application for Faculty Position</h2>
        <h4 style={{marginLeft:'48%'}}> Welcome {name}!!</h4>  <button style={{backgroundColor:'#ddedf7', marginLeft:'94%', backgroundColor: '#6fb85b', color: 'white'}} onClick={handleLogout}> Logout </button>
        {/* PHD Supervision Details */}
        <form onSubmit={handlePHDSubmit} id="PHDForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>PHD Thesis Supervision</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of research scholar</th>
                            <th>Title of Thesis</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Ongoing since/ Year of Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {phdData.phdDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" name="name" onChange={(e) => handlePHDInputChange(e, index)} value={row.name} required /></td>
                            <td><input type="text" name="title" onChange={(e) => handlePHDInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" name="role" onChange={(e) => handlePHDInputChange(e, index)} value={row.role} required /></td>
                            <td><input type="text" name="status" onChange={(e) => handlePHDInputChange(e, index)} value={row.status} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handlePHDInputChange(e, index)} value={row.year} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore1}>Add More</button>
                    <button type="submit" onClick={handlePHDSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Master Supervisions Details */}
        <form onSubmit={handleMasterSubmit} id="MasterForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>M.Tech/ M.E./ Master's Degree</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of research scholar</th>
                            <th>Title of Thesis</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Ongoing since/ Year of Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {masterData.masterDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" name="name" onChange={(e) => handleMasterInputChange(e, index)} value={row.name} required /></td>
                            <td><input type="text" name="title" onChange={(e) => handleMasterInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" name="role" onChange={(e) => handleMasterInputChange(e, index)} value={row.role} required /></td>
                            <td><input type="text" name="status" onChange={(e) => handleMasterInputChange(e, index)} value={row.status} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handleMasterInputChange(e, index)} value={row.year} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore2}>Add More</button>
                    <button type="submit" onClick={handleMasterSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Bachelor Supervisions */}
        <form onSubmit={handleBachSubmit} id="BachelorForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>B.Tech/ B.E./ Bachelor's Degree</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of research scholar</th>
                            <th>Title of Thesis</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Ongoing since/ Year of Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bachData.bachDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" name="name" onChange={(e) => handleBachInputChange(e, index)} value={row.name} required /></td>
                            <td><input type="text" name="title" onChange={(e) => handleBachInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" name="role" onChange={(e) => handleBachInputChange(e, index)} value={row.role} required /></td>
                            <td><input type="text" name="status" onChange={(e) => handleBachInputChange(e, index)} value={row.status} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handleBachInputChange(e, index)} value={row.year} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore3}>Add More</button>
                    <button type="submit" onClick={handleBachSubmit}> Save </button>
            </fieldset>
        </form>
    </div>
    );
};

export default SupervisionForm;
