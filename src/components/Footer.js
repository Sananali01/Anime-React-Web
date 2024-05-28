import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-center">
      <div className="container p-4 pb-0 ">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
            <div className="footer-content">
              <h1 className="text-white">Anime Fusion</h1>
              <p>
                "Welcome to Anime Fusion! Discover the magic of anime with us. From thrilling adventures to heartwarming tales, we've got something for everyone. Join our community and dive into a world of endless excitement and wonder. Let's explore together!"
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto">
            <div className="footer-icons">
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="right text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className="text-white">&copy; 2024 Anime Fusion. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
