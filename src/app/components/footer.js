// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Présidente : Francesca Bradamante</p>
          <p>Secrétaire : Vanessa Perriolat</p>
          <p>Téléphone : 0632509364</p>
          <p>Email : apres.srf@gmail.com</p>
        </div>
        {/* 
        <div className="footer-section">
          <h3>Adresse</h3>
          <p>4 avenue Lympia 06300 Nice</p>
          <p>Nice, France</p>
        </div> */}
        
        <div className="footer-section">
          <h3>Citation</h3>
          <blockquote>
            "La vie, comprise dans son sens le plus profond, est un domaine de recherches précieuses..."
          </blockquote>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Association pour la Préservation de l'Œuvre du Dr de la Ferrière en Europe</p>
      </div>
    </footer>
  );
}