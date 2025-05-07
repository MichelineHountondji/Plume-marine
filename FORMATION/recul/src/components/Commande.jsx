// import { motion } from "framer-motion";
// import backgroundImage from "../assets/buro4.jpg";
// export default function Commandes() {
//   return (
//     <div className="w-full">
//       {/* Section image avec texte */}
//       <section
//         className="relative h-[50vh] bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4">
//             Effectuez votre commande
//           </h1>
//         </div>
//       </section>

//       {/* Section formulaire */}
//       <div className="bg-gray-50 py-12 px-4 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full"
//         >
//           <div><h2 className="text-xl font-bold text-center text-gray-800 mb-2">
//             Pour toute commande, veuillez remplir le formulaire ci-dessous.
//           </h2></div>

//           <form className="space-y-4 mt-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Nom complet
//               </label>
//               <input
//                 type="text"
//                 placeholder="Votre nom complet"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="votre@email.com"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Pays
//               </label>
//               <input
//                 type="text"
//                 placeholder="Ex: Bénin"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Description du produit
//               </label>
//               <textarea
//                 rows={3}
//                 placeholder="Détaillez ici votre commande (ex: 2 poulets entiers, 3 tilapias...)"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition font-semibold text-lg"
//             >
//               Envoyer
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import backgroundImage from "../assets/buro4.jpg";

export default function Commandes() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    product: "",
    quantity: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Fonction pour envoyer la commande via l'API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/order", formData, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });

      alert("Commande envoyée avec succès !");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la commande :", error);
    }
  };

  return (
    <div className="w-full">
      {/* 🔹 Section image avec texte */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center px-4">
            Effectuez votre commande
          </h1>
        </div>
      </section>

      {/* 🔹 Section formulaire */}
      <div className="bg-gray-50 py-12 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full"
        >
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
            Pour toute commande, veuillez remplir le formulaire ci-dessous.
          </h2>

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input type="text" name="name" placeholder="Votre nom complet" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" placeholder="votre@email.com" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pays</label>
              <input type="text" name="country" placeholder="Ex: Bénin" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Produit</label>
              <input type="text" name="product" placeholder="Nom du produit" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantité</label>
              <input type="number" name="quantity" placeholder="Quantité" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" onChange={handleChange} required />
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition font-semibold text-lg">
              Envoyer la commande
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
