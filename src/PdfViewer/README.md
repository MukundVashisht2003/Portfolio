# PDF Viewer Component

A modal PDF viewer component for displaying PDF files in a clean, responsive interface.

## Features

- ✅ Modal overlay with backdrop blur
- ✅ Responsive design (mobile & desktop)
- ✅ Download PDF functionality
- ✅ Close on ESC key press
- ✅ Close on overlay click
- ✅ Smooth animations
- ✅ Prevents body scroll when open
- ✅ BEM naming convention

## Usage

```tsx
import { useState } from 'react'
import PdfViewer from './PdfViewer/PdfViewer'

function YourComponent() {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsPdfViewerOpen(true)}>
        View Resume
      </button>
      
      <PdfViewer 
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
        pdfUrl="/path-to-your-resume.pdf"
      />
    </>
  )
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | Yes | Controls modal visibility |
| `onClose` | () => void | Yes | Callback when modal closes |
| `pdfUrl` | string | Yes | URL or path to PDF file |

## Adding Your PDF

1. Place your PDF file in the `public` folder (e.g., `public/resume.pdf`)
2. Update the `pdfUrl` prop to point to your PDF: `pdfUrl="/resume.pdf"`

## Customization

You can customize the appearance by modifying `PdfViewer.scss`:
- Colors: Update the gradient and button colors
- Size: Adjust `max-width` and `height` in `&__container`
- Animations: Modify `fadeIn` and `slideUp` keyframes

