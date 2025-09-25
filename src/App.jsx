import React from 'react';


import'./App.css'


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (<div>
      <Navbar />

      <Home />

      <About />


      <Contact />
    </div>
  );
}

export default App;


