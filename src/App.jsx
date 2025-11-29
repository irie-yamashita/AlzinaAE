import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inscriptions from './pages/Inscriptions'
import Contacte from './pages/Contact'
import Teams from './pages/Teams'
import { Routes, Route } from 'react-router-dom'
import Calendar from './pages/Calendar'
import News from './pages/News'
import Club from './pages/Club'
import Multimedia from './pages/Multimedia'



function App() {

  return (
              
  <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inscripcions' element={<Inscriptions />} />
          <Route path='/contacte' element={<Contacte />} />
          <Route path='/equips' element={<Teams />} />
          <Route path='/calendari' element={<Calendar />} />
          <Route path='/noticies' element={<News />} />
          <Route path='/club' element={<Club />} />
          <Route path='/multimedia' element={<Multimedia />} />
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App
