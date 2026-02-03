import { useEffect } from 'react'
import './PdfViewer.scss'

interface PdfViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
}

const PdfViewer = ({ isOpen, onClose, pdfUrl }: PdfViewerProps) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="PdfViewer" onClick={onClose}>
      <div className="PdfViewer__overlay"></div>
      <div className="PdfViewer__container" onClick={(e) => e.stopPropagation()}>
        <div className="PdfViewer__header">
          <h2 className="PdfViewer__header-title">Resume</h2>
          <button className="PdfViewer__header-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="PdfViewer__content">
          <iframe
            src={pdfUrl}
            className="PdfViewer__content-iframe"
            title="PDF Viewer"
          />
        </div>
        <div className="PdfViewer__footer">
          <a 
            href={pdfUrl} 
            download 
            className="PdfViewer__footer-button"
          >
            Download PDF
          </a>
          <button 
            onClick={onClose} 
            className="PdfViewer__footer-button PdfViewer__footer-button--secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PdfViewer

