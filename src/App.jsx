import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Inscriptions from './components/Inscriptions'




function App() {

  return (
              
    <div className="bg-background box-border w-full h-full mx-auto relative">
      <Header/>
      {/* {<Inscriptions></Inscriptions>} */}
      <Home/>

      <Footer/>
    </div>
  )
}

export default App
