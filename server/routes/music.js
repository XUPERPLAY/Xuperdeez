const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/songs', musicController.getSongs);
router.post('/songs', musicController.uploadSong);

module.exports = router;
