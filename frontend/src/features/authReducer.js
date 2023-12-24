import {createSlice} from '@reduxjs/toolkit'

const initialState={
    auth:localStorage.getItem('auth-token')?localStorage.getItem('auth-token'):null
}


const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        set_user:(state,action)=>{
            state.auth=action.payload
        },
        reset_user:(state)=>{
            state.auth=null
        }
    }
})

export const {reset_user,set_user} = authReducer.actions;
export default authReducer.reducer