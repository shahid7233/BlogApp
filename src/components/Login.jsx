import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { login as loginstore } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from './Inpute'
import Button from './Botton'

function LoginComponent () {
  const [error, seterror] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const login = async data => {
    seterror('')
    try {
      const logedin = await authService.login(data)
      if (logedin) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(loginstore(userData))
          navigate('/')
        }
      }
    } catch (error) {
      seterror(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-xl p-8'>
        <div className='text-3xl font-bold text-center text-gray-800 mb-6'>
          login
        </div>

        <div className='flex items-center justify-center gap-2 mb-6 text-gray-600'>
          <div>dont have account</div>

          <div>
            <Link
              to={'/signup'}
              className='text-blue-600 font-medium hover:underline'
            >
              signup
            </Link>
          </div>
        </div>

        <div className='mb-4'>
          {error && (
            <p className='text-red-500 text-sm text-center bg-red-100 p-2 rounded'>
              {error}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit(login)} className='space-y-5'>
          <Input
            label='Email'
            placeholder='Enter Email'
            type='email'
            {...register('email', {
              required: true
            })}
          />

          <Input
            label='Password'
            placeholder='Enter Password'
            type='password'
            {...register('password', {
              required: true
            })}
          />

          <Button
            label='Submit'
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300'
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginComponent
