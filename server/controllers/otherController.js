//otherController.js
const Memberships = require('../models/Memberships'); 
const Trainings = require('../models/Trainings');
const Awards = require('../models/Awards');
const Sponsored_Projects = require('../models/Sponsored_Projects');
const Consultancy_Projects = require('../models/Consultancy_Projects');
const Phd_Supervisions = require('../models/Phd_Supervisions');
const Master_Supervisions = require('../models/Master_Supervisions');
const Bachelor_Supervisions = require('../models/Bachelor_Supervisions');
const Contributions = require('../models/Contributions');
const Referees = require('../models/Referees');

async function addMemberships(req, res) {
    try {
      const { app_number, name_society, status } = req.body;
      const newMemberships = await Memberships.create({ app_number, name_society, status });
      return res.status(201).json(newMemberships);
    } catch (error) {
      console.error("Error ading memberships:", error);
      return res.status(500).json({ message: "Failed to add memberships." });
    }
}
async function getMemberships(req, res) {
  try {
    const { app_number } = req.params; 
    const memberships = await Memberships.findAll({ where: { app_number }, attributes: ['app_number','name_society','status'] });
    if (memberships.length > 0) {
      return res.status(200).json({ memberships });
    } else {
      return res.status(404).json({ message: "Memberships not found." });
    }
  } catch (error) {
    console.error("Error fetching Memberships:", error);
    return res.status(500).json({ message: "Failed to fetch Memberships." });
  }
}
/*----------------------------------------------------------------------------------------*/ 
async function addTrainings(req, res) {
    try {
      const { app_number, type, organisation, year, duration } = req.body;
      const newTrainings = await Trainings.create({ app_number, type, organisation, year, duration });
      return res.status(201).json(newTrainings);
    } catch (error) {
      console.error("Error ading trainings:", error);
      return res.status(500).json({ message: "Failed to add trainings." });
    }
}
async function getTrainings(req, res) {
  try {
    const { app_number } = req.params; 
    const trainings = await Trainings.findAll({ where: { app_number }, attributes: ['app_number','type','organisation','year','duration'] });
    if (trainings.length > 0) {
      return res.status(200).json({ trainings });
    } else {
      return res.status(404).json({ message: "Trainings not found." });
    }
  } catch (error) {
    console.error("Error fetching Trainings:", error);
    return res.status(500).json({ message: "Failed to fetch Trainings." });
  }
}
/*------------------------------------------------------------------------------------------*/
async function addAwards(req, res) {
    try {
      const { app_number, name, awarded_by, year } = req.body;
      const newAwards = await Awards.create({ app_number, name, awarded_by, year });
      return res.status(201).json(newAwards);
    } catch (error) {
      console.error("Error ading awards:", error);
      return res.status(500).json({ message: "Failed to add awards." });
    }
}
async function getAwards(req, res) {
  try {
    const { app_number } = req.params; 
    const awards = await Awards.findAll({ where: { app_number }, attributes: ['app_number','name','awarded_by','year'] });
    if (awards.length > 0) {
      return res.status(200).json({ awards });
    } else {
      return res.status(404).json({ message: "Awards not found." });
    }
  } catch (error) {
    console.error("Error fetching Awards:", error);
    return res.status(500).json({ message: "Failed to fetch Awards." });
  }
}
/*------------------------------------------------------------------------------------------------------*/
async function addSponsoredProjects(req, res) {
    try {
      const { app_number, agency, title, amount, period, role, status } = req.body;
      const newSponsoredProjects = await Sponsored_Projects.create({ app_number, agency, title, amount, period, role, status });
      return res.status(201).json(newSponsoredProjects);
    } catch (error) {
      console.error("Error ading sponsored projects:", error);
      return res.status(500).json({ message: "Failed to add sponsored projects." });
    }
}
async function getSponsoredProjects(req, res) {
  try {
    const { app_number } = req.params; 
    const sponsoredProjects = await Sponsored_Projects.findAll({ where: { app_number }, attributes: ['app_number','agency','title','amount','period','role','status'] });
    if (sponsoredProjects.length > 0) {
      return res.status(200).json({ sponsoredProjects });
    } else {
      return res.status(404).json({ message: "SponsoredProjects not found." });
    }
  } catch (error) {
    console.error("Error fetching SponsoredProjects:", error);
    return res.status(500).json({ message: "Failed to fetch SponsoredProjects." });
  }
}
/*---------------------------------------------------------------------*/
async function addConsultancyProjects(req, res) {
    try {
      const { app_number, organisation, title, amount, period, role, status } = req.body;
      const newConsultancyProjects = await Consultancy_Projects.create({ app_number, organisation, title, amount, period, role, status });
      return res.status(201).json(newConsultancyProjects);
    } catch (error) {
      console.error("Error ading consulatncy projects:", error);
      return res.status(500).json({ message: "Failed to add consultancy projects." });
    }
}
async function getConsultancyProjects(req, res) {
  try {
    const { app_number } = req.params; 
    const consultancyProjects = await Consultancy_Projects.findAll({ where: { app_number }, attributes: ['app_number','organisation','title','amount','period','role','status'] });
    if (consultancyProjects.length > 0) {
      return res.status(200).json({ consultancyProjects });
    } else {
      return res.status(404).json({ message: "ConsultancyProjects not found." });
    }
  } catch (error) {
    console.error("Error fetching ConsultancyProjects:", error);
    return res.status(500).json({ message: "Failed to fetch ConsultancyProjects." });
  }
}
/*--------------------------------------------------------------------------------------------*/
async function addPhdSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newPhdSupervisions = await Phd_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newPhdSupervisions);
    } catch (error) {
      console.error("Error ading phd supervisions:", error);
      return res.status(500).json({ message: "Failed to add phd supervisions." });
    }
}
async function getPhdSupervisions(req, res) {
  try {
    const { app_number } = req.params; 
    const phdSupervisions = await Phd_Supervisions.findAll({ where: { app_number }, attributes: ['app_number','name','title','year','role','status'] });
    if (phdSupervisions.length > 0) {
      return res.status(200).json({ phdSupervisions });
    } else {
      return res.status(404).json({ message: "PhdSupervsions not found." });
    }
  } catch (error) {
    console.error("Error fetching PhdSupervsions:", error);
    return res.status(500).json({ message: "Failed to fetch PhdSupervsions." });
  }
}
/*--------------------------------------------------------------------------------------------*/
async function addMasterSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newMasterSupervisions = await Master_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newMasterSupervisions);
    } catch (error) {
      console.error("Error ading master supervisions:", error);
      return res.status(500).json({ message: "Failed to add master supervisions." });
    }
}
async function getMasterSupervisions(req, res) {
  try {
    const { app_number } = req.params; 
    const masterSupervisions = await Master_Supervisions.findAll({ where: { app_number }, attributes: ['app_number','name','title','year','role','status'] });
    if (masterSupervisions.length > 0) {
      return res.status(200).json({ masterSupervisions });
    } else {
      return res.status(404).json({ message: "MasterSupervsions not found." });
    }
  } catch (error) {
    console.error("Error fetching MasterSupervsions:", error);
    return res.status(500).json({ message: "Failed to fetch MasterSupervsions." });
  }
}
/*-----------------------------------------------------------------------------------------------*/
async function addBachelorSupervsions(req, res) {
    try {
      const { app_number, name, title, role, status, year } = req.body;
      const newBachelorSupervisions = await Bachelor_Supervisions.create({ app_number, name, title, role, status, year });
      return res.status(201).json(newBachelorSupervisions);
    } catch (error) {
      console.error("Error ading bachelor supervisions:", error);
      return res.status(500).json({ message: "Failed to add bachelor supervisions." });
    }
}
async function getBachelorSupervisions(req, res) {
  try {
    const { app_number } = req.params; 
    const bachelorSupervisions = await Bachelor_Supervisions.findAll({ where: { app_number }, attributes: ['app_number','name','title','year','role','status'] });
    if (bachelorSupervisions.length > 0) {
      return res.status(200).json({ bachelorSupervisions });
    } else {
      return res.status(404).json({ message: "BachelorSupervsions not found." });
    }
  } catch (error) {
    console.error("Error fetching BachelorSupervsions:", error);
    return res.status(500).json({ message: "Failed to fetch BachelorSupervsions." });
  }
}
/*------------------------------------------------------------------------------*/
async function addContributions(req, res) {
  try {
    const { app_number, research_contri, teaching_contri, other_info, professional_service, list_journalpub, list_conferencepub } = req.body;
    const newContributions = await Contributions.create({ app_number, research_contri, teaching_contri, other_info, professional_service, list_journalpub, list_conferencepub });
    return res.status(201).json(newContributions);
  } catch (error) {
    console.error("Error adding contributions:", error);
    return res.status(500).json({ message: "Failed to add contributions." });
  }
}
async function getContributions(req, res) {
  try {
    const { app_number } = req.params; 
    const contributions = await Contributions.findAll({ where: { app_number }, attributes: ['app_number','research_contri','teaching_contri','other_info','professional_service','list_journalpub','list_conferencepub'] });
    if (contributions.length > 0) {
      return res.status(200).json({ contributions });
    } else {
      return res.status(404).json({ message: "Contributions not found." });
    }
  } catch (error) {
    console.error("Error fetching Contributions:", error);
    return res.status(500).json({ message: "Failed to fetch Contributions." });
  }
}
/*------------------------------------------------------------------------------------------------------*/
async function addReferees(req, res) {
  try {
    const { app_number, name, position, association, organisation, email, contact } = req.body;
    const newReferees = await Referees.create({ app_number, name, position, association, organisation, email, contact });
    return res.status(201).json(newReferees);
  } catch (error) {
    console.error("Error ading referees:", error);
    return res.status(500).json({ message: "Failed to add referees." });
  }
}
async function getReferees(req, res) {
  try {
    const { app_number } = req.params; 
    const referees = await Referees.findAll({ where: { app_number }, attributes: ['app_number','name','position','association','organisation','email','contact'] });
    if (referees.length > 0) {
      return res.status(200).json({ referees });
    } else {
      return res.status(404).json({ message: "Referees not found." });
    }
  } catch (error) {
    console.error("Error fetching Referees:", error);
    return res.status(500).json({ message: "Failed to fetch Referees." });
  }
}



module.exports = { addMemberships, getMemberships, addTrainings, getTrainings, addAwards, getAwards, addSponsoredProjects, getSponsoredProjects, addConsultancyProjects, getConsultancyProjects, addPhdSupervsions, getPhdSupervisions, addMasterSupervsions, getMasterSupervisions, addBachelorSupervsions, getBachelorSupervisions, addContributions, getContributions, addReferees, getReferees };
