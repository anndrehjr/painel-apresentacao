import React from 'react';

const Servicos: React.FC = () => {
  return (
    <section id="servicos">
      <h1>Serviços</h1>
      <div id="card-container">
        <div className="card">
          <img src="/imagens/desenvolvedor-web.jpg" alt="Desenvolvimento Web" />
          <h2>Desenvolvimento Web</h2>
          <p>Desenvolvimento de sites, blogs, lojas virtuais e sistemas web.</p>
          <a href="https://wa.me/5518996791377" className="button">Enviar WhatsApp</a>
        </div>
        <div className="card">
          <img src="/imagens/Design Gráfico.png" alt="Design Gráfico" />
          <h2>Design Gráfico</h2>
          <p>Criação de logotipos, banners, cartões de visita e identidade visual.</p>
          <a href="https://wa.me/5518996791377" className="button">Enviar WhatsApp</a>
        </div>
        <div className="card">
          <img src="/imagens/MD.jpeg" alt="Marketing Digital" />
          <h2>Marketing Digital</h2>
          <p>Gerenciamento de redes sociais, criação de conteúdo e anúncios.</p>
          <a href="https://wa.me/5518996791377" className="button">Enviar WhatsApp</a>
        </div>
        <div className="card">
          <img src="/imagens/personalizados-03.webp" alt="Artigos Personalizados" />
          <h2>Artigos Personalizados</h2>
          <p>Elaborando artigos, blog posts, e-books e documentos técnicos.</p>
          <a href="https://wa.me/5518996798352" className="button">Enviar WhatsApp</a>
        </div>
        <div className="card">
          <img src="/imagens/manuteção.jpg" alt="Outros Serviços" />
          <h2>Outros Serviços</h2>
          <p>Consultoria em TI, suporte técnico, manutenção de computadores e notebooks.</p>
          <a href="https://wa.me/5518996791377" className="button">Enviar WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
