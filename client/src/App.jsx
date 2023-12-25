import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Error from './pages/Error'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  }
])
