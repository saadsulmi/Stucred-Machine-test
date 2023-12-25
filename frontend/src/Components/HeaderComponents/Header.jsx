import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { reset_user } from '../../features/authReducer';

const Header = () => {
    const location=useLocation();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const menuList=['home','video capture','image capture']
    const handleLogout=()=>{
      localStorage.removeItem('auth-token');
      dispatch(reset_user())
      navigate('/')
    }
  return (
    <div className='w-full h-[10vh] shadow-lg flex justify-between items-center px-8 mb-10'>
        <div className='flex'>
            <h1 className='text-2xl font-semibold cursor-pointer'>StuCred</h1>
        </div>
        <div className='flex text-zinc-600'>
            {menuList.map((val,idx)=><h1 key={idx} className={`mr-3 capitalize border-b-2 hover:border-blue-600 cursor-pointer ${location.pathname===`/${val.replace(" ", "")}`?'border-blue-600':'border-blue-200'}`} onClick={()=>navigate(`/${val.replace(" ", "")}`)}>{val}</h1>)}
            <h1 className='mr-3 border-b-2 cursor-pointer hover:border-blue-600' onClick={handleLogout}>Logout</h1> 
        </div>
    </div>
  )
}

export default Header