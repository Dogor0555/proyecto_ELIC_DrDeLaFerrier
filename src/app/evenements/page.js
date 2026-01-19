// src/app/evenements/page.js
export default function Evenements() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Événements historiques</h1>
        
        <div className="content-section">
          <div className="text-content">
            <p>
              Retrouvez ici les événements marquants qui ont jalonné l'histoire de notre association 
              et la diffusion de l'œuvre du Dr de la Ferrière en Europe.
            </p>

            <div className="events-timeline">
              <div className="event-item">
                <div className="event-year">1981</div>
                <div className="event-content">
                  <h3>Inauguration du monument</h3>
                  <p>
                    Le 23 mai 1981, inauguration du monument à la mémoire du Dr Serge Raynaud 
                    de la Ferrière au Cimetière de l'Est à Nice, en présence des autorités 
                    municipales.
                  </p>
                  <div className="event-details">
                    <p><strong>Organisateur :</strong> Dr David Juan Ferriz Olivares</p>
                    <p><strong>Lieu :</strong> Cimetière de l'Est, Nice</p>
                    <p><strong>Événements associés :</strong></p>
                    <ul>
                      <li>Conférence au Centre Universitaire Méditerranéen</li>
                      <li>Exposition photographique des peintures</li>
                      <li>Remise de la Médaille de Bronze Nicea Civitas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <div className="event-year">2016</div>
                <div className="event-content">
                  <h3>Centenaire de la naissance du Dr de la Ferrière</h3>
                  <p>
                    Célébration du centenaire de la naissance du Dr Serge Raynaud de la Ferrière 
                    avec une série d'événements commémoratifs.
                  </p>
                  <div className="event-details">
                    <p><strong>Coordinateur :</strong> Vanessa Perriolat</p>
                    <p><strong>Activités :</strong></p>
                    <ul>
                      <li>Expositions rétrospectives</li>
                      <li>Cycle de conférences</li>
                      <li>Publications spéciales</li>
                      <li>Cérémonies commémoratives</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <div className="event-year">2022</div>
                <div className="event-content">
                  <h3>Séminaire de Nice</h3>
                  <p>
                    Séminaire international organisé à Nice pour approfondir l'étude de l'œuvre 
                    européenne du Dr de la Ferrière.
                  </p>
                  <div className="event-details">
                    <p><strong>Coordinateur :</strong> Vanessa Perriolat</p>
                    <p><strong>Thèmes abordés :</strong></p>
                    <ul>
                      <li>La période niçoise du Dr de la Ferrière</li>
                      <li>Son œuvre artistique et littéraire</li>
                      <li>Les fondations internationales</li>
                      <li>Actualité de son message</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <div className="event-year">2023</div>
                <div className="event-content">
                  <h3>Inauguration de la plaque commémorative</h3>
                  <p>
                    Installation et inauguration d'une plaque commémorative en hommage au 
                    Dr de la Ferrière, marquant son attachement à la ville de Nice.
                  </p>
                  <div className="event-details">
                    <p><strong>Coordinateur :</strong> Vanessa Perriolat</p>
                    <p><strong>Lieu :</strong> Espace Coworking le Pinguoin</p>
                    <p><strong>Participants :</strong> Membres de l'association, autorités locales, public</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="future-events">
              <h2>Événements à venir</h2>
              <p>
                Restez informés de nos prochains événements en nous suivant sur nos canaux 
                de communication ou en nous contactant directement.
              </p>
              <div className="upcoming-info">
                <h3>Prochain séminaire</h3>
                <p>
                  <strong>Thème :</strong> "L'actualité de la pensée du Dr de la Ferrière dans le monde contemporain"
                </p>
                <p>
                  <strong>Date :</strong> À déterminer
                </p>
                <p className="note">
                  Pour plus d'informations sur nos événements futurs, contactez-nous à 
                  apres.srf@gmail.com
                </p>
              </div>
            </div>

            <div className="archives-notice">
              <h3>Archives et documentation</h3>
              <p>
                Notre association dispose d'archives photographiques et documentaires sur 
                ces événements historiques. Certains documents sont consultables dans notre 
                section galerie.
              </p>
              <a href="/galerie" className="archive-link">
                Consulter la galerie d'archives
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}