import Data from '../Data/data.json'
import './ProjectGrid.scss'

type ProjectStatus = 'completed' | 'in-development'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  status: ProjectStatus
  isCompanyProject?: boolean
}

const getStatusLabel = (status: ProjectStatus): string => {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'in-development':
      return 'In Development'
    default:
      return status
  }
}

const ProjectGrid = () => {
  const projects: Project[] = Data.projects as Project[]

  return (
    <section id="projects" className="ProjectGrid">
      <div className="ProjectGrid__content">
        <h2 className="ProjectGrid__title">Projects</h2>
        <div className="ProjectGrid__grid">
          {projects.map((project) => (
            <div key={project.id} className={`ProjectGrid__card ProjectGrid__card--${project.status}`}>
              <div className="ProjectGrid__card-header">
                <h3 className="ProjectGrid__card-title">{project.title}</h3>
                <span className={`ProjectGrid__card-status ProjectGrid__card-status--${project.status}`}>
                  {getStatusLabel(project.status)}
                </span>
              </div>
              <p className="ProjectGrid__card-description">
                {project.description}
              </p>
              <div className="ProjectGrid__card-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="ProjectGrid__card-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="ProjectGrid__card-links">
                {!project.isCompanyProject && (
                  <a
                    href={project.githubUrl}
                    className="ProjectGrid__card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.isCompanyProject && (
                  <span className="ProjectGrid__card-company">Company Project</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid

