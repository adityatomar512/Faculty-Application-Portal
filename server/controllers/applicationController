//applicationController.js
const Application = require('../models/application'); // Import Sequelize model
const Personal_Details = require('../models/Personal_Details');
const path = require('path'); // Import the path module

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

async function createApplication(req, res) {
  try {
    const { reg_id, app_number, add_number, dept, date, post } = req.body;
    if (typeof app_number !== 'string') {
      throw new Error(' Application number must be strings');
    }
    if (typeof add_number !== 'string') {
      throw new Error(' Advertisement number must be strings');
    }
    if (typeof dept !== 'string') {
      throw new Error(' Department must be strings');
    }
    if (typeof post !== 'string') {
      throw new Error('Post must be a string');
    }
    const newApplication = await Application.create({ reg_id, app_number, add_number, dept, date, post });
    return res.status(201).json({ app_number: newApplication.app_number });
  } catch (error) {
    console.error("Error creating application:", error);
    return res.status(500).json({ message: "Failed to create application." });
  }
}

async function getApplication(req, res) {
  try {
    const { app_number } = req.params; 
    const application = await Application.findOne({ where: { app_number }, attributes: ['add_number', 'date', 'post', 'dept', 'app_number'] });
    if (application) {
      return res.status(200).json({ application });
    } else {
      return res.status(404).json({ message: "Application not found." });
    }
  } catch (error) {
    console.error("Error fetching application:", error);
    return res.status(500).json({ message: "Failed to fetch application." });
  }
}


async function addPersonalDetails(req, res) {
  try {
      const { app_number, f_name, m_name, l_name, nationality, gender, marital_status, category, father_name, c_address, p_address, mob, alt_mob, email, alt_email, landline, dob, id_proof } = req.body;

      // Ensure both id_proof and user_image files are included
      if (!req.files || !req.files.user_image) {
          return res.status(400).json({ message: 'Both user image files are required.' });
      }

      const user_image = req.files.user_image[0].path; // Assuming user_image is uploaded as a single file

      const newDetails = await Personal_Details.create({ app_number, f_name, m_name, l_name, nationality, gender, marital_status, category, father_name, c_address, p_address, mob, alt_mob, email, alt_email, landline, dob, id_proof, user_image });

      return res.status(201).json(newDetails);
  } catch (error) {
      console.error("Error adding personal details:", error);
      return res.status(500).json({ message: "Failed to add personal details." });
  }
}
async function getPersonalDetails(req, res) {
  try {
    const { app_number } = req.params; 
    const PersonalDetails = await Personal_Details.findOne({ where: { app_number }, attributes: ['app_number', 'f_name', 'm_name', 'l_name', 'nationality','dob','gender','marital_status','category','father_name','mob','email','alt_mob','alt_email','landline','c_address','p_address','id_proof','user_image'] });
    if (PersonalDetails) {
      return res.status(200).json({ PersonalDetails });
    } else {
      return res.status(404).json({ message: "PersonalDetails not found." });
    }
  } catch (error) {
    console.error("Error fetching PersonalDetails:", error);
    return res.status(500).json({ message: "Failed to fetch PersonalDetails." });
  }
}

module.exports = { createApplication, getApplication, addPersonalDetails, getPersonalDetails };
