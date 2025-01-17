import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div id="footer-container">
        <div id="footer-logo">
          <img src="/imagens/logo.png" alt="Logo da empresa" />
          <h1>ASA Personalizados</h1>
        </div>
        <div id="footer-info">
          <h2>Contatos</h2>
          <p>Telefone: <a href="https://wa.me/5518996791377" target="_blank">(18) 99679-1377</a></p>
          <p>Telefone: <a href="https://wa.me/5518996798352" target="_blank">(18) 99679-8352</a></p>
          <p>E-mail:</p>
          <a href="mailto:anndreh01@gmail.com">anndreh01@gmail.com</a>
        </div>
        <div id="footer-social-media">
          <h2>Redes Sociais</h2>
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
