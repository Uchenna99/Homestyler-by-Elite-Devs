import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Shopping from './Pages/Shopping'
import Livingroom from './Pages/Livingroom'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shopping' element={<Shopping/>}/>
          <Routes path='/livingroom' element={<Livingroom/>}/>

      </Routes>
    </>
  )
}

export default App
