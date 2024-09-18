import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import contactPage from './Pages/contact-Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact-page' element={<contactPage/>}/>

      </Routes>
    </>
  )
}

export default App
