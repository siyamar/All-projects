import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/dashboard',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a'),
        element: <DashBoard></DashBoard> 
      },
      {
        path: '/About',
        element: <About></About>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
