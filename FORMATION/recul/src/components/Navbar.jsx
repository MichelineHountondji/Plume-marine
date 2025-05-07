import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/LogoN.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-blue-700/90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + nom */}
        <Link to="/" className="flex items-center space-x-3 font-bold text-2xl">
          <img src={image} alt="Logo" className="h-16 w-16 object-cover rounded-full" />
          <span>
            Plume<span className="text-yellow-400">Marine</span>
          </span>
        </Link>

        {/* 🔹 Menu desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold items-center">
          <li><Link to="/" className="hover:text-yellow-400 transition">ACCUEIL</Link></li>
          <li><Link to="/apropos" className="hover:text-yellow-400 transition">À PROPOS</Link></li>
          <li><Link to="/product" className="hover:text-yellow-400 transition">PRODUITS</Link></li>
          <li><Link to="/commande" className="hover:text-yellow-400 transition">COMMANDE</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">CONTACT</Link></li>
        </ul>

        {/* 🔹 Boutons d'action */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/connexion" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-700 transition">
            Connexion
          </Link>
          <Link to="/espaceproducteur" className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-400 transition">
            Espace producteur
          </Link>
        </div>

        {/* 🔹 Menu mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile menu (slide) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-700 p-4 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li><Link to="/" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>ACCUEIL</Link></li>
            <li><Link to="/apropos" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>À PROPOS</Link></li>
            <li><Link to="/product" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>PRODUITS</Link></li>
            <li><Link to="/commande" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>COMMANDE</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
            <li><Link to="/connexion" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-700 transition" onClick={() => setIsOpen(false)}>Connexion</Link></li>
            <li><Link to="/dashboard" className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-400 transition" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
