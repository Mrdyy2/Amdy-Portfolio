import React, { useState, useEffect } from 'react';
import './assets/css/NavBar.css'; // Assurez-vous que le CSS est importé

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifier si la page a été défilée de 50 pixels
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-logo">
        <img src='/images/main-image.jpg'></img>
        Amdy BARO
      </div>
      
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <ul className="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À Propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
