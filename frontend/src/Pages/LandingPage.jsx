import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate=useNavigate()

  return (
    <div className="w-full h-[100vh]  flex justify-center items-center flex-col">
      <h1 className="text-gray-700 text-4xl uppercase font-semibold">Stucred MachineTest</h1> 
      <div className="mt-10">
        <button className="w-40 h-12 bg-blue-600 mr-4 duration-200 uppercase rounded-md text-white hover:bg-blue-800" onClick={()=>navigate('/login')}>login</button>
        <button className="w-40 h-12 bg-green-500 duration-200 uppercase hover:bg-green-700 rounded-md text-white" onClick={()=>navigate('/signup')}>signup</button>
      </div>
    </div>
  )
}

export default LandingPage