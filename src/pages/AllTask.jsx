import React from 'react'
import { Link } from 'react-router-dom'
import Db from '../component/Db'
import '../style/alltask.css'

const AllTask = () => {

  return (
    <>
      <main>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h1>My Tasks</h1>
          <Link to='/newtask' className='text-decoration-none'><p className='p'>+   Add New Task</p></Link>
        </div>

        <Db />
        
        <button className='border-0'><a href="#">Back To Top</a></button>
      </main>
    </>
  )
}

export default AllTask