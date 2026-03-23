import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import { preloadImageUrls } from "./assets/preloadImages";

function App() {
  useEffect(() => {
    const preloaders = preloadImageUrls.map((url) => {
      const image = new Image();
      image.decoding = "async";
      image.src = url;
      return image;
    });

    return () => {
      preloaders.forEach((image) => {
        image.src = "";
      });
    };
  }, []);

  useEffect(() => {
    const { pathname, search, hash } = window.location;

    if (pathname === "/about" || pathname === "/about/") {
      window.history.replaceState(null, "", `/${search}${hash}`);
    }
  }, []);

  return (
    <div className="site-layout">
      <Header />

      <main className="site-content">
        <div id="about" className="site-section site-section--about">
          <About />
        </div>
        <div id="services" className="site-section">
          <Services />
        </div>
        <div id="contact" className="site-section">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
