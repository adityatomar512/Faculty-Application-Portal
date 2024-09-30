//publicationRoutes.js
const express = require('express');
const router = express.Router();
const publicationsController = require('../controllers/publicationsController');

// Routes
router.post('/createPublications', publicationsController.createPublications);
router.get('/getPublications/:app_number', publicationsController.getPublications);
router.post('/addBestPublications', publicationsController.addBestPublications);
router.get('/getBestPublications/:pub_id', publicationsController.getBestPublications);
router.post('/addPatents', publicationsController.addPatents);
router.get('/getPatents/:pub_id', publicationsController.getPatents);
router.post('/addBooks', publicationsController.addBooks);
router.get('/getBooks/:pub_id', publicationsController.getBooks);
router.post('/addBookChapters', publicationsController.addBookChapters);
router.get('/getBookChapters/:pub_id', publicationsController.getBookChapters);
module.exports = router;





  