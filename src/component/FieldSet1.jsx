import React from 'react'
import '../style/fieldset.css'

const FieldSet1 = () => {
  return (
    <>
      <form>
        {/* task title  */}
        <input type="text" placeholder='E.g Project Defence, Assignment ...' className='w-100'/>

        {/* description  */}
        <input type="text" placeholder='Briefly describe your task .... ' className='w-100'/>

        {/* tags  */}
        <select name="" id="" className='w-100 mb-5'>
          <option value=""><p>urgent</p>    <p>important</p></option>
          <option value="">urgent</option>
          <option value="">Important</option>
        </select>

        {/* button  */}
        <button className='done'>Done</button>
      </form>

      <button className='border-0'><a href="#">Back To Top</a></button>
    </>
  )
}

export default FieldSet1