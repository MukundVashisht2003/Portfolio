import { useState } from "react"
import Data from "../Data/data.json"
import PdfViewer from "../PdfViewer/PdfViewer"
import "./Main.scss"

export default function Main() {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false)

  // Replace this with your actual PDF URL or path
  const pdfUrl = "/path-to-your-resume.pdf"

  const handleOpenPdfViewer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsPdfViewerOpen(true)
  }

  const handleClosePdfViewer = () => {
    setIsPdfViewerOpen(false)
  }

  return (
    <main className="Main">
      {/* About Section */}
      <section id="about" className="Main__about">
        <div className="Main__about-content">
          <h1 className="Main__about-title">Hi, I'm {Data.name}</h1>
          <h2 className="Main__about-subtitle">{Data.title}</h2>
          <p className="Main__about-description">{Data.description}</p>
          <div className="Main__about-cta">
            <a
              href="#projects"
              className="Main__about-button"
              onClick={handleOpenPdfViewer}
            >
              Get to know more
            </a>
            <a href={Data.socialLinks.mail} className="Main__about-button Main__about-button--secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <PdfViewer
        isOpen={isPdfViewerOpen}
        onClose={handleClosePdfViewer}
        pdfUrl={pdfUrl}
      />

      {/* Projects Section */}
      <section id="projects" className="Main__projects">
        <div className="Main__projects-content">
          <h2 className="Main__projects-title">Projects</h2>
          <div className="Main__projects-grid">
            {/* Project cards will go here */}
            <div className="Main__projects-card">
              <h3 className="Main__projects-card-title">Project 1</h3>
              <p className="Main__projects-card-description">
                Description of your first project. Add details about technologies used and what you built.
              </p>
              <div className="Main__projects-card-tags">
                <span className="Main__projects-card-tag">React</span>
                <span className="Main__projects-card-tag">TypeScript</span>
                <span className="Main__projects-card-tag">SCSS</span>
              </div>
              <div className="Main__projects-card-links">
                <a href="#" className="Main__projects-card-link">View Project</a>
                <a href="#" className="Main__projects-card-link">GitHub</a>
              </div>
            </div>

            <div className="Main__projects-card">
              <h3 className="Main__projects-card-title">Project 2</h3>
              <p className="Main__projects-card-description">
                Description of your second project. Highlight key features and your role.
              </p>
              <div className="Main__projects-card-tags">
                <span className="Main__projects-card-tag">Node.js</span>
                <span className="Main__projects-card-tag">Express</span>
                <span className="Main__projects-card-tag">MongoDB</span>
              </div>
              <div className="Main__projects-card-links">
                <a href="#" className="Main__projects-card-link">View Project</a>
                <a href="#" className="Main__projects-card-link">GitHub</a>
              </div>
            </div>

            <div className="Main__projects-card">
              <h3 className="Main__projects-card-title">Project 3</h3>
              <p className="Main__projects-card-description">
                Description of your third project. Explain the problem it solves.
              </p>
              <div className="Main__projects-card-tags">
                <span className="Main__projects-card-tag">Python</span>
                <span className="Main__projects-card-tag">Django</span>
                <span className="Main__projects-card-tag">PostgreSQL</span>
              </div>
              <div className="Main__projects-card-links">
                <a href="#" className="Main__projects-card-link">View Project</a>
                <a href="#" className="Main__projects-card-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
