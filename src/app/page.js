// src/app/page.js
import doctor from "../app/images/doctor.png";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-quote">
            <blockquote>
              "La vie, comprise dans son sens le plus profond, est un domaine de recherches précieuses, 
              que nous devons apprécier à sa plus juste valeur : les choses dites sacrées sont précisément 
              celles qui ont été dotées de plus de vie".
              <footer>Yug Yoga Yoghismo</footer>
            </blockquote>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img
                src={doctor.src}
                alt="Dr Serge Raynaud de la Ferrière"
                className="doctor-image"
              />
              <div className="image-caption">
                <p>Dr Serge Raynaud de la Ferrière</p>
                <span>Photo du retrait Maestre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2>Bienvenue</h2>
          <p>
            Découvrez l'œuvre et l'héritage du Dr Serge Raynaud de la Ferrière à travers notre association 
            dédiée à la préservation et à la diffusion de son travail en Europe.
          </p>
          <p>
            Explorez les différentes sections pour en apprendre davantage sur nos activités, cours de yoga, 
            et événements historiques.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container">
          <h2>Découvrez nos activités</h2>
          <div className="links-grid">
            <a href="/yoga/methode/" className="quick-link">
              <h3>Yoga</h3>
              <p>Découvrez nos cours et la méthode Ferriz-Ferrière</p>
            </a>
            
            <a href="/vie-oeuvre" className="quick-link">
              <h3>Vie et Œuvre</h3>
              <p>Explorez l'héritage du Dr de la Ferrière</p>
            </a>
            
            <a href="/galeria" className="quick-link">
              <h3>Galerie</h3>
              <p>Photos et documents historiques</p>
            </a>
            
            <a href="/evenements" className="quick-link">
              <h3>Événements</h3>
              <p>Retrouvez nos activités passées et futures</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}