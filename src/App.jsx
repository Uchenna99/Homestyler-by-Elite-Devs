import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Shop from './Pages/shop'
import About from './Pages/About'
import ContactPage from './Pages/Contact-page'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import FeedbackPage from './Pages/Feedback'


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact-page' element={<ContactPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/feedback' element={<FeedbackPage/>}/>
      </Routes>
    </>
  )
}

export default App
