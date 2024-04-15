import React from 'react'
import Task from '../assets/task.png'
import '../style/hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <main className='d-flex main'>
        <div className='write-card'>
          <b className='manage'>Manage your Tasks on <br /> <p>Task duty</p></b>
          <p className='fw-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda beatae laudantium quos velit adipisci tempore magni quaerat excepturi blanditiis, consectetur veniam, hic eveniet aut architecto ducimus ut dolores. Aliquam aperiam quasi soluta totam rerum perferendis!
          </p>
          <Link className='Link fw-bold text-light' to='/alltask'>Go To My Tasks</Link>
        </div>

        <div>
          <img src={Task} alt="" />
        </div>
      </main>
    </>
  )
}

export default Hero