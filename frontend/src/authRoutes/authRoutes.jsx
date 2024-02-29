import { Navigate,Outlet } from "react-router-dom";
import {  useSelector } from "react-redux";
import React from 'react'

const AuthRoutes = () => {
    const {userDetails}=useSelector((state)=>state.auth)
    console.log("User Info:", userDetails); 
  return (
    userDetails ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default AuthRoutes
