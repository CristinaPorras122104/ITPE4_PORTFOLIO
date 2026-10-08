import './App.css'
import profile from './assets/profile.jpg'

function App() {
  return (
    <div>
   
      <nav className="navbar">
        <h2>Cristina.</h2>

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

          <h1>Cristina Bernadette Porras</h1>

          <h3>4th Year BSIT Student & Aspiring Web Developer</h3>

          <p className="intro">
            I am a 4th year Bachelor of Science in Information Technology
            student. I am interested in web development, programming,
            networking, and learning new technologies. I enjoy working on
            hands-on projects that help me improve my skills and prepare
            me for my future career in IT.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button">
              View My Projects
            </a>

            <a href="#contact" className="button secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="photo-container">
          <img src={profile} alt="Cristina Bernadette Porras" />
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-label">ABOUT ME</p>
        <h2>Get to Know Me</h2>

        <p className="about-text">
          Hi! I'm Cristina Bernadette Porras, a BSIT student at Western Institute
          of Technology. I am interested in web development, networking, and
          creating useful and creative digital projects. I enjoy learning new
          technologies and improving my skills through hands-on projects.

          <br /><br />

          I have experience working with HTML, CSS, JavaScript, React, Node.js,
          MongoDB, REST APIs, and Cisco Packet Tracer. I am also familiar with
          VLAN, static routing, DHCP, and network troubleshooting.

          <br /><br />

          My goal is to continue developing my technical skills and gain more
          experience in building websites, applications, and network solutions.
        </p>

        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Node.js</div>
          <div>MongoDB</div>
          <div>REST API</div>
          <div>Cisco Packet Tracer</div>
          <div>VLAN</div>
          <div>Static Routing</div>
          <div>DHCP</div>
          <div>Network Troubleshooting</div>
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
  <h2>Get In Touch</h2>

  <p className="contact-intro">
    I'm always open to connecting, collaborating, and discussing new ideas.
    Feel free to reach out through any of the platforms below.
  </p>

  <div className="contact-links">
    <a href="mailto:cristinatorreporras@gmail.com">
      <span>✉</span>
      <div>
        <strong>Email</strong>
        <small>Send me an email</small>
      </div>
    </a>

    <a href="tel:09501442291">
      <span>☎</span>
      <div>
        <strong>Phone</strong>
        <small>0950 144 2291</small>
      </div>
    </a>

    <a
      href="https://github.com/CristinaPorras122104"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>⌘</span>
      <div>
        <strong>GitHub</strong>
        <small>View my projects</small>
      </div>
    </a>

    <a
      href="https://www.facebook.com/share/19wL8phj2p/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>f</span>
      <div>
        <strong>Facebook</strong>
        <small>Connect with me</small>
      </div>
    </a>
  </div>
</section>

      <footer>
        <p>© 2026 Cristina Bernadette Porras</p>
        <p className="footer-small">Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App