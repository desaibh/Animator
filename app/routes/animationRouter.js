
const express = require('express');
const AnimationController = require('../controllers/AnimationController');

const router = express.Router();

router.get('/', AnimationController.getAllOfCurrentUser);
router.post('/', AnimationController.create);
router.delete('/:id', AnimationController.delete);

module.exports = router;
