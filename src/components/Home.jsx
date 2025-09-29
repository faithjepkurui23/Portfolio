import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          Hello, I'm <span className="highlight">Faith Jepkurui Kosgei</span>
        </h1>
        <h2 className="subtitle">
          Web Developer | React Learner | Tech Enthusiast
        </h2>
        <p>
          Welcome to my portfolio website built with <strong>React</strong>!  
          I build modern, responsive, and interactive web applications.  
          I’m passionate about coding, solving problems, and continuous learning.
        </p>
        <div className="home-buttons">
          <a href="#about" className="btn">About Me</a>
          <a href="#projects" className="btn btn-alt">View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
