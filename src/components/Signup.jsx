import React, { useDebugValue } from 'react'
import authService from '../appwrite/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Inpute'
import Button from './Botton'
import { useForm } from 'react-hook-form'

function Signupcomponet () {
  const [error, seterror] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()

  const signup = async data => {
    try {
      seterror('')
      const session = await authService.createAccount(data)

      if (session) {
        const userData = await authService.getCurrentUser()

        if (userData) {
          dispatch(login(userData))
          navigate('/')
        }
      }
    } catch (error) {
      seterror(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-3xl font-bold text-center text-gray-800 mb-6">
          Signup
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
          <div>want to login</div>

          <Link
            to={'/login'}
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 text-red-600 text-sm p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        <div>
          <form
            onSubmit={handleSubmit(signup)}
            className="space-y-5"
          >

            <div>
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
            </div>

            <div>
              <Button
                type='submit'
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
              >
                Submit
              </Button>
            </div>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Signupcomponet