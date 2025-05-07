const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      createdBy: req.user.id, 
    });

    await newProduct.save();
    res.status(201).json({ message: 'Produit ajouté.', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('createdBy', 'name email');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('createdBy', 'name email');
    if (!product) return res.status(404).json({ message: 'Produit introuvable.' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produit supprimé.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur.', error });
  }
};