import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Content from './components/Content.jsx'
import Home from './components/Home.jsx'
import Registration from './components/Registration.jsx'
import SignUp from './components/SignUp.jsx'
import './index.css'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'login',
        element:<SignUp/>
      },
      {
        path:'content',
        element:<Content/>
      },
      {
        path:'registration',
        element:<Registration/>
      }
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
