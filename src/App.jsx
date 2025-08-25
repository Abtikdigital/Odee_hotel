
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import Services from './pages/Services'
import About from "./pages/About"
import ScrollToUp from './utils/ScrollToUp'
function App() {


  return (
    <>
    <BrowserRouter>
      <ScrollToUp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/events' element={<Events/>}/>

      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>


    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
