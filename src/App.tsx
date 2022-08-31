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
        <div className="h-screen w-screen bg-backgroudn flex justify-center items-center">
          <h1>Hello World</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
