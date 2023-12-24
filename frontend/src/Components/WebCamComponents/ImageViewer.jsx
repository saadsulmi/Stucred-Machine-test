import React from 'react'

const ImageViewer = ({image,previewHandler,newImageHandler}) => {
    const handleRetake=()=>{
        previewHandler(false);
        newImageHandler(true);
    }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <img className='w-2/5 rounded-lg shadow-lg border border-zinc-900' src={image} alt="" />
        <div className='mt-3 flex flex-col justify-center items-center'>
            <h1 className='text-lg '>Image Preview</h1> 
            <div className=' w-full flex justify-between mt-2'>
                <button className='w-40 bg-red-600 rounded h-10 duration-200 text-white hover:bg-red-700 mr-4'  onClick={handleRetake}>Retake</button>
                <button className='w-40 bg-green-600 rounded h-10 duration-200 text-white hover:bg-green-700'>Submit</button>
            </div>
        </div>
    </div>

  )
}

export default ImageViewer