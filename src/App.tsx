import { useEffect } from 'react'
import './App.css'
import EntryPage from './EntryPage/EntryPage'
import Data from './Data/data.json'

function App() {
  useEffect(() => {
    document.title = `${Data.name} | Portfolio`
  }, [])

  return (
    <>
      <EntryPage />
    </>
  )
}

export default App
