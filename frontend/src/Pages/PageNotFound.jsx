import { useEffect } from 'react'
import lottieplayer from '../assets/lottiefiles/404NF.json'
import Lottie from 'react-lottie-player'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },2000)
    },[])
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <Lottie
            loop
            animationData={lottieplayer}
            play
            className='-mt-24'
            style={{ width: 700, height: 700 }}
        />
    </div>
  )
}

export default PageNotFound