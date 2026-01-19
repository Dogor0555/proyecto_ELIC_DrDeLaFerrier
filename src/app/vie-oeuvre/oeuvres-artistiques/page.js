// src/app/vie-oeuvre/oeuvres-artistiques/page.js
export default function OeuvresArtistiques() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Ses œuvres artistiques</h1>
        
        <div className="content-section">
          <div className="text-content">
            <p>
              Le Dr Serge Raynaud de la Ferrière était non seulement un écrivain et scientifique 
              émérite, mais aussi un artiste peintre de talent. Son œuvre picturale reflète sa 
              riche expérience de voyageur et sa profonde compréhension des traditions spirituelles.
            </p>

            <h2>Caractéristiques de son art</h2>
            <ul>
              <li><strong>Inspiration universaliste :</strong> Influences des cinq continents</li>
              <li><strong>Symbolisme riche :</strong> Langage visuel chargé de significations</li>
              <li><strong>Synchrétisme culturel :</strong> Fusion des traditions orientales et occidentales</li>
              <li><strong>Dimension spirituelle :</strong> Expression de concepts métaphysiques</li>
            </ul>

            <h2>Thématiques picturales</h2>
            
            <div className="themes-grid">
              <div className="theme-card">
                <h3>Paysages sacrés</h3>
                <p>Représentations de lieux chargés de spiritualité à travers le monde.</p>
              </div>

              <div className="theme-card">
                <h3>Symboles universels</h3>
                <p>Interprétation artistique des archétypes communs à l'humanité.</p>
              </div>

              <div className="theme-card">
                <h3>Portraits philosophiques</h3>
                <p>Figures illustrant des concepts et états de conscience.</p>
              </div>

              <div className="theme-card">
                <h3>Abstraction métaphysique</h3>
                <p>Exploration des dimensions subtiles de la réalité.</p>
              </div>
            </div>

            <h2>Expositions internationales</h2>
            <p>
              De son vivant, les œuvres du Dr de la Ferrière ont été exposées dans plusieurs pays, 
              témoignant de la reconnaissance de son talent artistique. Après son décès, son disciple 
              le Dr David Juan Ferriz Olivares a poursuivi la diffusion de son œuvre picturale à 
              travers des expositions en Amérique et en Europe.
            </p>

            <h2>Lien avec le Centenaire</h2>
            <p>
              Dans le cadre des célébrations du centenaire de sa naissance en 2016, plusieurs expositions 
              ont été organisées pour faire connaître son œuvre artistique au public européen.
            </p>

            <div className="centenary-info">
              <h3>Activités du Centenaire 2016</h3>
              <ul>
                <li>Exposition rétrospective de ses peintures</li>
                <li>Conférences sur l'art sacré dans son œuvre</li>
                <li>Publication de catalogues illustrés</li>
                <li>Visites guidées commentées</li>
              </ul>
            </div>

            <p className="note">
              <strong>Note :</strong> Consultez notre galerie pour découvrir certaines de ses œuvres 
              et les activités du centenaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}