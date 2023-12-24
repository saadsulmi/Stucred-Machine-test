import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export const WebcamCapture = ({imageHandler,modalHandler,previewHandler}) => (
    
  <Webcam
    audio={false}
    height={360}
    screenshotFormat="image/jpeg"
    width={640}
    className="border-2 rounded-xl border-gray-600 bg-black shadow-lg"
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button className="w-40 duration-200 h-10 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-6"
        onClick={() => {
          const imageSrc = getScreenshot()
          imageHandler(imageSrc),
          modalHandler(false),
          previewHandler(true)
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>
);