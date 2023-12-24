import { useEffect } from 'react';
import { useRecordWebcam } from 'react-record-webcam';

const WebcamVideoCapture = ({ recordHandler, setRecordModal }) => {
  const {
    activeRecordings,
    createRecording,
    openCamera,
    startRecording,
    stopRecording,
  } = useRecordWebcam();

  const startRecord = async () => {
    try {
      const recording = await createRecording();
      if (!recording) return;
      await openCamera(recording.id);
      await startRecording(recording.id);
    } catch (error) {
      console.error({ error });
    }
  };

  const stopRecord = async (recording) => {
    try {
      await stopRecording(recording.id);
      setRecordModal(false);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    startRecord();
  }, []);

  return (
    <div className='fixed w-full flex flex-col justify-center items-center'>
      {activeRecordings.map((recording) => (
        <div className='w-full flex flex-col justify-center items-center' key={recording.id}>
          <video className='w-2/5 rounded-lg' ref={recording.webcamRef} autoPlay muted />
          <button
            className="text-white uppercase min-w-40 bg-red-600 mt-3 p-3 rounded flex flex-row items-center font-semibold shadow-xl"
            onClick={() => stopRecord(recording)}
          >
            Stop Recording
          </button>
          {recordHandler(recording.previewRef)}
        </div>
      ))}
    </div>
  );
};

export default WebcamVideoCapture;
