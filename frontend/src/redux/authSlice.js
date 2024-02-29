import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userDetails:localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : null,
    
    
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userDetails=action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        clearCredentials:(state,action)=>{
            state.userDetails=null,
            localStorage.removeItem('userInfo')
        },
    }
})

export const {setCredentials,clearCredentials } =authSlice.actions
export default authSlice.reducer