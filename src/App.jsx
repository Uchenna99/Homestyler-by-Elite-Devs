import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/Contact-page'

function App() {

  return (
    <>

      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact-page' element={<ContactPage/>}/>

      </Routes>
    </>
  )
}

export default App
