import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Shop from './Pages/shop'
import About from './Pages/About'
import ContactPage from './Pages/Contact-page'

function App() {

  return (
    <>

      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact-page' element={<ContactPage/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
