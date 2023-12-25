import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import {  loginUser } from "../services/API";
import { set_user } from "../features/authReducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [passwordVisible,setpasswordVisible]=useState(false);
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const [user,setUser]=useState({email:'',password:''});
  const [error,setError]=useState({email:false,message:false});
  const [message,setMessage]=useState('');
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit=()=>{
    if(user.email&&user.password){
      if(!validateEmail(user.email)){
        return setError(prev=>({...prev,email:true}));
      }
      loginUser(user).then(res=>{
        dispatch(set_user(res.data.token));
        localStorage.setItem('auth-token',JSON.stringify(res.data.token))
      }).catch(e=>{
        setError(prev=>({...prev,message:true}))
        setMessage(e.response.data.message)
      })
    }
  }
  return (
        <div className='w-full h-[100vh] flex items-center justify-center text-black'>
      <div className='w-1/3 min-h-[400px] py-16 px-14 items-center flex flex-col border border-zinc-300 rounded-xl shadow-xl'>
        <h1 className='text-blue-700 text-3xl font-bold mb-6 uppercase '>Login</h1>
        <input id="email" className='w-full mt-3 rounded-md h-14 bg-zinc-300 focus:outline-none pl-4 border-1 border-zinc-800' type="email" value={user.email}  placeholder='email' onChange={(e)=>{setUser(prev=>({...prev,email:e.target.value}))
         setError(prev=>({...prev,email:false}))
        }}/>
        <label className={`text-red-600 mt-1 ${error.email?'visible':'hidden'}`} htmlFor="email">Please enter a valid email</label>
        <div className='relative w-full mt-3 mb-6 flex items-center'>
          <input className='w-full rounded-md h-14 bg-zinc-300 focus:outline-none pl-4 border-1 border-zinc-800' type={passwordVisible?'text':'password'} placeholder='password' value={user.password} onChange={(e)=>{setUser(prev=>({...prev,password:e.target.value}))}} />
          {passwordVisible?<FaEye className="absolute cursor-pointer right-2 mr-4 text-xl" onClick={()=>setpasswordVisible(!passwordVisible)}/>
          :<PiEyeClosedBold className="absolute cursor-pointer right-2 mr-4 text-xl" onClick={()=>setpasswordVisible(!passwordVisible)} />}
        </div>
        <h1>Create Account  <span className="underline cursor-pointer text-blue-500" onClick={()=>navigate('/signup')}>Sign up</span></h1>
         {message&&<label className={`text-red-600 mt-1 ${error.message?'visible':'hidden'}`} >{message}</label>}
        <button className='w-1/2 mt-4 rounded-md h-12 bg-blue-600 duration-200 hover:bg-blue-800 text-xl text-white' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage