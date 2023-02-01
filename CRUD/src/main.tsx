import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import Addtask from './Components/Addtask'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },

    {
      path: '/addtask',
      element: <Addtask />,
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
