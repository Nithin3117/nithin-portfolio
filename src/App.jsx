import { useState } from "react"

const projects = [
  {
    number: "01",
    title: "Smart Resume Analyzer",
    description:
      "An AI-powered resume analysis application that processes PDF and DOCX resumes and provides ATS scoring, skill extraction, job description matching, summaries, and improvement suggestions.",
    technologies: [
      "Python",
      "Streamlit",
      "NLP",
      "OpenRouter AI",
      "PyPDF",
      "python-docx",
    ],
    github: "https://github.com/Nithin3117/smart-resume-analyzer",
    live: "https://smart-resume-analyzer-em4ajd4gnpkfkzis9j5giq.streamlit.app/",
  },
  {
    number: "02",
    title: "Library Management System",
    description:
      "A full-stack library management application with authentication, book and student management, issue and return tracking, overdue detection, fine calculation, transactions, and dashboard statistics.",
    technologies: [
      "React.js",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/Nithin3117/library-management-system",
    live: "https://library-management-system-beta-nine-79.vercel.app/",
  },
  {
    number: "03",
    title: "Page Pulse",
    description:
      "A web application that analyzes webpages and presents useful insights through a responsive React frontend with FastAPI backend integration.",
    technologies: [
      "React.js",
      "FastAPI",
      "REST APIs",
      "API Integration",
    ],
    github: "https://github.com/Nithin3117/page-pulse",
    live: "https://page-pulse-k8ja.onrender.com/",
  },
]

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Development",
    skills: ["FastAPI", "REST APIs", "API Integration"],
  },
  {
    title: "AI & Data",
    skills: ["NLP", "OpenRouter AI", "Streamlit"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "SQLAlchemy"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger"],
  },
  {
    title: "Libraries & File Processing",
    skills: [
      "PyPDF",
      "python-docx",
      "PDF Processing",
      "DOCX Processing",
      "TXT Processing",
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Nithin Bollineni
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>

            <a href="#resume" onClick={closeMenu}>
              Resume
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <div className="nav-actions">
            <a
              href="https://github.com/Nithin3117"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nithin-bollineni-311706n/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE DEVELOPER</p>

            <h1>
              Hi, I'm <span>Nithin</span>
            </h1>

            <h2>Python Developer | Backend & Web Development</h2>

            <p className="hero-description">
              I build practical, user-friendly applications and solve
              real-world problems using Python, web technologies, backend
              frameworks, APIs, databases, and AI-powered tools.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Nithin3117"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nithin-bollineni-311706n/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:nithinbollineni8@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="developer-card">
              <div className="initial">N</div>

              <h3>Nithin Bollineni</h3>

              <p>Python Developer</p>

              <div className="card-line"></div>

              <div className="card-stack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>React</span>
                <span>SQL</span>
              </div>

              <small>Building · Learning · Creating</small>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <p className="section-label">ABOUT ME</p>

          <h2>Building with purpose</h2>

          <div className="about-grid">
            <div>
              <p className="section-text">
                I'm a passionate Python Developer with a strong interest in
                web, backend, and full-stack development.
              </p>

              <p className="section-text">
                I enjoy building practical, user-friendly applications and
                solving real-world problems using modern technologies. I'm
                continuously improving my development skills through hands-on
                projects and learning new tools and technologies.
              </p>
            </div>

            <div className="about-highlight">
              <div>
                <span>Focus</span>
                <strong>Python & Backend</strong>
              </div>

              <div>
                <span>Exploring</span>
                <strong>Full Stack Development</strong>
              </div>

              <div>
                <span>Interest</span>
                <strong>AI-powered Applications</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>What I work with</h2>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span className="skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <p className="section-label">SELECTED WORK</p>

          <h2>Projects I've built</h2>

          <p className="section-text">
            A selection of practical applications built while developing my
            skills across Python, backend development, web development,
            databases, APIs, and AI.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-label">EDUCATION</p>

          <h2>My academic journey</h2>

          <div className="education-card">
            <div className="education-year">
              <span>2024</span>
              <strong>—</strong>
              <span>2028</span>
            </div>

            <div className="education-content">
              <p className="education-degree">
                B.Tech — Computer Science & Engineering
              </p>

              <h3>
                Artificial Intelligence & Machine Learning
              </h3>

              <p>
                Vasireddy Venkatadri Institute of Technology
              </p>

              <div className="education-meta">
                <span>3rd Year</span>
                <span>CGPA: 7.47 / 10</span>
              </div>
            </div>
          </div>

          <div className="education-card training-card">
            <div className="education-year">
              <span>AUG</span>
              <strong>—</strong>
              <span>PRESENT</span>
            </div>

            <div className="education-content">
              <p className="education-degree">
                Certification Course
              </p>

              <h3>
                Programming in Python with AI
              </h3>

              <p>
                Internshala Trainings
              </p>

              <p className="education-description">
                Currently pursuing a certification course focused on
                Programming in Python with AI, developing practical skills
                in Python programming, AI concepts, and hands-on
                application development.
              </p>

              <div className="education-meta">
                <span>August 2026 – Present</span>
                <span>Python & AI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-label">EXPERIENCE</p>

          <h2>Currently growing</h2>

          <div className="experience-card">
            <div className="experience-marker"></div>

            <div>
              <span className="experience-status">CURRENTLY</span>

              <h3>Building & Learning</h3>

              <p>
                I currently have no professional work experience. I'm
                building practical projects and continuously developing my
                skills in Python, web development, backend development,
                APIs, databases, AI technologies, and full-stack
                development.
              </p>

              <p>
                My projects give me hands-on experience in designing,
                developing, integrating, testing, and deploying real
                applications.
              </p>
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <p className="section-label">CERTIFICATIONS</p>

          <h2>Learning beyond projects</h2>

          <div className="certifications-grid">
            <div className="certification-card">
              <span>01</span>
              <h3>Python Programming</h3>
              <p>CodeChef</p>
            </div>

            <div className="certification-card">
              <span>02</span>
              <h3>Git & GitHub</h3>
              <p>CodeChef</p>
            </div>

            <div className="certification-card">
              <span>03</span>
              <h3>Java Programming</h3>
              <p>CodeChef</p>
            </div>
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <p className="section-label">RESUME</p>

          <h2>Want to know more?</h2>

          <p className="section-text">
            View my resume for a concise overview of my education, skills,
            projects, certifications, and development experience.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View Resume ↗
          </a>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's build something</h2>

          <p className="section-text">
            I'm open to opportunities where I can learn, contribute, and
            grow as a developer. If you'd like to connect, feel free to
            reach out.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:nithinbollineni8@gmail.com"
              className="primary-button"
            >
              nithinbollineni8@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/nithin-bollineni-311706n/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div>
            <p className="footer-name">
              Nithin Bollineni
            </p>

            <p>
              Python Developer | Backend & Web Development
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Nithin3117"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nithin-bollineni-311706n/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:nithinbollineni8@gmail.com">
              Email
            </a>

            <a href="#home">
              Back to top ↑
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Nithin Bollineni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App