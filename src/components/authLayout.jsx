import React, {useEffect,useState} from "react";
import {useSelector} from "react-redux"
import authSlice from "../store/authSlice"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

function authLayout(children){
    const selector = useSelector()
    const navigate = useNavigate()
    const currentStatus = useSelector(state=>state.auth.status)
    const[loader ,setloader ] = useState(true)
    useEffect(()=>{
        if(currentStatus==false)
        {
          navigate("/login")
        }
        else if (currentStatus = true ){
            navigate("/")
        }
        setloader(false)
    } , [currentStatus, navigate])

    return loader? <h1>loading...</h1>
 :<>{children}</>
}
export default authLayout