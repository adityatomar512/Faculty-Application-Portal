//Contribution.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Contribution = () => {
    const app_number = "app2";
    const name = localStorage.getItem("name");
    const navigate = useNavigate();

    const [contriData, setContriData] = useState({
        app_number: app_number,
        research_contri: "",
        teaching_contri: "",
        other_info: "",
        professional_service: "",
        list_journalpub: "",
        list_conferencepub: "",
    });

    const handleInputChangeContri = (e) => {
        const { name, value } = e.target;
        setContriData({ ...contriData, [name]: value });
    };

    const handleSubmitContri = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/other/addContributions", contriData);
            alert("Contributions Entered Successfully");
            navigate("/Refree");
        } catch (error) {
            console.error("Error submitting contributions form:", error);
        }
    };
    
    const handleLogout = async (e) => {
        localStorage.clear();
        navigate("/Login_Page");
    };

    const [researchEditorState, setResearchEditorState] = useState(EditorState.createEmpty());
    const [teachingEditorState, setTeachingEditorState] = useState(EditorState.createEmpty());
    const [otherInfoEditorState, setOtherInfoEditorState] = useState(EditorState.createEmpty());
    const [professionalServiceEditorState, setProfessionalServiceEditorState] = useState(EditorState.createEmpty());
    const [journalPubEditorState, setJournalPubEditorState] = useState(EditorState.createEmpty());
    const [conferencePubEditorState, setConferencePubEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="Present_Employment"
        style={{
            marginTop: "12rem",
            marginLeft: "7rem",
            marginRight: "7rem",
            marginBottom: "4rem",
            backgroundColor: "#f5f5f5",
        }}
        >
            <h2>Apply For Faculty Position</h2>
            <h4 style={{ marginLeft: "48%" }}> Welcome {name}!!</h4>{" "} 
            <button
                style={{ backgroundColor: "#ddedf7", marginLeft: "94%", backgroundColor: "#6fb85b", color: "white" }}
                onClick={handleLogout}
            >
                {" "}
                Logout{" "}
            </button>
            <form onSubmit={handleSubmitContri}>
            <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                    <b>14. Significant research contribution and future plans (not more than 500 words)</b> <br />
                    (Please provide a Research Statement describing your research plans and one or two specific research
                    projects to be conducted at IIT Indore in 2-3 years time frame)
                </legend>
                <Editor
                    editorState={researchEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setResearchEditorState}
                />
                <textarea
                    name="research_contri"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.6%" }}
                    value={contriData.research_contri}
                    onChange={handleInputChangeContri}
                />

                    <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                    <b>
                        15. Significant teaching contribution and future plans *<br />
                    </b>
                    (Please list UG/PG courses that you would like to develop and/or teach at IIT Indore)
                </legend>
                <Editor
                    editorState={teachingEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setTeachingEditorState}
                />
                <textarea
                    name="teaching_contri"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.6%" }}
                    value={contriData.teaching_contri}
                    onChange={handleInputChangeContri}
                />

                <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                <b>16. Any other relevant information.</b>
                </legend>
                <Editor
                    editorState={otherInfoEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setOtherInfoEditorState}
                />
                <textarea
                    name="other_info"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.6%" }}
                    value={contriData.other_info}
                    onChange={handleInputChangeContri}
                />

                <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                <b>17. Professional Service : Editorship/Reviewership</b>
                </legend>
                <Editor
                    editorState={professionalServiceEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setProfessionalServiceEditorState}
                />
                <textarea
                    name="professional_service"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.6%" }}
                    value={contriData.professional_service}
                    onChange={handleInputChangeContri}
                />

                <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                <b>18. Detailed List of Journal Publications</b>
                <br />
                (Including Sr. No., Author's Names, Paper Title, Volume, Issue, Year, Page Nos., Impact Factor (if any),
                DOI, Status[Published/Accepted] )
                </legend>
                <Editor
                    editorState={journalPubEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setJournalPubEditorState}
                />
                <textarea
                    name="list_journalpub"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.6%" }}
                    value={contriData.list_journalpub}
                    onChange={handleInputChangeContri}
                />

                <legend style={{ backgroundColor: "#e1f0d8", width: "99.6%", color: "#54773c" }}>
                <b>19. Detailed List of Conference Publications</b>
                <br />
                (Including Sr. No., Author's Names, Paper Title, Name of the conference, Year, Page Nos., DOI [If any] )
                </legend>
                <Editor
                    editorState={conferencePubEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setConferencePubEditorState}
                />
                <textarea
                    name="list_conferencepub"
                    
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "-5%", marginBottom: "4%", width: "99.5%" }}
                    value={contriData.list_conferencepub}
                    onChange={handleInputChangeContri}
                />

                <button type="submit">Next</button>
            </form>
        </div>
    );
};
export default Contribution;
