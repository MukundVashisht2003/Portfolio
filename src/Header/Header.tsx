import Data from '../Data/data.json'
import './Header.scss'

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className='Header'>
      <div className="Header__left">
        <div className='Header__left__name'>{Data.name}</div>
      </div>
      <div className="Header__right">
        <div className='Header__right-item' onClick={() => scrollToSection('about')}>About</div>
        <div className='Header__right-item' onClick={() => scrollToSection('experience')}>Experience</div>
        <div className='Header__right-item' onClick={() => scrollToSection('projects')}>Projects</div>
        <div className='Header__right-item' onClick={() => scrollToSection('contact')}>Contact</div>
      </div>
    </header>
  )
}

export default Header
