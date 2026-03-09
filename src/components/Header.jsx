import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "site-nav__link site-nav__link--active" : "site-nav__link";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__bar">
          <NavLink to="/" end className="site-brand">
            Lana Johnson, LCSW
          </NavLink>

          <button
            type="button"
            className="site-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          id="site-navigation"
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end className={getNavLinkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink
            to="/services"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
