import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/buro4.jpg"; // Même image que la page connexion

const Inscription = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Inscription</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
            <input
              type="text"
              placeholder="Votre pseudo"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              J'accepte les conditions d'utilisation
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
            S'inscrire
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Vous avez déjà un compte?{' '}
              <Link to="/connexion" className="text-black font-semibold hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;