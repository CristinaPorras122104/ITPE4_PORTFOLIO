
import './App.css'
import profile from './assets/profile.jpg'

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Cristina</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

<div className="name-row">
  <h1>Cristina Bernadette Porras</h1>

  <div className="social-icons">
    <a
      href="https://www.facebook.com/share/19wL8phj2p/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <i className="fa-brands fa-facebook"></i>
    </a>

    <a
      href="https://github.com/CristinaPorras122104"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <i className="fa-brands fa-github"></i>
    </a>

    <a
      href="mailto:cristinatorreporras@gmail.com"
      aria-label="Email"
    >
      <i className="fa-solid fa-envelope"></i>
    </a>
  </div>
</div>



          <h3>4th Year BSIT Student & Aspiring Web Developer</h3>

          <p className="intro">
        I am a 4th year Bachelor of Science in Information Technology student. I am interested in web development, programming, networking, and learning new technologies. I enjoy working on hands-on projects that help me improve my skills and prepare me for my future career in IT.
          </p>

          <a href="#projects" className="button">
            View My Projects
          </a>
        </div>

        <div className="photo-container">
          <img src={profile} alt="Cristina Bernadette Porras" />
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p className="about-text">
          I am currently taking Bachelor of Science in Information
          Technology. I am still exploring different areas of IT,
          especially web development. I enjoy learning new things and
          improving my skills through hands-on projects.
        </p>

      
<div className="skills">
  <div>HTML</div>
  <div>CSS</div>
  <div>JavaScript</div>
  <div>React</div>
  <div>Vite</div>
  <div>Node.js</div>
  <div>MongoDB</div>
  <div>REST API</div>
  <div>Git</div>
  <div>GitHub</div>
  <div>VS Code</div>
  <div>Cisco Packet Tracer</div>
  <div>VLAN</div>
  <div>Static Routing</div>
  <div>RIP v2</div>
  <div>DHCP</div>
  <div>Router Configuration</div>
  <div>Switch Configuration</div>
  <div>Network Troubleshooting</div>
  <div>Responsive Web Design</div>
</div>


      </section>

<section id="projects" className="section projects">
  <p className="section-label">MY WORK</p>
  <h2>My Projects</h2>

  <div className="project-container">

    <div className="project-card">
      <span className="project-number">01</span>
      <h3>Awesome Todos</h3>
      <p>
        A simple todo project created as part of my web development
        activities.
      </p>
      <a
        href="https://github.com/CristinaPorras122104/awesometodos"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub →
      </a>
    </div>

    <div className="project-card">
      <span className="project-number">02</span>
      <h3>TradeTime</h3>
      <p>
        A project developed as part of my IT activities and
        programming practice.
      </p>
      <a
        href="https://github.com/CristinaPorras122104/Tradetime"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub →
      </a>
    </div>

    <div className="project-card">
      <span className="project-number">03</span>
      <h3>Team MenteeLog</h3>
      <p>
        A team project created for practicing application development
        and collaboration.
      </p>
      <a
        href="https://github.com/CristinaPorras122104/Team_MenteeLog"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub →
      </a>
    </div>

  </div>
</section>

<section id="contact" className="section contact">
  <p className="section-label">LET'S CONNECT</p>
  <h2>Contact Me</h2>

  <div className="contact-links">
    <a href="mailto:cristinatorreporras@gmail.com">
      cristinatorreporras@gmail.com
    </a>

    <a
      href="https://github.com/CristinaPorras122104"
      target="_blank"
      rel="noopener noreferrer"
    >
       GitHub
    </a>

    <a
      href="https://www.facebook.com/share/19wL8phj2p/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
    >
       Facebook
    </a>
  </div>
</section>


      <footer>
        <p>© 2026 Cristina Bernadette Porras</p>
      </footer>
    </div>
  )
}

export default App

