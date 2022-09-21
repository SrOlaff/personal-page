import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./screens/Home";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-background">
      <Header
        isOpen={isMobileMenuOpen}
        toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <motion.div
        className={`transition-all duration-300 md:blur-0 ${
          isMobileMenuOpen && "blur"
        }`}
      >
        <Home />
        <div className="h-screen w-screen bg-red-900" id="me" />
        <div className="h-screen w-screen bg-blue-900" id="contact" />
      </motion.div>
    </div>
  );
}

export default App;
