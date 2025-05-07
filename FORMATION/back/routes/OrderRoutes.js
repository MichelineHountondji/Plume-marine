const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware, OrderController.createOrder);

router.get('/', authMiddleware, OrderController.getUserOrders);


router.put('/:id/status', authMiddleware, OrderController.updateOrderStatus);

module.exports = router;