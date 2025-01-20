import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div id="footer-container">
        {/* Logo e nome da empresa */}
        <div id="footer-logo">
          <img src="/images/logo.png" alt="Logo da empresa" />
          <h1>ASA Personalizados</h1>
        </div>
        {/* Redes sociais */}
        <div id="footer-social-media">
          <h2>Redes Sociais</h2>
          <ul style={{ display: "flex", gap: "15px", listStyleType: "none", padding: 0 }}>
            <li>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="#4267B2" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#C13584" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} color="#1DA1F2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
