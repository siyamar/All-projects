import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import Photos from './Components/Photos/Photos';
import PhotoDetails from './Components/PhotoDetails/PhotoDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
   children:[
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    },
    {
      path: '/users/:usersId',
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
      element: <UserDetails></UserDetails>
    },
    {
      path:'/posts',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetails></PostDetails>
    },
    {
      path: '/photos',
      loader: ()=> fetch ('https://jsonplaceholder.typicode.com/photos/'),
      element: <Photos></Photos>
    },
    {
      path: '/photo/:photoId',
      loader: ({params})=> fetch (`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
      element: <PhotoDetails></PhotoDetails>
    }

  ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
