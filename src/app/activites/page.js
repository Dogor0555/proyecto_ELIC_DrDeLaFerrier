// src/app/activites/page.js
export default function AutresActivites() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Autres activités</h1>
        
        <div className="content-section">
          <div className="text-content">
            <p>
              En plus des cours de yoga, notre association propose diverses activités culturelles, 
              éducatives et scientifiques visant à diffuser l'œuvre du Dr de la Ferrière et à 
              promouvoir une vision intégrale de l'être humain.
            </p>

            <h2>Cours et séminaires d'alimentation</h2>
            <p>
              Nous étudions et diffusons l'alimentation végétarienne et le naturisme comme des 
              pratiques saines et respectueuses de tous les êtres vivants. Ces enseignements 
              s'inscrivent dans la perspective d'une écologie profonde et d'une harmonie avec 
              la nature.
            </p>

            <div className="activities-grid">
              <div className="activity-card">
                <h3>Conférences</h3>
                <p>
                  Rencontres thématiques sur la nutrition, la santé naturelle et 
                  l'alimentation consciente.
                </p>
                <ul>
                  <li>Les bases de l'alimentation végétarienne équilibrée</li>
                  <li>Nutrition et spiritualité</li>
                  <li>Alimentation et développement durable</li>
                </ul>
              </div>

              <div className="activity-card">
                <h3>Ateliers pratiques</h3>
                <p>
                  Sessions pratiques de cuisine végétarienne et découverte des 
                  aliments naturels.
                </p>
                <ul>
                  <li>Initiation à la cuisine végétale</li>
                  <li>Préparation de plats équilibrés</li>
                  <li>Découverte des super-aliments</li>
                </ul>
              </div>

              <div className="activity-card">
                <h3>Cours réguliers</h3>
                <p>
                  Formation continue sur les principes de l'alimentation naturelle 
                  et ses bienfaits.
                </p>
                <ul>
                  <li>Programme sur plusieurs semaines</li>
                  <li>Approfondissement théorique et pratique</li>
                  <li>Accompagnement personnalisé</li>
                </ul>
              </div>
            </div>

            <h2>Activités culturelles</h2>
            <div className="cultural-activities">
              <div className="cultural-item">
                <h3>Cercles d'étude</h3>
                <p>
                  Groupes de lecture et d'étude des œuvres du Dr de la Ferrière et 
                  du Dr Ferriz Olivares.
                </p>
              </div>

              <div className="cultural-item">
                <h3>Projections de films</h3>
                <p>
                  Documentaires et films en rapport avec les thèmes de l'association : 
                  yoga, écologie, spiritualité.
                </p>
              </div>

              <div className="cultural-item">
                <h3>Expositions</h3>
                <p>
                  Présentation d'œuvres artistiques et de documents historiques en 
                  lien avec notre patrimoine.
                </p>
              </div>
            </div>

            <h2>Événements spéciaux</h2>
            <div className="special-events">
              <div className="event-item">
                <h3>Journées portes ouvertes</h3>
                <p>Découverte gratuite de nos activités pour le grand public.</p>
              </div>

              <div className="event-item">
                <h3>Fêtes saisonnières</h3>
                <p>Célébrations en harmonie avec les cycles naturels.</p>
              </div>

              <div className="event-item">
                <h3>Rencontres inter-associatives</h3>
                <p>Échanges avec d'autres organisations partageant nos valeurs.</p>
              </div>
            </div>

            <div className="participation-info">
              <h3>Comment participer ?</h3>
              <p>
                Toutes nos activités sont ouvertes aux membres de l'association et au public. 
                Certaines activités peuvent nécessiter une inscription préalable.
              </p>
              <p>
                <strong>Contact :</strong> apres.srf@gmail.com ou 0632509364
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}