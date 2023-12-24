import { useState } from "react"
import WebcamVideoCapture from "../Components/WebCamComponents/WebcamVideoCapture"
import { IoIosVideocam } from "react-icons/io";
import VideoPreViewer from "../Components/WebCamComponents/VideoPreViewer";
import Header from "../Components/HeaderComponents/Header";

const VideoCapturePage = () => {
  const [recording,setRecording]=useState(null)
  const [recordModal,setRecordModal]=useState(false);
  const handleRetake=()=>{
    setRecording(null);
    setRecordModal(true)
  }
  return (
    <>
    <Header/>
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
    {!recordModal&&!recording&&<button className="text-white uppercase min-w-40 bg-blue-600 p-3 rounded flex flex-row items-center font-semibold shadow-xl" onClick={()=>setRecordModal(true)}>Capture video<IoIosVideocam  className="text-2xl ml-3"/> </button>}
    {recordModal&&<WebcamVideoCapture recordHandler={setRecording} setRecordModal={setRecordModal}/>}
    {recording&&<VideoPreViewer recording={recording} handleRetake={handleRetake}/>}
    </div>
    </>
  )
}

export default VideoCapturePage