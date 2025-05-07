
import React, { useState } from "react";
import Messages from "../components/Messages";
import { PlusCircle, Package } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import backgroundImage from "../assets/buro.jpg"; 


const EspaceProducteur = () => {
  const [showForm, setShowForm] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      {/* 🔥 Section hero avec image d’arrière-plan */}
      <div className="relative h-80 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="absolute inset-0  bg-opacity-50"></div>

        <div className="relative text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg text-black">
            Espace du Producteur
          </h1>
        </div>
      </div>
    {/* ✅ Ajout du composant Messages */}
          <Messages receiverId="12345" />
      {/* 🔥 Message principal */}
      <div className="max-w-4xl mx-auto text-center mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">
          Bienvenue dans votre espace personnel pour gérer vos produits pisciculte ou d’élevage
        </h2>
      </div>

      {/* 🔹 Boutons interactifs */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-green-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer"
          onClick={() => { setShowForm(!showForm); setShowProducts(false); }}
        >
          <PlusCircle size={40} />
          <h2 className="text-xl font-semibold mt-3">Déclarer une nouvelle production</h2>
          <p className="text-sm text-green-200 mb-4">Renseignez vos récoltes ou produits d’élevage.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-yellow-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer"
          onClick={() => { setShowProducts(!showProducts); setShowForm(false); }}
        >
          <Package size={40} />
          <h2 className="text-xl font-semibold mt-3">Mes productions</h2>
          <p className="text-sm text-yellow-200 mb-4">Consultez vos produits enregistrés.</p>
        </motion.div>
      </div>

      {/* 🔹 Affichage du formulaire */}
      {showForm && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Nouvelle production</h2>
          <form>
            <input
              type="text"
              placeholder="Nom du produit (ex: Poisson, Poulet...)"
              className="w-full border p-2 rounded mb-4"
            />
            <textarea
              placeholder="Description (ex: race, poids, méthode d’élevage...)"
              className="w-full border p-2 rounded mb-4"
            ></textarea>
            <input
              type="number"
              placeholder="Prix (FCFA)"
              className="w-full border p-2 rounded mb-4"
            />
            <input
              type="number"
              placeholder="Quantité disponible"
              className="w-full border p-2 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            >
              ✅ Enregistrer
            </button>
          </form>
        </div>
      )}

      {/* 🔹 Affichage des produits */}
      {showProducts && (
        <div className="mt-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default EspaceProducteur;