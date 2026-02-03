import Data from '../Data/data.json'
import './WorkExperience.scss'

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

const WorkExperience = () => {
  const experiences: Experience[] = Data.workExperience as Experience[]

  return (
    <section id="experience" className="WorkExperience">
      <div className="WorkExperience__content">
        <h2 className="WorkExperience__title">Work Experience</h2>
        <div className="WorkExperience__timeline">
          {experiences.map((experience) => (
            <div key={experience.id} className="WorkExperience__card">
              <div className="WorkExperience__card-header">
                <div className="WorkExperience__card-info">
                  <h3 className="WorkExperience__card-position">{experience.position}</h3>
                  <span className="WorkExperience__card-company">{experience.company}</span>
                </div>
                <span className="WorkExperience__card-duration">{experience.duration}</span>
              </div>
              <p className="WorkExperience__card-description">
                {experience.description}
              </p>
              <div className="WorkExperience__card-technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="WorkExperience__card-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

