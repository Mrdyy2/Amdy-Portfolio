import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      setLoading(false);
    },3000);//temps de chargement 3s

    return () => clearTimeout(timer);
  }, []);


  return(
    <div className="App">
      {loading ? (<Loader />
      ) : (
        <>
          <Header/>
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
      
    </div>
  );
}

export default App;
