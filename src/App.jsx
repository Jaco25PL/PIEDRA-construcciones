import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { WhyUsPlus } from './components/WhyUsPlus'
import { Projects } from './components/Projects'
import { FAQs } from './components/FAQs'
import { Form } from './components/Form'
import { useRef } from 'react'
import useScrollTo from './hooks/useScrollTo'
import { FixedBtn } from './components/FixedBtn'


function App() {

  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const fromRef = useRef(null)
  
  const { scrollToAbout,  scrollToServices , scrollToProjects , scrollToForm } = useScrollTo(aboutRef, servicesRef, projectsRef, fromRef)

  return (
    <div className='w-full relative'>

      <Navigation scrollToAbout={scrollToAbout} scrollToServices={scrollToServices} scrollToProjects={scrollToProjects}/>
      <FixedBtn/>

      <main className='w-full overflow-x-hidden'>

        <Header/>
        <About aboutRef={aboutRef}/>
        <Services servicesRef={servicesRef}/>
        <WhyUsPlus/>
        <Projects projectsRef={projectsRef}/>
        <FAQs/>
        <Form fromRef={fromRef} />

      </main>
      
      <Footer scrollToAbout={scrollToAbout} scrollToServices={scrollToServices} scrollToProjects={scrollToProjects} scrollToForm={scrollToForm} />
    </div>
  )
}

export default App
