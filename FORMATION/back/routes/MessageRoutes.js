const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware, MessageController.sendMessage);


router.get('/:receiverId', authMiddleware, MessageController.getMessages);

module.exports = router;