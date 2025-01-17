import React from 'react';

const Carousel: React.FC = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/imagens/imagde.png" alt="Primeiro Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primeiro Slide</h5>
            <p>Descrição do primeiro slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagens/image.png" alt="Segundo Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo Slide</h5>
            <p>Descrição do segundo slide.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
  );
}

export default Carousel;
