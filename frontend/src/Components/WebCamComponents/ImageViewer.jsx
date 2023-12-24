import { useNavigate } from 'react-router-dom';
import { insertImage } from '../../services/API';

const ImageViewer = ({image,previewHandler,newImageHandler}) => {
    const navigate=useNavigate()
    const handleRetake=()=>{
        previewHandler(false);
        newImageHandler(true);
    }
    const handleSubmit=()=>{
        const file=new FormData();
        file.append('image',image)
        insertImage(file).then(res=>{
            navigate('/home')
        })
    }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <img className='w-2/5 rounded-lg shadow-lg border border-zinc-900' src={image} alt="" />
        <div className='mt-3 flex flex-col justify-center items-center'>
            <div className=' w-full flex justify-between mt-2'>
                <button className='w-40 bg-red-600 rounded h-10 duration-200 text-white hover:bg-red-700 mr-4'  onClick={handleRetake}>Retake</button>
                <button className='w-40 bg-green-600 rounded h-10 duration-200 text-white hover:bg-green-700' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>

  )
}

export default ImageViewer