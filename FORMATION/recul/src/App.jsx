// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Assurez-vous que le fichier Navbar.jsx existe bien dans "components"
// import Footer from "./components/Footer"; // Ajoutez un fichier Footer.jsx dans "components"
// import Home from "./components/Home";
// import Apropos from './components/Apropos';
// import Contact from './components/contact';
// import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <Router>
//       <Navbar /> {/* Le Navbar reste affiché en haut */}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Apropos" element={<Apropos/>} />
//         <Route path="/Contact" element={<Contact/>} />
//       </Routes>
      
//       <Footer /> {/* Le Footer reste affiché en bas */}
//     </Router>
//   );
// };

// export default Apropos;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from './components/Connexion';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import EspaceProducteur from "./components/EspaceProducteur";
import Product from "./components/Product"; 
import Commande from "./components/Commande";
import Inscription from "./components/Inscription";
import Messages from "./components/Messages";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* 🔥 Navbar affichée en haut sur toutes les pages */}
      <div className="container mx-auto p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/espaceproducteur" element={<EspaceProducteur />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/messages" element={<Messages receiverId="12345" />} />
        </Routes>
      </div>
      <Footer /> {/* 🔥 Footer affiché en bas sur toutes les pages */}
    </Router>
  );
};

export default App;
