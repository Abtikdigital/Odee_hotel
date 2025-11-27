
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from "./pages/Contact"
// import Events from "./pages/Events"
import Services from './pages/Services'
import About from "./pages/About"
import ScrollToUp from './utils/ScrollToUp'
import AnimatedBackground from './components/AnimatedBackground'
import FloatingElements from './components/FloatingElements'
import { initAllAnimations } from './utils/jQueryAnimations'

function App() {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <>
    <AnimatedBackground />
    <FloatingElements />
    <BrowserRouter>
      <ScrollToUp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/events' element={<Events/>}/> */}
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>


    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
