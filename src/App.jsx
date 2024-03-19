import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { WhyUsPlus } from './components/WhyUsPlus'
import { Projects } from './components/Projects'
import { FAQs } from './components/FAQs'
import { Form } from './components/From'

function App() {

  return (
    <div className='w-full'>
      <Navigation/>
      <main className='w-full'>

        <Header/>
        <About/>
        <Services/>
        <WhyUsPlus/>
        <Projects/>
        <FAQs/>
        <Form/>

      </main>
      
      <Footer/>
    </div>
  )
}

export default App
