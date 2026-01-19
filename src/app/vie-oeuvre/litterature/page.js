// src/app/vie-oeuvre/litterature/page.js
export default function Litterature() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Sa littérature</h1>
        
        <div className="content-section">
          <div className="text-content">
            <p>
              Le Dr Serge Raynaud de la Ferrière a laissé une œuvre littéraire considérable, 
              caractérisée par son approche interdisciplinaire et sa vision synthétique de la connaissance.
            </p>

            <h2>Caractéristiques de son œuvre écrite</h2>
            <ul>
              <li><strong>Approche encyclopédique :</strong> Couvrant philosophie, science, art, yoga et spiritualité</li>
              <li><strong>Style synthétique :</strong> Intégration des savoirs orientaux et occidentaux</li>
              <li><strong>Dimension pratique :</strong> Application concrète des principes spirituels</li>
              <li><strong>Universalité :</strong> Message adressé à l'humanité toute entière</li>
            </ul>

            <h2>Œuvres majeures</h2>
            
            <div className="works-grid">
              <div className="work-card">
                <h3>"Yug, Yoga, Yoghisme"</h3>
                <p>Ouvrage fondamental sur la science du yoga et ses applications modernes.</p>
              </div>

              <div className="work-card">
                <h3>"Les Grands Messages"</h3>
                <p>Série d'ouvrages présentant les principes de la doctrine initiatique.</p>
              </div>

              <div className="work-card">
                <h3>"La Magie du Savoir"</h3>
                <p>Synthèse entre connaissance scientifique et sagesse traditionnelle.</p>
              </div>

              <div className="work-card">
                <h3>"Le Temple de l'Homme"</h3>
                <p>Réflexions sur la nature humaine et sa dimension spirituelle.</p>
              </div>

              <div className="work-card">
                <h3>"Cultura Física y Judo"</h3>
                <p>Approche scientifique de l'éducation physique et des arts martiaux.</p>
              </div>

              <div className="work-card">
                <h3>"Los Aforismos de Yoga"</h3>
                <p>Commentaires des Yoga Sutras de Patanjali.</p>
              </div>
            </div>

            <h2>Thématiques principales</h2>
            <p>
              Son œuvre aborde des thèmes variés mais toujours unis par une vision cohérente 
              de l'être humain et de sa place dans l'univers : éducation intégrale, santé holistique, 
              science unifiée, art sacré, et développement spirituel.
            </p>

            <h2>Traductions et diffusion</h2>
            <p>
              L'une des missions de notre association est de traduire en français et dans d'autres 
              langues européennes ces œuvres originales, ainsi que les commentaires et exégèses 
              du Dr David Juan Ferriz Olivares.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}