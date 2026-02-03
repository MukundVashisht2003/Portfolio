# Portfolio Website

A modern, responsive personal portfolio website built with React 19, TypeScript, and Vite. This project showcases work experience, projects, and contact information with a clean, professional design.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-1.97-CC6699?logo=sass)

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Code Flow](#-code-flow)
- [Data Configuration](#-data-configuration)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Customization](#-customization)
- [**Deploying to GitHub Pages**](./DEPLOYMENT.md) 🚀

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Library with latest features including React Compiler |
| **TypeScript** | 5.9 | Type-safe JavaScript |
| **Vite** | 7.2 | Fast build tool and dev server |
| **SCSS (Sass)** | 1.97 | CSS preprocessor for styling |
| **ESLint** | 9.39 | Code linting and quality |
| **React Compiler** | 1.0.0 | Automatic optimization via Babel plugin |

### Key Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "babel-plugin-react-compiler": "^1.0.0",
    "sass-embedded": "^1.97.3",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
```

---

## 📁 Project Structure

```
src/
├── main.tsx              # Application entry point
├── App.tsx               # Root component (sets document title)
├── App.css               # Global app styles
├── index.css             # Base CSS reset/styles
│
├── assets/               # Static assets (images, PDFs, icons)
│   ├── Resume.pdf
│   ├── github-sign.png
│   ├── linkedin.png
│   └── ...
│
├── Data/
│   └── data.json         # Central data configuration file
│
├── EntryPage/            # Main layout wrapper
│   ├── EntryPage.tsx
│   └── EntryPage.scss
│
├── Header/               # Navigation header
│   ├── Header.tsx
│   └── Header.scss
│
├── Main/                 # Main content area
│   ├── Main.tsx          # Contains About section + child components
│   └── Main.scss
│
├── Footer/               # Contact info and social links
│   ├── Footer.tsx
│   └── Footer.scss
│
├── WorkExperience/       # Work experience timeline
│   ├── WorkExperience.tsx
│   └── WorkExperience.scss
│
├── ProjectGrid/          # Projects showcase grid
│   ├── ProjectGrid.tsx
│   └── ProjectGrid.scss
│
└── PdfViewer/            # PDF viewer modal for resume
    ├── PdfViewer.tsx
    ├── PdfViewer.scss
    └── README.md
```

---

## 🔄 Code Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        main.tsx                              │
│              (Entry point - renders App)                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                        App.tsx                               │
│         (Sets document title, renders EntryPage)             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     EntryPage.tsx                            │
│              (Main layout container)                         │
│                                                              │
│    ┌─────────────────────────────────────────────────────┐  │
│    │                   Header.tsx                         │  │
│    │     (Navigation with smooth scroll to sections)      │  │
│    └─────────────────────────────────────────────────────┘  │
│                          │                                   │
│                          ▼                                   │
│    ┌─────────────────────────────────────────────────────┐  │
│    │                    Main.tsx                          │  │
│    │                                                      │  │
│    │  ┌─────────────────────────────────────────────┐    │  │
│    │  │  About Section (Hero with CTA buttons)      │    │  │
│    │  └─────────────────────────────────────────────┘    │  │
│    │                      │                               │  │
│    │  ┌─────────────────────────────────────────────┐    │  │
│    │  │  PdfViewer.tsx (Resume modal)               │    │  │
│    │  └─────────────────────────────────────────────┘    │  │
│    │                      │                               │  │
│    │  ┌─────────────────────────────────────────────┐    │  │
│    │  │  WorkExperience.tsx (Timeline cards)        │    │  │
│    │  └─────────────────────────────────────────────┘    │  │
│    │                      │                               │  │
│    │  ┌─────────────────────────────────────────────┐    │  │
│    │  │  ProjectGrid.tsx (Project cards grid)       │    │  │
│    │  └─────────────────────────────────────────────┘    │  │
│    └─────────────────────────────────────────────────────┘  │
│                          │                                   │
│                          ▼                                   │
│    ┌─────────────────────────────────────────────────────┐  │
│    │                   Footer.tsx                         │  │
│    │     (Contact info, social links, copyright)          │  │
│    └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

All components read from `src/Data/data.json`:

```
data.json ──────┬──────► App.tsx (name for title)
                │
                ├──────► Header.tsx (name)
                │
                ├──────► Main.tsx (name, title, description)
                │
                ├──────► WorkExperience.tsx (workExperience[])
                │
                ├──────► ProjectGrid.tsx (projects[])
                │
                └──────► Footer.tsx (socialLinks, contact)
```

---

## 📊 Data Configuration

The `src/Data/data.json` file is the central configuration for all portfolio content. Here's the complete structure:

### TypeScript Interfaces

```typescript
interface PortfolioData {
  name: string
  title: string
  description: string
  socialLinks: SocialLinks
  contact: Contact
  workExperience: Experience[]
  projects: Project[]
}

interface SocialLinks {
  github: string
  linkedin: string
  mail: string
}

interface Contact {
  email: string
  phone: string
  location: string
}

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string
  technologies: string[]
}

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  status: 'completed' | 'in-development'
}
```

### JSON Schema

```json
{
  "name": "string",           // Your full name
  "title": "string",          // Professional title (e.g., "Full Stack Developer")
  "description": "string",    // Brief bio/description

  "socialLinks": {
    "github": "string",       // GitHub profile URL
    "linkedin": "string",     // LinkedIn profile URL
    "mail": "string"          // Email mailto link (e.g., "mailto:email@example.com")
  },

  "contact": {
    "email": "string",        // Display email
    "phone": "string",        // Phone number with country code
    "location": "string"      // City/Country
  },

  "workExperience": [
    {
      "id": "number",         // Unique identifier
      "company": "string",    // Company name
      "position": "string",   // Job title
      "duration": "string",   // Date range (e.g., "July 2024 - Present")
      "location": "string",   // Work location
      "description": "string", // Job description/achievements
      "technologies": ["string"] // Array of technologies used
    }
  ],

  "projects": [
    {
      "id": "number",           // Unique identifier
      "title": "string",        // Project name
      "description": "string",  // Project description
      "tags": ["string"],       // Technology tags
      "liveUrl": "string",      // Live demo URL (use "#" if not available)
      "githubUrl": "string",    // GitHub repository URL
      "status": "string"        // "completed" | "in-development"
    }
  ]
}
```

### Example data.json

```json
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "description": "Passionate developer with 5+ years of experience...",
  
  "socialLinks": {
    "github": "https://github.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe",
    "mail": "mailto:john@example.com"
  },
  
  "contact": {
    "email": "john@example.com",
    "phone": "+1 123-456-7890",
    "location": "San Francisco, USA"
  },
  
  "workExperience": [
    {
      "id": 1,
      "company": "Tech Corp",
      "position": "Senior Developer",
      "duration": "Jan 2022 - Present",
      "location": "San Francisco",
      "description": "Led development of microservices architecture...",
      "technologies": ["React", "Node.js", "AWS", "PostgreSQL"]
    }
  ],
  
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-stack e-commerce solution with payment integration...",
      "tags": ["React", "Node.js", "Stripe", "MongoDB"],
      "liveUrl": "https://myproject.com",
      "githubUrl": "https://github.com/johndoe/ecommerce",
      "status": "completed"
    }
  ]
}
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your data**
   - Edit `src/Data/data.json` with your personal information
   - Add your resume PDF to `src/assets/Resume.pdf`
   - Update social media icons in `src/assets/`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 Customization

### Styling

Each component has its own SCSS file following the BEM naming convention:

- **Block**: Component name (e.g., `.Header`, `.Main`, `.Footer`)
- **Element**: Component parts (e.g., `.Header__left`, `.Header__right`)
- **Modifier**: Variations (e.g., `.ProjectGrid__card--completed`)

### Adding New Sections

1. Create a new folder in `src/` with component and styles
2. Import the component in `Main.tsx` or `EntryPage.tsx`
3. Add corresponding data to `data.json` if needed
4. Add navigation link in `Header.tsx`

### Theme Colors

Global CSS variables can be defined in `src/index.css`. Modify these to change the color scheme.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ using React, TypeScript, and Vite**
