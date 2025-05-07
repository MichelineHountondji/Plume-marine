// import React from "react";

// const Contact = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md">
      
//       {/* ✅ Titre principal */}
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-10">
//         📍 *Notre Localisation*
//       </h1>

//       {/* ✅ Google Maps intégré via iframe */}
//       <div className="flex justify-center">
//         <iframe
//           className="w-full h-96 rounded-lg shadow-md"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127719.36866901379!2d2.349937451682235!3d6.369028107304662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102356f6f6f59f6b%3A0x5b75ee7fd2b9a9e1!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2s!4v1714752102564!5m2!1sfr!2s"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
      
//       {/* ✅ Informations de contact */}
//       <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
        
//         {/* 📨 Formulaire de contact */}
//         <form className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h2>
          
//           <label className="block text-gray-700 font-medium mb-2">Nom</label>
//           <input type="text" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Entrez votre nom" />
          
//           <label className="block text-gray-700 font-medium mb-2">Email</label>
//           <input type="email" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Votre email" />
          
//           <label className="block text-gray-700 font-medium mb-2">Message</label>
//           <textarea className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Votre message..." rows="4"></textarea>
          
//           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
//             Envoyer
//           </button>
//         </form>

//         {/* 📍 Coordonnées & horaires */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos coordonnées</h2>

//           <p className="text-gray-700">
//             📍 *Adresse* : Abomey-Calavi, Bénin <br />
//             📧 *Email* : contact@plumemarine.com <br />
//             ☎ *Téléphone* : +229 66289179 <br />
//           </p>

//           <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">🕒 Horaires</h2>
//           <p className="text-gray-700">
//             Lundi - Vendredi : *8h00 - 18h00* <br />
//             Samedi : *9h00 - 14h00* <br />
//             Dimanche : *Fermé*
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const Contact = ({ receiverId, tokenJWT }) => {
  const [messages, setMessages] = useState([]);

  // 🔹 Récupérer les messages via l'API
  useEffect(() => {
    axios.get(`http://localhost:5000/api/messages/${receiverId}`, {
      headers: { "Authorization": `Bearer ${tokenJWT}` } // 🔹 Ajout du token JWT pour l'authentification
    })
      .then(res => setMessages(res.data)) // ✅ Met à jour les messages récupérés
      .catch(err => console.log("Erreur :", err));
  }, [receiverId]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md">
      
      {/* ✅ Titre principal */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-10">
        📍 *Notre Localisation*
      </h1>

      {/* ✅ Google Maps intégré via iframe */}
      <div className="flex justify-center">
        <iframe
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127719.36866901379!2d2.349937451682235!3d6.369028107304662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102356f6f6f59f6b%3A0x5b75ee7fd2b9a9e1!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2s!4v1714752102564!5m2!1sfr!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* ✅ Informations de contact */}
      <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
        
        {/* 📨 Formulaire de contact */}
        <form className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h2>
          
          <label className="block text-gray-700 font-medium mb-2">Nom</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Entrez votre nom" />
          
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Votre email" />
          
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Votre message..." rows="4"></textarea>
          
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Envoyer
          </button>
        </form>

        {/* 📍 Coordonnées & horaires */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos coordonnées</h2>

          <p className="text-gray-700">
            📍 *Adresse* : Abomey-Calavi, Bénin <br />
            📧 *Email* : contact@plumemarine.com <br />
            ☎ *Téléphone* : +229 66289179 <br />
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">🕒 Horaires</h2>
          <p className="text-gray-700">
            Lundi - Vendredi : *8h00 - 18h00* <br />
            Samedi : *9h00 - 14h00* <br />
            Dimanche : *Fermé*
          </p>
        </div>

      </div>

      {/* 🔹 Affichage des messages reçus */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">📩 Messages reçus</h2>
        {messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <p key={index} className="border-b pb-2 text-gray-700">
                <strong>{msg.sender} :</strong> {msg.content}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Aucun message reçu.</p>
        )}
      </div>

    </div>
  );
};

export default Contact;
