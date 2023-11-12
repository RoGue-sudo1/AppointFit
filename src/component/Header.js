import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const handleAddNewButtonClicked =()=>{
         navigate("/addNewAppointment")
  }

  return (
    <div className=' flex justify-between align-middle shadow-md '>
      <div className='flex  p-2' >
        <img src='./logo.png' alt="Logo" className='w-14' />
        <h1 className='pt-2 text-green-900 text-2xl font-bold'>AppointFit</h1>
      </div>
      <div className='mr-4'>
        <button className='p-2 bg-teal-600 mr-12 rounded-lg font-bold  m-4' onClick={handleAddNewButtonClicked}>Add New</button>
        <button className='p-2 bg-teal-600 -ml-8 rounded-lg font-bold  m-4'>Callender</button>
      </div>
    </div>
  )
}

export default Header
