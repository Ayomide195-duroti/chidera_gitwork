import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
