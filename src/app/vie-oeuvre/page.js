"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// =====================
// DATA DE LA BIOGRAFÍA
// =====================
const biographieSRF = [
  {
    annee: "1916",
    titre: "Naissance",
    description:
      "Serge Raynaud de la Ferrière naît le 18 janvier 1916 à Paris, France. Dès son enfance, il manifeste un intérêt marqué pour les sciences, la philosophie et l’observation du monde.",
    image: "/images/1916.png",
  },
  {
    annee: "1935–1945",
    titre: "Formation intellectuelle",
    description:
      "Il entreprend des études approfondies dans divers domaines : astronomie, mathématiques, philosophie, anthropologie et traditions orientales. Cette période marque la construction de sa pensée universaliste.",
    image: "/images/formation.png",
  },
  {
    annee: "1947",
    titre: "Mission en Amérique Latine",
    description:
      "Convaincu de la nécessité d’unir science, culture et spiritualité, il quitte l’Europe et s’installe en Amérique Latine afin de diffuser un message humaniste adapté au monde moderne.",
    image: "/images/amerique.png",
  },
  {
    annee: "1948–1952",
    titre: "Fondation des institutions culturelles",
    description:
      "Il fonde plusieurs centres culturels et éducatifs destinés à promouvoir l’étude du savoir universel, l’éthique, la discipline intellectuelle et le développement harmonieux de l’être humain.",
    image: "/images/fraternidad.png",
  },
  {
    annee: "1950–1960",
    titre: "Œuvre intellectuelle",
    description:
      "Durant cette période, il rédige de nombreux ouvrages, conférences et enseignements portant sur la science, la philosophie, l’astrologie, la psychologie et la culture universelle.",
    image: "/images/oeuvre.png",
  },
  {
    annee: "1962",
    titre: "Héritage et transmission",
    description:
      "Serge Raynaud de la Ferrière décède le 27 décembre 1962. Son œuvre demeure vivante à travers les institutions, chercheurs et disciples qui poursuivent l’étude et la transmission de sa pensée.",
    image: "/images/heritage.png",
  },
];

// =====================
// COMPONENTE
// =====================
export default function VieEtOeuvrePage() {
  const [voirPlus, setVoirPlus] = useState(false);

  return (
    <section className="timeline-container">
      
      {/* TÍTULO */}
      <motion.h1
        className="timeline-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Biographie de Serge Raynaud de la Ferrière
      </motion.h1>

      {/* TIMELINE */}
      <div className="timeline-line">
        {biographieSRF
          .slice(0, voirPlus ? biographieSRF.length : 2)
          .map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* POINT */}
              <span className="timeline-point" />

              {/* CONTENU */}
              <h3 className="timeline-item-title">
                {item.annee} — {item.titre}
              </h3>

              <div className="timeline-item-content">
                <p className="timeline-item-description">
                  {item.description}
                </p>

                <img
                  src={item.image}
                  alt={item.titre}
                  className="biographie-img"
                />
              </div>
            </motion.div>
          ))}
      </div>

      {/* BOUTON */}
      <div className="timeline-button-container">
        <button
          onClick={() => setVoirPlus(!voirPlus)}
          className="timeline-button"
        >
          {voirPlus ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </section>
  );
}
