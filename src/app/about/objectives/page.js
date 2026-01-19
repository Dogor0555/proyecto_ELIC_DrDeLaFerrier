// src/app/about/objectives/page.js
export default function Objectives() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Objectifs de l'Association</h1>
        
        <div className="content-section">
          <p>
            L'Association pour la Préservation de l'Œuvre du Docteur de la Ferrière en Europe 
            poursuit plusieurs objectifs fondamentaux :
          </p>

          <div className="objectives-grid">
            <div className="objective-card">
              <h3>Étude et Diffusion</h3>
              <p>
                Étudier, approfondir, sauvegarder et diffuser l'œuvre philosophique, scientifique, 
                artistique, didactique et normative du Dr. Serge Raynaud de la Ferrière, joint à 
                l'inséparable œuvre d'exégèse de son disciple le Dr. David Juan Ferriz Olivares.
              </p>
            </div>

            <div className="objective-card">
              <h3>Promotion des Valeurs</h3>
              <p>
                Promouvoir les valeurs humaines et les droits de l'homme qu'ils proposaient et 
                indiquaient. En particulier reconstruire l'œuvre qui émana du Dr. Serge Raynaud 
                de la Ferrière pendant sa permanence en Europe dans la période de 1951-1962.
              </p>
            </div>

            <div className="objective-card">
              <h3>Traduction</h3>
              <p>
                Traduire en français et en d'autres langues européennes et mondiales les œuvres 
                originelles en espagnol écrites par le Dr. Serge Raynaud de la Ferrière, et aussi 
                les œuvres d'exégèse et les commentaires du Dr. David Juan Ferriz Olivares et de 
                ses successeurs.
              </p>
            </div>

            <div className="objective-card">
              <h3>Préservation du Patrimoine</h3>
              <p>
                Restaurer et entretenir le Monument du Dr. Serge Raynaud de la Ferrière situé au 
                Cimetière de l'Est à Nice et organiser des évènements commémoratifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}