import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseQuery=fetchBaseQuery({
    baseUrl:'https://bloggle.onrender.com',
    credentials:'include'
})

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User','Post'],
    endpoints:(builder)=>({
        
    })
})