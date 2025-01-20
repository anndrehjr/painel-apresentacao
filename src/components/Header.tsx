import React from 'react';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#header" className="active">
            <i className="fas fa-home"></i> <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#sobre">
            <i className="fas fa-info-circle"></i> <span>Sobre</span>
          </a>
        </li>
        <li>
          <a href="#servicos">
            <i className="fas fa-cogs"></i> <span>Serviços</span>
          </a>
        </li>
        <li>
          <a href="#footer">
            <i className="fas fa-envelope"></i> <span>Contatos</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
