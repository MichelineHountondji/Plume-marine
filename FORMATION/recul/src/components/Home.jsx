import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

import image1 from "../assets/buro.jpg";
import image2 from "../assets/photo12.jpg";
import image3 from "../assets/buro.jpg";
import ferme4 from "../assets/ferme4.jpg";

import kpomasse from "../assets/kpomassep.jpg";
import poulet_entier from"../assets/poulet_entier.png";
import tilapia_rouge from"../assets/tilapia_rouge.avif";

const carouselImages = [image1, image2, image3];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Carrousel avec section Excellence Piscicole */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${carouselImages[currentImage]})` }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-5xl font-bold mt-3"
            >
              Bienvenue chez PLUME MARINE
            </motion.h2>
            
            {/* Section Excellence Piscicole */}
            <motion.div
              className="bg-white/90-blur-sm p-8 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
    
              <p className="text-white text-3xl mb-6 font-medium">
                "Un produit local, un soutien vital : ensemble, dynamisons l'élevage et la pisciculture!"
              </p>
              <Link 
                to="/product" 
                className="inline-block"
              >
                <button className="bg-blue-700 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  En savoir plus →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      
      <h1 className="text-center text-green-800 font-bold mt-16 text-4xl">
        Nos Fermes
      </h1>

      <section className="py-16 bg-[#f0f7ee] flex flex-col md:flex-row items-center gap-10 px-10">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">
             Ferme : Succulent et Durable
          </h2>
          <p className="text-lg text-gray-700">
            Nos produits proviennent d'un élevage durable garantissant une qualité exceptionnelle.
            Nous privilégions des méthodes naturelles pour offrir une alimentation saine et 
            responsable à nos consommateurs.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={kpomasse} alt="Ferme durable" className="rounded-lg shadow-lg w-full" />
        </motion.div>
      </section>
      
      {/* Section Poulet */}
      <section className="py-16 bg-[#fff8ed] flex flex-col md:flex-row items-center gap-10 px-10">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={ferme4} alt="Poulet fermier" className="rounded-lg shadow-lg w-full" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            🐔 Poulet fermier, savoureux et sain
          </h2>
          <p className="text-lg text-gray-700">
            Nos poulets sont élevés en plein air pour garantir une viande tendre et de qualité. 
            Nourris naturellement, ils offrent une saveur authentique et un apport nutritif équilibré.
          </p>
        </motion.div>
      </section>

      {/* Section Nos Produits */}
      <h1 className="text-center text-green-800 font-bold mt-16 text-4xl">
        Nos Produits
      </h1>

      {/* Section Poisson */}
      <section className="py-16 bg-[#eef6fa] flex flex-col md:flex-row items-center gap-10 px-10">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            🐟 Poisson frais et savoureux
          </h2>
          <p className="text-lg text-gray-700">
            Nos poissons sont élevés avec soin pour garantir une qualité exceptionnelle. 
            Riches en oméga-3, ils offrent une saveur unique et une fraîcheur incomparable.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={tilapia_rouge} alt="Poisson frais" className="rounded-lg shadow-lg w-full" />
        </motion.div>
      </section>

      {/* Section Poulet */}
      <section className="py-16 bg-[#fff8ed] flex flex-col md:flex-row items-center gap-10 px-10">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={poulet_entier} alt="Poulet fermier" className="rounded-lg shadow-lg w-full" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
             Poulet Entier, prêt à cuisiner
          </h2>
          <p className="text-lg text-gray-700">
            Nos poulets sont préparés avec soin pour vous offrir un produit prêt à cuisiner.
            Découvrez la qualité supérieure de notre viande, tendre et juteuse.
          </p>
        </motion.div>
      </section>

      {/* Section Nos Objectifs */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-16 my-16 bg-[#f5f5f5] rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-extrabold text-green-800 text-center mb-6"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⭐ NOS OBJECTIFS
        </motion.h2>

        <p className="text-lg max-w-3xl text-black mx-auto leading-relaxed text-center mb-8">
          Chez <span className="text-blue-500 text-2xl font-bold mt-3">PLUME MARINE</span>, nous nous engageons à :  
        </p>
        
        <div className="mt-6 space-y-4 text-lg text-black max-w-3xl mx-auto">
          <p className="flex items-start">
            <span className="text-black mr-2">✓</span>
            <strong className="text-black">Créer une plateforme digitale pour promouvoir les producteurs locaux entre producteurs et acheteurs.</strong>
          </p>
          <p className="flex items-start">
            <span className="text-black mr-2">✓</span>
            <strong className="text-black">Faciliter la vente et la mise en relation avec les clients (particuliers, restaurateurs, distributeurs).</strong>
          </p>
          <p className="flex items-start">
            <span className="text-black mr-2">✓</span>
            <strong className="text-black">Améliorer la visibilité des producteurs locaux</strong> 
          </p>
          <p className="flex items-start">
            <span className="text-black mr-2">✓</span>
            <strong className="text-black">Sensibiliser le public à la consommation de produits locaux.</strong> 
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;