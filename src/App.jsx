import './App.css'
import React from 'react'
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import AllTask from './pages/AllTask'
import NewTask from './pages/NewTask'
import EditTask from './pages/EditTask'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alltask' element={<AllTask />} />
        <Route path='/newtask' element={<NewTask />} />
        <Route path='/edittask' element={<EditTask />} />
      </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
