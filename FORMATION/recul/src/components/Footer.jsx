import React from "react";
import { Link } from "react-router-dom";
import { Facebook, MessageCircle } from "lucide-react"; // 🔥 Icônes pour WhatsApp & Facebook

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 🔹 Section Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Plume<span className="text-yellow-400">Marine</span>
          </h2>
          <p className="text-sm leading-6">
            Plateforme dédiée aux éleveurs et pisciculteurs pour promouvoir leurs produits,
            partager leurs savoir-faire et créer un réseau solide au Bénin et en Afrique.
          </p>
        </div>

        {/* 🔹 Liens rapides */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">🏠 Accueil</Link></li>
            <li><Link to="/apropos" className="hover:text-yellow-400 transition">📄 À propos</Link></li>
            <li><Link to="/product" className="hover:text-yellow-400 transition">🛒 Produits</Link></li>
            <li><Link to="/commande" className="hover:text-yellow-400 transition">📦 Commande</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">📞 Contact</Link></li>
          </ul>
        </div>

        {/* 🔹 Contact avec icônes */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Nous contacter</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Bénin, Abomey-Calavi</li>
            <li>📧 mich.hountondji@gmail.com</li>
            <li>📞 +229 66289179</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition flex items-center gap-2">
              <Facebook size={20} /> Facebook
            </a>
            <a href="#" className="hover:text-yellow-400 transition flex items-center gap-2">
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* 🔹 Copyright */}
      <div className="border-t border-blue-500 mt-10 pt-6 text-center text-xs">
        © 2025 PlumeMarine ENVOL/OIF.
      </div>
    </footer>
  );
};

export default Footer;
