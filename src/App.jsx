import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agenses from './pages/Agenses'
import Projects from './pages/Projects'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />

        <Route path='/Agence' element={<Agenses/>} />

        <Route path='/projects' element={<Projects/>} />
        
      </Routes>
    

      
    </div>
  )
}

export default App