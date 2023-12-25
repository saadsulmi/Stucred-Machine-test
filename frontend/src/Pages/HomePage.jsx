import { useEffect } from "react"
import Header from "../Components/HeaderComponents/Header"
import { useState } from "react"
import SideBar from "../Components/HeaderComponents/SideBar"
import { getUserImages, loginUser } from "../services/API"
import lottiefile from '../assets/lottiefiles/imageLottie.json'
import videoLottie from '../assets/lottiefiles/videolottie.json'
import Lottie from 'react-lottie-player'

const HomePage = () => {
  const [images,setImages]=useState([])
  const [videos,setVideos]=useState([]);
  const [modal,setModal]=useState({img:true,video:false})
  useEffect(()=>{
    getUserImages().then(res=>{
      setImages(res.data.images);
      setVideos(res.data.videos);

    }).catch(e=>{
        window.location.reload();
    })
  },[])
  return (
    <div className="w-full h-[100vh]">
      <Header/>
      <div className="w-full h-[90vh] -mt-10 flex flex-row">
        <SideBar modal={modal} setModal={setModal}/>
        <div className="w-full max-h-[600px] h-fit p-10 overflow-auto flex flex-row flex-wrap myscroll">
          {modal.img&&(images.length>0?images.map((url,idx)=><img className='w-30 mr-2 border shadow-xl mt-2 border-zinc-400 object-cover rounded-xl h-40' key={idx} src={url} alt="img" />):<div className="w-full h-full flex justify-center items-center">
            <Lottie
              loop
              animationData={lottiefile}
              play
              style={{ width: 400, height: 400 }}
            />
            </div>)}
            {modal.video&&(videos.length>0?videos.map((url,idx)=><video controls className='w-30 mr-2 border shadow-xl mt-2 border-zinc-400 object-cover rounded-xl h-40' key={idx} src={url} alt="img" />):<div className="w-full h-full flex justify-center items-center">
            <Lottie
              loop
              animationData={videoLottie}
              play
              style={{ width: 380, height: 380 }}
            />
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default HomePage