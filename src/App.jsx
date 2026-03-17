import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import { Hero } from './components/layout/Hero'
import AboutMe from './components/layout/AboutMe'
import Education from './components/layout/Education'
import SkillsSection from './components/layout/SkillsSection'
import { Projects } from './components/layout/Projects'
import Contact from './components/layout/Contact'
import AllProjects from './components/pages/AllProjects'
import Articles from './components/pages/Articles'

function Home() {
  return (
    <>
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
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  )
}

export default App
