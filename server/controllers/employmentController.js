//empolymentController.js
const Employment = require('../models/Employment'); 
const Emp_History = require('../models/Emp_History');
const Teach_Experience = require('../models/Teach_Experience');
const Research_Experience = require('../models/Research_Experience');
const Industry_Experience = require('../models/Industry_Experience');

async function createEmployment(req, res) {
    try {
      const { present_position, status, date_leave, organisation, date_join, duration, area_special, current_area, app_number } = req.body;
      const newEmployment = await Employment.create({ present_position, status, date_leave, organisation, date_join, duration, area_special, current_area, app_number });
      res.status(201).json({
        ...newEmployment.toJSON(),
        emp_id: newEmployment.id, 
      });
    } catch (error) {
      console.error("Error creating employment:", error);
      return res.status(500).json({ message: "Failed to create employment." });
    }
}
async function getEmployment(req, res) {
  try {
    const { app_number } = req.params; 
    const employment = await Employment.findOne({ where: { app_number }, attributes: ['id', 'present_position','status','date_leave', 'organisation', 'date_join','duration','current_area', 'area_special','app_number'] });
    if (employment) {
      return res.status(200).json({ employment });
    } else {
      return res.status(404).json({ message: "Employment not found." });
    }
  } catch (error) {
    console.error("Error fetching Employment:", error);
    return res.status(500).json({ message: "Failed to fetch Employment." });
  }
}
/*-----------------------------------------------------------------------------------------------------------*/
async function addEmpHistory(req, res) {
    try {
      const { position, organisation, date_join, date_leave, duration, emp_id } = req.body;
      const newEmpHistory = await Emp_History.create({ position, organisation, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newEmpHistory);
    } catch (error) {
      console.error("Error adding employment history:", error);
      return res.status(500).json({ message: "Failed to add employment history." });
    }
}
async function getEmpHistory(req, res) {
  try {
    const { emp_id } = req.params; 
    const empHistory = await Emp_History.findAll({ where: { emp_id }, attributes: ['position','organisation','date_leave', 'date_join','duration','emp_id'] });
    if (empHistory.length > 0) {
      return res.status(200).json({ empHistory });
    } else {
      return res.status(404).json({ message: "EmpHistory not found." });
    }
  } catch (error) {
    console.error("Error fetching EmpHistory:", error);
    return res.status(500).json({ message: "Failed to fetch EmpHistory." });
  }
}

/*----------------------------------------------------------------------------------------------------*/
async function addTeachExp(req, res) {
    try {
      const { position, employer, course_taught, ug_pg, stud_number, date_join, date_leave, duration, emp_id } = req.body;
      const newTeachExp = await Teach_Experience.create({ position, employer, course_taught, ug_pg, stud_number, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newTeachExp);
    } catch (error) {
      console.error("Error adding teaching experience:", error);
      return res.status(500).json({ message: "Failed to add teaching experience." });
    }
}
async function getTeachExp(req, res) {
  try {
    const { emp_id } = req.params; 
    const teachExp = await Teach_Experience.findAll({ where: { emp_id }, attributes: ['position','employer','date_leave', 'date_join','duration','emp_id','course_taught','ug_pg','stud_number'] });
    if (teachExp.length > 0) {
      return res.status(200).json({ teachExp });
    } else {
      return res.status(404).json({ message: "TeachExp not found." });
    }
  } catch (error) {
    console.error("Error fetching TeachExp:", error);
    return res.status(500).json({ message: "Failed to fetch TeachExp." });
  }
}
/*-------------------------------------------------------------------------------------------------*/
async function addResearchExp(req, res) {
    try {
      const { position, institute, supervisor, date_join, date_leave, duration, emp_id } = req.body;
      const newResearchExp = await Research_Experience.create({ position, institute, supervisor, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newResearchExp);
    } catch (error) {
      console.error("Error adding research experience:", error);
      return res.status(500).json({ message: "Failed to add research experience." });
    }
}
async function getResearchExp(req, res) {
  try {
    const { emp_id } = req.params; 
    const researchExp = await Research_Experience.findAll({ where: { emp_id }, attributes: ['position','institute','date_leave', 'date_join','duration','emp_id','supervisor'] });
    if (researchExp.length > 0) {
      return res.status(200).json({ researchExp });
    } else {
      return res.status(404).json({ message: "ResearchExp not found." });
    }
  } catch (error) {
    console.error("Error fetching ResearchExp:", error);
    return res.status(500).json({ message: "Failed to fetch ResearchExp." });
  }
}
/*----------------------------------------------------------------------------------------------*/
async function addIndustryExp(req, res) {
    try {
      const { organisation, work_profile, date_join, date_leave, duration, emp_id } = req.body;
      const newIndustryExp = await Industry_Experience.create({ organisation, work_profile, date_join, date_leave, duration, emp_id });
      return res.status(201).json(newIndustryExp);
    } catch (error) {
      console.error("Error adding industry experience:", error);
      return res.status(500).json({ message: "Failed to add industry experience." });
    }
}
async function getIndustryExp(req, res) {
  try {
    const { emp_id } = req.params; 
    const industryExp = await Industry_Experience.findAll({ where: { emp_id }, attributes: ['organisation','work_profile','date_leave', 'date_join','duration','emp_id'] });
    if (industryExp.length > 0) {
      return res.status(200).json({ industryExp });
    } else {
      return res.status(404).json({ message: "IndustryExp not found." });
    }
  } catch (error) {
    console.error("Error fetching IndustryExp:", error);
    return res.status(500).json({ message: "Failed to fetch IndustryExp." });
  }
}


module.exports = { createEmployment, getEmployment, addEmpHistory, getEmpHistory, addTeachExp, getTeachExp, addResearchExp, getResearchExp, addIndustryExp, getIndustryExp };
