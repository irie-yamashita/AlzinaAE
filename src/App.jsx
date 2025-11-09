import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inscriptions from './pages/Inscriptions'




function App() {

  return (
              
  <div className="bg-background box-border w-full min-h-[100dvh] relative">
      <Header/>
      <div className="pb-48">
        {/* <Inscriptions /> */}
        <Home/>
      </div>

      <Footer/>
    </div>
  )
}

export default App
