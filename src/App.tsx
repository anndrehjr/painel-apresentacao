import React from 'react';
import Header from './components/Header.tsx';
import Carousel from './components/Carousel.tsx';
import Sobre from './components/Sobre.tsx';
import Servicos from './components/Servicos.tsx';
import Footer from './components/Footer.tsx';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Sobre />
      <Servicos />
      <Footer />
    </div>
  );
}

export default App;

