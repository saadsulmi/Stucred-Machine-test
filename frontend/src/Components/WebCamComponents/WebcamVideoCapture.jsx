import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
const WebcamVideoCapture = ({recordHandler,setRecordModal}) => {
  const [modal,setModal]=useState(false)
  const [rec,setRec]=useState(true)
  const [retake,setRetake]=useState(false)
  const [video,setVideo]=useState('')
   const { status, startRecording, stopRecording, mediaBlobUrl } =
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

    const handleSubmit=()=>{
      setVideo(mediaBlobUrl)
      console.log(video);
    }
  return (
    <div className="w-1/3 flex items-center justify-center flex-col">
        
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
        <button className="w-40 rounded-md h-10 bg-green-500 text-white uppercase duration-200 hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        </div>}
    </div>
  )
}

export default WebcamVideoCapture