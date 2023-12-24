import axiosInstance from "./axios";

export const createUser=async(data)=> await axiosInstance.post('/signup',data);

export const loginUser=async(data)=> await axiosInstance.post('/login',data);