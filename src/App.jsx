import './App.css'
import CodingProfiles from './components/CodingProfiles'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <CodingProfiles />
      <Footer />
    </>
  )
}

export default App
