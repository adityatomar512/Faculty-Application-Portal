//Publication.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const PublicationsForm = () => {
    const app_number = localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
    /*---------------------------------PUBLICATIONS DATA----------------------------------------------*/
    const [publicationData, setPublicationData] = useState({
        app_number: app_number,
        intj_paper: "",
        natj_paper: "",
        intc_paper: "",
        natc_paper: "",
        no_patent: "",
        no_book: "",
        no_bookch: "",
        google_link: "", 
    });
    const handlePublicationInputChange = (e) => {
        const { name, value } = e.target;
        let parsedValue;
        // Check which attributes should be integers
        switch (name) {
            case "intj_paper":
            case "natj_paper":
            case "intc_paper":
            case "natc_paper":
            case "no_patent":
            case "no_book":
            case "no_bookch":
                // Parse the value to an integer using parseInt
                parsedValue = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                parsedValue = value;
        }
        setPublicationData({ ...publicationData, [name]: parsedValue });
    };
    const handlePublicationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/publications/createPublications", publicationData);
            localStorage.setItem("pub_id", response.data.id);
            alert("Publication Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting publications form:", error);
        }
    };
    /*----------------------BEST PUBLICATIONS DATA--------------------------------------------------*/
    const pubId = parseInt(localStorage.getItem("pub_id"), 10);
    console.log(pubId);
    const [bestData, setBestData] = useState({
        bestDetails: [
            {
                pub_id: pubId,
                author: "",
                title: "",
                name: "",
                yearvolpage: "",
                impact: "",
                doi: "",
                status: "",
            }
        ]
    });
    const handleBestInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedBestData = [...bestData.bestDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            case "doi":
                // Parse the value to an integer using parseInt
                updatedBestData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedBestData[index][name] = value;
        }
        setBestData({ ...bestData, bestDetails: updatedBestData });
    };
    
    const handleAddMore1 = () => {
        setBestData({
            ...bestData,
            bestDetails: [
                ...bestData.bestDetails,
                {
                    pub_id: pubId,
                    author: "",
                    title: "",
                    name: "",
                    yearvolpage: "",
                    impact: "",
                    doi: "",
                    status: "",
                }
            ]
        });
    };
    const handleBestSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < bestData.bestDetails.length; i++) {
                const row = bestData.bestDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/publications/addBestPublications", row);
                console.log(response.data);
            }
            alert("Best publications Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting best publication details:", error);
        }
    };
    /*-----------------------------------------------------PATENTS---------------------------------*/
    const [patentData, setPatentData] = useState({
        patentDetails: [
            {
                pub_id: pubId,
                inventor: "",
                title: "",
                country: "",
                number: "",
                date_file: "",
                date_publish: "",
                status: "",
            }
        ]
    });
    const handlePatentInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedPatentData = [...patentData.patentDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "number":
                // Parse the value to an integer using parseInt
                updatedPatentData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedPatentData[index][name] = value;
        }
        setPatentData({ ...patentData, patentDetails: updatedPatentData });
    };
    
    const handleAddMore2 = () => {
        setPatentData({
            ...patentData,
            patentDetails: [
                ...patentData.patentDetails,
                {
                    pub_id: pubId,
                    inventor: "",
                    title: "",
                    country: "",
                    number: "",
                    date_file: "",
                    date_publish: "",
                    status: "",
                }
            ]
        });
    };
    const handlePatentSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < patentData.patentDetails.length; i++) {
                const row = patentData.patentDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/publications/addPatents", row);
                console.log(response.data);
            }
            alert("Patents Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting patent details:", error);
        }
    };
    /*-----------------------------------------------------BOOKS---------------------------------*/
    const [bookData, setBookData] = useState({
        bookDetails: [
            {
                pub_id: pubId,
                author: "",
                title: "",
                year: "",
                isbn: "",
            }
        ]
    });
    const handleBookInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedBookData = [...bookData.bookDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'year' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedBookData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedBookData[index][name] = value;
        }
        setBookData({ ...bookData, bookDetails: updatedBookData });
    };
    
    const handleAddMore3 = () => {
        setBookData({
            ...bookData,
            bookDetails: [
                ...bookData.bookDetails,
                {
                    pub_id: pubId,
                    author: "",
                    title: "",
                    year: "",
                    isbn: "",
                }
            ]
        });
    };
    const handleBookSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < bookData.bookDetails.length; i++) {
                const row = bookData.bookDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/publications/addBooks", row);
                console.log(response.data);
            }
            alert("Books Data Entered Successfully");
        } catch (error) {
            console.error("Error submitting Book details:", error);
        }
    };
    /*-----------------------------------------------------BOOK CHAPTERS---------------------------------*/
    const [bookChapterData, setBookChapterData] = useState({
        bookChapterDetails: [
            {
                pub_id: pubId,
                author: "",
                title: "",
                year: "",
                isbn: "",
            }
        ]
    });
    const handleBookChapterInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedBookChapterData = [...bookChapterData.bookChapterDetails];
        // Check which attributes should be integers
        switch (name) {
            // Add any attributes that should be integers to this list
            // For example, if 'page_number' should be an integer:
            case "year":
                // Parse the value to an integer using parseInt
                updatedBookChapterData[index][name] = parseInt(value, 10);
                break;
            default:
                // For attributes that should not be integers, use the value as is
                updatedBookChapterData[index][name] = value;
        }
        setBookChapterData({ ...bookChapterData, bookChapterDetails: updatedBookChapterData });
    };
    
    const handleAddMore4 = () => {
        setBookChapterData({
            ...bookChapterData,
            bookChapterDetails: [
                ...bookChapterData.bookChapterDetails,
                {
                    pub_id: pubId,
                    author: "",
                    title: "",
                    year: "",
                    isbn: "",
                }
            ]
        });
    };
    const handleBookChapterSubmit = async (e) => {
        e.preventDefault();
        try {
            // Iterate over each row in schoolDetails array
            for (let i = 0; i < bookChapterData.bookChapterDetails.length; i++) {
                const row = bookChapterData.bookChapterDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/publications/addBookChapters", row);
                console.log(response.data);
            }
            alert("Books Chapters Data Entered Successfully");
            navigate('/Membership');
        } catch (error) {
            console.error("Error submitting Book Chapter details:", error);
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
        <form onSubmit={handlePublicationSubmit}>
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
            <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}> Summary Of Publications</legend>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', fontWeight: 'bold' }}>
                        <label htmlFor="intj_paper">Number of International Journal Papers:  </label>
                        <input type="text" id="intj_paper" name="intj_paper" onChange={handlePublicationInputChange} value={publicationData.intj_paper} required /><br /><br />
                        <label htmlFor="natj_paper">Number of National Journal Papers:  </label>
                        <input type="text" id="natj_paper" name="natj_paper" onChange={handlePublicationInputChange} value={publicationData.natj_paper} required /><br /><br />
                        <label htmlFor="intc_paper">Number of International Conference Papers:  </label>
                        <input type="text" id="intc_paper" name="intc_paper" onChange={handlePublicationInputChange} value={publicationData.intc_paper} required /><br /><br />
                        <label htmlFor="natc_paper">Number of National Conference Papers:  </label>
                        <input type="text" id="natc_paper" name="natc_paper" onChange={handlePublicationInputChange} value={publicationData.natc_paper} required /><br /><br />
                    </div>
                    <div style={{ width: '45%', marginLeft: '10px', fontWeight: 'bold' }}>
                        <label htmlFor="no_book">Number of Books:  </label>
                        <input type="text" id="no_book" name="no_book" onChange={handlePublicationInputChange} value={publicationData.no_book} required /><br /><br />
                        <label htmlFor="no_bookch">Number of Book Chapters:  </label>
                        <input type="text" id="no_bookch" name="no_bookch" onChange={handlePublicationInputChange} value={publicationData.no_bookch} required /><br /><br />
                        <label htmlFor="no_patent">Number of Patents:  </label>
                        <input type="text" id="no_patent" name="no_patent" onChange={handlePublicationInputChange} value={publicationData.no_patent} /><br /><br />
                        <label htmlFor="google_link">Google Scholar Link:  </label>
                        <input type="text" id="google_link" name="google_link" onChange={handlePublicationInputChange} value={publicationData.google_link} /><br /><br />
                    </div>
                </div>
                <button type="button" onClick={handlePublicationSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Best Publications Details */}
        <form onSubmit={handleBestSubmit} id="BestForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>List of 10 Best Publications</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Author(s)</th>
                            <th>Title</th>
                            <th>Name of Journal</th>
                            <th>Year, Vol, Page</th>
                            <th>impact Factor</th>
                            <th>DOI</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bestData.bestDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="author" onChange={(e) => handleBestInputChange(e, index)} value={row.author} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="title" onChange={(e) => handleBestInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="name" onChange={(e) => handleBestInputChange(e, index)} value={row.name} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="yearvolpage" onChange={(e) => handleBestInputChange(e, index)} value={row.yearvolpage} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="impact" onChange={(e) => handleBestInputChange(e, index)} value={row.impact} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="doi" onChange={(e) => handleBestInputChange(e, index)} value={row.doi} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="status" onChange={(e) => handleBestInputChange(e, index)} value={row.status} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore1}>Add More</button>
                    <button type="button" onClick={handleBestSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Patents Details */}
        <form onSubmit={handlePatentSubmit} id="PatentForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>List of Patents</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Inventor(s)</th>
                            <th>Title of Patent</th>
                            <th>Country of Patent</th>
                            <th>Patent Number</th>
                            <th>Date of Filing</th>
                            <th>Date of Publish</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {patentData.patentDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" style={{width:'100%'}} name="inventor" onChange={(e) => handlePatentInputChange(e, index)} value={row.inventor} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="title" onChange={(e) => handlePatentInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="country" onChange={(e) => handlePatentInputChange(e, index)} value={row.country} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="number" onChange={(e) => handlePatentInputChange(e, index)} value={row.number} required /></td>
                            <td><input type="date" style={{width:'100%'}} name="date_file" onChange={(e) => handlePatentInputChange(e, index)} value={row.date_file} required /></td>
                            <td><input type="date" style={{width:'100%'}} name="date_publish" onChange={(e) => handlePatentInputChange(e, index)} value={row.date_publish} required /></td>
                            <td><input type="text" style={{width:'100%'}} name="status" onChange={(e) => handlePatentInputChange(e, index)} value={row.status} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore2}>Add More</button>
                    <button type="button" onClick={handlePatentSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Books Details */}
        <form onSubmit={handleBookSubmit} id="BookForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>List of Books</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Author(s)</th>
                            <th>Title of the Book</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookData.bookDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" name="author" onChange={(e) => handleBookInputChange(e, index)} value={row.author} required /></td>
                            <td><input type="text" name="title" onChange={(e) => handleBookInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handleBookInputChange(e, index)} value={row.year} required /></td>
                            <td><input type="text" name="isbn" onChange={(e) => handleBookInputChange(e, index)} value={row.isbn} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore3}>Add More</button>
                    <button type="button" onClick={handleBookSubmit}> Save </button>
            </fieldset>
        </form>
        {/* Books Chapters Details */}
        <form onSubmit={handleBookChapterSubmit} id="BookChapterForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>List of Book Chapters</legend>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Author(s)</th>
                            <th>Title of the Book Chapter(s)</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookChapterData.bookChapterDetails.map((row, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td><input type="text" name="author" onChange={(e) => handleBookChapterInputChange(e, index)} value={row.author} required /></td>
                            <td><input type="text" name="title" onChange={(e) => handleBookChapterInputChange(e, index)} value={row.title} required /></td>
                            <td><input type="text" name="year" onChange={(e) => handleBookChapterInputChange(e, index)} value={row.year} required /></td>
                            <td><input type="text" name="isbn" onChange={(e) => handleBookChapterInputChange(e, index)} value={row.isbn} required /></td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    <button type="button" onClick={handleAddMore4}>Add More</button>
                    <button type="button" onClick={handleBookChapterSubmit}> Save </button>
            </fieldset>
        </form>
    </div>
    );
};

export default PublicationsForm;
