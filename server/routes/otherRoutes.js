//otherRoutes.js
const express = require('express');
const router = express.Router();
const otherController = require('../controllers/otherController');

// Routes
router.post('/addMemberships', otherController.addMemberships);
router.get('/getMemberships/:app_number', otherController.getMemberships);
router.post('/addTrainings', otherController.addTrainings);
router.get('/getTrainings/:app_number', otherController.getTrainings);
router.post('/addAwards', otherController.addAwards);
router.get('/getAwards/:app_number', otherController.getAwards);
router.post('/addSponsoredProjects', otherController.addSponsoredProjects);
router.get('/getSponsoredProjects/:app_number', otherController.getSponsoredProjects);
router.post('/addConsultancyProjects', otherController.addConsultancyProjects);
router.get('/getConsultancyProjects/:app_number', otherController.getConsultancyProjects);
router.post('/addPhdSupervsions', otherController.addPhdSupervsions);
router.get('/getPhdSupervisions/:app_number', otherController.getPhdSupervisions);
router.post('/addMasterSupervisions', otherController.addMasterSupervsions);
router.get('/getMasterSupervisions/:app_number', otherController.getMasterSupervisions);
router.post('/addBachelorSupervisions', otherController.addBachelorSupervsions);
router.get('/getBachelorSupervisions/:app_number', otherController.getBachelorSupervisions);
router.post('/addContributions', otherController.addContributions);
router.get('/getContributions/:app_number', otherController.getContributions);
router.post('/addReferees', otherController.addReferees);
router.get('/getReferees/:app_number', otherController.getReferees);

module.exports = router;