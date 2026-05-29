import React from 'react'
import authService from '../../appwrite/auth'
import { login, logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function LogoutBtn () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      navigate("/")
    })
  }
  return <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300" onClick={logoutHandler}>Logout</button>
}
export default LogoutBtn
