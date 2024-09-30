//edQualificationsController.js
const Educational_Qualifications = require('../models/Educational_Qualifications'); 
const Phd_Details = require('../models/Phd_Details');
const Pg_Details = require('../models/Pg_Details');
const Ug_Details = require('../models/Ug_Details');
const School_Details = require('../models/School_Details');
const Additional_Qualifications = require('../models/Additional_Qualifications');

async function createEducationalQualifications(req, res) {
    try {
      const { app_number, phd_id, pg_id, ug_id } = req.body;
      const newEducationalQualifications = await Educational_Qualifications.create({ app_number, phd_id, pg_id, ug_id });
      return res.status(201).json(newEducationalQualifications);
    } catch (error) {
      console.error("Error creating educational qualifications:", error);
      return res.status(500).json({ message: "Failed to create educational qualifications." });
    }
}
async function getEducationalQualifications(req, res) {
  try {
    const { app_number } = req.params; 
    const EducationalQualifications = await Educational_Qualifications.findOne({ where: { app_number }, attributes: ['app_number', 'phd_id', 'pg_id', 'ug_id'] });
    if (EducationalQualifications) {
      return res.status(200).json({ EducationalQualifications });
    } else {
      return res.status(404).json({ message: "EducationalQualifications not found." });
    }
  } catch (error) {
    console.error("Error fetching EducationalQualifications:", error);
    return res.status(500).json({ message: "Failed to fetch EducationalQualifications." });
  }
}
/*--------------------------------------------------------------------------------------------------*/
async function addPhdDetails(req, res) {
    try {
      const { university, dept, supervisor, year, date_defence, date_award, title } = req.body;
      const newPhdDetails = await Phd_Details.create({ university, dept, supervisor, year, date_defence, date_award, title });
      res.status(201).json({
        ...newPhdDetails.toJSON(),
        phd_id: newPhdDetails.phd_id, 
      });
    } catch (error) {
      console.error("Error adding phd details:", error);
      return res.status(500).json({ message: "Failed to add phd details." });
    }
}
async function getPhdDetails(req, res) {
  try {
    const { phd_id } = req.params; 
    const PhdDetails = await Phd_Details.findOne({ where: { phd_id }, attributes: ['university', 'dept', 'supervisor', 'year','date_defence','date_award','title'] });
    if (PhdDetails) {
      return res.status(200).json({ PhdDetails });
    } else {
      return res.status(404).json({ message: "PhdDetails not found." });
    }
  } catch (error) {
    console.error("Error fetching PhdDetails:", error);
    return res.status(500).json({ message: "Failed to fetch PhdDetails." });
  }
}
/*-------------------------------------------------------------------------------------------------------*/
async function addPgDetails(req, res) {
    try {
      const { degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newPgDetails = await Pg_Details.create({ degree, university, branch, year_join, year_complete, duration, cgpa, division });
      res.status(201).json({
        ...newPgDetails.toJSON(),
        pg_id: newPgDetails.pg_id, 
      });
    } catch (error) {
      console.error("Error adding pg details:", error);
      return res.status(500).json({ message: "Failed to add pg details." });
    }
}
async function getPgDetails(req, res) {
  try {
    const { pg_id } = req.params; 
    const PgDetails = await Pg_Details.findOne({ where: { pg_id }, attributes: ['degree','university', 'branch', 'year_join','year_complete','duration','cgpa','division'] });
    if (PgDetails) {
      return res.status(200).json({ PgDetails });
    } else {
      return res.status(404).json({ message: "PgDetails not found." });
    }
  } catch (error) {
    console.error("Error fetching PgDetails:", error);
    return res.status(500).json({ message: "Failed to fetch PgDetails." });
  }
}
/*------------------------------------------------------------------------------------------------------*/
async function addUgDetails(req, res) {
    try {
      const { degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newUgDetails = await Ug_Details.create({ degree, university, branch, year_join, year_complete, duration, cgpa, division });
      res.status(201).json({
        ...newUgDetails.toJSON(),
        ug_id: newUgDetails.ug_id, 
      });
    } catch (error) {
      console.error("Error adding ug details:", error);
      return res.status(500).json({ message: "Failed to add ug details." });
    }
}
async function getUgDetails(req, res) {
  try {
    const { ug_id } = req.params; 
    const UgDetails = await Ug_Details.findOne({ where: { ug_id }, attributes: ['degree','university', 'branch', 'year_join','year_complete','duration','cgpa','division'] });
    if (UgDetails) {
      return res.status(200).json({ UgDetails });
    } else {
      return res.status(404).json({ message: "UgDetails not found." });
    }
  } catch (error) {
    console.error("Error fetching UgDetails:", error);
    return res.status(500).json({ message: "Failed to fetch UgDetails." });
  }
}
/*---------------------------------------------------------------------------------------------------------*/
async function addSchoolDetails(req, res) {
    try {
      const { app_number, std, school, year, cgpa, division } = req.body;
      const newSchoolDetails = await School_Details.create({ app_number, std, school, year, cgpa, division });
      return res.status(201).json(newSchoolDetails);
    } catch (error) {
      console.error("Error adding school details:", error);
      return res.status(500).json({ message: "Failed to add school details." });
    }
}
async function getSchoolDetails(req, res) {
  try {
    const { app_number } = req.params; 
    const SchoolDetails = await School_Details.findAll({ where: { app_number }, attributes: ['app_number','std', 'school', 'year', 'cgpa','division'] });
    if (SchoolDetails.length > 0) {
      return res.status(200).json({ SchoolDetails });
    } else {
      return res.status(404).json({ message: "SchoolDetails not found." });
    }
  } catch (error) {
    console.error("Error fetching SchoolDetails:", error);
    return res.status(500).json({ message: "Failed to fetch SchoolDetails." });
  }
}
/*------------------------------------------------------------------------------------------*/
async function addAdditionalQualifications(req, res) {
    try {
      const { app_number, degree, university, branch, year_join, year_complete, duration, cgpa, division } = req.body;
      const newAdditionalQualifications = await Additional_Qualifications.create({ app_number, degree, university, branch, year_join, year_complete, duration, cgpa, division });
      return res.status(201).json(newAdditionalQualifications);
    } catch (error) {
      console.error("Error adding Additional Qualifications:", error);
      return res.status(500).json({ message: "Failed to add Additional Qualifications." });
    }
}
async function getAdditionalQualifications(req, res) {
  try {
    const { app_number } = req.params; 
    const AdditionalQualifications = await Additional_Qualifications.findAll({ where: { app_number }, attributes: ['app_number','degree','university', 'branch', 'year_join','year_complete','duration','cgpa','division'] });
    if (AdditionalQualifications.length > 0) {
      return res.status(200).json({ AdditionalQualifications });
    } else {
      return res.status(404).json({ message: "AdditionalQualifications not found." });
    }
  } catch (error) {
    console.error("Error fetching AdditionalQualifications:", error);
    return res.status(500).json({ message: "Failed to fetch AdditionalQualifications." });
  }
}

module.exports = { createEducationalQualifications, getEducationalQualifications, addPhdDetails, getPhdDetails, addPgDetails, getPgDetails, addUgDetails, getUgDetails, addSchoolDetails, getSchoolDetails, addAdditionalQualifications, getAdditionalQualifications };
