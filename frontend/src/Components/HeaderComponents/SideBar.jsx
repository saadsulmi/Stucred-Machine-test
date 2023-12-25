const SideBar = ({modal,setModal}) => {
  const handleVideo=()=>{
    setModal({img:false,video:true})
  }
  const handleImage=()=>{
    setModal({img:true,video:false})
  }
  return (
    <div className='w-1/5 h-full flex flex-col items-center pt-5 px-3'>
        <h1 className={`w-full flex items-center justify-center text-lg font-semibold h-10 rounded ${modal&&modal.img?'bg-blue-500 text-white hover:bg-blue-600':'bg-zinc-200 hover:bg-zinc-300'}`} onClick={handleImage}>Image</h1>
        <h1 className={`w-full flex items-center justify-center text-lg font-semibold h-10 rounded mt-4 ${modal&&modal.video?'bg-blue-500 text-white hover:bg-blue-600':'bg-zinc-200 hover:bg-zinc-300'}`} onClick={handleVideo}>Video</h1>
    </div>
  )
}

export default SideBar