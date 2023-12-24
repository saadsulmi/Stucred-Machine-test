import Lottie from 'react-lottie-player'
import loaderSpinner from '../assets/lottiefiles/loader.json'

const LoaderPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <Lottie
        loop
        animationData={loaderSpinner}
        play
        style={{ width: 400, height: 400 }}
      />
    </div>
  )
}

export default LoaderPage