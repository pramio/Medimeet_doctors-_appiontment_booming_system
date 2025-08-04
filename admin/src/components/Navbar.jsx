import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
       <div 
  onClick={() => navigate('/')} 
  className="w-fit cursor-pointer flex flex-col items-start hover:scale-105 transition-transform duration-300"
>
  <div className="flex items-center gap-2">
    <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
    <p className="text-4xl font-logo font-extrabold tracking-tight bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text">
      MediMeet
    </p>
  </div>
  <p className="text-sm text-primary font-semibold ml-10">Admin Panel</p>
</div>

        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar