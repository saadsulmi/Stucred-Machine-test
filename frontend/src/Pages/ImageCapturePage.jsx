import { useState } from "react"
import { WebcamCapture } from "../Components/WebCamComponents/WebcamCapture"
import { useEffect } from "react"
import ImageViewer from "../Components/WebCamComponents/ImageViewer";
import Header from "../Components/HeaderComponents/Header";
import { FaCamera } from "react-icons/fa6";

const ImageCapturePage = () => {
  const [image,setImage]=useState('');
  const [takeImage,setTakeImage]=useState(false);
  const [preview,setPreview]=useState(false);

  useEffect(()=>{
          console.log(typeof(image));
  },[image])
  return (
    <>
      <Header/>
      <div className="w-full h-[80vh] overflow-auto flex flex-col justify-center items-center">
        {takeImage&&<WebcamCapture imageHandler={setImage} modalHandler={setTakeImage} previewHandler={setPreview}/>}
        {!takeImage&&!preview&&<button className="text-white uppercase min-w-40 bg-blue-600 p-3 rounded flex flex-row items-center font-semibold shadow-xl" onClick={()=>setTakeImage(!takeImage)}>Capture Image <FaCamera className="text-xl -mt-1 ml-3" /></button>}
        {image&&preview&&<ImageViewer previewHandler={setPreview} image={image} newImageHandler={setTakeImage}/>}
      </div>
    </>
  )
}

export default ImageCapturePage