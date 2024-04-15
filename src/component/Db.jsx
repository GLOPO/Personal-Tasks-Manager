import React from 'react'
import { data } from '../db'
import '../style/db.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Db = () => {
  const [info, setInfo] = useState(data)

  function clearAll() {
    setInfo([])
  }

  return (
    <>
      <div>
        <div >
          {data.map((datum) => {
            const{id, title, state, description} = datum

            return (
              <>
                <div key={id} className='content '>
                  <div className='d-flex justify-content-between'>
                    <h5 className='text-danger fw-light'>{state}</h5>
                    <div className='d-flex gap-4'>
                      <button className='text-white fw-bold border-0 '>
                        <Link className='text-light text-decoration-none' to='/edittask'>Edit</Link>
                      </button>
                      <button className='fw-bold' onClick={clearAll}>Delete</button>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Db