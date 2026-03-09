import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./views/About";
import Services from "./views/Services";
import Products from "./views/Products";
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

  return (
    <div className="site-layout">
      <ScrollToTop />
      <Header />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/meet-the-team" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
