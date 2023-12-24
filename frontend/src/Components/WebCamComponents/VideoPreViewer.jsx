const VideoPreViewer = ({recording,handleRetake}) => {
  return (
      <>
      <video src={recording} controls autoPlay loop />
      {recording&&<div>
        <button onClick={handleRetake}>Retake</button>
        <button>Preview</button>
      </div>}
      </>
  )
}

export default VideoPreViewer