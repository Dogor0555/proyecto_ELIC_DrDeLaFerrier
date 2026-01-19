"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/firma.png';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeSubmenus = () => {
    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link href="/" onClick={closeSubmenus}>
            <div className="logo-wrapper">
              <Image
                src={logo}
                alt="Logo Association Dr. de la Ferrière"
                width={70}
                height={60}
                className="logo-image"
                priority
              />
             <div className="logo-text">
                <div className="logo-single">
                  Association pour la préservation de l'œuvre du Docteur Serge Raynaud de la Ferrière en Europe
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeSubmenus}
              >
                Accueil
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => !isMobileMenuOpen && setActiveSubmenu('about')}
              onMouseLeave={() => !isMobileMenuOpen && setActiveSubmenu(null)}
            >
              <button 
                className={`nav-link ${isActive('/about') || activeSubmenu === 'about' ? 'active' : ''}`}
                onClick={() => toggleSubmenu('about')}
              >
                Qui sommes-nous?
                <span className="dropdown-arrow">▼</span>
              </button>

              <ul className={`dropdown-menu ${activeSubmenu === 'about' ? 'open' : ''}`}>
                <li><Link href="/about/objectives" className="dropdown-link" onClick={closeSubmenus}>Objectifs</Link></li>
                <li><Link href="/about/collaboration" className="dropdown-link" onClick={closeSubmenus}>Collaboration</Link></li>
                <li><Link href="/about/contacts" className="dropdown-link" onClick={closeSubmenus}>Contacts</Link></li>
              </ul>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => !isMobileMenuOpen && setActiveSubmenu('vie')}
              onMouseLeave={() => !isMobileMenuOpen && setActiveSubmenu(null)}
            >
              <button 
                className={`nav-link ${isActive('/vie-oeuvre') || activeSubmenu === 'vie' ? 'active' : ''}`}
                onClick={() => toggleSubmenu('vie')}
              >
                Vie et œuvre du Dr de la Ferrière
                <span className="dropdown-arrow">▼</span>
              </button>

              <ul className={`dropdown-menu ${activeSubmenu === 'vie' ? 'open' : ''}`}>
                <li><Link href="/vie-oeuvre/figure" className="dropdown-link" onClick={closeSubmenus}>Biographie</Link></li>
                <li><Link href="/vie-oeuvre/retraite" className="dropdown-link" onClick={closeSubmenus}>Retraite à Nice</Link></li>
                <li><Link href="/vie-oeuvre/litterature" className="dropdown-link" onClick={closeSubmenus}>Littérature</Link></li>
                <li><Link href="/vie-oeuvre/oeuvres-artistiques" className="dropdown-link" onClick={closeSubmenus}>Œuvres artistiques</Link></li>
                <li><Link href="/vie-oeuvre/exegete" className="dropdown-link" onClick={closeSubmenus}>Son Exégète</Link></li>
              </ul>
            </li>


            <li
              className="nav-item dropdown"
              onMouseEnter={() => !isMobileMenuOpen && setActiveSubmenu('yoga')}
              onMouseLeave={() => !isMobileMenuOpen && setActiveSubmenu(null)}
            >
              <button 
                className={`nav-link ${isActive('/yoga') || activeSubmenu === 'yoga' ? 'active' : ''}`}
                onClick={() => toggleSubmenu('yoga')}
              >
                Activités YOGA
                <span className="dropdown-arrow">▼</span>
              </button>

              <ul className={`dropdown-menu ${activeSubmenu === 'yoga' ? 'open' : ''}`}>
                <li><Link href="/yoga/introduction" className="dropdown-link" onClick={closeSubmenus}>Introduction Yoga</Link></li>
                <li><Link href="/yoga/cours" className="dropdown-link" onClick={closeSubmenus}>Cours et informations</Link></li>
                <li><Link href="/yoga/methode" className="dropdown-link" onClick={closeSubmenus}>La méthode</Link></li>
              </ul>
            </li>


            <li className="nav-item">
              <Link 
                href="/activites" 
                className={`nav-link ${isActive('/activites') ? 'active' : ''}`}
                onClick={closeSubmenus}
              >
                Autres activités
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                href="/evenements" 
                className={`nav-link ${isActive('/evenements') ? 'active' : ''}`}
                onClick={closeSubmenus}
              >
                Événements historiques
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link 
              href="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeSubmenus}
            >
              Accueil
            </Link>
          </li>

          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('/about') || activeSubmenu === 'about' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('about')}
            >
              Qui sommes-nous?
              <span className="mobile-arrow">{activeSubmenu === 'about' ? '▲' : '▼'}</span>
            </button>
            <ul className={`mobile-dropdown ${activeSubmenu === 'about' ? 'open' : ''}`}>
              <li><Link href="/about/objectives" className="mobile-dropdown-link" onClick={closeSubmenus}>Objectifs</Link></li>
              <li><Link href="/about/collaboration" className="mobile-dropdown-link" onClick={closeSubmenus}>Collaboration</Link></li>
              <li><Link href="/about/contacts" className="mobile-dropdown-link" onClick={closeSubmenus}>Contacts</Link></li>
            </ul>
          </li>

          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('/vie-oeuvre') || activeSubmenu === 'vie' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('vie')}
            >
              Vie et œuvre du Dr de la Ferrière
              <span className="mobile-arrow">{activeSubmenu === 'vie' ? '▲' : '▼'}</span>
            </button>
            <ul className={`mobile-dropdown ${activeSubmenu === 'vie' ? 'open' : ''}`}>
              <li><Link href="/vie-oeuvre/figure" className="mobile-dropdown-link" onClick={closeSubmenus}>Figure marquante</Link></li>
              <li><Link href="/vie-oeuvre/retraite" className="mobile-dropdown-link" onClick={closeSubmenus}>Retraite à Nice</Link></li>
              <li><Link href="/vie-oeuvre/litterature" className="mobile-dropdown-link" onClick={closeSubmenus}>Littérature</Link></li>
              <li><Link href="/vie-oeuvre/oeuvres-artistiques" className="mobile-dropdown-link" onClick={closeSubmenus}>Œuvres artistiques</Link></li>
              <li><Link href="/vie-oeuvre/exegete" className="mobile-dropdown-link" onClick={closeSubmenus}>Son Exégète</Link></li>
            </ul>
          </li>

          <li className="mobile-nav-item">
            <button 
              className={`mobile-nav-link ${isActive('/yoga') || activeSubmenu === 'yoga' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('yoga')}
            >
              Activités YOGA
              <span className="mobile-arrow">{activeSubmenu === 'yoga' ? '▲' : '▼'}</span>
            </button>
            <ul className={`mobile-dropdown ${activeSubmenu === 'yoga' ? 'open' : ''}`}>
              <li><Link href="/yoga/introduction" className="mobile-dropdown-link" onClick={closeSubmenus}>Introduction Yoga</Link></li>
              <li><Link href="/yoga/cours" className="mobile-dropdown-link" onClick={closeSubmenus}>Cours et informations</Link></li>
              <li><Link href="/yoga/methode" className="mobile-dropdown-link" onClick={closeSubmenus}>La méthode</Link></li>
            </ul>
          </li>

          <li className="mobile-nav-item">
            <Link 
              href="/activites" 
              className={`mobile-nav-link ${isActive('/activites') ? 'active' : ''}`}
              onClick={closeSubmenus}
            >
              Autres activités
            </Link>
          </li>

          <li className="mobile-nav-item">
            <Link 
              href="/evenements" 
              className={`mobile-nav-link ${isActive('/evenements') ? 'active' : ''}`}
              onClick={closeSubmenus}
            >
              Événements historiques
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link
              href="/galeria"
              className={`mobile-nav-link ${isActive('/galeria') ? 'active' : ''}`}
              onClick={closeSubmenus}
            >
              Galerie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}