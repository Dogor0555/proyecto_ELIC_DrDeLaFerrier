// src/app/yoga/introduction/page.js
export default function IntroductionYoga() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Introduction au Yoga</h1>
        
        <div className="content-section">
          <div className="text-content">
            <h2>Apprenez l'art de la relaxation</h2>
            <p>
              Les postures de yoga sur lesquelles repose la Méthode Ferriz-Ferrière permettent 
              d'atteindre un état d'alerte mais tout en étant détendu. Elles alternent contraction 
              et relaxation musculaires, procurant bien-être physique et émotionnel. Elles créent 
              une harmonie entre les deux hémisphères du cerveau, améliorant ainsi la concentration, 
              la mémoire et la vivacité d'esprit.
            </p>

            <h2>Découvrez la force vitale de la respiration</h2>
            <p>
              Une respiration excessive épuise notre vitalité. Il est donc important de respirer 
              harmonieusement, profondément et lentement, en faisant des pauses entre chaque 
              respiration et en apprenant à utiliser le diaphragme. La respiration abdominale 
              est la plus relaxante et la plus revitalisante.
            </p>
            <p>
              Pénétrant dans le corps par le sang, le Prana, ou « énergie vitale », qu'il contient 
              revitalise tous les tissus. Le Dr Serge Raynaud de la Ferrière, s'appuyant sur les 
              traditions les plus anciennes, nous rappelle que « le souffle est maître de la pensée, 
              et la pensée est maîtresse des sens ».
            </p>

            <h2>La souplesse du corps et de l'esprit</h2>
            <p>
              La colonne vertébrale est l'axe de soutien de notre corps. C'est de là que proviennent 
              les principales fonctions du système nerveux. Maintenir notre souplesse contribue à 
              une bonne santé physique et psychologique jusqu'à un âge avancé.
            </p>

            <div className="benefits-section">
              <h3>Bienfaits de la pratique régulière</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h4>Physique</h4>
                  <ul>
                    <li>Améliore la flexibilité</li>
                    <li>Renforce le système immunitaire</li>
                    <li>Equilibre le système endocrinien</li>
                    <li>Favorise une meilleure posture</li>
                  </ul>
                </div>

                <div className="benefit-card">
                  <h4>Mental</h4>
                  <ul>
                    <li>Réduit le stress et l'anxiété</li>
                    <li>Améliore la concentration</li>
                    <li>Développe la clarté mentale</li>
                    <li>Favorise l'équilibre émotionnel</li>
                  </ul>
                </div>

                <div className="benefit-card">
                  <h4>Énergétique</h4>
                  <ul>
                    <li>Equilibre les énergies vitales</li>
                    <li>Stimule la circulation du Prana</li>
                    <li>Harmonise les centres d'énergie</li>
                    <li>Augmente la vitalité globale</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h3>Prêt à commencer ?</h3>
              <p>
                Rejoignez-nous pour découvrir les bienfaits du yoga selon la méthode Ferriz-Ferrière. 
                Nos cours sont adaptés à tous les niveaux et toutes les conditions physiques.
              </p>
              <div className="cta-buttons">
                <a href="/yoga/cours" className="cta-button primary">
                  Voir les horaires des cours
                </a>
                <a href="/yoga/methode" className="cta-button secondary">
                  En savoir plus sur la méthode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}