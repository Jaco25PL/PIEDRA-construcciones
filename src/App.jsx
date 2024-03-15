import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { About } from './components/About'

function App() {

  return (
    <div className='w-full'>
      <Navigation/>
      <main className='w-full'>

        <Header/>
        <About/>

      </main>
    </div>
  )
}

export default App
