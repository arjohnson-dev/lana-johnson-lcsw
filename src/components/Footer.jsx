function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__section">
            <h2 className="site-footer__heading">Contact</h2>
            <p className="site-footer__text">(574) 400-5724</p>
            <p className="site-footer__text">(574) 293-0005</p>
            <h2 className="site-footer__heading">Fax</h2>
            <p className="site-footer__text">(574) 293-0019</p>
            <h2 className="site-footer__heading">Address</h2>
            <p className="site-footer__text">
              57340 Alpha Drive, Goshen, IN 46528
            </p>
            <div className="site-footer__map-wrap">
              <iframe
                className="site-footer__map"
                title="57340 Alpha Dr location map"
                src="https://www.google.com/maps?q=57340+Alpha+Dr,+Goshen,+IN+46528&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="site-footer__directions"
              href="https://www.google.com/maps/dir/?api=1&destination=57340+Alpha+Dr,+Goshen,+IN+46528"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className="site-footer__hours-badge">
            <div className="site-footer__section site-footer__section--badge">
              <p className="site-footer__text">
                "Your vision will be clear only when you can look into your own
                heart. Who looks outside, dreams; who looks inside awakens."
              </p>
              <p className="site-footer__text">— Carl Jung</p>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} Lana Johnson, LCSW. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
