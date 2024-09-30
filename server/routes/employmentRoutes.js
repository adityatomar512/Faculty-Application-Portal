//employmentRoutes.js
const express = require('express');
const router = express.Router();
const employmentController = require('../controllers/employmentController');

// Routes
router.post('/createEmployment', employmentController.createEmployment);
router.get('/getEmployment/:app_number', employmentController.getEmployment);
router.post('/addEmpHistory', employmentController.addEmpHistory);
router.get('/getEmpHistory/:emp_id', employmentController.getEmpHistory);
router.post('/addTeachExp', employmentController.addTeachExp);
router.get('/getTeachExp/:emp_id', employmentController.getTeachExp);
router.post('/addResearchExp', employmentController.addResearchExp);
router.get('/getResearchExp/:emp_id', employmentController.getResearchExp);
router.post('/addIndustryExp', employmentController.addIndustryExp);
router.get('/getIndustryExp/:emp_id', employmentController.getIndustryExp);
module.exports = router;





  