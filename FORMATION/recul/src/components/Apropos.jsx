import React from "react";
import { motion } from "framer-motion";

import image1 from "../assets/photo12.jpg";
import image2 from "../assets/buro.jpg";
import image3 from "../assets/EAU1.jpg";
import image4 from "../assets/photo12.jpg";

const sections = [
  {
    key: "histoire",
    title: "Notre Histoire",
    color: "text-blue-600", // Bleu marin
    bgColor: "bg-blue-50", // Fond léger
    image: image1,
    reverse: false,
    content: `Avec la restriction des importations de produits congelés, de nombreux jeunes Béninois ont choisi de se tourner vers la pisciculture et l’élevage pour répondre à la demande croissante.`,
  },
  {
    key: "vision",
    title: "Notre Vision",
    color: "text-teal-600", // Vert d'eau
    bgColor: "bg-teal-50",
    image: image2,
    reverse: false,
    content: `Créer une communauté dynamique et interconnectée où chaque pisciculteur et éleveur béninois peut valoriser ses produits.`,
  },
  {
    key: "mission",
    title: "Notre Mission",
    color: "text-amber-700", // Terre/ocre
    bgColor: "bg-amber-50",
    image: image3,
    reverse: true,
    content: `✔ Soutenir les pisciculteurs et éleveurs du Bénin grâce à un outil digital innovant.`,
  },
  {
    key: "valeurs",
    title: "Nos Valeurs",
    color: "text-green-700", // Vert profond
    bgColor: "bg-green-50",
    image: image4,
    reverse: true,
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>🌱 Respect de l’environnement</li>
        <li>💡 Innovation continue</li>
        <li>🤝 Solidarité et entraide</li>
        <li>✅ Engagement qualité</li>
      </ul>
    ),
  },
];

const Apropos = () => {
  return (
    <motion.section
      id="apropos"
      className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 pt-4 mb-12">
        À PROPOS DE <span className="text-blue-600">PLUME MARINE</span>
      </h1>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.key}
            className={`grid md:grid-cols-2 gap-6 items-center p-6 ${section.bgColor} rounded-lg shadow-inner text-gray-800 text-lg`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={section.image}
              alt={section.title}
              className={`rounded-lg shadow-md w-full h-64 object-cover ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
            />

            <div className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
              <h2 className={`text-3xl font-bold mb-4 ${section.color}`}>
                {section.title}
              </h2>
              <div className="text-gray-700 text-lg">{section.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Apropos;