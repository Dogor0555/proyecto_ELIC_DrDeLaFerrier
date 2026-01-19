// src/app/vie-oeuvre/exegete/page.js
export default function Exegete() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Son Exégète : Dr David Juan Ferriz Olivares</h1>
        
        <div className="content-section">
          <div className="text-content">
            <p>
              Le Dr David Juan Ferriz Olivares (1921-1992) fut le principal exégète et continuateur 
              de l'œuvre du Dr Serge Raynaud de la Ferrière. Né au Japon de parents mexicains, il 
              consacra sa vie à l'étude, l'approfondissement et la diffusion de l'enseignement de son Maître.
            </p>

            <h2>Formation et rencontre</h2>
            <p>
              Épistémologue de formation, le Dr Ferriz Olivares rencontra l'œuvre du Dr de la Ferrière 
              dans les années 1950 et reconnut immédiatement la profondeur et l'actualité de son message. 
              Il devint son disciple direct et consacra le reste de sa vie à développer et à diffuser 
              cet enseignement.
            </p>

            <h2>Contributions majeures</h2>
            
            <div className="contributions-grid">
              <div className="contribution-card">
                <h3>Exégèse approfondie</h3>
                <p>
                  Commentaires détaillés des œuvres du Dr de la Ferrière, éclairant leur dimension 
                  philosophique, scientifique et spirituelle.
                </p>
              </div>

              <div className="contribution-card">
                <h3>Développement méthodologique</h3>
                <p>
                  Élaboration de la méthode de yoga Ferriz-Ferrière, adaptant les enseignements 
                  traditionnels aux besoins de l'homme moderne.
                </p>
              </div>

              <div className="contribution-card">
                <h3>Fondations institutionnelles</h3>
                <p>
                  Création et direction de plusieurs fondations internationales pour perpétuer 
                  l'œuvre du Dr de la Ferrière.
                </p>
              </div>

              <div className="contribution-card">
                <h3>Œuvre écrite</h3>
                <p>
                  Auteur de nombreux ouvrages développant les principes de l'enseignement reçu 
                  et leurs applications contemporaines.
                </p>
              </div>
            </div>

            <h2>Rôle dans notre association</h2>
            <p>
              C'est à l'initiative du Dr David Ferriz Olivares que notre association a été créée 
              le 20 février 1980. Il en fut le principal inspirateur et guide jusqu'à son passage 
              en 1992.
            </p>

            <h2>Héritage et continuité</h2>
            <p>
              Le Dr Ferriz Olivares a formé une nouvelle génération de disciples qui poursuivent 
              aujourd'hui l'œuvre entreprise. Son exégèse reste la référence fondamentale pour 
              la compréhension et l'application de l'enseignement du Dr de la Ferrière.
            </p>

            <blockquote className="quote">
              "La mission de l'exégète n'est pas seulement d'expliquer, mais de vivifier 
              l'enseignement, de le rendre actuel et applicable à chaque époque."
              <footer>— Dr David Juan Ferriz Olivares</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}