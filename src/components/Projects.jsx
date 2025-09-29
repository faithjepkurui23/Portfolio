import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-intro">
        This section will showcase my work as I continue to grow as a developer. 
        For now, here’s an idea of the kind of projects I aim to build and share soon.
      </p>

      <div className="projects-grid">
        {/* Placeholder Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React to showcase skills and projects.</p>
          <span className="tech-stack">React · JavaScript · CSS</span>
        </div>

        {/* Placeholder Project 2 */}
        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>A simple to-do/task management app with CRUD functionality.</p>
          <span className="tech-stack">React · Node.js · MongoDB</span>
        </div>

        {/* Placeholder Project 3 */}
        <div className="project-card">
          <h3>Fitness Tracker</h3>
          <p>An app to track workouts, progress, and set personal fitness goals.</p>
          <span className="tech-stack">React · Express · API</span>
        </div>
      </div>

      <p className="projects-footer">
        🚀 More projects are coming soon! Stay tuned as I keep learning and building.
      </p>
    </section>
  );
}

export default Projects;
