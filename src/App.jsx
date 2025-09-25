import React from 'react';


import'./App.css'


import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

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


