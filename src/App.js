//App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Header, Footer } from "./template";
import Login_Page from "./Login_Page";
import Create_Account from "./Create_Account";
import Personal_Details from "./Personal_Details";
import Reset_Password from "./Reset_Password";
import Educational_Qualifications from "./Educational_Qualifications";
import Employment from "./Employment";
import Publication from "./Publication";
import Membership from "./Membership";
import Supervision from "./Supervision";
import Contribution from "./Contribution";
import Refree from "./Refree";
import Declaration from "./Declaration";
import FinalPdf from "./FinalPdf";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/Login_Page" element={<Login_Page />} />
          <Route path="/Create_Account" element={<Create_Account />} />\
          <Route path="/Personal_Details" element={<Personal_Details />} />
          <Route path="/Reset_Password" element={<Reset_Password />} />
          <Route path="/Educational_Qualifications" element={<Educational_Qualifications/>}/>
          <Route path="/Employment" element={<Employment />} />
          <Route path="/Publication" element={<Publication />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Supervision" element={<Supervision />} />
          <Route path="/Contribution" element={<Contribution />} />
          <Route path="/Refree" element={<Refree />} />
          <Route path="/Declaration" element={<Declaration/>}/>
          <Route path="/FinalPdf" element={<FinalPdf/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
