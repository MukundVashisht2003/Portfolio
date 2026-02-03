import { useState } from "react"
import Data from "../Data/data.json"
import PdfViewer from "../PdfViewer/PdfViewer"
import ProjectGrid from "../ProjectGrid/ProjectGrid"
import WorkExperience from "../WorkExperience/WorkExperience"
import "./Main.scss"

export default function Main() {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false)

  // Use resume URL from data.json (Google Drive)
  const pdfUrl = Data.resume

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
            <a href="#contact" className="Main__about-button Main__about-button--secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <PdfViewer
        isOpen={isPdfViewerOpen}
        onClose={handleClosePdfViewer}
        pdfUrl={pdfUrl}
      />

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Projects Section */}
      <ProjectGrid />
    </main>
  )
}
