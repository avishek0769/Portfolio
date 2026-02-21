import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import { Hero } from './components/layout/Hero'
import AboutMe from './components/layout/AboutMe'
import Education from './components/layout/Education'
import SkillsSection from './components/layout/SkillsSection'
import { Projects } from './components/layout/Projects'
import Contact from './components/layout/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
