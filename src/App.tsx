import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Footer from './components/Footer';
import ScrollSpy from './components/ScrollSpy';
import './styles.css';

function App() {
  return (
    <div className="App">
      <ScrollSpy />
      <Header />
      <Carousel />
      <Sobre />
      <Servicos />
      <Footer />
    </div>
  );
}

export default App;

