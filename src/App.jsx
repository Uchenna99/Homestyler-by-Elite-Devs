import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Shop from './Pages/shop'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<Shop/>}/>

      </Routes>
    </>
  )
}

export default App
