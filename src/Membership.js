//Membership.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MembershipForm = () => {
    const app_number = localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
    /*----------------------MEMBERSHIPS DATA--------------------------------------------------*/
    const [membershipData, setMembershipData] = useState({
        membershipDetails: [
            {
                app_number: app_number,
                name_society: "",
                status: "",
            }
        ]
    });
    const handleMembershipInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedMembershipData = [...membershipData.membershipDetails];
        updatedMembershipData[index][name] = value;
        setMembershipData({ ...membershipData, membershipDetails: updatedMembershipData });
    };
    const handleAddMore1 = () => {
        setMembershipData({
            ...membershipData,
            membershipDetails: [
                ...membershipData.membershipDetails,
                {
                    app_number: app_number,
                    name_society: "",
                    status: "",
                }
            ]
        });
    };
    const handleMembershipSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < membershipData.membershipDetails.length; i++) {
                const row = membershipData.membershipDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addMemberships", row);
                console.log(response.data);
            }
            alert("Memberships Entered Successfully");
        } catch (error) {
            console.error("Error submitting membership details:", error);
        }
    };
    /*-----------------------------------------------------PROFFESSIONAL TRAINING---------------------------------*/
    const [trainingData, setTrainingData] = useState({
        trainingDetails: [
            {
                app_number: app_number,
                type: "",
                organisation: "",
                year: "",
                duration: "",
            }
        ]
    });
    const handleTrainingInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedTrainingData = [...trainingData.trainingDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'duration' should be an integer:
            case "duration":
            case "year":
                // Parse the value to an integer using parseInt
                updatedTrainingData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedTrainingData[index][name] = value;
        }
        setTrainingData({ ...trainingData, trainingDetails: updatedTrainingData });
    };
    
    const handleAddMore2 = () => {
        setTrainingData({
            ...trainingData,
            trainingDetails: [
                ...trainingData.trainingDetails,
                {
                    app_number: app_number,
                    type: "",
                    organisation: "",
                    year: "",
                    duration: "",
                }
            ]
        });
    };
    const handleTrainingSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < trainingData.trainingDetails.length; i++) {
                const row = trainingData.trainingDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addTrainings", row);
                console.log(response.data);
            }
            alert("trainings Entered Successfully");
        } catch (error) {
            console.error("Error submitting trainings details:", error);
        }
    };
    /*----------------------------------------AWARDS AND RECOGNITION---------------------------------*/
    const [awardData, setAwardData] = useState({
        awardDetails: [
            {
                app_number: app_number,
                name: "",
                awarded_by: "",
                year: "",
            }
        ]
    });
    const handleAwardInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedAwardData = [...awardData.awardDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedAwardData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedAwardData[index][name] = value;
        }
        setAwardData({ ...awardData, awardDetails: updatedAwardData });
    };
    
    const handleAddMore3 = () => {
        setAwardData({
            ...awardData,
            awardDetails: [
                ...awardData.awardDetails,
                {
                    app_number: app_number,
                    name: "",
                    awarded_by: "",
                    year: "",
                }
            ]
        });
    };
    const handleAwardSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < awardData.awardDetails.length; i++) {
                const row = awardData.awardDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addAwards", row);
                console.log(response.data);
            }
            alert("Awards Entered Successfully");
        } catch (error) {
            console.error("Error submitting Award details:", error);
        }
    };
    /*------------------------------------------------SPONSORED PROJECTS---------------------------------*/
    const [sponsData, setSponsData] = useState({
        sponsDetails: [
            {
                app_number: app_number,
                agency: "",
                title: "",
                amount: "",
                period: "",
                role: "",
                status: "",
            }
        ]
    });
    const handleSponsInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSponsData = [...sponsData.sponsDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'amount' should be an integer:
            case "amount":
            case "period":
                // Parse the value to an integer using parseInt
                updatedSponsData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedSponsData[index][name] = value;
        }
        setSponsData({ ...sponsData, sponsDetails: updatedSponsData });
    };
    
    const handleAddMore4 = () => {
        setSponsData({
            ...sponsData,
            sponsDetails: [
                ...sponsData.sponsDetails,
                {
                    app_number: app_number,
                    agency: "",
                    title: "",
                    amount: "",
                    period: "",
                    role: "",
                    status: "",
                }
            ]
        });
    };
    const handleSponsSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < sponsData.sponsDetails.length; i++) {
                const row = sponsData.sponsDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addSponsoredProjects", row);
                console.log(response.data);
            }
            alert("Sponsored Projects Entered Successfully");
        } catch (error) {
            console.error("Error submitting Sponsored Project details:", error);
        }
    };
    /*------------------------------------------------CONSULTANCY PROJECTS---------------------------------*/
    const [consultData, setConsultData] = useState({
        consultDetails: [
            {
                app_number: app_number,
                organisation: "",
                title: "",
                amount: "",
                period: "",
                role: "",
                status: "",
            }
        ]
    });
    const handleConsultInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedConsultData = [...consultData.consultDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'duration' should be an integer:
            case "amount":
            case "period":
                // Parse the value to an integer using parseInt
                updatedConsultData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedConsultData[index][name] = value;
        }
        setConsultData({ ...consultData, consultDetails: updatedConsultData });
    };
    
    const handleAddMore5 = () => {
        setConsultData({
            ...consultData,
            consultDetails: [
                ...consultData.consultDetails,
                {
                    app_number: app_number,
                    organisation: "",
                    title: "",
                    amount: "",
                    period: "",
                    role: "",
                    status: "",
                }
            ]
        });
    };
    const handleConsultSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < consultData.consultDetails.length; i++) {
                const row = consultData.consultDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addConsultancyProjects", row);
                console.log(response.data);
            }
            alert("Consultancy Projects Entered Successfully");
            navigate('/Supervision');
        } catch (error) {
            console.error("Error submitting Consultancy Project details:", error);
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
        {/* Membership Details */}
        <form onSubmit={handleMembershipSubmit} id="MembershipForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Membership of Professional Societies</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of professional society</th>
                            <th>Membership Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {membershipData.membershipDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="name_society" onChange={(e) => handleMembershipInputChange(e, index)} value={row.name_society} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="status" onChange={(e) => handleMembershipInputChange(e, index)} value={row.status} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore1}>Add More</button>
                    <button type="submit" onClick={handleMembershipSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Professional Trainings Details */}
        <form onSubmit={handleTrainingSubmit} id="TrainingForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Professional Trainings</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Type of Training</th>
                            <th>Organisation</th>
                            <th>Year</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                    {trainingData.trainingDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="type" onChange={(e) => handleTrainingInputChange(e, index)} value={row.type} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="organisation" onChange={(e) => handleTrainingInputChange(e, index)} value={row.organisation} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="year" onChange={(e) => handleTrainingInputChange(e, index)} value={row.year} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="duration" onChange={(e) => handleTrainingInputChange(e, index)} value={row.duration} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore2}>Add More</button>
                    <button type="submit" onClick={handleTrainingSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Awards and Recognitions */}
        <form onSubmit={handleAwardSubmit} id="AwardForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Award(s) and Recognition(s)</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of Award</th>
                            <th>Awarded By</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                    {awardData.awardDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="name" onChange={(e) => handleAwardInputChange(e, index)} value={row.name} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="awarded_by" onChange={(e) => handleAwardInputChange(e, index)} value={row.awarded_by} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="year" onChange={(e) => handleAwardInputChange(e, index)} value={row.year} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore3}>Add More</button>
                    <button type="submit" onClick={handleAwardSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Sponsored Projects Details */}
        <form onSubmit={handleSponsSubmit} id="SponsForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Sponsored Projects</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Sponsoring Agency</th>
                            <th>Title of project</th>
                            <th>Sanctioned Amount</th>
                            <th>Period</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sponsData.sponsDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="agency" onChange={(e) => handleSponsInputChange(e, index)} value={row.agency} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="title" onChange={(e) => handleSponsInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="amount" onChange={(e) => handleSponsInputChange(e, index)} value={row.amount} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="period" onChange={(e) => handleSponsInputChange(e, index)} value={row.period} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="role" onChange={(e) => handleSponsInputChange(e, index)} value={row.role} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="status" onChange={(e) => handleSponsInputChange(e, index)} value={row.status} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore4}>Add More</button>
                    <button type="submit" onClick={handleSponsSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Consultancy Projects Details */}
        <form onSubmit={handleConsultSubmit} id="ConsultForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Consultancy Projects</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Organisation</th>
                            <th>Title of project</th>
                            <th>Amount of Grant</th>
                            <th>Period</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {consultData.consultDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="organisation" onChange={(e) => handleConsultInputChange(e, index)} value={row.organisation} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="title" onChange={(e) => handleConsultInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="amount" onChange={(e) => handleConsultInputChange(e, index)} value={row.amount} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="period" onChange={(e) => handleConsultInputChange(e, index)} value={row.period} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="role" onChange={(e) => handleConsultInputChange(e, index)} value={row.role} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="status" onChange={(e) => handleConsultInputChange(e, index)} value={row.status} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore5}>Add More</button>
                    <button type="submit" onClick={handleConsultSubmit}> Save </button>
            </fieldset>
        </form>
    </div>
    );
};

export default MembershipForm;
