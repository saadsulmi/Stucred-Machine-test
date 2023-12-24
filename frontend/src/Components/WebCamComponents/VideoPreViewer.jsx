const VideoPreViewer = ({recording}) => {
  return (
    <video className="rounded-xl " ref={recording} autoPlay  loop />
  )
}

export default VideoPreViewer