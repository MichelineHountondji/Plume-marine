const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");

// Inscription
router.post("/register", UserController.register);

// Connexion
router.post("/login", UserController.login);

// Obtenir l'utilisateur connecté (Protégé par JWT)
router.get("/me", authMiddleware, UserController.getUser);

module.exports = router;

