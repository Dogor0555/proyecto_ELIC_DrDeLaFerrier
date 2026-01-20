"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// =====================
// DATA DE LA BIOGRAFÍA
// =====================
const biographieSRF = [
  {
    titre: " Il est né en 1916 ",
    description:
      "Serge Raynaud de la Ferrière naît le 18 janvier 1916 à Paris, France. Dès son enfance, il manifeste un intérêt marqué pour les sciences, la philosophie et l’observation du monde. Ses parents sont les Comtes Georges Constantine Louis Raynaud et Mme Virginie Marie Billet.",
    image: "/images/1916.png",
  },
  {
    annee: "- 1930-1935 ",
    titre: "études et formation",
    description:
      "À 14 ans, il commence des études universitaires et en 1935, il obtient le titre d’Ingénieur des Mines à Bruxelles, puis ses doctorats en Médecine, en Sciences, en Psychologie, en Théologie, en Philosophie et en Biologie. Le 28 février 1947, il fonde à Paris le Groupement Mondial de Cosmobiologie, qui plus tard est enregistré officiellement sous l'appellation Fédération Internationale de Sociétés Scientifiques le 25 mars 1947 avec une insertion dans le Journal Officiel sous le numéro 10022. Après la rencontre du sage Sun Wu Kung, il fonda l'actuelle Magna Fraternitas Universalis au Venezuela et dans plusieurs pays d'Amérique Latine en promouvant la Culture, la Science, l'Art et la Didactique.Il parcourt inlassablement les cinq continents en visitant 43 pays, il établit ses nobles idéaux de Tolérance, de Vérité et de Paix et pour la conception d'une nouvelle humanité, en donnant plus de 2500 conférences.",
    image: "/images/",
  },
  {
    titre: " - Il vécut à Nice de 1953 à 1962.",
    description:
    "Cette période constitue une étape culminante de sa vie d’écrivain et de savant au cours de laquelle il écrit de nombreux ouvrages, fréquente le monde artistique et culturel de la ville de Nice et réalise de nombreuses conférences dans toute l’Europe. Il contribue ainsi à développer et enrichir la culture à Nice : en 1960, il établit le siège de la Fédération Internationale de Sociétés Scientifiques (FISS) au Club l'Artistique, un centre d'art, en réunissant de nombreuses célébrités scientifiques et artistiques de l'époque. Il a été un précurseur de l’Union de l’Art et de la Science, qu’il considérait nécessaire pour une vision intégrale du savoir.",
    image: "/images/niza.png",
  },
  {
    titre: " - Il se distingue comme écrivain",
    description:
    "(en publiant 100 ouvrages) mais aussi en tant que peintre. Ses peintures, en lien avec des thématiques des cinq continents qu'il visita, ont été exposées au niveau international de son vivant. Il fut déclaré un « incomparable peintre » (Claire Duda, Directrice de la Galerie Municipale Renoir, Réalité Niçoise n°233-234 Juillet-Août 1981) pour son grand savoir et sa profonde connaissance des différentes cultures, qui lui permirent de pénétrer les symboles de l'Orient et de l'Occident.",
    image: "/images/obras.png",
  },
  {
    titre: " - Il décédé le 27 décembre 1962 ",
    description : 
    "Il est décédé le 27 décembre 1962 à Nice et il est enterré au Cimetière de l'Est. Un monument à sa mémoire fut inauguré le 23 mai 1981 en présence du Maire Adjoint M. Alain Guillon, représentant le Député-Maire M. Jacques Médecin.",
    image: "/images/cementerio.png",
 },
 {
    titre: " - Fondations ",
    description : 
    "De la pensée du Dr Serge Raynaud de la Ferrière sont nées des fondations internationales qui œuvrent dans différents domaines de la science, de la recherche, de l’éducation, de la culture, de la philosophie et de l’art. Toutes promeuvent les principes de Tolérance, de Vérité et de Paix.",
    image: "/images/fondations.png",
 },
 {
    titre:" - Magna Fraternitas Universalis Dr. Serge Raynaud de la Ferrière",
    image: "/logos/magna.jpeg",
 },
 {    titre:" - FISS ",
    description :
    "- Federación Internacional de Sociedades Científicas – Central Científica, (Fédération Internationale de Sociétés Scientifiques - Centrale Scientifique)",
    image : "/logos/logofiss.png",

 },
 {
    titre:"INVESCIENCIAS",
    description :
    "(Instituto de Investigaciones y Aplicaciones Científicas y Tecnológicas - Institut de Recherches et d'Applications Scientifiques et Technologiques)",
    image : "/logos/iici_Invesciencias.jpg",
 },
 {
    titre:" ELIC ",
    description :
    "(Escuelas Libres de Investigación Científica para Niños - Écoles Libres de Recherche Scientifique pour Enfants)",
    image: "/logos/elic.png",
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
