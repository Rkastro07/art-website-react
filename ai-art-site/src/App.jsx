import { useState } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Nav from './components/nav'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'gallery':
        return <Gallery />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Nav currentPage={page} onNavigate={setPage} />
      {renderPage()}
    </>
  )
}

export default App
