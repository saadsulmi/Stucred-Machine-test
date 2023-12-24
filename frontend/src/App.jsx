import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import LoaderPage from "./Pages/LoaderPage"
import PublicRoutes from "./Routes/PublicRoutes"
import PrivateRoutes from "./Routes/PrivateRoutes"
import LoginPage from "./Pages/LoginPage"
import LandingPage from "./Pages/LandingPage"
import ImageCapturePage from "./Pages/ImageCapturePage"
import VideoCapturePage from "./Pages/VideoCapturePage"
import SignupPage from "./Pages/SignupPage"
import PageNotFound from "./Pages/PageNotFound"

const HomePage=lazy(()=> import ('./Pages/HomePage'))

function App() {
  

  return (
      <Suspense fallback={<LoaderPage/>}>
        <Routes path='/'>
          <Route element={<PublicRoutes/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
          </Route>
          <Route element={<PrivateRoutes/>}>
            <Route element={<LoaderPage/>}/>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/imagecapture" element={<ImageCapturePage/>} />
            <Route path="/videocapture" element={<VideoCapturePage/>} />
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
  )
}

export default App
