import Data from '../Data/data.json'
import './Footer.scss'
import githubImg from '../assets/github-sign.png'
import linkedinImg from '../assets/linkedin (1).png'
import mailImg from '../assets/apple.png'

const Footer = () => {
  return (
    <footer id="contact" className='Footer'>
        <div className="Footer__contact">
            <h3 className="Footer__contact-title">Get In Touch</h3>
            <div className="Footer__contact-info">
                <div className="Footer__contact-item">
                    <span className="Footer__contact-label">Email</span>
                    <a href={Data.socialLinks.mail} className="Footer__contact-value">
                        {Data.contact.email}
                    </a>
                </div>
                <div className="Footer__contact-item">
                    <span className="Footer__contact-label">Phone</span>
                    <a href={`tel:${Data.contact.phone}`} className="Footer__contact-value">
                        {Data.contact.phone}
                    </a>
                </div>
                <div className="Footer__contact-item">
                    <span className="Footer__contact-label">Location</span>
                    <span className="Footer__contact-value">{Data.contact.location}</span>
                </div>
            </div>
        </div>

        <div className="Footer__links">
            <a href={Data.socialLinks.github} target="_blank" rel="noopener noreferrer" className="Footer__links-item">
              <img src={githubImg} alt="GitHub" />
            </a>
            <a href={Data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="Footer__links-item">
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
            <a href={Data.socialLinks.mail} className="Footer__links-item">
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
