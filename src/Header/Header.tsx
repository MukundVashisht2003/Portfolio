import Data from '../Data/data.json'
import './Header.scss'

const Header = () => {
  const handleDivClick = (divName: string) => {
    console.log(`${divName} clicked`);
  }

  return (
    <header className='Header'> 
      <div className="Header__left">
        <div className='Header__left__name'>{Data.name}</div>   
      </div>
      <div className="Header__right">
        <div className='Header__right__about' onClick={() => handleDivClick('About')}>About</div>
        <div className='Header__right__project' onClick={() => handleDivClick('Project')}>Project</div>
        <div className='Header__right__contact' onClick={() => handleDivClick('Contact')}>Contact</div>
      </div>
    </header>
  )
}

export default Header
