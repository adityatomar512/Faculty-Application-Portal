//FinalPdf.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

function FinalPdf() {
    const app_number = localStorage.getItem("app_number");
    const [applicationData, setApplicationData] = useState(null);
    const [personalData, setPersonalData] = useState(null);
    const [phdData, setPhdData] = useState(null);
    const [pgData, setPgData] = useState(null);
    const [ugData, setUgData] = useState(null);
    const [schoolData, setSchoolData] = useState(null);
    const [additionalData, setAdditionalData] = useState(null);
    const [presentEmpData, setPresentEmpData] = useState(null);
    const [empHistoryData, setEmpHistoryData] = useState(null);
    const [teachingData, setTeachingData] = useState(null);
    const [researchData, setResearchData] = useState(null);
    const [industryData, setIndustryData] = useState(null);
    const [pubData, setPubData] = useState(null);
    const [bestPubData, setBestPubData] = useState(null);
    const [patentData, setPatentData] = useState(null);
    const [booksData, setBooksData] = useState(null);
    const [bookChaptersData, setBookChaptersData] = useState(null);
    const [membershipData, setMembershipData] = useState(null);
    const [trainingData, setTrainingData] = useState(null);
    const [awardData, setAwardData] = useState(null);
    const [sponsData, setSponsData] = useState(null);
    const [consultData, setConsultData] = useState(null);
    const [phdSupData, setPhdSupData] = useState(null);
    const [masterSupData, setMasterSupData] = useState(null);
    const [bachSupData, setBachSupData] = useState(null);
    const [contriData, setContriData] = useState(null);
    const [refereeData, setRefereeData] = useState(null);
    // ------------------------------------------------------------------------------------------
    const [agreement, setAgreement] = useState(true);
    const handleAgreementChange = (event) => {
        setAgreement(event.target.checked);
    };
    // ----------------------------------------------------------------------------------------------
    const handlePrint = () => {
        const element = document.getElementById("page-content"); // Change 'page-content' to the ID of the element containing the content you want to print

        html2pdf().from(element).save("page.pdf");
    };
    // --------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/application/getApplicationDetails/${app_number}`)
            .then((response) => {
                setApplicationData(response.data.application); // Set applicationData to the received application object
            })
            .catch((error) => {
                console.error("Error fetching application data:", error);
                setApplicationData(null); // Set applicationData to null in case of error
            });
    }, []);
    // ---------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/application/getPersonalDetails/${app_number}`)
            .then((response) => {
                setPersonalData(response.data.PersonalDetails);
            })
            .catch((error) => {
                console.error("Error fetching personal data:", error);
                setPersonalData(null);
            });
    }, []);
    // -------------------------------------------------------------------------------------------------
    const findEdIds = async (app_number) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/edqualifications/getEducationalQualifications/${app_number}`
            );
            localStorage.setItem("phdId", response.data.EducationalQualifications.phd_id);
            localStorage.setItem("pgId", response.data.EducationalQualifications.pg_id);
            localStorage.setItem("ugId", response.data.EducationalQualifications.ug_id);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
    const phdId = localStorage.getItem("phdId");
    const pgId = localStorage.getItem("pgId");
    const ugId = localStorage.getItem("ugId");
    const phd_id = parseInt(phdId, 10);
    const pg_id = parseInt(pgId, 10);
    const ug_id = parseInt(ugId, 10);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/edqualifications/getPhdDetails/${phd_id}`)
            .then((response) => {
                setPhdData(response.data.PhdDetails);
            })
            .catch((error) => {
                console.error("Error fetching phd data:", error);
                setPhdData(null);
            });
    }, [phd_id]);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/edqualifications/getPgDetails/${pg_id}`)
            .then((response) => {
                setPgData(response.data.PgDetails);
            })
            .catch((error) => {
                console.error("Error fetching pg data:", error);
                setPgData(null);
            });
    }, [pg_id]);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/edqualifications/getUgDetails/${ug_id}`)
            .then((response) => {
                setUgData(response.data.UgDetails);
            })
            .catch((error) => {
                console.error("Error fetching ug data:", error);
                setUgData(null);
            });
    }, [ug_id]);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/edqualifications/getSchoolDetails/${app_number}`)
            .then((response) => {
                setSchoolData(response.data.SchoolDetails);
            })
            .catch((error) => {
                console.error("Error fetching school data:", error);
                setSchoolData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/edqualifications/getAdditionalQualifications/${app_number}`)
            .then((response) => {
                setAdditionalData(response.data.AdditionalQualifications);
            })
            .catch((error) => {
                console.error("Error fetching additional qualifications data:", error);
                setAdditionalData([]);
            });
    }, []);
    // ------------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employment/getEmployment/${app_number}`)
            .then((response) => {
                const presentEmpData = response.data.employment;
                const id = presentEmpData && presentEmpData.id;
                localStorage.setItem("id", id);
                setPresentEmpData(presentEmpData);
            })
            .catch((error) => {
                console.error("Error fetching present employment data:", error);
                setPresentEmpData(null);
            });
    }, []);
    const empId = localStorage.getItem("id");
    const emp_id = parseInt(empId, 10);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employment/getEmpHistory/${emp_id}`)
            .then((response) => {
                setEmpHistoryData(response.data.empHistory);
            })
            .catch((error) => {
                console.error("Error fetching employment history data:", error);
                setEmpHistoryData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employment/getTeachExp/${emp_id}`)
            .then((response) => {
                setTeachingData(response.data.teachExp);
            })
            .catch((error) => {
                console.error("Error fetching teaching data:", error);
                setTeachingData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employment/getResearchExp/${emp_id}`)
            .then((response) => {
                setResearchData(response.data.researchExp);
            })
            .catch((error) => {
                console.error("Error fetching research experience data:", error);
                setResearchData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employment/getIndustryExp/${emp_id}`)
            .then((response) => {
                setIndustryData(response.data.industryExp);
            })
            .catch((error) => {
                console.error("Error fetching teaching data:", error);
                setIndustryData([]);
            });
    }, []);
    // -----------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/publications/getPublications/${app_number}`)
            .then((response) => {
                const pubData = response.data.publications;
                const pub_id = pubData && pubData.id;
                localStorage.setItem("pub_id", pub_id);
                setPubData(pubData);
            })
            .catch((error) => {
                console.error("Error fetching publications data:", error);
                setPubData(null);
            });
    }, []);
    const pub_id = localStorage.getItem("pub_id");
    const pubId = parseInt(pub_id, 10);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/publications/getBestPublications/${pubId}`)
            .then((response) => {
                setBestPubData(response.data.bestPublications);
            })
            .catch((error) => {
                console.error("Error fetching best publications data:", error);
                setBestPubData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/publications/getPatents/${pubId}`)
            .then((response) => {
                setPatentData(response.data.patents);
            })
            .catch((error) => {
                console.error("Error fetching patents data:", error);
                setPatentData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/publications/getBooks/${pubId}`)
            .then((response) => {
                setBooksData(response.data.books);
            })
            .catch((error) => {
                console.error("Error fetching books data:", error);
                setBooksData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/publications/getBookChapters/${pubId}`)
            .then((response) => {
                setBookChaptersData(response.data.bookChapters);
            })
            .catch((error) => {
                console.error("Error fetching book chapters data:", error);
                setBookChaptersData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getMemberships/${app_number}`)
            .then((response) => {
                setMembershipData(response.data.memberships);
            })
            .catch((error) => {
                console.error("Error fetching memberships data:", error);
                setMembershipData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getTrainings/${app_number}`)
            .then((response) => {
                setTrainingData(response.data.trainings);
            })
            .catch((error) => {
                console.error("Error fetching trainings data:", error);
                setTrainingData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getAwards/${app_number}`)
            .then((response) => {
                setAwardData(response.data.awards);
            })
            .catch((error) => {
                console.error("Error fetching awards data:", error);
                setAwardData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getSponsoredProjects/${app_number}`)
            .then((response) => {
                setSponsData(response.data.sponsoredProjects);
            })
            .catch((error) => {
                console.error("Error fetching sponsored projects data:", error);
                setSponsData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getConsultancyProjects/${app_number}`)
            .then((response) => {
                setConsultData(response.data.consultancyProjects);
            })
            .catch((error) => {
                console.error("Error fetching consultancy projects data:", error);
                setConsultData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getPhdSupervisions/${app_number}`)
            .then((response) => {
                setPhdSupData(response.data.phdSupervisions);
            })
            .catch((error) => {
                console.error("Error fetching phd supervisions data:", error);
                setPhdSupData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getMasterSupervisions/${app_number}`)
            .then((response) => {
                setMasterSupData(response.data.masterSupervisions);
            })
            .catch((error) => {
                console.error("Error fetching master supervisions data:", error);
                setMasterSupData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getBachelorSupervisions/${app_number}`)
            .then((response) => {
                setBachSupData(response.data.bachelorSupervisions);
            })
            .catch((error) => {
                console.error("Error fetching bachelor supervisions data:", error);
                setBachSupData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getContributions/${app_number}`)
            .then((response) => {
                setContriData(response.data.contributions);
            })
            .catch((error) => {
                console.error("Error fetching contributions data:", error);
                setContriData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/other/getReferees/${app_number}`)
            .then((response) => {
                setRefereeData(response.data.referees);
            })
            .catch((error) => {
                console.error("Error fetching referees data:", error);
                setRefereeData([]);
            });
    }, []);
    // ---------------------------------------------------------------------------------------------------
    return (
        <div style={{ marginTop: "20%", marginLeft: "5%", marginBottom: "2%", marginRight: "2%" }}>
            <div id="page-content">
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        1. Application Details
                    </h2>
                </span>
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Advertisement Number</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Application</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Application Number</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Post Applied for</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Department/School</strong>
                            </td>
                        </tr>
                        {applicationData && (
                            <tr key={applicationData.app_number}>
                                <td>{applicationData.add_number}</td>
                                <td>{applicationData.date}</td>
                                <td>{applicationData.app_number}</td>
                                <td>{applicationData.post}</td>
                                <td>{applicationData.dept}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* ------------------------------------------------------------------------------------------ */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        2. Personal Details
                    </h2>
                </span>
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Middle Name</strong>
                            </td>
                            <td>
                                <strong className="tr_title">First Name</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Last Name</strong>
                            </td>
                        </tr>
                        {personalData && (
                            <tr key={personalData.app_number}>
                                <td>{personalData.m_name}</td>
                                <td>{personalData.f_name}</td>
                                <td>{personalData.l_name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Date of Birth</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Gender</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Marital Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Category</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Nationality</strong>
                            </td>
                            <td>
                                <strong className="tr_title">ID Proof</strong>
                            </td>
                        </tr>
                        {personalData && (
                            <tr key={personalData.app_number}>
                                <td>{personalData.dob}</td>
                                <td>{personalData.gender}</td>
                                <td>{personalData.marital_status}</td>
                                <td>{personalData.category}</td>
                                <td>{personalData.nationality}</td>
                                <td>{personalData.id_proof}</td>
                            </tr>
                        )}
                        <tr>
                            <td>
                                <strong>Father's Name</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.father_name}</td>
                                </tr>
                            )}
                        </tr>
                    </tbody>
                </table>
                <br />
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td width="50%">
                                <strong className="tr_title">Current Address</strong>
                            </td>
                            <td width="50%">
                                <strong className="tr_title">Permanent Address</strong>
                            </td>
                        </tr>
                        {personalData && (
                            <tr key={personalData.app_number}>
                                <td>{personalData.c_address}</td>
                                <td>{personalData.p_address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: "#f1f1f1" }}>
                                <strong className="tr_title">Mobile</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.mob}</td>
                                </tr>
                            )}
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "#f1f1f1" }}>
                                <strong className="tr_title">Alternate Mobile</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.alt_mob}</td>
                                </tr>
                            )}
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "#f1f1f1" }}>
                                <strong className="tr_title">Landline Phone No.</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.landline}</td>
                                </tr>
                            )}
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "#f1f1f1" }}>
                                <strong className="tr_title">E-mail</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.email}</td>
                                </tr>
                            )}
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "#f1f1f1" }}>
                                <strong className="tr_title">Alternate E-mail</strong>
                            </td>
                            {personalData && (
                                <tr key={personalData.app_number}>
                                    <td>{personalData.alt_email}</td>
                                </tr>
                            )}
                        </tr>
                    </tbody>
                </table>
                <br />
                {/* -------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        3. Educational Qualifications
                    </h2>
                </span>
                {/* (A) Ph. D. Details */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(A) Ph. D. Details </h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">University/Institute</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Department</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of PhD Supervisor</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Joining:</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Successful Thesis Defence</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Award</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of PhD Thesis:</strong>
                            </td>
                        </tr>
                        {phdData && (
                            <tr key={phdData.phd_id}>
                                <td>{phdData.university}</td>
                                <td>{phdData.dept}</td>
                                <td>{phdData.supervisor}</td>
                                <td>{phdData.year}</td>
                                <td>{phdData.date_defence}</td>
                                <td>{phdData.date_award}</td>
                                <td>{phdData.title}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                {/* (B) Academic Details - PG */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(B) Academic Details - PG </h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Degree/Certificate</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Completion</strong>
                            </td>
                            <td>
                                <strong className="tr_title">University/Institute</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Duration (in years)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Branch/Stream</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Percentage/ CGPA</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Division/Class</strong>
                            </td>
                        </tr>
                        {pgData && (
                            <tr key={pgData.pg_id}>
                                <td>{pgData.degree}</td>
                                <td>{pgData.year_complete}</td>
                                <td>{pgData.university}</td>
                                <td>{pgData.duration}</td>
                                <td>{pgData.branch}</td>
                                <td>{pgData.cgpa}</td>
                                <td>{pgData.year_join}</td>
                                <td>{pgData.division}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                {/* (C) Academic Details - UG */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(C) Academic Details - UG</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Degree/Certificate</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Completion</strong>
                            </td>
                            <td>
                                <strong className="tr_title">University/Institute</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Duration (in years)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Branch/Stream</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Percentage/ CGPA</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Division/Class</strong>
                            </td>
                        </tr>
                        {ugData && (
                            <tr key={ugData.ug_id}>
                                <td>{ugData.degree}</td>
                                <td>{ugData.year_complete}</td>
                                <td>{ugData.university}</td>
                                <td>{ugData.duration}</td>
                                <td>{ugData.branch}</td>
                                <td>{ugData.cgpa}</td>
                                <td>{ugData.year_join}</td>
                                <td>{ugData.division}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                {/* (D) Academic Details - School */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(D) School Details</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">10th/12th/HSC/Diploma</strong>
                            </td>
                            <td>
                                <strong className="tr_title">School</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Passing</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Percentage/ Grade</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Division/Class</strong>
                            </td>
                        </tr>
                        {schoolData &&
                            schoolData.map((school) => (
                                <tr key={school.school_id}>
                                    <td>{school.std}</td>
                                    <td>{school.school}</td>
                                    <td>{school.year}</td>
                                    <td>{school.cgpa}</td>
                                    <td>{school.division}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />
                {/* (E) Additional Educational Qualifications (If any) */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(E) Additional Educational Qualifications</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Degree</strong>
                            </td>
                            <td>
                                <strong className="tr_title">University</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Branch </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Joining </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Completion</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Duration</strong>
                            </td>
                            <td>
                                <strong className="tr_title">CGPA</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Division</strong>
                            </td>
                        </tr>
                        {additionalData &&
                            additionalData.map((additional) => (
                                <tr key={additional.id}>
                                    <td>{additional.degree}</td>
                                    <td>{additional.university}</td>
                                    <td>{additional.branch}</td>
                                    <td>{additional.year_join}</td>
                                    <td>{additional.year_complete}</td>
                                    <td>{additional.duration}</td>
                                    <td>{additional.cgpa}</td>
                                    <td>{additional.division}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />
                {/* -------------------------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        4. Employement Details
                    </h2>
                </span>
                {/* (A) Present Employment */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(A) Present Employment</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Position</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organization/Institution</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Leaving</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Duration (in years & months)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Current Area</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Area of Specialization</strong>
                            </td>
                        </tr>
                        {presentEmpData && (
                            <tr key={presentEmpData.id}>
                                <td>{presentEmpData.present_position}</td>
                                <td>{presentEmpData.date_join}</td>
                                <td>{presentEmpData.organisation}</td>
                                <td>{presentEmpData.date_leave}</td>
                                <td>{presentEmpData.status}</td>
                                <td>{presentEmpData.duration}</td>
                                <td>{presentEmpData.current_area}</td>
                                <td>{presentEmpData.area_special}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(B) Employment History</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Sr. No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Position</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organization/Institution</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date Of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Leaving</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Duration (in years & months)</strong>
                            </td>
                        </tr>
                        {empHistoryData &&
                            empHistoryData.map((empHistory, index) => (
                                <tr key={empHistory.id}>
                                    <td>{index + 1}</td>
                                    <td>{empHistory.position}</td>
                                    <td>{empHistory.organisation}</td>
                                    <td>{empHistory.date_join}</td>
                                    <td>{empHistory.date_leave}</td>
                                    <td>{empHistory.duration}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/* Teaching Experience */}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(C) Teaching Experience</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Sr. No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Position</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Employer</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Course Taught </strong>
                            </td>
                            <td>
                                <strong className="tr_title">UG/PG</strong>
                            </td>

                            <td>
                                <strong className="tr_title">No. Of Students</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Date of Joining</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Date of Leaving</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Duration</strong>
                            </td>
                        </tr>
                        {teachingData &&
                            teachingData.map((teach, index) => (
                                <tr key={teach.id}>
                                    <td>{index + 1}</td>
                                    <td>{teach.position}</td>
                                    <td>{teach.employer}</td>
                                    <td>{teach.course_taught}</td>
                                    <td>{teach.ug_pg}</td>
                                    <td>{teach.stud_number}</td>
                                    <td>{teach.date_join}</td>
                                    <td>{teach.date_leave}</td>
                                    <td>{teach.duration}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(D) Research Experience</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Sr. No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Position</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organization/Institution</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Supervisor</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Date Of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Leaving</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Duration (in years & months)</strong>
                            </td>
                        </tr>
                        {researchData &&
                            researchData.map((research, index) => (
                                <tr key={research.id}>
                                    <td>{index + 1}</td>
                                    <td>{research.position}</td>
                                    <td>{research.institute}</td>
                                    <td>{research.supervisor}</td>
                                    <td>{research.date_join}</td>
                                    <td>{research.date_leave}</td>
                                    <td>{research.duration}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h4>(E) Industrial Experience</h4>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Sr. No.</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Organization/Institution</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Work Profile</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date Of Joining</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Leaving</strong>
                            </td>

                            <td>
                                <strong className="tr_title">Duration (in years & months)</strong>
                            </td>
                        </tr>
                        {industryData &&
                            industryData.map((industry, index) => (
                                <tr key={industry.id}>
                                    <td>{index + 1}</td>
                                    <td>{industry.organisation}</td>
                                    <td>{industry.work_profile}</td>
                                    <td>{industry.date_join}</td>
                                    <td>{industry.date_leave}</td>
                                    <td>{industry.duration}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />
                {/* ------------------------------------------------------------------------------------------ */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        5. Publications
                    </h2>
                </span>

                {/* (A) summary of pub */}

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (A) Summary of Publications</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">Number of International Journal Papers</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of National Journal Papers</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of Books</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of Book Chapters</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of International Conference Papers</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of National Conference Papers</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Number of Patents:</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Google Scholar Link</strong>
                            </td>
                        </tr>
                        {pubData && (
                            <tr key={pubData.id}>
                                <td>{pubData.intj_paper}</td>
                                <td>{pubData.natj_paper}</td>
                                <td>{pubData.no_book}</td>
                                <td>{pubData.no_bookch}</td>
                                <td>{pubData.intc_paper}</td>
                                <td>{pubData.natc_paper}</td>
                                <td>{pubData.no_patent}</td>
                                <td>{pubData.google_link}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />

                {/*List of pub*/}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3>(B) List of Publications</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Author(s)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of Journal </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year, Vol, Page</strong>
                            </td>
                            <td>
                                <strong className="tr_title">impact Factor</strong>
                            </td>
                            <td>
                                <strong className="tr_title">DOI</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                        </tr>
                        {bestPubData &&
                            bestPubData.map((bestPub, index) => (
                                <tr key={bestPub.id}>
                                    <td>{index + 1}</td>
                                    <td>{bestPub.author}</td>
                                    <td>{bestPub.title}</td>
                                    <td>{bestPub.name}</td>
                                    <td>{bestPub.yearvolpage}</td>
                                    <td>{bestPub.impact}</td>
                                    <td>{bestPub.doi}</td>
                                    <td>{bestPub.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/*List of patents*/}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3>(C) List of Patents</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Inventor(s)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Country of Patent </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Patent Number</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Filing</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Date of Publish</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                        </tr>
                        {patentData &&
                            patentData.map((patent, index) => (
                                <tr key={patent.id}>
                                    <td>{index + 1}</td>
                                    <td>{patent.inventor}</td>
                                    <td>{patent.title}</td>
                                    <td>{patent.country}</td>
                                    <td>{patent.number}</td>
                                    <td>{patent.date_file}</td>
                                    <td>{patent.date_publish}</td>
                                    <td>{patent.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/*List of Books*/}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3>(D) List of Books</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Author(s)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Publication </strong>
                            </td>
                            <td>
                                <strong className="tr_title">ISBN</strong>
                            </td>
                        </tr>
                        {booksData &&
                            booksData.map((books, index) => (
                                <tr key={books.id}>
                                    <td>{index + 1}</td>
                                    <td>{books.author}</td>
                                    <td>{books.title}</td>
                                    <td>{books.year}</td>
                                    <td>{books.isbn}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/*List of Books Ch*/}
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3>(E) List of Books Chapters</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Author(s)</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Year of Publication </strong>
                            </td>
                            <td>
                                <strong className="tr_title">ISBN</strong>
                            </td>
                        </tr>
                        {bookChaptersData &&
                            bookChaptersData.map((chapter, index) => (
                                <tr key={chapter.id}>
                                    <td>{index + 1}</td>
                                    <td>{chapter.author}</td>
                                    <td>{chapter.title}</td>
                                    <td>{chapter.year}</td>
                                    <td>{chapter.isbn}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {/* ------------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        6. Membership
                    </h2>
                </span>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (A) Membership of Professional Societies</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of professional society</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Membership Status</strong>
                            </td>
                        </tr>
                        {membershipData &&
                            membershipData.map((membership, index) => (
                                <tr key={membership.id}>
                                    <td>{index + 1}</td>
                                    <td>{membership.name_society}</td>
                                    <td>{membership.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (B) Professional Trainings</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Type of Training</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organisation</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Year</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Duration</strong>
                            </td>
                        </tr>
                        {trainingData &&
                            trainingData.map((training, index) => (
                                <tr key={training.id}>
                                    <td>{index + 1}</td>
                                    <td>{training.type}</td>
                                    <td>{training.organisation}</td>
                                    <td>{training.year}</td>
                                    <td>{training.duration}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (C) Award(s) and Recognition(s)</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of Award</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Awarded By</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Year</strong>
                            </td>
                        </tr>
                        {awardData &&
                            awardData.map((award, index) => (
                                <tr key={award.id}>
                                    <td>{index + 1}</td>
                                    <td>{award.name}</td>
                                    <td>{award.awarded_by}</td>
                                    <td>{award.year}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (D) Sponsored Projects</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Sponsoring Agency </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of project</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Sanctioned Amount</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Period</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Status</strong>
                            </td>
                        </tr>
                        {sponsData &&
                            sponsData.map((spons, index) => (
                                <tr key={spons.id}>
                                    <td>{index + 1}</td>
                                    <td>{spons.agency}</td>
                                    <td>{spons.title}</td>
                                    <td>{spons.amount}</td>
                                    <td>{spons.period}</td>
                                    <td>{spons.role}</td>
                                    <td>{spons.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (D) Consultancy Projects</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organisation </strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of project</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Amount of Grant </strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Period</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title"> Status</strong>
                            </td>
                        </tr>
                        {consultData &&
                            consultData.map((consult, index) => (
                                <tr key={consult.id}>
                                    <td>{index + 1}</td>
                                    <td>{consult.organisation}</td>
                                    <td>{consult.title}</td>
                                    <td>{consult.amount}</td>
                                    <td>{consult.period}</td>
                                    <td>{consult.role}</td>
                                    <td>{consult.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <br />
                {/* -------------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        7. Supervision
                    </h2>
                </span>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (A) PHD Thesis Supervision</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of research scholar</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of Thesis</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                            </td>
                        </tr>
                        {phdSupData &&
                            phdSupData.map((phdSup, index) => (
                                <tr key={phdSup.id}>
                                    <td>{index + 1}</td>
                                    <td>{phdSup.name}</td>
                                    <td>{phdSup.title}</td>
                                    <td>{phdSup.role}</td>
                                    <td>{phdSup.status}</td>
                                    <td>{phdSup.year}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (B) M.Tech/ M.E./ Master's Degree</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of research scholar</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of Thesis</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                            </td>
                        </tr>
                        {masterSupData &&
                            masterSupData.map((masterSup, index) => (
                                <tr key={masterSup.id}>
                                    <td>{index + 1}</td>
                                    <td>{masterSup.name}</td>
                                    <td>{masterSup.title}</td>
                                    <td>{masterSup.role}</td>
                                    <td>{masterSup.status}</td>
                                    <td>{masterSup.year}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (C) B.Tech/ B.E./ Bachelor's Degree</h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of research scholar</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of Thesis</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                            </td>
                        </tr>
                        {bachSupData &&
                            bachSupData.map((bachSup, index) => (
                                <tr key={bachSup.id}>
                                    <td>{index + 1}</td>
                                    <td>{bachSup.name}</td>
                                    <td>{bachSup.title}</td>
                                    <td>{bachSup.role}</td>
                                    <td>{bachSup.status}</td>
                                    <td>{bachSup.year}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {/* ----------------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                        8. Contributions
                    </h2>
                </span>
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (A) Contributions </h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name of research scholar</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Title of Thesis</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Role</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Status</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                            </td>
                        </tr>
                        {contriData &&
                            contriData.map((contri, index) => (
                                <tr key={contri.id}>
                                    <td>{index + 1}</td>
                                    <td>{contri.research_contri}</td>
                                    <td>{contri.teaching_contri}</td>
                                    <td>{contri.other_info}</td>
                                    <td>{contri.professional_service}</td>
                                    <td>{contri.list_journalpub}</td>
                                    <td>{contri.list_conferencepub}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {/* -------------------------------------------------------------------------------------------- */}
                <span className="label">
                    <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>9. Referees</h2>
                </span>
                <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <h3> (A) Referees </h3>
                    <tbody>
                        <tr style={{ backgroundColor: "#f1f1f1" }}>
                            <td>
                                <strong className="tr_title">S.No.</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Name</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Position</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Association with Referee</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Organization/Institution</strong>
                            </td>
                            <td>
                                <strong className="tr_title">e-mail</strong>
                            </td>
                            <td>
                                <strong className="tr_title">Contact No.</strong>
                            </td>
                        </tr>
                        {refereeData &&
                            refereeData.map((referee, index) => (
                                <tr key={referee.id}>
                                    <td>{index + 1}</td>
                                    <td>{referee.name}</td>
                                    <td>{referee.position}</td>
                                    <td>{referee.association}</td>
                                    <td>{referee.organisation}</td>
                                    <td>{referee.email}</td>
                                    <td>{referee.contact}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {/* ------------------------------------------------------------------------------------------- */}
                <h2 style={{ backgroundColor: "#e1f0d8", color: "#308000" }}>Final Declaration</h2>
                <p style={{ color: "red" }}>
                    I hereby declare that I have carefully read and understood the instructions and particulars
                    mentioned in the advertisement and this application form. I further declare that all the entries
                    along with the attachments uploaded in this form are true to the best of my knowledge and belief.
                </p>
                <label>
                    <input type="checkbox" checked={agreement} onChange={handleAgreementChange} />I agree to the
                    declaration
                </label>
                <br />
            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
}

export default FinalPdf;
