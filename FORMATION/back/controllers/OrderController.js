const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const newOrder = new Order({
      buyer: req.user.id,
      products,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Commande enregistrée.', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id }).populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};