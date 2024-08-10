
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Contact from "./component/page/Contact";
import Product from "./component/page/Product";
import Header from "./component/Header/Header";
import Footer from "./component/Header/Footer";
import ErrorPage from "./component/page/ErrorPage";
import FeatureData from "./component/page/FeatureData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="feature" element={<FeatureData />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
