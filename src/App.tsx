import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Me from "./screens/Me";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-background">
      <Header
        isOpen={isMobileMenuOpen}
        toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <motion.div
        className={`transition-all duration-300 lg:blur-0
        ${isMobileMenuOpen && "blur"}`}
      >
        <Home />
        <Me />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
