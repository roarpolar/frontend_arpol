import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <a href="/privacy">Política de Privacidade</a>
          <a href="/terms">Termos de Serviço</a>
          <a href="/contact">Contato</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

