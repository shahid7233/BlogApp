import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import App from './App.jsx'
import store from './store/store.js'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Signup from './pages/Siginup.jsx'
import PP from './pages/Policy.jsx'
import LearnMorePage from './pages/Learnmore.jsx'
import AddPost from "./pages/AddPost.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import Post from "./pages/Post.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path : "/privacypolicy",
        element : <PP />
      },
      {
        path : "/learnmore",
        element : <LearnMorePage/>
      },
      {
        path : "/allpost",
        element : <AllPosts/>
      },
            {
        path : "/addpost",
        element : <AddPost/>
      },
      {
            path: "/post/:slug",
            element: <Post />,
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>

  </StrictMode>
)
