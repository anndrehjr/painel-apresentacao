import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li><a href="#header" className="active">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#footer">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
