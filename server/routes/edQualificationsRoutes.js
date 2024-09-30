//edQualificationsRoutes.js
const express = require('express');
const router = express.Router();
const edQualificationsController = require('../controllers/edQualificationsController');

// Routes
router.post('/createEducationalQualifications', edQualificationsController.createEducationalQualifications);
router.get('/getEducationalQualifications/:app_number', edQualificationsController.getEducationalQualifications);
router.post('/addPhdDetails', edQualificationsController.addPhdDetails);
router.get('/getPhdDetails/:phd_id', edQualificationsController.getPhdDetails);
router.post('/addPgDetails', edQualificationsController.addPgDetails);
router.get('/getPgDetails/:pg_id', edQualificationsController.getPgDetails);
router.post('/addUgDetails', edQualificationsController.addUgDetails);
router.get('/getUgDetails/:ug_id', edQualificationsController.getUgDetails);
router.post('/addSchoolDetails', edQualificationsController.addSchoolDetails);
router.get('/getSchoolDetails/:app_number', edQualificationsController.getSchoolDetails);
router.post('/addAdditionalQualifications', edQualificationsController.addAdditionalQualifications);
router.get('/getAdditionalQualifications/:app_number', edQualificationsController.getAdditionalQualifications);

module.exports = router;





  