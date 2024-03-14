import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

function App() {

  return (
    <div className='w-full'>
      <Navigation/>
      <main className='w-full'>

        <Header/>

      </main>
    </div>
  )
}

export default App
