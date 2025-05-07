import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; // Pour gérer la redirection

const ProductCard = ({ image, name, description, price }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm w-full transition"
    >
      {/* 📸 Image du produit */}
      <div className="overflow-hidden">
        <img
          src={image ? image : "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-48 object-cover rounded-b-3xl"
        />
      </div>

      {/* 📦 Bloc noir de description */}
      <div className="bg-black text-white px-4 py-3">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm mt-1 mb-3">{description}</p>
        <p className="text-sm mt-1 mb-3 font-semibold">Prix : {price} FCFA</p>

        <Link
          to="/commande"
          className="flex items-center justify-between bg-white text-black px-3 py-1 rounded-xl"
        >
          <span className="text-sm font-semibold">Voir plus</span>
          <ShoppingCart size={20} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
