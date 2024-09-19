import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import FeedbackPage from './Pages/feedbackpage'

function App() {

  return (
    <>
      <FeedbackPage/>
      {/* <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>}/>

      </Routes> */}
    </>
  )
}

export default App
