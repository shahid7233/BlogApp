import React from "react";
import authSlice from '../../store/authSlice'
import { Link , useNavigate } from "react-router-dom";
import {LogoutBtn} from '../index'
import { useSelector } from "react-redux";

function Header (){
    const CurrentStatus = useSelector((state)=>(state.auth.status));
    const navigate = useNavigate ()

    const navitems =[
        {
          name : "Home",
          path : "/",
          active : true,
        },
        {
          name : "Login",
          path : "/login",
          active :!CurrentStatus,
        },
        {
          name : "Signup",
          path : "/signup",
          active :!CurrentStatus,
        },
        {
          name : "AllPost",
          path : "/allpost",
          active :CurrentStatus,
        },
        {
          name : "AddPost",
          path : "/addpost",
          active :CurrentStatus,
        },
    ]

    return(
       <nav className="bg-white shadow-md px-6 py-4">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

            <Link to={"/"} className="text-2xl font-bold text-blue-600 cursor-pointer">
                BlogApp
            </Link>

            <ul className="flex items-center gap-4">

                {navitems.map((items)=> 
                    items.active ? (
                        <li key={items.name}>
                            <button
                                onClick={()=>navigate(items.path)}
                                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300"
                            >
                                {items.name}
                            </button>
                        </li>
                    ) : null
                )}

                {CurrentStatus && (
                    <li>
                        <LogoutBtn classNam={`px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 font-medium`}/>
                    </li>
                )}

            </ul>

        </div>

       </nav>
    )
}

export default Header