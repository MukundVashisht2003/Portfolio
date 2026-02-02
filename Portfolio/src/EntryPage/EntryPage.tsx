import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './EntryPage.scss'

const EntryPage = () => {
  const handleDivClick = (divName: string) => {
    console.log(`${divName} clicked`);
  }

  return (
    <div className='EntryPage' onClick={() => handleDivClick('EntryPage')}>
      <Header />
      <Footer />
    </div>
  )
}

export default EntryPage
