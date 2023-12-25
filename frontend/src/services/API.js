import axiosInstance from "./axios";

const formheaders={
    headers:{
        'auth-token': localStorage.getItem('auth-token')?JSON.parse(localStorage.getItem('auth-token')):null,
        'content-type':'multipart/formdata'
    }
}

export const createUser=async(data)=> await axiosInstance.post('/signup',data);

export const loginUser=async(data)=> await axiosInstance.post('/login',data);

export const insertImage=async(data)=> await axiosInstance.post('/addImage',data,formheaders)

export const getUserImages=async(data)=> await axiosInstance.post('/getUserImg',data)

export const uploadVideo = async(data)=> await axiosInstance.post('/uploadVideo',data,formheaders)
