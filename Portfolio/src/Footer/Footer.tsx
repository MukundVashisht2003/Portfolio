import Data from '../Data/data.json'
import './Footer.scss'
import githubImg from '../assets/github-sign.png'
import linkedinImg from '../assets/linkedin (1).png'
import mailImg from '../assets/apple.png'
import data from '../Data/data.json'

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="Footer__links">
            <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer" className="Footer__links__github">
              <img src={githubImg} alt="GitHub" />
            </a>
            <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="Footer__links__linkedIn">
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
            <a href={data.socialLinks.mail} className="Footer__links__mail">
              <img src={mailImg} alt="Mail" />
            </a>
        </div>
        <div className="Footer__copyright">
            <p>&copy; {new Date().getFullYear()} {Data.name}. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
