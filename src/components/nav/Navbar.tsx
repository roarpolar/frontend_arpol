import React from 'react';
import { Menu, Search, HelpCircle, User } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  username: string;
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ username, onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <button onClick={onMenuClick} className="navbar-menu-button">
            <Menu size={24} />
          </button>
          <span className="navbar-title">ARPOL</span>
        </div>

        <div className="navbar-search-container">
          <div className="navbar-search">
            <input type="text" placeholder="Filtro Global..." className="navbar-search-input" />
            <Search className="navbar-search-icon" size={20} />
          </div>
        </div>

        <div className="navbar-actions">
          <button className="navbar-help-button">
            <HelpCircle size={24} />
          </button>
          <div className="navbar-user">
            <User size={24} />
            <span>Olá, {username}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
