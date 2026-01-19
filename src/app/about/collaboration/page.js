// src/app/about/collaboration/page.js
export default function Collaboration() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Collaboration</h1>
        
        <div className="content-section">
          <p>
            Notre association travaille en étroite collaboration avec les diverses Fondations  Internationales nées de la pensée du Docteur de la Ferrière Dr. Serge Raynaud de la Ferrière.

          </p>

          <div className="collaboration-grid">
            <div className="collaboration-card">
              <div className="card-logo">
                <img src="/logos/jnanakanda.png" alt="Logo Centre Culturel de Yoga Jñanakanda" />
              </div>
              <h3>Centre Culturel de Yoga Jñanakanda</h3>
              <p><strong>Siège :</strong> Caracas, Venezuela</p>
              <p>Centre fondé en 1959 dédié à l'enseignement du yoga selon la méthode Ferriz-Ferrière.</p>
            </div>

            <div className="collaboration-card">
              <div className="card-logo">
                <img src="/logos/magna.jpeg" alt="Logo Centre Culturel de Yoga Jñanakanda" />
              </div>
              <h3>Fondation Magna Fraternitas Universalis</h3>
              <p><strong>Siège mondial :</strong> Lima, Pérou</p>
              <p>Institution dédiée à la diffusion de l'œuvre du Dr. Serge Raynaud de la Ferrière à l'échelle mondiale.</p>
            </div>

            <div className="collaboration-card">
              <div className="card-logo">
                <img src="/logos/logofiss.jpg" alt="Logo Fondation FISS" />
              </div>
              <h3>Fondation FISS</h3>
              <p>Fédération Internationale de Sociétés Scientifiques</p>
              <p>Fondée en 1947 à Paris par le Dr. de la Ferrière, transférée à Nice en 1960.</p>
            </div>

            <div className="collaboration-card">
               <div className="card-logo">
                <img src="/logos/iici_Invesciencias.jpg" alt="Logo Fondation FISS" />
              </div> 
              <h3>Fondation INVESCIENCIAS</h3>
              <p>Institut de Recherches et d'Applications Scientifiques et Technologiques</p>
              <p>Dédiée à la recherche scientifique et technologique.</p>
            </div>

            <div className="collaboration-card">
              <div className="card-logo">
                <img src="/logos/elic.png" alt="Logo Fondation ELIC" />
              </div>
              <h3>Fondation ELIC</h3>
              <p>Écoles Libres de Recherche Scientifique pour Enfants</p>
              <p>En collaboration avec l'association ELIC France.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}