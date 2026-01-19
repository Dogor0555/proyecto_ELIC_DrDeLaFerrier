// src/app/yoga/cours/page.js
export default function CoursYoga() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Cours et informations pratiques</h1>
        
        <div className="content-section">
          <div className="info-grid">
            <div className="info-card">
              <h2>Horaires des cours</h2>
              <div className="schedule">
                <div className="schedule-item">
                  <h3>Mardi</h3>
                  <p>18h30 - 19h30</p>
                </div>
                <div className="schedule-item">
                  <h3>Jeudi</h3>
                  <p>19h00 - 20h00</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>Lieu</h2>
              <div className="location-info">
                <h3>Espace Coworking le Pinguoin</h3>
                <p>Nice, France</p>
                <p className="note">
                  Accès facile en transports en commun, environnement calme et propice à la pratique.
                </p>
              </div>
            </div>

            <div className="info-card">
              <h2>Participation</h2>
              <div className="participation-info">
                <p>
                  <strong>Association à but non lucratif</strong>
                </p>
                <p>
                  Conformément à nos statuts d'association loi 1901, notre activité est 
                  entièrement bénévole et sans but lucratif.
                </p>
                <div className="contribution">
                  <h3>Participation libre</h3>
                  <p>
                    Une participation libre est proposée pour couvrir les frais de location 
                    de la salle et l'entretien du matériel.
                  </p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>Contact et inscriptions</h2>
              <div className="contact-details">
                <p><strong>Responsable :</strong> Vanessa Perriolat</p>
                <p><strong>Téléphone :</strong> 0632509364</p>
                <p><strong>Email :</strong> apres.srf@gmail.com</p>
                <div className="inscription-info">
                  <h3>Cours d'essai gratuit</h3>
                  <p>
                    Nous proposons un cours d'essai gratuit pour découvrir la méthode 
                    Ferriz-Ferrière. N'hésitez pas à nous contacter pour réserver votre place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="preparation-section">
            <h2>Préparation pour le cours</h2>
            <div className="preparation-grid">
              <div className="preparation-item">
                <h3>Tenue vestimentaire</h3>
                <p>Vêtements confortables permettant une liberté de mouvement</p>
              </div>
              <div className="preparation-item">
                <h3>Matériel</h3>
                <p>Tapis de yoga fourni, prévoir une bouteille d'eau</p>
              </div>
              <div className="preparation-item">
                <h3>Repas</h3>
                <p>Éviter les repas copieux 2 heures avant la pratique</p>
              </div>
              <div className="preparation-item">
                <h3>Arrivée</h3>
                <p>Arriver 10 minutes avant le début du cours pour s'installer tranquillement</p>
              </div>
            </div>
          </div>

          <div className="levels-section">
            <h2>Niveaux et accessibilité</h2>
            <p>
              Nos cours sont accessibles à tous, du débutant complet au pratiquant confirmé. 
              La méthode Ferriz-Ferrière s'adapte à chaque individu, respectant les limites 
              et capacités de chacun.
            </p>
            <div className="levels-info">
              <h3>Pas d'expérience requise</h3>
              <p>
                Aucune connaissance préalable du yoga n'est nécessaire. Nos enseignants 
                accompagnent chaque élève dans son propre rythme de progression.
              </p>
            </div>
          </div>

          <div className="association-notice">
            <h3>Association à but non lucratif</h3>
            <p>
              L'Association pour la Préservation de l'Œuvre du Docteur de la Ferrière en Europe 
              est régie par la Loi du 1er juillet 1901 et le Décret du 16 Août 1901. 
              Toutes nos activités sont bénévoles et sans but lucratif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}