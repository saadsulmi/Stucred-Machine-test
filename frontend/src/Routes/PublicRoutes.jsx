import { useSelector } from "react-redux"
import { Navigate,Outlet } from "react-router-dom"

const PublicRoutes = () => {
    const auth=useSelector(state=>state.auth.auth)
    return auth?<Navigate to='/home'/>:<Outlet/>
}

export default PublicRoutes