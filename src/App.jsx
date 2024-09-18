import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'

function App() {

  return (
    <>
      <About/>
      {/* <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>}/>

      </Routes> */}
    </>
  )
}

export default App
