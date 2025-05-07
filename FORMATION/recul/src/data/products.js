import pouletEntier from '../assets/poulet_entier.png';
import ailes from '../assets/Ailes_de_poulet.png';
import gesier from '../assets/gesier.png';

import tilapiaRouge from '../assets/tilapia_rouge.avif';
import tilapiaNoir from '../assets/tilapia_noir.jpg';
import tilapiaNoir2 from '../assets/tilapia_noir2.jpg';
import silure1 from '../assets/silure1.jpg';
import silure6 from '../assets/silure6.jpg';
import silureB from '../assets/silureB.jpg';
import machoiron2 from '../assets/Machoiron2.jpg';
import machoiron4 from '../assets/Machoiron4.avif';

export const products = [
  {
    name: "Poulet de chair entier",
    description: "Poulet fermier élevé en plein air, offrant une charme tendre et savoureuse, idéal pour les repas familiaux.",
    image: pouletEntier,
    price: 7500
  },
  {
    name: "Ailes de poulet",
    description: "Ailes croustillantes parfaites pour la friture ou les grillades, accompagnées d’épices pour un goût authentique.",
    image: ailes,
    price: 2500
  },
  {
    name: "Gésier de poulet",
    description: "Gésier soigneusement nettoyé, prêt à être sauté ou ajouté aux salades pour une texture riche et savoureuse.",
    image: gesier,
    price: 2000
  },
  {
    name: "Tilapia rouge",
    description: "Tilapia de qualité premium, élevé dans des eaux propres, idéal pour la cuisson au four ou à la vapeur.",
    image: tilapiaRouge,
    price: 5000
  },
  {
    name: "Tilapia noir",
    description: "Poisson à la chair ferme, riche en oméga-3, parfait pour les grillades et les sauces savoureuses.",
    image: tilapiaNoir,
    price: 4800
  },
  {
    name: "Tilapia noir (3 pièces)",
    description: "Un lot de 3 tilapias noirs frais, préparés pour vos recettes de poissons en sauce ou frits.",
    image: tilapiaNoir2,
    price: 13000
  },
  {
    name: "Silure entier",
    description: "Poisson d'eau douce au goût subtil, prisé pour ses qualités nutritionnelles et son excellent potentiel de grillade.",
    image: silure1,
    price: 6500
  },
  {
    name: "Silure vivant",
    description: "Silure frais et vivant pour une cuisine immédiate, idéal pour une consommation ultra-fraîche.",
    image: silure6,
    price: 7200
  },
  {
    name: "Silure en lot",
    description: "Lot de silures bien nourris, parfaits pour les plats en sauce ou les préparations gastronomiques.",
    image: silureB,
    price: 18000
  },
  {
    name: "Machoiron 2",
    description: "Poisson robuste à chair blanche délicieuse, excellent pour la grillade ou le fumage.",
    image: machoiron2,
    price: 8500
  },
  {
    name: "Machoiron 4",
    description: "Gros machoiron préparé pour le fumage ou les plats traditionnels africains.",
    image: machoiron4,
    price: 16000
  }
];

export default products;
