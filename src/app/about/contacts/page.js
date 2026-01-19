// src/app/about/contacts/page.js
export default function Contacts() {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Contacts</h1>
        
        <div className="content-section">
          <div className="contacts-grid">
            <div className="contact-card">
              <h3>Présidente</h3>
              <div className="contact-info">
                <p><strong>Francesca Bradamante</strong></p>
              </div>

              <h3>Secrétaire</h3>
              <div className="contact-info">
                <p><strong>Vanessa Perriolat</strong></p>
                <p><strong>Téléphone :</strong> 0632509364</p>
                <p><strong>Email :</strong> apres.srf@gmail.com</p>
              </div>
            </div>

         

          

            <div className="contact-card">
              <h3>Informations légales</h3>
              <div className="contact-info">
                <p><strong>Association loi 1901</strong></p>
                <p>Créée le 20 février 1980</p>
                <p>Réactivée le 5 janvier 2015</p>
                <p>Régie par la Loi du 1er juillet 1901 et le Décret du 16 Août 1901</p>
                <p>Siège social: 4 av. Lympia, 06300 Nice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}