import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import backgroundImage from "../assets/buro4.jpg";

export default function Product() {
  return (
    <div className="bg-gray-100 min-h-screen">

     
      <section className="relative h-96 flex items-center justify-center text-black">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  ></div>

  <div className="absolute inset-0  bg-opacity-70"></div>

  {/* Texte lisible */}
  <div className="relative text-center p-6">
    <h2 className="text-5xl font-extrabold drop-shadow-lg">
      Découvrez nos produits
    </h2>
  </div>
</section>


      {/* 🔹 Section Produits */}
      <section className="p-6">
        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-center my-12">
          Explorez notre gamme de viandes de poulets & poissons
        </h1>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

    </div>
  );
}



