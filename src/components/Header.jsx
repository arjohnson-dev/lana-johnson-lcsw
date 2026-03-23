import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isMobileViewport = () =>
    window.matchMedia("(max-width: 759px)").matches;

  const scrollToSectionOnMobile = (event, sectionId) => {
    if (!isMobileViewport()) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const mobileSectionSpacing = 18;
    const scrollTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      mobileSectionSpacing;

    window.history.replaceState(null, "", `/#${sectionId}`);
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  const goToTop = (event) => {
    event.preventDefault();
    closeMenu();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__bar">
          <a href="/" className="site-brand" onClick={goToTop}>
            Lana Johnson, LCSW
          </a>

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
          <a href="/" className="site-nav__link" onClick={goToTop}>
            About
          </a>
          <a
            href="#services"
            className="site-nav__link"
            onClick={(event) => scrollToSectionOnMobile(event, "services")}
          >
            Services
          </a>

          <a
            href="#contact"
            className="site-nav__link"
            onClick={(event) => scrollToSectionOnMobile(event, "contact")}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
