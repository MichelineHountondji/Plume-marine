const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const { receiver, content } = req.body;
    const newMessage = new Message({ sender: req.user.id, receiver, content });

    await newMessage.save();
    res.status(201).json({ message: 'Message envoyé.', message: newMessage });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user.id, receiver: req.params.receiverId }, { sender: req.params.receiverId, receiver: req.user.id }],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};