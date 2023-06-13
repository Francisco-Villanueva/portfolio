import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  console.log("hola");
  return (
    <div className="App">
      <div className="app-container">
        <Hero />
        <Works />
        <Who />

        <Contact />
      </div>
    </div>
  );
}

export default App;
