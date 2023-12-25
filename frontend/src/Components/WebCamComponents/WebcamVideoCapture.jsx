import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import { uploadVideo } from "../../services/API";
import { useNavigate } from "react-router-dom";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
const WebcamVideoCapture = ({recordHandler,setRecordModal}) => {
  const navigate=useNavigate()
  const [alert,setAlert]=useState(false)
  const [modal,setModal]=useState(false)
  const [rec,setRec]=useState(true)
  const [retake,setRetake]=useState(false)
  const [video,setVideo]=useState('')
   const { startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
    const handleStopRec=()=>{
      stopRecording()
      setModal(true)
      setRetake(true)
    }
    const handleStartRec=()=>{
      startRecording();
      setRec(false)
    }

    const handleRetake=()=>{
      setModal(false);
      setRetake(false);
      setVideo('')
      setRec(true)
    }

    const openAlert=()=>{
      setAlert(!alert)
    }
    const handleSubmit=()=>{
      setVideo(mediaBlobUrl)
      console.log(video);
      if(!video){
        setAlert(true)
      }else{
        fetch(video)
        .then(async(response) =>response.blob())
        .then((blobData) => {
          const data = new FormData();
          const file = new File([blobData],'video',{type:blobData.type})
          data.append('video',file)
          uploadVideo(data).then(res=>{
            navigate('/home')
          })
        })
    .catch(error => console.error('Error fetching Blob data:', error));
        console.log('successfull ');
      }
    }
    
  return (
    <div className="w-1/3 flex items-center justify-center flex-col">
      {alert&&<div className="absolute z-10 w-full h-[80vh] overflow-hidden bg-black bg-opacity-70 flex justify-center items-center">
        <div className="w-1/2 p-24 bg-white rounded-md flex flex-col justify-center items-center">
          <h1 className="font-semibold">Are you sure to submit?</h1>
          <div className="mt-6 flex">
            <button className="mr-3 w-40 h-10 bg-blue-400 duration-200 hover:bg-blue-700 text-white rounded-xl" onClick={handleSubmit}>yes</button>
            <button className="mr-3 w-40 h-10 bg-red-400 duration-200 hover:bg-red-700 text-white rounded-xl" onClick={openAlert} >no</button>
          </div>
        </div>
      </div> } 
      {modal?<video className="rounded-2xl" src={mediaBlobUrl} controls autoPlay loop />:<Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        className="rounded-xl"
        videoConstraints={videoConstraints}
        />}
      
        {rec?<button className="w-40 rounded-md h-10 mt-4 bg-blue-600 text-white duration-200 hover:bg-blue-800" onClick={handleStartRec}>Start Recording</button>
        :!retake&&<button className="w-40 rounded-md h-10 bg-red-600 mt-3 text-white duration-200 hover:bg-red-800" onClick={handleStopRec}>Stop Recording</button>}

      {modal&&retake&&<div className="flex flex-row mt-3">
        <button className="w-40 rounded-md h-10 bg-red-500 mr-4 text-white uppercase duration-200 hover:bg-red-600" onClick={handleRetake}>Retake</button>
        <button className="w-40 rounded-md h-10 bg-green-500 text-white uppercase duration-200 hover:bg-green-600" onClick={openAlert}>Submit</button>
        </div>}
    </div>
  )
}

export default WebcamVideoCapture